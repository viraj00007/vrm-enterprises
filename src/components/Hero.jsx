const VIALS = [
  { name: 'Linomox-IV', comp: '600mg', cap: '#a78bfa', liq: 'rgba(167,139,250,0.65)', liqH: 90, w: 78, h: 230, left: 18, top: 55, cls: 'vial-0' },
  { name: 'Tazomor-4.5', comp: 'Pip+Tazo', cap: '#38bdf8', liq: 'rgba(56,189,248,0.65)', liqH: 70, w: 70, h: 195, left: 116, top: 118, cls: 'vial-1' },
  { name: 'Paracline', comp: '1000mg', cap: '#fb923c', liq: 'rgba(251,146,60,0.65)', liqH: 58, w: 64, h: 170, left: 210, top: 158, cls: 'vial-2' },
  { name: 'Riaxov-1g', comp: 'Ceftri.', cap: '#34d399', liq: 'rgba(52,211,153,0.65)', liqH: 50, w: 58, h: 148, left: 296, top: 188, cls: 'vial-3' },
]

function VialScene() {
  return (
    <div className="relative w-[420px] h-[500px]">
      {/* Central glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: -60,
          background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {VIALS.map((v) => (
        <div
          key={v.name}
          className={`absolute rounded-[13px_13px_9px_9px] overflow-hidden ${v.cls}`}
          style={{
            width: v.w, height: v.h, left: v.left, top: v.top,
            background: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(241,245,249,0.95) 100%)',
            border: `1px solid ${v.cap}40`,
            boxShadow: `0 24px 70px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3), 0 0 40px ${v.cap}20`,
          }}
        >
          <div
            className="h-4 relative"
            style={{ background: `linear-gradient(135deg, ${v.cap}, ${v.cap}bb)`, borderRadius: '7px 7px 0 0' }}
          >
            <div className="absolute inset-0 rounded-t-lg" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.35), transparent)' }} />
          </div>
          <div className="px-2.5 pt-2 flex flex-col h-[calc(100%-16px)]">
            <div
              className="rounded-md p-1.5 text-center"
              style={{ background: `${v.cap}15`, border: `1px solid ${v.cap}30` }}
            >
              <div className="font-bold leading-tight" style={{ fontSize: 9, color: '#1e3a5f' }}>{v.name}</div>
              <div className="leading-tight mt-0.5" style={{ fontSize: 7, color: '#64748b' }}>{v.comp}</div>
            </div>
            <div className="relative flex-1 mt-1.5">
              <div
                className="absolute bottom-1.5 left-0 right-0 rounded-b-lg"
                style={{ height: v.liqH, background: `linear-gradient(180deg, ${v.liq.replace('0.65', '0.2')}, ${v.liq})` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded" style={{ background: 'rgba(255,255,255,0.6)' }} />
              </div>
              <div
                className="absolute top-0 bottom-0 rounded-sm pointer-events-none"
                style={{ left: '12%', width: '16%', background: 'linear-gradient(180deg, rgba(255,255,255,0.7), transparent)' }}
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
      className="min-h-screen flex flex-col pt-[72px] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050c1c 0%, #0b1e4a 40%, #160742 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated blobs */}
        <div className="blob" style={{ width: 800, height: 800, background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', right: -250, top: -300, animationDuration: '16s' }} />
        <div className="blob" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)', left: -150, bottom: -100, animationDuration: '20s', animationDelay: '-7s' }} />
        <div className="blob" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%)', right: '30%', bottom: '25%', animationDuration: '12s', animationDelay: '-4s' }} />

        {/* Dot pattern */}
        <div className="dot-pattern absolute inset-0" />

        {/* Edge glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 45%, rgba(56,189,248,0.1) 0%, transparent 60%)' }} />

        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), rgba(167,139,250,0.4), transparent)' }} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">

          {/* Left — Text */}
          <div>
            {/* WHO-GMP Badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-8 pl-2.5 pr-5 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center flex-shrink-0">
                <div className="animate-ping absolute w-4 h-4 rounded-full" style={{ background: '#22c55e', opacity: 0.4 }} />
                <div className="w-2.5 h-2.5 rounded-full relative z-10" style={{ background: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.9)' }} />
              </div>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}
              >
                ✚
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#7dd3fc' }}>
                WHO-GMP Certified Pharma
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display font-black leading-[1.02] mb-6 tracking-tight"
              style={{ fontSize: 'clamp(46px, 5.5vw, 86px)' }}
            >
              <span style={{ color: '#ffffff' }}>Premium</span>
              <br />
              <span className="shimmer-text">Pharmaceutical</span>
              <br />
              <span style={{ color: '#ffffff' }}>Solutions</span>
            </h1>

            <p className="mb-10 max-w-[500px]" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Hospital-grade injectable formulations from{' '}
              <strong style={{ color: '#7dd3fc', fontWeight: 700 }}>Bengaluru</strong>.
              Trusted by hospitals & clinics for uncompromising quality, rapid supply, and competitive pricing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14">
              <button
                onClick={() => scrollTo('products')}
                className="btn-gradient px-8 py-4 rounded-xl text-base font-bold text-white flex items-center gap-2.5"
                style={{ boxShadow: '0 12px 44px rgba(99,102,241,0.65)' }}
              >
                💊 View Products
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  color: 'rgba(255,255,255,0.9)',
                  background: 'rgba(255,255,255,0.06)',
                }}
              >
                Get Bulk Quote →
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-10 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { num: '50+', label: 'Hospitals' },
                { num: 'GMP', label: 'Certified' },
                { num: '24h', label: 'Delivery' },
                { num: 'Pan India', label: 'Supply' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-black"
                    style={{
                      fontSize: 'clamp(26px, 3vw, 40px)',
                      color: '#38bdf8',
                      lineHeight: 1,
                      textShadow: '0 0 24px rgba(56,189,248,0.4)',
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs mt-1.5 tracking-widest font-semibold uppercase"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Vials + floating info */}
          <div className="hidden md:flex justify-center items-center relative">
            <VialScene />

            {/* Floating card — top left */}
            <div
              className="badge-float absolute top-4 left-0 px-4 py-3 rounded-2xl cursor-default select-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(56,189,248,0.2)' }}
                >
                  🏥
                </div>
                <div>
                  <div className="font-bold text-xs text-white">50+ Hospitals</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Trust VRM Daily</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div
              className="badge-float-2 absolute bottom-8 right-0 px-4 py-3 rounded-2xl cursor-default select-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(52,211,153,0.25)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(52,211,153,0.2)' }}
                >
                  ✅
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Quality Certified</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Every Batch Tested</div>
                </div>
              </div>
            </div>

            {/* Floating card — middle right */}
            <div
              className="badge-float absolute top-1/2 right-0 -translate-y-1/2 px-4 py-3 rounded-2xl cursor-default select-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(167,139,250,0.25)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                animationDelay: '0.8s',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(167,139,250,0.2)' }}
                >
                  🧬
                </div>
                <div>
                  <div className="font-bold text-xs text-white">5 Injectables</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>ICU-Grade Formulas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}



