import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SUPRSEND_WORKSPACE_SECRET:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
