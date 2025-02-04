import { defineConfig } from "vite";
import { paraglide } from "@inlang/paraglide-vite";
import svgLoader from "vite-svg-loader";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
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
      "@api": path.resolve(__dirname, "./src/api"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@locales": path.resolve(__dirname, "./src/paraglide"),
    },
  },
});
