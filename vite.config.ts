import path from "node:path";
import { paraglide } from "@inlang/paraglide-vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist/client",
  },
  plugins: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    tailwindcss(),
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "#api": path.resolve(__dirname, "./src/api"),
      "#components": path.resolve(__dirname, "./src/components"),
      "#constants": path.resolve(__dirname, "./src/constants"),
      "#features": path.resolve(__dirname, "./src/features"),
      "#images": path.resolve(__dirname, "./src/assets/images"),
      "#layouts": path.resolve(__dirname, "./src/layouts"),
      "#locales": path.resolve(__dirname, "./src/paraglide"),
    },
  },
});
