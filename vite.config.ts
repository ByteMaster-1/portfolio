import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Only these 4 are env-driven (set in `.env` locally or GitHub Actions
  // Variables in CI). Fallbacks are placeholders — real values never live in
  // the committed source.
  const env = loadEnv(mode, process.cwd(), '')

  const appConfig = {
    // Hardcoded (stable, non-sensitive)
    name: 'Mohd Areeb Khan',
    role: 'Product Engineer',
    company: 'UnifyApps',
    location: 'New Delhi, India',
    githubUser: 'ByteMaster-1',
    githubUrl: 'https://github.com/ByteMaster-1',
    // Env-driven, with placeholder fallbacks
    email: env.EMAIL || 'you@example.com',
    linkedinUrl: env.LINKEDIN_URL || 'https://www.linkedin.com/in/your-handle/',
    leetcodeUrl: env.LEETCODE_URL || 'https://leetcode.com/u/your-handle/',
    resumeUrl: env.RESUME_URL || 'https://example.com/resume.pdf',
  }

  return {
    plugins: [react(), tailwindcss()],
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Inject the config at build time so components can read it with no prefix.
    define: {
      __APP_CONFIG__: JSON.stringify(appConfig),
    },
  }
})
