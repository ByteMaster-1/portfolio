// Decorative background for the hero: a faint dot-grid, two soft color glows,
// and a "voice waveform" equalizer — a nod to the real-time audio/AI work.
// Purely cosmetic (aria-hidden), sits behind the content at low opacity.
export default function HeroArt() {
  const bars = [
    14, 30, 20, 46, 34, 62, 42, 78, 54, 96, 70, 116, 78, 128, 82, 60, 46, 100, 40, 72, 28, 52, 20, 34,
  ]
  const barW = 6
  const gap = 16

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="ha-glow-a" cx="80%" cy="14%" r="55%">
          <stop offset="0%" stopColor="#f5b544" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#f5b544" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#f5b544" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ha-glow-b" cx="14%" cy="92%" r="55%">
          <stop offset="0%" stopColor="#56b6c2" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#56b6c2" stopOpacity="0" />
        </radialGradient>
        <pattern id="ha-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fillOpacity="0.025" />
        </pattern>
      </defs>

      <rect width="1200" height="800" fill="url(#ha-dots)" />
      <rect width="1200" height="800" fill="url(#ha-glow-a)" />
      <rect width="1200" height="800" fill="url(#ha-glow-b)" />

      {/* voice waveform / equalizer */}
      <g transform="translate(720, 610)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * (barW + gap)}
            y={-h}
            width={barW}
            height={h}
            rx={3}
            fill={i % 5 === 0 ? '#f5b544' : '#56b6c2'}
            fillOpacity={0.16}
          />
        ))}
      </g>
    </svg>
  )
}
