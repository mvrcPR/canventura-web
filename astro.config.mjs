import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://canventura.com",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  output: "server",
  adapter: cloudflare({ imageService: "compile" }),
});
