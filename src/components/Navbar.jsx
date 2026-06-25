import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const dark = false

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-[72px] flex items-center justify-between transition-all duration-500"
      style={{
        background: dark ? 'rgba(10,22,40,0.75)' : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(8,145,178,0.1)',
        boxShadow: dark ? 'none' : '0 2px 24px rgba(8,145,178,0.08)',
      }}
    >
      {/* Brand — VRM Enterprises */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: dark ? '0 0 20px rgba(56,189,248,0.3)' : '0 4px 12px rgba(8,145,178,0.3)' }}
        >
          ✚
        </div>
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-black tracking-widest"
            style={{ fontSize: 22, color: dark ? '#38bdf8' : '#075985', lineHeight: 1 }}
          >
            VRM
          </span>
          <span
            className="font-bold tracking-[2.5px] uppercase"
            style={{ fontSize: 8, color: dark ? 'rgba(255,255,255,0.45)' : '#94a3b8', lineHeight: 1, marginTop: 2 }}
          >
            Enterprises
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1">
        {[
          { id: 'products', label: 'Products' },
          { id: 'why', label: 'Why Us' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#64748b' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = dark ? '#7dd3fc' : '#0891b2'; e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(8,145,178,0.06)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = dark ? 'rgba(255,255,255,0.7)' : '#64748b'; e.currentTarget.style.background = 'transparent' }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          className="nav-cta ml-3 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
        >
          📋 Get Quote
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          style={{ background: dark ? 'rgba(255,255,255,0.8)' : '#0891b2' }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          style={{ background: dark ? 'rgba(255,255,255,0.8)' : '#0891b2' }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          style={{ background: dark ? 'rgba(255,255,255,0.8)' : '#0891b2' }}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-1"
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(8,145,178,0.1)',
            boxShadow: '0 12px 32px rgba(8,145,178,0.1)',
          }}
        >
          {[
            { id: 'products', label: '💊 Products' },
            { id: 'why', label: '🏆 Why Us' },
            { id: 'contact', label: '📞 Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="py-3 px-3 text-left text-sm font-medium rounded-lg transition-colors hover:bg-cyan-50 hover:text-cyan-600"
              style={{ color: '#475569', borderBottom: '1px solid rgba(8,145,178,0.06)' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2 py-3 px-3 rounded-xl text-sm font-bold text-white text-center"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', boxShadow: '0 4px 15px rgba(8,145,178,0.3)' }}
          >
            📋 Get Free Quote
          </button>
        </div>
      )}
    </nav>
  )
}



