import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EnquiryPage from './pages/EnquiryPage'
import AdminPage from './pages/AdminPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { useScrollReveal, useCursorGlow } from './hooks/useAnimations'

function Home() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

function SubLayout() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 h-[72px] flex items-center justify-between"
      style={{ background: 'rgba(2,11,24,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,210,255,0.1)' }}>
      <Link to="/" className="font-display font-black text-5xl tracking-widest"
        style={{ color: '#00d2ff', textDecoration: 'none', textShadow: '0 0 40px rgba(0,210,255,0.5)' }}>VRM</Link>
      <Link to="/enquiry" className="text-xs px-5 py-2.5 rounded-lg font-bold"
        style={{ background: 'linear-gradient(135deg,#00d2ff,#0094b8)', color: '#020b18', textDecoration: 'none' }}>
        📋 Send Enquiry
      </Link>
    </div>
  )
}

function AppContent() {
  useCursorGlow()
  return (
    <div className="relative">
      <div id="cursor-glow" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<><SubLayout /><ProductDetailPage /></>} />
        <Route path="/enquiry" element={<><SubLayout /><EnquiryPage /></>} />
        <Route path="/admin" element={<AdminPage />} />
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
