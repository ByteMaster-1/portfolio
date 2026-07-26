import { Code2, Terminal } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">
          <Terminal className="w-4 h-4" />
          Phase 1: Portfolio Scaffold Live
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Product Engineer & CS Student
        </h1>

        <p className="text-slate-400 text-lg">
          Portfolio framework successfully scaffolded with React 19, Vite, TypeScript, and Tailwind CSS.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400 border border-slate-800 rounded-lg px-4 py-2 bg-slate-900/50">
            <Code2 className="w-4 h-4 text-indigo-400" />
            UnifyApps &bull; NSUT CS+Security
          </div>
          <a
            href="https://github.com/ByteMaster-1/portfolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors rounded-lg px-4 py-2 bg-slate-800"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
