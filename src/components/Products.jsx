import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data'

function ProductCard({ p, index }) {
  const navigate = useNavigate()
  const slug = p.name.toLowerCase().replace(/[^a-z0-9]/g, '-')

  return (
    <div
      className="relative rounded-2xl p-8 cursor-pointer transition-all duration-400"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(37,99,235,0.1)',
        boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
        transitionDelay: `${index * 0.08}s`,
      }}
      onClick={() => navigate(`/product/${slug}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = p.color
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(37,99,235,0.12), 0 0 30px ${p.color}15`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)'
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top color line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

      {/* Background number */}
      <div className="absolute top-4 right-6 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 72, color: `${p.color}12` }}>
        {String(p.id).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
        style={{ background: `${p.color}10`, border: `1px solid ${p.color}25` }}>
        {p.icon}
      </div>

      <h3 className="font-display font-bold text-2xl mb-2 relative z-10" style={{ color: '#0f172a' }}>{p.name}</h3>
      <p className="text-sm font-medium mb-4 relative z-10 leading-relaxed" style={{ color: p.color }}>{p.composition}</p>
      <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: '#64748b' }}>{p.description}</p>

      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black tracking-[1.5px] uppercase px-3 py-1.5 rounded-full"
          style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}25` }}>
          {p.tag}
        </span>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all"
          style={{ border: `1px solid ${p.color}30`, color: p.color, background: `${p.color}08` }}>
          →
        </div>
      </div>

      <div className="mt-4 pt-4 text-xs font-medium text-center"
        style={{ borderTop: '1px solid rgba(37,99,235,0.08)', color: '#94a3b8' }}>
        Click to view details & order →
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="px-6 md:px-12 py-32" style={{ background: '#f8faff' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-[580px] mx-auto mb-20">
          <p className="text-xs font-bold tracking-[3px] uppercase mb-3 reveal" style={{ color: '#2563eb' }}>Our Formulations</p>
          <h2 className="font-display font-black leading-tight mb-4 reveal" style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#0f172a' }}>
            5 Premium <span style={{ color: '#2563eb' }}>Injectables</span>
          </h2>
          <p className="text-base leading-relaxed reveal" style={{ color: '#64748b' }}>
            WHO-GMP manufactured, hospital-tested, and competitively priced for bulk procurement.
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
