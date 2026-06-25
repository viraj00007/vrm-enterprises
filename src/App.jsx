import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigationType } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EnquiryPage from './pages/EnquiryPage'
import AdminPage from './pages/AdminPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { useScrollReveal, useCursorGlow } from './hooks/useAnimations'

const TRUST_ITEMS = [
  { icon: '🏆', value: 'WHO-GMP', label: 'Certified' },
  { icon: '🏥', value: '50+', label: 'Hospitals Served' },
  { icon: '📦', value: '10,000+', label: 'Orders Delivered' },
  { icon: '🚚', value: '24h', label: 'Fast Supply' },
  { icon: '🇮🇳', value: 'Pan India', label: 'Coverage' },
  { icon: '💉', value: '5+', label: 'Injectable Products' },
]

function TrustBand() {
  return (
    <div className="trust-band relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 relative z-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {i > 0 && (
                <div className="hidden lg:block h-7 w-px mr-2.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
              )}
              <span className="text-xl">{item.icon}</span>
              <div>
                <div
                  className="font-display font-black leading-none"
                  style={{ fontSize: 18, color: 'white' }}
                >
                  {item.value}
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-wider leading-none mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Home() {
  useScrollReveal()
  useEffect(() => { document.title = 'VRM Enterprises | WHO-GMP Pharmaceutical Supplier, Bengaluru' }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBand />
      <Products />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

function SubLayout() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-6 h-[72px] flex items-center justify-between"
      style={{
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(8,145,178,0.1)',
        boxShadow: '0 2px 20px rgba(8,145,178,0.07)',
      }}
    >
      <Link
        to="/"
        className="flex items-center gap-2.5"
        style={{ textDecoration: 'none' }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base text-white"
          style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}
        >
          ✚
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-black tracking-widest" style={{ fontSize: 18, color: '#075985', lineHeight: 1 }}>VRM</span>
          <span className="font-bold tracking-[2px] uppercase" style={{ fontSize: 7, color: '#94a3b8', marginTop: 2 }}>Enterprises</span>
        </div>
      </Link>
      <Link
        to="/enquiry"
        className="nav-cta px-5 py-2.5 rounded-xl text-sm font-bold text-white"
        style={{ textDecoration: 'none' }}
      >
        📋 Send Enquiry
      </Link>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  const navType = useNavigationType()
  const positions = useRef({})

  useEffect(() => { window.history.scrollRestoration = 'manual' }, [])

  // Save scroll position while browsing each page
  useEffect(() => {
    const save = () => { positions.current[pathname] = window.scrollY }
    window.addEventListener('scroll', save, { passive: true })
    return () => window.removeEventListener('scroll', save)
  }, [pathname])

  // On back/forward (POP): restore saved position. On new navigation: go to top.
  useEffect(() => {
    if (navType === 'POP') {
      const y = positions.current[pathname] ?? 0
      requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' }))
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, navType])

  return null
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        width: 46, height: 46, borderRadius: '50%',
        background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
        boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
        border: 'none', cursor: 'pointer', color: '#fff',
        fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(99,102,241,0.6)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.45)' }}
    >
      ↑
    </button>
  )
}

function AppContent() {
  useCursorGlow()
  return (
    <div className="relative">
      <ScrollToTop />
      <BackToTop />
      <div id="cursor-glow" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<><SubLayout /><ProductDetailPage /></>} />
        <Route path="/enquiry" element={<><SubLayout /><EnquiryPage /></>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}


