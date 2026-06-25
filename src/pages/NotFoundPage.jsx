import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = '404 | VRM Enterprises'
    return () => { document.title = 'VRM Enterprises' }
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050c1c 0%, #0b1e4a 40%, #160742 100%)' }}
    >
      {/* Background blobs */}
      <div className="blob absolute pointer-events-none" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)', right: -200, top: -200, animationDuration: '18s' }} />
      <div className="blob absolute pointer-events-none" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', left: -100, bottom: -100, animationDuration: '14s', animationDelay: '-6s' }} />
      <div className="dot-pattern absolute inset-0" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl text-white"
            style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}
          >
            ✚
          </div>
          <span className="font-display font-black tracking-widest text-2xl" style={{ color: '#38bdf8' }}>VRM</span>
        </div>

        {/* 404 number */}
        <div
          className="font-display font-black leading-none mb-4 select-none"
          style={{
            fontSize: 'clamp(100px, 20vw, 160px)',
            background: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
          }}
        >
          404
        </div>

        <h1 className="font-display font-black text-3xl text-white mb-3">
          Page Not Found
        </h1>
        <p className="mb-10 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/')}
            className="btn-gradient px-8 py-3.5 rounded-xl font-bold text-white text-sm"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate('/enquiry')}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.06)' }}
          >
            📋 Send Enquiry
          </button>
        </div>
      </div>
    </div>
  )
}
