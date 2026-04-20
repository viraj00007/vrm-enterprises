
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 15,
  duration: Math.random() * 10 + 12,
  color:
    i % 3 === 0
      ? 'rgba(0,210,255,0.5)'
      : i % 3 === 1
      ? 'rgba(0,229,160,0.4)'
      : 'rgba(240,192,96,0.35)',
}))

const VIALS = [
  { name: 'Linomox-IV', comp: '600mg', cap: '#c084fc', liq: 'rgba(160,80,220,0.65)', liqH: 90, w: 78, h: 230, left: 18, top: 55, cls: 'vial-0' },
  { name: 'Tazomor-4.5', comp: 'Pip+Tazo', cap: '#00d2ff', liq: 'rgba(0,180,230,0.65)', liqH: 70, w: 70, h: 195, left: 116, top: 118, cls: 'vial-1' },
  { name: 'Paracline', comp: '1000mg', cap: '#ff8c60', liq: 'rgba(230,120,60,0.65)', liqH: 58, w: 64, h: 170, left: 210, top: 158, cls: 'vial-2' },
  { name: 'Riaxov-1g', comp: 'Ceftri.', cap: '#00e5a0', liq: 'rgba(0,200,140,0.65)', liqH: 50, w: 58, h: 148, left: 296, top: 188, cls: 'vial-3' },
]

function VialScene() {
  return (
    <div className="relative w-[420px] h-[500px]">
      {/* Glow */}
      <div
        className="absolute inset-[-40px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,210,255,0.08) 0%, transparent 65%)',
          animation: 'breathe 4s ease-in-out infinite',
        }}
      />
      {/* Rings */}
      {[30, 80].map((i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: i,
            border: '1px solid rgba(0,210,255,0.08)',
            animation: 'orbitSpin 20s linear infinite',
          }}
        />
      ))}
      {/* Vials */}
      {VIALS.map((v) => (
        <div
          key={v.name}
          className={`absolute rounded-[13px_13px_9px_9px] overflow-hidden ${v.cls}`}
          style={{
            width: v.w,
            height: v.h,
            left: v.left,
            top: v.top,
            background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(0,30,60,0.45) 100%)',
            border: '1px solid rgba(0,210,255,0.22)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Cap */}
          <div
            className="h-4 relative"
            style={{
              background: `linear-gradient(135deg, ${v.cap}, ${v.cap}88)`,
              borderRadius: '7px 7px 0 0',
            }}
          >
            <div className="absolute inset-0 rounded-t-lg" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.25), transparent)' }} />
          </div>
          {/* Body */}
          <div className="px-2.5 pt-2 flex flex-col h-[calc(100%-16px)]">
            <div
              className="rounded-md p-1.5 text-center"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="text-white font-bold leading-tight" style={{ fontSize: 9 }}>{v.name}</div>
              <div className="text-white/60 leading-tight mt-0.5" style={{ fontSize: 7 }}>{v.comp}</div>
            </div>
            <div className="relative flex-1 mt-1.5">
              <div
                className="absolute bottom-1.5 left-0 right-0 rounded-b-lg"
                style={{
                  height: v.liqH,
                  background: `linear-gradient(180deg, ${v.liq.replace('0.65', '0.35')}, ${v.liq})`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded" style={{ background: 'rgba(255,255,255,0.3)' }} />
              </div>
              {/* Shine */}
              <div
                className="absolute top-0 bottom-0 rounded-sm pointer-events-none"
                style={{ left: '12%', width: '16%', background: 'linear-gradient(180deg, rgba(255,255,255,0.15), transparent)' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-[72px] px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,119,182,0.12) 0%, transparent 60%), linear-gradient(160deg, #020b18 0%, #061426 50%, #020b18 100%)',
        }}
      />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-7 pl-1.5 pr-4 py-1.5 rounded-full"
            style={{ background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.2)' }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-[#020b18]"
              style={{ background: 'linear-gradient(135deg, #00d2ff, #0094b8)' }}
            >
              ✚
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#00d2ff' }}>
              WHO-GMP Certified Pharma
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display font-black leading-[1.0] mb-6 tracking-tight"
            style={{ fontSize: 'clamp(48px, 5.5vw, 80px)' }}
          >
            <span style={{ color: '#e8f4ff' }}>Premium</span>
            <br />
            <span style={{ color: '#00d2ff' }} className="glow-text">Pharmaceutical</span>
            <br />
            <span style={{ color: '#e8f4ff' }}>Solutions</span>
          </h1>

          <p className="text-base leading-relaxed mb-10 max-w-[480px] font-light" style={{ color: '#5a8aaa' }}>
            Hospital-grade injectable formulations from{' '}
            <strong className="text-white font-medium">Delhi NCR</strong>.
            Trusted by hospitals & clinics for quality, speed, and competitive pricing.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => scrollTo('products')}
              className="px-8 py-4 rounded-xl text-base font-bold text-[#020b18] flex items-center gap-2 transition-all hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #00d2ff, #0094b8)',
                boxShadow: '0 8px 30px rgba(0,210,255,0.3)',
              }}
            >
              💊 Explore Products
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white/5"
              style={{ border: '1px solid rgba(0,210,255,0.3)', color: '#00d2ff' }}
            >
              Get Quote →
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 pt-8"
            style={{ borderTop: '1px solid rgba(0,210,255,0.1)' }}
          >
            {[
              { num: '5+', label: 'Products' },
              { num: 'GMP', label: 'Certified' },
              { num: '24h', label: 'Supply' },
              { num: 'Pan India', label: 'Coverage' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-4xl" style={{ color: '#00d2ff', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: '#5a8aaa' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Vials */}
        <div className="hidden md:flex justify-center items-center">
          <VialScene />
        </div>
      </div>
    </section>
  )
}
