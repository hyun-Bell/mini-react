import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // JSX를 우리가 만든 createElement로 변환
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', {
            pragma: 'React.createElement',
            pragmaFrag: 'React.Fragment',
          }],
        ],
      },
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
  },
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});