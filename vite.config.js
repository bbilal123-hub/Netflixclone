import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add your repo name here
const repoName = 'Netflixclone'; // MUST match your GitHub repo name

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,  // 👈 IMPORTANT for GitHub Pages
})
