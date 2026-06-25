import { ADVANTAGES } from '../data'

function MedicalVisual() {
  return (
    <div
      className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0f2550 60%, #0a1628 100%)',
        border: '1px solid rgba(56,189,248,0.15)',
        boxShadow: '0 32px 80px rgba(8,145,178,0.15)',
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Orbits */}
      <div
        className="spin-slow absolute rounded-full"
        style={{ inset: 20, border: '1px dashed rgba(56,189,248,0.2)' }}
      />
      <div
        className="spin-reverse absolute rounded-full"
        style={{ inset: 60, border: '1px dashed rgba(167,139,250,0.15)' }}
      />
      <div
        className="spin-slow absolute rounded-full"
        style={{ inset: 106, border: '1px dashed rgba(52,211,153,0.12)', animationDuration: '36s' }}
      />

      {/* Orbital dots */}
      {[
        { deg: 0, color: '#38bdf8', orbit: 20 },
        { deg: 90, color: '#a78bfa', orbit: 20 },
        { deg: 180, color: '#34d399', orbit: 20 },
        { deg: 270, color: '#fb923c', orbit: 20 },
      ].map(({ deg, color, orbit }) => (
        <div
          key={deg}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 10px ${color}`,
            top: '50%',
            left: '50%',
            transform: `rotate(${deg}deg) translateX(calc(50% - ${orbit}px - 10px)) translateY(-50%)`,
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 text-center px-4">
        <div
          className="font-display font-black leading-none mb-1"
          style={{ fontSize: 52, color: '#38bdf8', textShadow: '0 0 40px rgba(56,189,248,0.5)' }}
        >
          VRM
        </div>
        <div
          className="font-black text-xl"
          style={{ color: 'rgba(56,189,248,0.7)', letterSpacing: 3 }}
        >
          SUPPLY
        </div>
        <div
          className="text-xs mt-4 uppercase tracking-widest font-bold"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Licensed Pharma Partner
        </div>
        <div
          className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold inline-block"
          style={{
            background: 'rgba(52,211,153,0.15)',
            border: '1px solid rgba(52,211,153,0.3)',
            color: '#34d399',
          }}
        >
          ✓ Baddi, HP Sourced
        </div>
      </div>

      {/* Corner accents */}
      {[
        { top: 16, left: 16, color: '#38bdf8' },
        { top: 16, right: 16, color: '#a78bfa' },
        { bottom: 16, left: 16, color: '#34d399' },
        { bottom: 16, right: 16, color: '#fb923c' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-6 h-6"
          style={{
            ...pos,
            borderTop: i < 2 ? `2px solid ${pos.color}60` : 'none',
            borderBottom: i >= 2 ? `2px solid ${pos.color}60` : 'none',
            borderLeft: i % 2 === 0 ? `2px solid ${pos.color}60` : 'none',
            borderRight: i % 2 === 1 ? `2px solid ${pos.color}60` : 'none',
          }}
        />
      ))}
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="px-6 md:px-12 py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Left */}
          <div>
            <p className="medical-label mb-4 reveal-left" style={{ color: '#0ea5e9' }}>Why Choose VRM</p>

            <h2
              className="font-display font-black leading-tight mb-5 reveal-left"
              style={{ fontSize: 'clamp(34px, 4vw, 56px)', color: '#0f172a' }}
            >
              Built on{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Trust
              </span>{' '}
              &amp; Science
            </h2>

            <p
              className="text-base leading-relaxed mb-12 reveal-left"
              style={{ color: '#64748b', maxWidth: 480 }}
            >
              We don't just supply medicines — we partner with healthcare providers to ensure
              reliable access to life-saving formulations every single time.
            </p>

            {/* Advantage cards */}
            <div className="flex flex-col gap-4">
              {ADVANTAGES.map((a, i) => (
                <div
                  key={i}
                  className="why-card reveal-left flex gap-5 p-5 rounded-2xl cursor-default"
                  style={{
                    background: '#f8faff',
                    border: '1px solid rgba(8,145,178,0.08)',
                    boxShadow: '0 2px 8px rgba(8,145,178,0.04)',
                    transitionDelay: `${i * 0.1}s`,
                    '--card-color': a.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff'
                    e.currentTarget.style.boxShadow = `0 12px 40px rgba(8,145,178,0.1), inset 3px 0 0 ${a.color}`
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.borderColor = `${a.color}30`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8faff'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(8,145,178,0.04)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.borderColor = 'rgba(8,145,178,0.08)'
                  }}
                >
                  <div
                    className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${a.color}18, ${a.color}08)`,
                      border: `1.5px solid ${a.color}30`,
                      boxShadow: `0 4px 12px ${a.color}15`,
                    }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <div className="text-base font-bold mb-1" style={{ color: '#0f172a' }}>{a.title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="hidden md:block reveal-right">
            <MedicalVisual />
          </div>
        </div>
      </div>
    </section>
  )
}


