import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/utils", replacement: "/src/utils" },
      { find: "@/hooks", replacement: "/src/hooks" },
    ],
  },
});
