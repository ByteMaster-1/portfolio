// Profile config.
//
// Values are defined in `.env` (no VITE_ prefix needed) and injected at build
// time by vite.config.ts as `__APP_CONFIG__`. Read anywhere with:
//   import { config } from './config'
//
// Reminder: this is a static site, so these values are baked into the public
// bundle. Keep them public — no secrets.
export interface AppConfig {
  name: string
  role: string
  company: string
  location: string
  email: string
  githubUser: string
  githubUrl: string
  linkedinUrl: string
  leetcodeUrl: string
  resumeUrl: string
}

declare const __APP_CONFIG__: AppConfig

export const config: AppConfig = __APP_CONFIG__
