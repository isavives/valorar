import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración optimizada para acceso desde móvil (iPhone/Android)
export default defineConfig({
  plugins: [react()],
  server: {
    // Escucha en todas las direcciones locales (0.0.0.0)
    host: '0.0.0.0', 
    port: 5173,
    strictPort: true,
    // Abre el acceso para que el móvil no sea rechazado por CORS
    cors: true,
    // HMR (Hot Module Replacement) específico para redes locales
    hmr: {
      host: 'localhost',
    },
  }
})
