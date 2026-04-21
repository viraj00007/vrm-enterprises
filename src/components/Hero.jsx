const VIALS = [
  { name: 'Linomox-IV', comp: '600mg', cap: '#7c3aed', liq: 'rgba(124,58,237,0.65)', liqH: 90, w: 78, h: 230, left: 18, top: 55, cls: 'vial-0' },
  { name: 'Tazomor-4.5', comp: 'Pip+Tazo', cap: '#2563eb', liq: 'rgba(37,99,235,0.65)', liqH: 70, w: 70, h: 195, left: 116, top: 118, cls: 'vial-1' },
  { name: 'Paracline', comp: '1000mg', cap: '#f97316', liq: 'rgba(249,115,22,0.65)', liqH: 58, w: 64, h: 170, left: 210, top: 158, cls: 'vial-2' },
  { name: 'Riaxov-1g', comp: 'Ceftri.', cap: '#059669', liq: 'rgba(5,150,105,0.65)', liqH: 50, w: 58, h: 148, left: 296, top: 188, cls: 'vial-3' },
]

function VialScene() {
  return (
    <div className="relative w-[420px] h-[500px]">
      <div
        className="absolute inset-[-40px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)' }}
      />
      {VIALS.map((v) => (
        <div
          key={v.name}
          className={`absolute rounded-[13px_13px_9px_9px] overflow-hidden ${v.cls}`}
          style={{
            width: v.w, height: v.h, left: v.left, top: v.top,
            background: 'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.9) 100%)',
            border: '1px solid rgba(37,99,235,0.15)',
            boxShadow: '0 20px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.08)',
          }}
        >
          <div className="h-4 relative" style={{ background: `linear-gradient(135deg, ${v.cap}, ${v.cap}cc)`, borderRadius: '7px 7px 0 0' }}>
            <div className="absolute inset-0 rounded-t-lg" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3), transparent)' }} />
          </div>
          <div className="px-2.5 pt-2 flex flex-col h-[calc(100%-16px)]">
            <div className="rounded-md p-1.5 text-center" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.1)' }}>
              <div className="font-bold leading-tight" style={{ fontSize: 9, color: '#1e3a5f' }}>{v.name}</div>
              <div className="leading-tight mt-0.5" style={{ fontSize: 7, color: '#64748b' }}>{v.comp}</div>
            </div>
            <div className="relative flex-1 mt-1.5">
              <div className="absolute bottom-1.5 left-0 right-0 rounded-b-lg" style={{ height: v.liqH, background: `linear-gradient(180deg, ${v.liq.replace('0.65', '0.25')}, ${v.liq})` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded" style={{ background: 'rgba(255,255,255,0.5)' }} />
              </div>
              <div className="absolute top-0 bottom-0 rounded-sm pointer-events-none" style={{ left: '12%', width: '16%', background: 'linear-gradient(180deg, rgba(255,255,255,0.6), transparent)' }} />
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
      style={{ background: '#ffffff' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(219,234,254,0.6) 0%, transparent 65%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 pl-1.5 pr-4 py-1.5 rounded-full"
            style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}>
              ✚
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#2563eb' }}>
              WHO-GMP Certified Pharma
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-black leading-[1.0] mb-6 tracking-tight" style={{ fontSize: 'clamp(48px, 5.5vw, 80px)' }}>
            <span style={{ color: '#0f172a' }}>Premium</span>
            <br />
            <span style={{ color: '#2563eb' }}>Pharmaceutical</span>
            <br />
            <span style={{ color: '#0f172a' }}>Solutions</span>
          </h1>

          <p className="text-base leading-relaxed mb-10 max-w-[480px]" style={{ color: '#64748b' }}>
            Hospital-grade injectable formulations from{' '}
            <strong style={{ color: '#0f172a', fontWeight: 600 }}>Delhi NCR</strong>.
            Trusted by hospitals & clinics for quality, speed, and competitive pricing.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => scrollTo('products')}
              className="px-8 py-4 rounded-xl text-base font-bold text-white flex items-center gap-2 transition-all hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 8px 30px rgba(37,99,235,0.25)' }}
            >
              💊 Explore Products
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-blue-50"
              style={{ border: '1px solid rgba(37,99,235,0.25)', color: '#2563eb' }}
            >
              Get Quote →
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}>
            {[
              { num: '5+', label: 'Products' },
              { num: 'GMP', label: 'Certified' },
              { num: '24h', label: 'Supply' },
              { num: 'Pan India', label: 'Coverage' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-4xl" style={{ color: '#2563eb', lineHeight: 1 }}>{s.num}</div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: '#94a3b8' }}>{s.label}</div>
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
