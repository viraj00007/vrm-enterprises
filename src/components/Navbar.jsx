import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-[72px] flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
        boxShadow: scrolled ? '0 2px 20px rgba(37,99,235,0.08)' : 'none',
      }}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl text-white"
          style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
        >
          V
        </div>
        <span className="font-display text-3xl font-black tracking-widest" style={{ color: '#2563eb' }}>VRM</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-2">
        {['products', 'why', 'contact'].map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-50 hover:text-blue-600"
            style={{ color: '#64748b' }}
          >
            {s === 'why' ? 'Why Us' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#2563eb' }} />
        <span className={`block w-6 h-0.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#2563eb' }} />
        <span className={`block w-6 h-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#2563eb' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-2"
          style={{ background: '#ffffff', borderBottom: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 8px 24px rgba(37,99,235,0.08)' }}
        >
          {['products', 'why', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="py-3 text-left text-sm font-medium transition-colors hover:text-blue-600"
              style={{ color: '#64748b', borderBottom: '1px solid rgba(37,99,235,0.06)' }}
            >
              {s === 'why' ? 'Why Us' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
