import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve, relative } from "node:path";
import { root, startProductionServer } from "./production-server.mjs";
import { performanceReportConfig as config } from "./performance-config.mjs";

const option = name => {
  const index = process.argv.indexOf(name);
  return index < 0 ? undefined : process.argv[index + 1];
};
const median = values => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const categories = ["performance", "accessibility", "best-practices", "seo"];
const metrics = {
  fcpMs: "first-contentful-paint", lcpMs: "largest-contentful-paint",
  tbtMs: "total-blocking-time", cls: "cumulative-layout-shift",
  speedIndexMs: "speed-index", transferBytes: "total-byte-weight",
};

async function measure(url, output, profile) {
  const args = [
    resolve(root, "node_modules/lighthouse/cli/index.js"), url, "--quiet",
    "--chrome-flags=--headless=new --disable-dev-shm-usage",
    "--output=json", "--output=html", `--output-path=${output}`,
    `--only-categories=${categories.join(",")}`,
  ];
  if (profile === "desktop") args.push("--preset=desktop");
  const child = spawn(process.execPath, args, { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
  let log = "";
  child.stdout.on("data", chunk => { log = (log + chunk).slice(-8000); });
  child.stderr.on("data", chunk => { log = (log + chunk).slice(-8000); });
  const code = await new Promise((accept, reject) => {
    child.once("error", reject);
    child.once("exit", accept);
  });
  if (code !== 0) throw new Error(`Lighthouse ha fallat (${url}).\n${log}`);
  const report = JSON.parse(await readFile(`${output}.report.json`, "utf8"));
  if (report.runtimeError) throw new Error(report.runtimeError.message);
  if (new URL(report.finalUrl).pathname !== new URL(url).pathname)
    throw new Error(`La ruta s'ha redirigit durant el mesurament: ${url} → ${report.finalUrl}`);
  return report;
}

let server;
try {
  const runs = Number(option("--runs") ?? config.numberOfRuns);
  if (!Number.isInteger(runs) || runs < 1 || runs > 10) throw new Error("--runs ha de ser entre 1 i 10.");
  const output = resolve(root, option("--output") ?? `artifacts/lighthouse/${new Date().toISOString().replace(/[:.]/g, "-")}`);
  const suppliedBase = option("--base-url");
  if (!suppliedBase) server = await startProductionServer();
  const baseUrl = suppliedBase ?? server.baseUrl;
  await mkdir(output, { recursive: true });
  const results = [];
  let lighthouseVersion;
  let userAgent;
  for (const profile of config.profiles) {
    await mkdir(resolve(output, profile), { recursive: true });
    for (const route of config.routes) {
      const reports = [];
      for (let run = 1; run <= runs; run++) {
        console.log(`${profile} ${route} · ${run}/${runs}`);
        const name = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replaceAll("/", "-");
        const report = await measure(new URL(route, baseUrl).href, resolve(output, profile, `${name}-${run}`), profile);
        reports.push(report);
        lighthouseVersion = report.lighthouseVersion;
        userAgent = report.environment?.hostUserAgent;
      }
      results.push({
        profile, route, runs,
        scores: Object.fromEntries(categories.map(id => [id, Math.round(median(reports.map(r => r.categories[id].score * 100)))])),
        metrics: Object.fromEntries(Object.entries(metrics).map(([name, id]) => {
          const values = reports.map(r => r.audits[id]?.numericValue);
          if (values.some(value => !Number.isFinite(value))) throw new Error(`Mètrica absent: ${id}`);
          return [name, Number(median(values).toFixed(name === "cls" ? 4 : 0))];
        })),
      });
    }
  }
  const summary = {
    generatedAt: new Date().toISOString(), kind: "local-lab-measurement", baseUrl,
    lighthouseVersion, userAgent, numberOfRuns: runs,
    note: "Mediana de càrregues en fred amb els perfils estàndard de Lighthouse. No són dades de camp ni INP.",
    results,
  };
  await writeFile(resolve(output, "summary.json"), JSON.stringify(summary, null, 2) + "\n");
  const lines = [
    "# Rendiment de Can Ventura", "", summary.note, "",
    `Lighthouse ${lighthouseVersion} · ${runs} repeticions per ruta i perfil.`, "",
    "| Perfil | Ruta | Rendiment | Accessibilitat | Bones pràctiques | SEO | FCP | LCP | TBT | CLS | Speed Index | Transferència |",
    "| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ...results.map(r => `| ${r.profile} | ${r.route} | ${r.scores.performance}/100 | ${r.scores.accessibility}/100 | ${r.scores["best-practices"]}/100 | ${r.scores.seo}/100 | ${(r.metrics.fcpMs / 1000).toFixed(2)} s | ${(r.metrics.lcpMs / 1000).toFixed(2)} s | ${r.metrics.tbtMs} ms | ${r.metrics.cls} | ${(r.metrics.speedIndexMs / 1000).toFixed(2)} s | ${(r.metrics.transferBytes / 1e6).toFixed(2)} MB |`),
    "", "Els scores automàtics són diagnòstics; no substitueixen seo:check, la revisió manual ni les dades de producció.", "",
  ];
  await writeFile(resolve(output, "summary.md"), lines.join("\n"));
  console.log(lines.join("\n"));
  console.log(`Informes HTML/JSON: ${relative(root, output)}`);
} catch (error) {
  console.error(error.message);
  console.error("Comprova el build i Chrome; CHROME_PATH permet indicar-ne l'executable.");
  process.exitCode = 1;
} finally {
  await server?.stop();
}
