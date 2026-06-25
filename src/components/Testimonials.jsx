import { useState, useEffect, useRef } from 'react'

function CountUp({ to, suffix = '', duration = 2000 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const steps = 60
        let cur = 0
        const inc = to / steps
        const t = setInterval(() => {
          cur += inc
          if (cur >= to) { setVal(to); clearInterval(t) }
          else setVal(Math.floor(cur))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])
  return <span ref={ref}>{to >= 1000 ? val.toLocaleString('en-IN') : val}{suffix}</span>
}

const TESTIMONIALS = [
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Chief Medical Officer',
    hospital: 'City General Hospital, Bengaluru',
    text: 'VRM has been our trusted supplier for over 2 years. The quality of their injectable formulations is consistently excellent and delivery is always on time. Highly recommended for any hospital.',
    rating: 5,
    avatar: 'RS',
    color: '#0891b2',
  },
  {
    name: 'Dr. Priya Verma',
    role: 'ICU Head',
    hospital: 'Apollo Clinic, Bengaluru',
    text: 'We specifically use Linomox-IV and Zolbacten from VRM for our ICU patients. The WHO-GMP certification gives us confidence in every batch. Pricing is very competitive for bulk orders.',
    rating: 5,
    avatar: 'PV',
    color: '#059669',
  },
  {
    name: 'Mr. Anil Gupta',
    role: 'Pharmacy Manager',
    hospital: 'Medplus Hospital Chain, Karnataka',
    text: 'Fast supply, great pricing, and responsive team. When we had an urgent requirement for Tazomor-4.5 at midnight, VRM arranged delivery by morning. Outstanding service.',
    rating: 5,
    avatar: 'AG',
    color: '#d97706',
  },
  {
    name: 'Dr. Sunita Yadav',
    role: 'Surgeon',
    hospital: 'Ram Manohar Lohia Hospital',
    text: 'Paracline-IV from VRM is our go-to post-operative analgesic. The consistency in quality across every batch is remarkable. Our patients recover faster with reliable medicines.',
    rating: 5,
    avatar: 'SY',
    color: '#7c3aed',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: 16, textShadow: '0 0 8px rgba(245,158,11,0.4)' }}>★</span>
      ))}
    </div>
  )
}

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

      {/* Decorative blobs */}
      <div className="blob absolute pointer-events-none" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
        top: -100, right: -100, animationDuration: '16s',
      }} />
      <div className="blob absolute pointer-events-none" style={{
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)',
        bottom: -80, left: -80, animationDuration: '13s', animationDelay: '-5s',
      }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 reveal">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9)' }} />
            <p className="text-xs font-bold tracking-[3px] uppercase" style={{ color: '#0ea5e9' }}>Trusted By</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #0ea5e9, transparent)' }} />
          </div>
          <h2
            className="font-display font-black leading-tight mb-4 reveal"
            style={{ fontSize: 'clamp(32px, 4vw, 54px)', color: '#0f172a' }}
          >
            What Doctors{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Say
            </span>
          </h2>
          <p className="text-base reveal" style={{ color: '#64748b' }}>
            Trusted by hospitals and clinics across India
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card reveal rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(8,145,178,0.12)',
                boxShadow: '0 4px 20px rgba(14,165,233,0.1)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}40`
                e.currentTarget.style.background = 'rgba(255,255,255,0.98)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(8,145,178,0.12)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.85)'
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: `linear-gradient(180deg, ${t.color}, ${t.color}40)` }}
              />

              {/* Large quote mark */}
              <div
                className="font-display font-black leading-none mb-1 select-none"
                style={{ fontSize: 72, color: `${t.color}18`, lineHeight: 0.8 }}
              >"</div>

              <StarRating count={t.rating} />

              <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569', fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: `1px solid ${t.color}18` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}18, ${t.color}08)`,
                    border: `1.5px solid ${t.color}35`,
                    color: t.color,
                    boxShadow: `0 4px 12px ${t.color}20`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#0f172a' }}>{t.name}</div>
                  <div className="text-xs font-medium" style={{ color: t.color }}>{t.role}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{t.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-3 gap-6 p-8 rounded-2xl reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.08))',
            border: '1px solid rgba(14,165,233,0.22)',
            boxShadow: '0 4px 24px rgba(14,165,233,0.1)',
          }}
        >
          {[
            { to: 50, suffix: '+', label: 'Hospitals Served', color: '#0891b2' },
            { to: 10000, suffix: '+', label: 'Orders Delivered', color: '#059669' },
            { to: 100, suffix: '%', label: 'Quality Assured', color: '#d97706' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="font-display font-black num-glow"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: s.color }}
              >
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-xs mt-1.5 font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


