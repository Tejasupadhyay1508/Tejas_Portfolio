import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
// export default defineConfig(async () => {
//   const plugins = [react(), runtimeErrorOverlay()];

//   if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
//     const [{ cartographer }, { devBanner }] = await Promise.all([
//       import("@replit/vite-plugin-cartographer"),
//       import("@replit/vite-plugin-dev-banner"),
//     ]);

//     plugins.push(cartographer(), devBanner());
//   }

//   return {
//     plugins,
//     resolve: {
//       alias: {
//         "@": path.resolve(import.meta.dirname, "client", "src"),
//         "@shared": path.resolve(import.meta.dirname, "shared"),
//         "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//       },
//     },
//     root: path.resolve(import.meta.dirname, "client"),
//     build: {
//       outDir: path.resolve(import.meta.dirname, "dist/public"),
//       emptyOutDir: true,
//     },
//     server: {
//       fs: {
//         strict: true,
//         deny: ["**/.*"],
//       },
    }
  }
});
