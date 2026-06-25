import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data'

const ALL_TAGS = ['All', ...PRODUCTS.map(p => p.tag)]

function ProductCard({ p, index }) {
  const navigate = useNavigate()
  const slug = p.name.toLowerCase().replace(/[^a-z0-9]/g, '-')

  return (
    <div
      className="card-shine relative rounded-2xl p-8 cursor-pointer"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(8,145,178,0.1)',
        boxShadow: '0 4px 20px rgba(8,145,178,0.07)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transitionDelay: `${index * 0.06}s`,
      }}
      onClick={() => navigate(`/product/${slug}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = p.color
        e.currentTarget.style.boxShadow = `0 28px 70px rgba(8,145,178,0.14), 0 0 0 1px ${p.color}30`
        e.currentTarget.style.transform = 'translateY(-10px)'
        e.currentTarget.style.background = `linear-gradient(160deg, #ffffff 60%, ${p.color}06 100%)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(8,145,178,0.1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(8,145,178,0.07)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = '#ffffff'
      }}
    >
      {/* Top gradient accent bar */}
      <div
        className="absolute top-0 left-0 right-0 rounded-t-2xl"
        style={{ height: 4, background: `linear-gradient(90deg, transparent 0%, ${p.color} 40%, ${p.color} 60%, transparent 100%)` }}
      />

      {/* Background number watermark */}
      <div
        className="absolute top-3 right-5 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 80, color: `${p.color}10` }}
      >
        {String(p.id).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
        style={{
          background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)`,
          border: `1.5px solid ${p.color}30`,
          boxShadow: `0 4px 16px ${p.color}20`,
        }}
      >
        {p.icon}
      </div>

      <h3 className="font-display font-bold text-2xl mb-2 relative z-10" style={{ color: '#0f172a' }}>{p.name}</h3>
      <p className="text-sm font-semibold mb-4 relative z-10 leading-relaxed" style={{ color: p.color }}>{p.composition}</p>
      <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: '#64748b' }}>{p.description}</p>

      <div className="flex items-center justify-between relative z-10">
        <span
          className="text-[10px] font-black tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${p.color}14, ${p.color}08)`,
            color: p.color,
            border: `1px solid ${p.color}30`,
          }}
        >
          {p.tag}
        </span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold transition-all"
          style={{ border: `1.5px solid ${p.color}35`, color: p.color, background: `${p.color}08` }}
        >
          →
        </div>
      </div>

      <div
        className="mt-5 pt-4 text-xs font-medium text-center tracking-wide"
        style={{ borderTop: `1px solid ${p.color}15`, color: '#94a3b8' }}
      >
        Click to view details & send enquiry →
      </div>
    </div>
  )
}

export default function Products() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.tag === activeTag)

  return (
    <section
      id="products"
      className="px-6 md:px-12 py-32 relative"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #f0f4ff 55%, #f8faff 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(8,145,178,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 reveal">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9)' }} />
            <p className="text-xs font-bold tracking-[3px] uppercase" style={{ color: '#0ea5e9' }}>Our Formulations</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #0ea5e9, transparent)' }} />
          </div>
          <h2
            className="font-display font-black leading-tight mb-5 reveal"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#0f172a' }}
          >
            5 Premium{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Injectables
            </span>
          </h2>
          <p className="text-base leading-relaxed reveal" style={{ color: '#64748b' }}>
            Quality-sourced from licensed manufacturers in Baddi, HP. Competitively priced for bulk hospital procurement.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 reveal">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
                style={{
                  background: activeTag === tag ? 'linear-gradient(135deg, #0ea5e9, #6366f1)' : 'rgba(14,165,233,0.07)',
                  color: activeTag === tag ? '#ffffff' : '#0ea5e9',
                  border: activeTag === tag ? 'none' : '1px solid rgba(14,165,233,0.2)',
                  boxShadow: activeTag === tag ? '0 4px 14px rgba(99,102,241,0.35)' : 'none',
                  transform: activeTag === tag ? 'translateY(-1px)' : 'translateY(0)',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ProductCard p={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


