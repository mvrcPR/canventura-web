import { spawn } from "node:child_process";
import { once } from "node:events";
import { access } from "node:fs/promises";
import { createServer } from "node:net";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

export const root = fileURLToPath(new URL("../", import.meta.url));

async function unusedPort() {
  const probe = createServer();
  await new Promise((accept, reject) => {
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", accept);
  });
  const port = probe.address().port;
  await new Promise((accept, reject) => probe.close(error => error ? reject(error) : accept()));
  return port;
}

// Exercise Astro's actual Cloudflare production runtime, without taking over
// the user's dev/preview server or its lock file.
export async function startProductionServer() {
  await access(resolve(root, "dist/client/sitemap.xml"));
  const port = await unusedPort();
  const baseUrl = `http://127.0.0.1:${port}`;
  const child = spawn(process.execPath, [
    resolve(root, "node_modules/astro/bin/astro.mjs"),
    "preview", "--ignore-lock", "--host", "127.0.0.1", "--port", String(port),
  ], { cwd: root, detached: process.platform !== "win32", stdio: ["ignore", "pipe", "pipe"] });
  let output = "";
  let failure;
  const capture = chunk => { output = (output + chunk).slice(-12000); };
  child.stdout.on("data", capture);
  child.stderr.on("data", capture);
  child.on("error", error => { failure = error; });
  const stop = async () => {
    if (child.exitCode !== null || !child.pid) return;
    const signal = name => {
      try {
        if (process.platform === "win32") child.kill(name);
        else process.kill(-child.pid, name);
      } catch (error) { if (error.code !== "ESRCH") throw error; }
    };
    signal("SIGTERM");
    await Promise.race([once(child, "exit"), delay(2000)]);
    if (child.exitCode === null) signal("SIGKILL");
  };
  for (let attempt = 0; attempt < 100; attempt++) {
    if (failure || child.exitCode !== null) break;
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(500) });
      await response.body?.cancel();
      if (response.status === 200) return { baseUrl, stop };
    } catch { /* Wait for the local runtime to start. */ }
    await delay(100);
  }
  await stop();
  throw new Error(`No s'ha pogut iniciar el preview de producció.\n${failure?.message ?? output}`);
}
