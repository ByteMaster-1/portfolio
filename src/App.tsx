import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { config } from './config'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, MailIcon, BranchIcon } from './components/icons'

export type FileId = 'home' | 'about' | 'projects'

const FILES: { id: FileId; name: string; dot: string; lang: string }[] = [
  { id: 'home', name: 'hello.html', dot: '#e2955f', lang: 'HTML' },
  { id: 'about', name: 'about.css', dot: '#61afef', lang: 'CSS' },
  { id: 'projects', name: 'projects.js', dot: '#f5b544', lang: 'JavaScript' },
]

// Rough line count per view so the gutter fills the panel nicely.
const GUTTER_LINES: Record<FileId, number> = {
  home: 28,
  about: 72,
  projects: 46,
}

const SOCIALS = [
  { label: 'GitHub', href: config.githubUrl, Icon: GitHubIcon },
  { label: 'LinkedIn', href: config.linkedinUrl, Icon: LinkedInIcon },
  { label: 'LeetCode', href: config.leetcodeUrl, Icon: LeetCodeIcon },
  { label: 'Email', href: `mailto:${config.email}`, Icon: MailIcon },
]

export default function App() {
  const [active, setActive] = useState<FileId>('home')
  const activeFile = FILES.find((f) => f.id === active)!

  return (
    <div className="min-h-screen w-full flex items-stretch justify-center bg-[#050506] p-0 lg:p-4">
      <div className="w-full flex flex-col overflow-hidden rounded-none lg:rounded-xl border border-[#26262e] bg-[#0c0c0f] shadow-2xl shadow-black/60 min-h-screen lg:min-h-0 lg:h-[calc(100vh-2rem)]">
        {/* ── Title bar ───────────────────────────────── */}
        <div className="flex items-center gap-4 h-11 px-4 bg-[#141418] border-b border-[#26262e] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e06c75]" />
            <span className="w-3 h-3 rounded-full bg-[#f5b544]" />
            <span className="w-3 h-3 rounded-full bg-[#98c379]" />
          </div>
          <div className="flex-1 text-center text-xs text-[#74747f] truncate">
            portfolio — {config.name}
          </div>
          <div className="hidden sm:block w-[52px]" />
        </div>

        {/* ── Tab bar (the navigation) ────────────────── */}
        <div className="flex items-stretch h-10 bg-[#0c0c0f] border-b border-[#26262e] shrink-0 overflow-x-auto scroll-thin">
          {FILES.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`group relative flex items-center gap-2 px-4 text-xs whitespace-nowrap border-r border-[#1e1e25] transition-colors ${
                  isActive
                    ? 'bg-[#101014] text-[#e6e6ea]'
                    : 'bg-transparent text-[#74747f] hover:text-[#a9a9b3]'
                }`}
              >
                {isActive && <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#f5b544]" />}
                <span className="w-2 h-2 rounded-sm" style={{ background: f.dot }} />
                {f.name}
              </button>
            )
          })}
        </div>

        {/* ── Body: line gutter + scrollable content ──── */}
        <div className="flex-1 min-h-0 bg-[#101014] overflow-y-auto scroll-thin">
          <div className="flex min-h-full">
            <div className="hidden md:block pt-10 pb-12 px-3 text-right text-[11px] leading-6 text-[#38383f] select-none border-r border-[#1a1a20] shrink-0">
              {Array.from({ length: GUTTER_LINES[active] }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="flex-1 min-w-0">
              {active === 'home' && <Home onNavigate={setActive} />}
              {active === 'about' && <About />}
              {active === 'projects' && <Projects />}
            </div>
          </div>
        </div>

        {/* ── Status bar ──────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 h-9 px-4 bg-[#0c0c0f] border-t border-[#26262e] text-[11px] text-[#74747f] shrink-0">
          <div className="flex items-center gap-3.5">
            <span className="hidden sm:inline text-xs">Connect with me:</span>
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => {
                const isMail = href.startsWith('mailto:')
                return (
                  <a
                    key={label}
                    href={href}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noreferrer'}
                    title={label}
                    aria-label={label}
                    className="text-[#b8b8c2] hover:text-[#f5b544] transition-colors"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1">
              <BranchIcon className="w-3 h-3" /> main
            </span>
            <span className="hidden md:inline">UTF-8</span>
            <span className="text-[#56b6c2]">{activeFile.lang}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
