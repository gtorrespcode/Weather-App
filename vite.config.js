import { defineConfig } from 'vite'
import dotenv from "dotenv";
import react from '@vitejs/plugin-react'

const env = dotenv.config().parsed;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': env
  }
});
