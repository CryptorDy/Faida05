import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Глобальное объявление для TypeScript
declare const console: {
  log(...data: any[]): void;
  error(...data: any[]): void;
  warn(...data: any[]): void;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://176.124.214.240',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request:', req.method, req.url);
            
            // Добавляем заголовки для обхода потенциальных ограничений CORS и аутентификации
            proxyReq.setHeader('Accept', 'application/json');
            proxyReq.setHeader('X-Requested-With', 'XMLHttpRequest');
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from:', req.url, proxyRes.statusCode);
          });
        }
      }
    }
  },
})
