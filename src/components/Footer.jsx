import { CONTACT } from '../data'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="px-6 md:px-12 py-10"
      style={{
        background: '#f8faff',
        borderTop: '1px solid rgba(37,99,235,0.1)',
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div
          className="font-display font-bold text-2xl cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <span style={{ color: '#2563eb' }}>V R M</span>
        </div>

        {/* Nav */}
        <div className="flex gap-6">
          {['home', 'products', 'why', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-sm transition-colors hover:text-blue-600"
              style={{ color: '#64748b' }}
            >
              {s === 'why' ? 'Why Us' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Copy */}
        <div className="text-xs text-center" style={{ color: '#94a3b8' }}>
          © 2026 VRM · {CONTACT.location} · WHO-GMP Certified
        </div>
      </div>
    </footer>
  )
}
