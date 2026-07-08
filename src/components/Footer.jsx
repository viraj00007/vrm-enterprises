import { CONTACT } from '../data'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'contact', label: 'Contact Us' },
]

const TRUST_ITEMS = [
  { icon: '🏭', label: 'Licensed Sourcing', sub: 'Baddi, HP' },
  { icon: '🇮🇳', label: 'Pan India', sub: 'Supply Network' },
  { icon: '✅', label: 'Quality', sub: 'Assured Products' },
  { icon: '🚚', label: '24h', sub: 'Fast Delivery' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #060b16 100%)' }}>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9, #6366f1, #c084fc, transparent)' }} />

      {/* Background glow blobs */}
      <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: -150, left: -100, background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, bottom: -100, right: -80, background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />

      {/* Trust strip */}
      <div className="relative border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xl">{t.icon}</span>
                <div>
                  <div className="text-sm font-bold text-white">{t.label}</div>
                  <div className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0891b2, #6366f1)' }}>
                ✚
              </div>
              <div>
                <div className="font-black text-xl" style={{
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>VRM Enterprises</div>
                <div className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Pharmaceutical Supplier</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 260 }}>
              Quality pharmaceutical products sourced from licensed manufacturers in Baddi, Himachal Pradesh. Serving hospitals, clinics & healthcare businesses across India.
            </p>

            {/* Proprietors card */}
            <div className="rounded-xl p-4" style={{ background: 'rgba(14,165,233,0.06)', border: '1px solid rgba(14,165,233,0.15)' }}>
              <div className="text-[9px] font-bold tracking-[2px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Proprietors</div>
              <div className="text-sm font-semibold" style={{ color: '#7dd3fc' }}>Rishabh Raj Chaudhary</div>
              <div className="text-sm font-semibold mt-0.5" style={{ color: '#7dd3fc' }}>Viraj Chaudhary</div>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <div className="text-[10px] font-bold tracking-[3px] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>Quick Links</div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-left flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-200"
                  style={{ color: 'rgba(255,255,255,0.45)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#38bdf8'
                    e.currentTarget.style.background = 'rgba(56,189,248,0.06)'
                    e.currentTarget.style.paddingLeft = '16px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.paddingLeft = '12px'
                  }}
                >
                  <span style={{ color: '#0ea5e9', fontSize: 10 }}>▸</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div className="text-[10px] font-bold tracking-[3px] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>Contact Info</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}>📍</div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>237/3 Jagriti Vihar, Meerut</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Uttar Pradesh 250004</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}>⏰</div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{CONTACT.hours}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Business Hours</div>
                </div>
              </div>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-3 no-underline group" style={{ textDecoration: 'none' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}>✉️</div>
                <div>
                  <div className="text-sm font-medium transition-colors" style={{ color: '#38bdf8', wordBreak: 'break-all' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#7dd3fc' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#38bdf8' }}
                  >{CONTACT.email}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Replies within 24 hours</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              © 2026 VRM Enterprises · All rights reserved
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>GSTIN: {CONTACT.gstin}</span>
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>Drug Lic: {CONTACT.drugLicense}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
