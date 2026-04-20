import { CONTACT } from '../data'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="px-6 md:px-12 py-10"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid rgba(0,210,255,0.08)',
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div
          className="font-display font-bold text-2xl cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <span style={{ color: '#00d2ff' }}>V R M</span>
        </div>

        {/* Nav */}
        <div className="flex gap-6">
          {['home', 'products', 'why', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#5a8aaa' }}
            >
              {s === 'why' ? 'Why Us' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Copy */}
        <div className="text-xs text-center" style={{ color: '#5a8aaa' }}>
          © 2026 VRM · {CONTACT.location} · WHO-GMP Certified
        </div>
      </div>
    </footer>
  )
}
