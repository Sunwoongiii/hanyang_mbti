import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ 이 줄을 추가하면 모든 네트워크 기기에서 접속 가능해집니다!
    port: 5173,      // 기본 포트 번호
  },
})