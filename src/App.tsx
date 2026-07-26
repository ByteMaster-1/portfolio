import { Code2, Github, Terminal } from 'lucide-react'

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
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors rounded-lg px-4 py-2 bg-slate-800"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
