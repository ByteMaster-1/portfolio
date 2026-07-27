import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons'
import { config } from '../config'

// Build a GitHub repo URL from the username in .env
const repo = (name: string) => `${config.githubUrl}/${name}`

// Curated, hand-picked projects. Edit freely — add a `live` URL to show a
// "Live demo" link, and reorder to control what a recruiter sees first.
const PROJECTS: {
  name: string
  date: string
  tagline: string
  tags: string[]
  code: string
  live?: string
  featured?: boolean
}[] = [
  {
    name: 'CareerBridge',
    date: 'Feb 2025',
    tagline:
      'A MERN job portal with separate Job-Seeker and Recruiter roles — JWT authentication, role-based access control, resume/image hosting via Cloudinary, and real-time application status.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux'],
    code: repo('CareerBridge'),
    featured: true,
  },
  {
    name: 'Wanderlust',
    date: 'Jun 2024',
    tagline:
      'A full-stack travel app to discover, review, and share destinations — user authentication, search & filtering, and a rating/review system with error-handled forms.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    code: repo('Wanderlust'),
    featured: true,
  },
  {
    name: 'Chatty',
    date: '2025',
    tagline: 'A real-time messaging app with instant delivery over web sockets.',
    tags: ['JavaScript', 'Socket.io', 'Node.js'],
    code: repo('CHATTY'),
  },
  {
    name: 'Paste App',
    date: '2024',
    tagline: 'A lightweight code-snippet sharing and paste utility.',
    tags: ['React', 'Tailwind CSS'],
    code: repo('PASTE_APP'),
  },
]

// Colors for the tech-distribution bar (falls back to a cycling palette).
const TECH_COLORS: Record<string, string> = {
  React: '#61afef',
  'Node.js': '#98c379',
  Express: '#8a8a94',
  MongoDB: '#3fa66a',
  JWT: '#e06c75',
  Redux: '#c678dd',
  Bootstrap: '#8b5cf6',
  JavaScript: '#f5b544',
  'Socket.io': '#56b6c2',
  'Tailwind CSS': '#38bdf8',
}
const FALLBACK_PALETTE = ['#61afef', '#98c379', '#f5b544', '#c678dd', '#56b6c2', '#e06c75']
const colorFor = (tech: string, i: number) =>
  TECH_COLORS[tech] || FALLBACK_PALETTE[i % FALLBACK_PALETTE.length]

// Aggregate every tag across all projects → { tech: count }, sorted desc.
const TECH_USAGE = Object.entries(
  PROJECTS.flatMap((p) => p.tags).reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] || 0) + 1
    return acc
  }, {}),
).sort((a, b) => b[1] - a[1])
const TECH_TOTAL = TECH_USAGE.reduce((sum, [, c]) => sum + c, 0)

export default function Projects() {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 animate-fade-up">
      <div className="max-w-5xl">
        {/* Header, styled like a function block */}
        <div className="mb-8">
          <p className="text-sm">
            <span className="text-[#c678dd]">function</span>{' '}
            <span className="text-[#61afef]">projects</span>
            <span className="text-[#74747f]">() {'{'}</span>
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-3">
            Things I&apos;ve built
          </h2>
          <p className="text-sm text-[#74747f] mt-2 max-w-xl">
            A handful of projects I&apos;ve shipped end-to-end — from auth and APIs to the interfaces
            on top. More lives on my GitHub.
          </p>
        </div>

        {/* Tech distribution — computed from the project tags above */}
        <div className="mb-8 rounded-lg border border-[#26262e] bg-[#0c0c0f] p-5">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="flex items-center gap-1.5 text-[#a9a9b3]">
              <span className="w-2 h-2 rounded-full bg-[#98c379]" />
              Tech used across these projects
            </span>
            <span className="text-[#74747f]">{TECH_USAGE.length} technologies</span>
          </div>
          <div className="flex w-full h-2.5 gap-0.5 overflow-hidden rounded-full bg-[#16161b]">
            {TECH_USAGE.map(([tech, count], i) => (
              <div
                key={tech}
                className="h-full"
                style={{ width: `${(count / TECH_TOTAL) * 100}%`, background: colorFor(tech, i) }}
                title={`${tech}: ${count}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-[11px] text-[#a9a9b3]">
            {TECH_USAGE.map(([tech, count], i) => (
              <span key={tech} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: colorFor(tech, i) }} />
                {tech} <span className="text-[#74747f]">×{count}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-lg border border-[#26262e] bg-[#0c0c0f] p-6 hover:border-[#3a3a44] transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <GitHubIcon className="w-5 h-5 text-[#a9a9b3]" />
                  <h3 className="font-sans text-lg font-semibold text-white">{p.name}</h3>
                </div>
                {p.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#f5b544]/40 text-[#f5b544]">
                    featured
                  </span>
                )}
              </div>

              <p className="text-xs text-[#74747f] mt-1.5">
                {p.date} · {p.tags.slice(0, 3).join(' · ')}
              </p>

              <p className="text-sm text-[#a9a9b3] leading-relaxed mt-3 flex-1">{p.tagline}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#16161b] border border-[#26262e] text-[#a9a9b3]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[#1e1e25] text-xs">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#a9a9b3] hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" /> Code
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#f5b544] hover:text-[#ffca5a] transition-colors"
                  >
                    Live demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Open-source callout */}
        <div className="mt-6 rounded-lg border border-[#26262e] bg-[#0c0c0f] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-sans text-base font-semibold text-white">Open source &amp; more</h3>
            <p className="text-sm text-[#74747f] mt-1">
              Contributions and smaller experiments live on my GitHub.
            </p>
          </div>
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f5b544] text-[#1a1305] text-sm font-semibold hover:bg-[#ffca5a] transition-colors shrink-0"
          >
            <GitHubIcon className="w-4 h-4" /> Visit GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-sm text-[#74747f] mt-8">{'}'}</p>
      </div>
    </section>
  )
}
