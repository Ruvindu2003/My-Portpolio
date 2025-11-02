import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dynamically set base for GitHub Pages vs Netlify/anywhere else
// - On GitHub Pages: set env GITHUB_PAGES=true to serve under /My-Portpolio/
// - Otherwise (Netlify, local): use '/'
const repoName = 'My-Portpolio';
const env = (globalThis as any).process?.env ?? {};
const isGitHubPages = env.GITHUB_PAGES === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
