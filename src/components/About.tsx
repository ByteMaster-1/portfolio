import { Briefcase, GraduationCap } from 'lucide-react'

const NAV = [
  { id: 'bio', label: 'Biography' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
]

const EXPERIENCE = [
  {
    role: 'Product Engineer',
    org: 'UnifyApps',
    period: '2026 — Present',
    note: 'Intern → Full-time',
    desc: 'Building real-time AI voice agents, automation pipelines, and LLM-powered workflows on AI-native systems that ship to production at enterprise scale.',
    tags: ['LiveKit', 'Python', 'LLMs', 'Automation'],
  },
  {
    role: 'Research Intern',
    org: 'Bureau of Indian Standards (BIS)',
    period: '2025',
    desc: 'Drafted national data-centre infrastructure and sustainability standards for committee LITD 31; researched cloud-security and certification frameworks.',
    tags: ['Research', 'Cloud', 'Standards'],
  },
]

const EDUCATION = [
  {
    school: 'Netaji Subhas University of Technology (NSUT)',
    degree: 'B.Tech — Information Technology',
    period: '2022 — 2026',
    note: 'CGPA 9.09',
    rank: 'Dept Rank 3',
  },
  {
    school: 'City Vocational Public School, U.P.',
    degree: 'CBSE — Class XII',
    period: '2021',
    note: '95.6%',
    rank: '',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C/C++'] },
  { group: 'Backend & AI', items: ['Node.js', 'LiveKit', 'LLM workflows', 'Automation', 'REST APIs'] },
  { group: 'Frontend', items: ['React', 'Tailwind CSS'] },
  { group: 'Databases & Tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub'] },
]

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-widest text-[#f5b544] mb-2">{children}</p>
}

export default function About() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16 animate-fade-up">
      <div className="grid lg:grid-cols-[170px_1fr] gap-8 lg:gap-14 max-w-5xl">
        {/* ── Sub-navigation ── */}
        <nav className="hidden lg:flex flex-col gap-1 h-max lg:sticky lg:top-4 text-sm">
          <p className="text-[11px] uppercase tracking-widest text-[#4c4c55] mb-3">about.css</p>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="flex items-center gap-2 py-1 text-left text-[#74747f] hover:text-[#f5b544] transition-colors"
            >
              <span className="text-[#f5b544]">›</span> {n.label}
            </button>
          ))}
        </nav>

        {/* ── Content ── */}
        <div className="space-y-16 min-w-0">
          {/* Biography */}
          <div id="bio" className="section-anchor space-y-5">
            <Kicker>Who I am</Kicker>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white">
              Backend engineer building AI-native products.
            </h2>
            <p className="text-[#a9a9b3] leading-relaxed max-w-2xl">
              I&apos;m a Product Engineer at <span className="text-[#e6e6ea]">UnifyApps</span>, working
              on the backend. For the past six months I&apos;ve built real-time AI voice agents,
              automation pipelines, and LLM-powered workflows — the kind of AI-native systems that ship
              to production at enterprise scale.
            </p>
          </div>

          {/* Experience */}
          <div id="experience" className="section-anchor space-y-5">
            <Kicker>Experience</Kicker>
            <div className="space-y-4">
              {EXPERIENCE.map((e) => (
                <div
                  key={e.role + e.org}
                  className="rounded-lg border border-[#26262e] bg-[#0c0c0f] p-5 hover:border-[#3a3a44] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#56b6c2]" />
                      <h3 className="font-sans text-base font-semibold text-white">{e.role}</h3>
                      <span className="text-sm text-[#74747f]">· {e.org}</span>
                      {e.note && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#56b6c2]/40 text-[#56b6c2]">
                          {e.note}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#74747f]">{e.period}</span>
                  </div>
                  <p className="text-sm text-[#a9a9b3] leading-relaxed mt-3">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#16161b] border border-[#26262e] text-[#a9a9b3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education" className="section-anchor space-y-5">
            <Kicker>Education</Kicker>
            <div className="space-y-4">
              {EDUCATION.map((ed) => (
                <div
                  key={ed.school}
                  className="rounded-lg border border-[#26262e] bg-[#0c0c0f] p-5 flex flex-wrap items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#56b6c2] mt-0.5" />
                    <div>
                      <h3 className="font-sans text-base font-semibold text-white">{ed.school}</h3>
                      <p className="text-sm text-[#a9a9b3] mt-0.5">{ed.degree}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-[#74747f]">{ed.period}</div>
                    <div className="text-sm text-[#f5b544] mt-0.5">{ed.note}</div>
                    {ed.rank && <div className="text-xs text-[#a9a9b3] mt-0.5">{ed.rank}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div id="skills" className="section-anchor space-y-5">
            <Kicker>Skills</Kicker>
            <div className="space-y-4">
              {SKILLS.map((s) => (
                <div key={s.group} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="w-40 shrink-0 text-sm text-[#74747f]">{s.group}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#16161b] border border-[#26262e] text-[#e6e6ea]"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
