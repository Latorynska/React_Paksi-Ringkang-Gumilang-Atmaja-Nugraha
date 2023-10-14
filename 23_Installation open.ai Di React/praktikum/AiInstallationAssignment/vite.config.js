import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(),'')
  return{
    plugins: [react()],
    define: {
      'process.env.URL_APP' : JSON.stringify(env.URL_APP),
      'process.env.OPEN_AI_KEY' : JSON.stringify(env.OPEN_AI_KEY),
    }
  }
})
