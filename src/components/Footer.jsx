import { CONTACT } from '../data'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="px-6 md:px-12 pt-14 pb-8 relative overflow-hidden"
      style={{ background: '#0f172a' }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(8,145,178,0.6), rgba(6,182,212,0.4), transparent)' }} />

      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(8,145,178,0.08) 0%, transparent 70%)',
      }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Main footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-display font-black text-3xl mb-4 cursor-pointer inline-block"
              onClick={() => scrollTo('home')}
            >
              <span style={{
                background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                VRM
              </span>
              <span className="font-light text-xl ml-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Enterprises</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Pharmaceutical supply & marketing partner. Quality injectables sourced from licensed manufacturers in Baddi, Himachal Pradesh.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(8,145,178,0.15)', color: '#67e8f9', border: '1px solid rgba(8,145,178,0.25)' }}>
                Baddi, HP
              </div>
              <div className="px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase" style={{ background: 'rgba(5,150,105,0.15)', color: '#34d399', border: '1px solid rgba(5,150,105,0.25)' }}>
                Pan India
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold tracking-[2px] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Navigation</div>
            <div className="flex flex-col gap-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'products', label: 'Products' },
                { id: 'why', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-left transition-all hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#67e8f9' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-xs font-bold tracking-[2px] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Contact</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span style={{ color: '#67e8f9' }}>📍</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {CONTACT.location}
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>Serving Pan India</span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span style={{ color: '#67e8f9' }}>⏰</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{CONTACT.hours}</span>
              </div>
              <a href="mailto:vrmenterprises006@gmail.com" className="flex items-center gap-2.5 no-underline" style={{ textDecoration: 'none' }}>
                <span style={{ color: '#67e8f9' }}>✉️</span>
                <span
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)', wordBreak: 'break-all' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#67e8f9' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  vrmenterprises006@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 VRM Enterprises · {CONTACT.location} · Pharmaceutical Supplier
          </div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Sourced from licensed manufacturers · Baddi, Himachal Pradesh
          </div>
        </div>
      </div>
    </footer>
  )
}

