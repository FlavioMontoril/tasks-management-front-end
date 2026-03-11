import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //Evita problemas de acesso no container.
  server: {
    host: true,
    port: Number(process.env.VITE_PORT) || 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Cria um chunk separado só para libs externas grandes
          vendor: ["react", "react-dom", "lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 600, // aumenta limite para evitar warning de bundle grande
  },
});
