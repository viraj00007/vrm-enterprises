import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data'

function ProductCard({ p, index }) {
  const navigate = useNavigate()
  const slug = p.name.toLowerCase().replace(/[^a-z0-9]/g, '-')

  return (
    <div
      className="product-card shine relative rounded-2xl p-8 cursor-pointer transition-all duration-400"
      style={{ background: 'var(--card)', border: '1px solid rgba(0,210,255,0.1)', transitionDelay: `${index * 0.08}s` }}
      onClick={() => navigate(`/product/${slug}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = p.border
        e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${p.color}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,210,255,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="product-line absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
      <div className="absolute top-4 right-6 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 72, color: `${p.color}10` }}>
        {String(p.id).padStart(2, '0')}
      </div>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
        style={{ background: p.bg, border: `1px solid ${p.border}` }}>
        {p.icon}
      </div>
      <h3 className="font-display font-bold text-2xl text-white mb-2 relative z-10">{p.name}</h3>
      <p className="text-sm font-medium mb-4 relative z-10 leading-relaxed" style={{ color: p.color }}>{p.composition}</p>
      <p className="text-sm leading-relaxed mb-6 relative z-10 font-light" style={{ color: '#5a8aaa' }}>{p.description}</p>
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black tracking-[1.5px] uppercase px-3 py-1.5 rounded-full"
          style={{ background: p.bg, color: p.color, border: `1px solid ${p.border}` }}>
          {p.tag}
        </span>
        <div className="product-arrow w-9 h-9 rounded-xl flex items-center justify-center text-base"
          style={{ border: '1px solid rgba(0,210,255,0.15)', color: p.color }}>
          →
        </div>
      </div>
      {/* View details hint */}
      <div className="mt-4 pt-4 text-xs font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ borderTop: '1px solid rgba(0,210,255,0.08)', color: p.color }}>
        Click to view details & order →
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="px-6 md:px-12 py-32"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, rgba(6,20,38,0.7) 50%, var(--bg) 100%)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-[580px] mx-auto mb-20">
          <p className="text-xs font-bold tracking-[3px] uppercase mb-3 reveal" style={{ color: '#00d2ff' }}>Our Formulations</p>
          <h2 className="font-display font-black leading-tight mb-4 reveal" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
            5 Premium <span style={{ color: '#00d2ff' }} className="glow-text">Injectables</span>
          </h2>
          <p className="text-base leading-relaxed font-light reveal" style={{ color: '#5a8aaa' }}>
            WHO-GMP manufactured, hospital-tested, and competitively priced for bulk procurement.
          </p>
          <p className="text-xs mt-3 reveal" style={{ color: '#00d2ff' }}>
            
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ProductCard p={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
