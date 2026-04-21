import { ADVANTAGES } from '../data'

function WhyVisual() {
  return (
    <div
      className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Orbits */}
      <div className="orbit-spin absolute rounded-full" style={{ inset: 24, border: '1px dashed rgba(37,99,235,0.15)' }} />
      <div className="orbit-spin2 absolute rounded-full" style={{ inset: 64, border: '1px dashed rgba(37,99,235,0.1)' }} />
      <div className="orbit-spin absolute rounded-full" style={{ inset: 110, border: '1px dashed rgba(37,99,235,0.07)' }} />

      {/* Center content */}
      <div className="relative z-10 text-center">
        <div className="font-display font-black leading-none" style={{ fontSize: 80, color: '#2563eb' }}>
          WHO
        </div>
        <div className="font-bold text-2xl mt-1" style={{ color: '#2563eb', opacity: 0.7 }}>
          GMP
        </div>
        <div className="text-sm mt-3 leading-relaxed" style={{ color: '#64748b' }}>
          Certified Manufacturing
          <br />
          Since Inception
        </div>
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: '#2563eb',
              boxShadow: '0 0 8px rgba(37,99,235,0.5)',
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
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
            <p className="text-xs font-bold tracking-[3px] uppercase mb-3 reveal-left" style={{ color: '#2563eb' }}>
              Why Choose VRM
            </p>
            <h2
              className="font-display font-black leading-tight mb-4 reveal-left"
              style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#0f172a' }}
            >
              Built on{' '}
              <span style={{ color: '#2563eb' }}>Trust</span>{' '}
              &amp; Science
            </h2>
            <p className="text-base leading-relaxed mb-12 reveal-left" style={{ color: '#64748b' }}>
              We don't just supply medicines — we partner with healthcare providers to ensure reliable
              access to life-saving formulations, every single time.
            </p>

            {/* Advantage cards */}
            <div className="flex flex-col gap-4">
              {ADVANTAGES.map((a, i) => (
                <div
                  key={i}
                  className="reveal-left flex gap-5 p-5 rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    background: '#f8faff',
                    border: '1px solid rgba(37,99,235,0.08)',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.04)',
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${a.color}40`
                    e.currentTarget.style.transform = 'translateX(6px)'
                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(37,99,235,0.08)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(37,99,235,0.08)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.04)'
                  }}
                >
                  <div
                    className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${a.color}10`, border: `1px solid ${a.color}25` }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <div className="text-base font-semibold mb-1" style={{ color: '#0f172a' }}>{a.title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block reveal-right">
            <WhyVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
