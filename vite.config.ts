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
            
            // Добавляем заголовки для отключения кеширования
            proxyReq.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            proxyReq.setHeader('Pragma', 'no-cache');
            proxyReq.setHeader('Expires', '0');
            
            // Удаляем заголовки условного запроса, которые могут приводить к 304
            if (req.headers['if-none-match']) {
              proxyReq.removeHeader('if-none-match');
            }
            if (req.headers['if-modified-since']) {
              proxyReq.removeHeader('if-modified-since');
            }
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from:', req.url, proxyRes.statusCode);
            
            // Если получен статус 304, логируем это
            if (proxyRes.statusCode === 304) {
              console.warn('Получен статус 304 для запроса:', req.url);
            }
          });
        }
      }
    }
  },
})
