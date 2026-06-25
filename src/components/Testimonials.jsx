const STEPS = [
  {
    step: '01',
    icon: '🔍',
    title: 'Browse & Select',
    desc: 'Browse our range of quality injectable formulations. Filter by category — antibiotics, analgesics, critical care. View full composition and clinical details.',
    color: '#00d2ff',
  },
  {
    step: '02',
    icon: '📋',
    title: 'Send Enquiry',
    desc: 'Submit your product requirements, quantities, and hospital details through our enquiry form. Takes less than 2 minutes.',
    color: '#0ea5e9',
  },
  {
    step: '03',
    icon: '💬',
    title: 'Get Quote in 24h',
    desc: 'Our team reviews your requirement and responds with competitive bulk pricing, availability, and dispatch timeline within 24 hours.',
    color: '#6366f1',
  },
  {
    step: '04',
    icon: '🚚',
    title: 'Receive Supply',
    desc: 'Products are dispatched from our licensed manufacturing partners in Baddi, Himachal Pradesh. Fast delivery across India.',
    color: '#c084fc',
  },
]

const WHY_POINTS = [
  { icon: '📦', text: 'Bulk order support for hospitals, clinics & distributors' },
  { icon: '🏭', text: 'Products sourced from licensed manufacturers in Baddi, HP' },
  { icon: '✅', text: 'Batch verification and quality documentation provided' },
  { icon: '💰', text: 'Competitive pricing for bulk procurement' },
  { icon: '🤝', text: 'Flexible credit terms for registered institutions' },
  { icon: '🇮🇳', text: 'Pan-India supply with 24–48 hour delivery' },
]

export default function Testimonials() {
  return (
    <section
      className="px-6 md:px-12 py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f5f3ff 55%, #eff6ff 100%)' }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="blob absolute pointer-events-none" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
        top: -100, right: -100, animationDuration: '16s',
      }} />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* How We Work */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 reveal">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9)' }} />
            <p className="text-xs font-bold tracking-[3px] uppercase" style={{ color: '#0ea5e9' }}>Simple Process</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #0ea5e9, transparent)' }} />
          </div>
          <h2
            className="font-display font-black leading-tight mb-4 reveal"
            style={{ fontSize: 'clamp(32px, 4vw, 54px)', color: '#0f172a' }}
          >
            How to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Order from Us
            </span>
          </h2>
          <p className="text-base reveal" style={{ color: '#64748b' }}>
            From browsing to delivery — a straightforward process built for healthcare buyers
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(8,145,178,0.12)',
                boxShadow: '0 4px 20px rgba(14,165,233,0.08)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${s.color}50`
                e.currentTarget.style.boxShadow = `0 16px 48px ${s.color}20`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(8,145,178,0.12)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Step number watermark */}
              <div
                className="absolute top-3 right-4 font-display font-black leading-none select-none pointer-events-none"
                style={{ fontSize: 64, color: `${s.color}10` }}
              >
                {s.step}
              </div>

              {/* Step badge */}
              <div
                className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}
              >
                Step {s.step}
              </div>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4"
                style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}30` }}
              >
                {s.icon}
              </div>

              <h3 className="font-bold text-lg mb-3" style={{ color: '#0f172a' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{s.desc}</p>

              {/* Connector arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-lg font-bold"
                  style={{ color: '#cbd5e1' }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose VRM — bullet list */}
        <div
          className="rounded-3xl p-8 md:p-10 reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.06), rgba(99,102,241,0.06))',
            border: '1px solid rgba(14,165,233,0.18)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold tracking-[3px] uppercase mb-3" style={{ color: '#0ea5e9' }}>About VRM Enterprises</p>
              <h3
                className="font-display font-black leading-tight mb-4"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#0f172a' }}
              >
                Pharmaceutical Supply &{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Marketing Partner
                </span>
              </h3>
              <p className="text-sm leading-relaxed mb-2" style={{ color: '#64748b' }}>
                VRM Enterprises is a pharmaceutical marketing and supply company providing reliable
                healthcare products to hospitals, clinics, distributors, and healthcare businesses.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                Our products are sourced from licensed pharmaceutical manufacturers in{' '}
                <strong style={{ color: '#0ea5e9' }}>Baddi, Himachal Pradesh</strong> — one of India's
                most recognized pharmaceutical manufacturing hubs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {WHY_POINTS.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <span style={{ fontSize: 18 }}>{pt.icon}</span>
                  <span className="text-sm font-medium" style={{ color: '#334155' }}>{pt.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
