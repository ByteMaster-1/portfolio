import { ArrowUpRight, FileText, MapPin } from 'lucide-react'
import { GitHubIcon } from './icons'
import HeroArt from './HeroArt'
import { config } from '../config'
import type { FileId } from '../App'

export default function Home({ onNavigate }: { onNavigate: (id: FileId) => void }) {
  return (
    <section className="relative h-full min-h-full flex items-start overflow-hidden px-6 sm:px-10 lg:px-14 pt-16 lg:pt-28 pb-8">
      <HeroArt />
      <div className="relative z-10 grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto animate-fade-up">
        {/* ── Left: intro ── */}
        <div className="space-y-6">
          <p className="text-sm">
            <span className="text-[#c678dd]">const</span>{' '}
            <span className="text-[#61afef]">greeting</span>{' '}
            <span className="text-[#74747f]">=</span>{' '}
            <span className="text-[#98c379]">"Hello, I am"</span>
          </p>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {config.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#a9a9b3]">
            I build as a <span className="text-[#56b6c2]">{config.role}</span>
            <span className="cursor-blink text-[#56b6c2]">_</span>
          </p>

          <p className="text-sm sm:text-base text-[#74747f] leading-relaxed max-w-xl">
            Backend engineer at <span className="text-[#e6e6ea]">{config.company}</span>, building
            real-time AI voice agents, automation pipelines, and LLM-powered workflows that ship to
            production.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#74747f]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#98c379]" /> Open to opportunities
            </span>
            <span className="text-[#38383f]">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {config.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f5b544] text-[#1a1305] text-sm font-semibold hover:bg-[#ffca5a] transition-colors"
            >
              View projects <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#26262e] text-[#a9a9b3] text-sm hover:border-[#3a3a44] hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4 text-[#f5b544]" /> Resume
            </a>
            <a
              href={config.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#26262e] text-[#a9a9b3] text-sm hover:border-[#3a3a44] hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        {/* ── Right: code card ── */}
        <div className="rounded-xl border border-[#26262e] bg-[#0c0c0f] overflow-hidden shadow-xl shadow-black/40">
          <div className="flex items-center gap-2 px-4 h-9 bg-[#141418] border-b border-[#26262e]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06c75]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5b544]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#98c379]" />
            <span className="ml-2 text-[11px] text-[#74747f]">developer.js</span>
          </div>
          <pre className="p-5 text-[13px] leading-6 overflow-x-auto scroll-thin">
            <code>
              <span className="text-[#c678dd]">const</span>{' '}
              <span className="text-[#61afef]">areeb</span>{' '}
              <span className="text-[#74747f]">=</span> {'{'}
              {'\n'}
              {'  '}
              <span className="text-[#e06c75]">role</span>
              <span className="text-[#74747f]">:</span>{'      '}
              <span className="text-[#98c379]">"{config.role}"</span>,{'\n'}
              {'  '}
              <span className="text-[#e06c75]">company</span>
              <span className="text-[#74747f]">:</span>{'   '}
              <span className="text-[#98c379]">"{config.company}"</span>,{'\n'}
              {'  '}
              <span className="text-[#e06c75]">school</span>
              <span className="text-[#74747f]">:</span>{'    '}
              <span className="text-[#98c379]">"B.Tech @ NSUT"</span>,{'\n'}
              {'  '}
              <span className="text-[#e06c75]">focus</span>
              <span className="text-[#74747f]">:</span>{'     ['}
              <span className="text-[#98c379]">"Backend"</span>,{' '}
              <span className="text-[#98c379]">"AI agents"</span>
              {'],'}
              {'\n'}
              {'  '}
              <span className="text-[#e06c75]">stack</span>
              <span className="text-[#74747f]">:</span>{'     ['}
              <span className="text-[#98c379]">"LiveKit"</span>,{' '}
              <span className="text-[#98c379]">"Python"</span>,{' '}
              <span className="text-[#98c379]">"Java"</span>
              {'],'}
              {'\n'}
              {'  '}
              <span className="text-[#e06c75]">available</span>
              <span className="text-[#74747f]">:</span>{' '}
              <span className="text-[#d19a66]">true</span>,{'\n'}
              {'}'};
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
