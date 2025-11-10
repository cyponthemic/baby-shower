import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { metaTagsPlugin } from './vite-plugin-meta'

// Get site URL from Netlify environment variables or fallback
// Netlify provides: URL (production), DEPLOY_PRIME_URL (deploy previews)
// Priority: VITE_SITE_URL > URL > DEPLOY_PRIME_URL > default
const getSiteUrl = () => {
  return (
    process.env.VITE_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    'https://your-site-url.netlify.app'
  )
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    metaTagsPlugin(getSiteUrl()),
  ],
})
