import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to GitHub Pages under /myportfolio/
export default defineConfig({
  base: "/myportfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
