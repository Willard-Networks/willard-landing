import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [
    vue(),
    vuetify({
      // SSR tests do not render CSS; validate the Sass output in the built-browser check.
      // Vitest's SSR runner cannot resolve the plugin's virtual Sass module IDs.
      styles: process.env.VITEST ? true : { configFile: "src/scss/vuetify-settings.scss" },
    }),
  ],
  test: {
    server: { deps: { inline: ["vuetify"] } },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
