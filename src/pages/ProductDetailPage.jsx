import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data'

function VialIllustration({ color, name, composition }) {
  return (
    <div className="relative flex items-end justify-center gap-6" style={{ height: 320 }}>
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: `radial-gradient(circle at 50% 70%, ${color}15 0%, transparent 65%)`,
      }} />
      {/* Main vial */}
      <div className="relative flex flex-col" style={{ width: 100, height: 280 }}>
        <div className="rounded-t-xl relative overflow-hidden" style={{ height: 26, background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.3),transparent)' }} />
        </div>
        <div style={{ height: 9, background: `${color}60`, margin: '0 18px' }} />
        <div className="flex-1 relative overflow-hidden rounded-b-xl" style={{
          background: 'linear-gradient(160deg,rgba(255,255,255,0.95) 0%,rgba(241,245,249,0.9) 100%)',
          border: `1px solid ${color}30`,
          boxShadow: `0 20px 60px rgba(37,99,235,0.12),inset 0 1px 0 rgba(255,255,255,0.8),0 0 30px ${color}10`,
        }}>
          <div className="mx-2 mt-3 p-2 rounded-lg" style={{ background:`${color}10`,border:`1px solid ${color}20` }}>
            <div className="text-center font-black" style={{ fontSize:11,letterSpacing:1,color:'#0f172a' }}>{name}</div>
            <div className="text-center mt-1" style={{ fontSize:8,color:'#64748b',lineHeight:1.3 }}>{composition.slice(0,28)}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-xl" style={{ height:'55%', background:`linear-gradient(180deg,${color}25,${color}50)` }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded" style={{ background:'rgba(255,255,255,0.6)' }} />
          </div>
          <div className="absolute top-0 bottom-0 rounded-sm" style={{ left:'12%',width:'14%',background:'linear-gradient(180deg,rgba(255,255,255,0.5),transparent)' }} />
        </div>
      </div>
      {/* Small left vial */}
      <div className="relative flex flex-col self-end" style={{ width:65,height:185 }}>
        <div className="rounded-t-lg relative overflow-hidden" style={{ height:16,background:`linear-gradient(135deg,${color}cc,${color}66)` }}>
          <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.25),transparent)' }} />
        </div>
        <div style={{ height:6,background:`${color}40`,margin:'0 12px' }} />
        <div className="flex-1 relative overflow-hidden rounded-b-lg" style={{
          background:'linear-gradient(160deg,rgba(255,255,255,0.95) 0%,rgba(241,245,249,0.9) 100%)',
          border:`1px solid ${color}20`,
          boxShadow:`0 15px 40px rgba(37,99,235,0.08)`,
        }}>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-lg" style={{ height:'50%',background:`linear-gradient(180deg,${color}20,${color}45)` }} />
          <div className="absolute top-0 bottom-0 rounded-sm" style={{ left:'10%',width:'12%',background:'linear-gradient(180deg,rgba(255,255,255,0.5),transparent)' }} />
        </div>
      </div>
      {/* Small right vial */}
      <div className="relative flex flex-col self-end" style={{ width:50,height:145 }}>
        <div className="rounded-t-lg relative overflow-hidden" style={{ height:13,background:`linear-gradient(135deg,${color}bb,${color}55)` }}>
          <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.2),transparent)' }} />
        </div>
        <div style={{ height:5,background:`${color}30`,margin:'0 10px' }} />
        <div className="flex-1 relative overflow-hidden rounded-b-lg" style={{
          background:'linear-gradient(160deg,rgba(255,255,255,0.95) 0%,rgba(241,245,249,0.9) 100%)',
          border:`1px solid ${color}15`,
        }}>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-lg" style={{ height:'45%',background:`linear-gradient(180deg,${color}15,${color}35)` }} />
          <div className="absolute top-0 bottom-0 rounded-sm" style={{ left:'10%',width:'12%',background:'linear-gradient(180deg,rgba(255,255,255,0.5),transparent)' }} />
        </div>
      </div>
    </div>
  )
}

const CLINICAL_USES = {
  'Tazomor-4.5': ['Hospital Infections','Pneumonia','Septicemia','UTI','Skin Infections'],
  'Riaxov-1g': ['Meningitis','Respiratory Infections','Surgical Prophylaxis','Typhoid'],
  'Zolbacten-1.5': ['MDR Infections','ICU Infections','Intra-abdominal','Septicemia'],
  'Paracline-IV': ['Post-op Fever','Pain Management','ICU Patients','Antipyretic'],
  'Linomox-IV': ['MRSA Infections','VRE Infections','Pneumonia','Skin Infections'],
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = PRODUCTS.find(p => {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]/g, '-')
    return slug === id || String(p.id) === id
  })

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background:'#f8faff' }}>
      <div className="text-center">
        <div className="text-5xl mb-4">❌</div>
        <div className="text-lg font-bold mb-4" style={{ color:'#0f172a' }}>Product not found</div>
        <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl font-bold text-sm text-white"
          style={{ background:'linear-gradient(135deg,#2563eb,#1d4ed8)' }}>← Go Back</button>
      </div>
    </div>
  )

  const color = product.color
  const uses = CLINICAL_USES[product.name] || ['Hospital Use','Injectable','Critical Care']

  return (
    <div className="min-h-screen" style={{ background:'#f8faff', paddingTop:72 }}>
      {/* Back */}
      <div className="px-6 md:px-12 pt-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium transition-all hover:-translate-x-1" style={{ color:'#64748b' }}>
          ← Back to Products
        </button>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — Vial */}
          <div>
            <div className="relative rounded-3xl p-10 flex items-center justify-center" style={{
              background:`radial-gradient(ellipse at center,${color}08 0%,rgba(239,246,255,0.8) 70%)`,
              border:`1px solid ${color}20`, minHeight:380,
            }}>
              <VialIllustration color={color} name={product.name} composition={product.composition} />
            </div>
            {/* Info badges */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                { label:'Category', value: product.tag, color },
                { label:'Form', value:'IV Injectable', color:'#2563eb' },
                { label:'Manufacturer', value:'WHO-GMP Certified', color:'#059669' },
                { label:'Storage', value:'Below 25°C', color:'#d97706' },
              ].map((b,i) => (
                <div key={i} className="rounded-xl p-4" style={{ background:'#ffffff',border:'1px solid rgba(37,99,235,0.1)',boxShadow:'0 2px 8px rgba(37,99,235,0.05)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color:'#94a3b8' }}>{b.label}</div>
                  <div className="font-bold text-sm" style={{ color:b.color }}>{b.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div>
            <span className="inline-block text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
              style={{ background:`${color}12`,color,border:`1px solid ${color}25` }}>
              {product.icon} {product.tag}
            </span>
            <h1 className="font-display font-black mb-3" style={{ fontSize:'clamp(38px,5vw,60px)',color:'#0f172a',lineHeight:1.05 }}>
              {product.name}
            </h1>
            <p className="text-base font-semibold mb-5" style={{ color }}>{product.composition}</p>
            <p className="text-sm leading-relaxed mb-8" style={{ color:'#64748b' }}>{product.description}</p>

            <div style={{ borderTop:'1px solid rgba(37,99,235,0.1)',marginBottom:24 }} />

            {/* Clinical uses */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color:'#94a3b8' }}>Clinical Uses</div>
              <div className="flex flex-wrap gap-2">
                {uses.map((u,i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background:`${color}10`,color,border:`1px solid ${color}20` }}>{u}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 space-y-4" style={{ background:'#ffffff',border:`1px solid rgba(37,99,235,0.15)`,boxShadow:'0 4px 20px rgba(37,99,235,0.08)' }}>
              <div className="text-sm" style={{ color:'#64748b' }}>
                Interested in this product? Send us an enquiry and our team will contact you with pricing and availability within 24 hours.
              </div>
              <button
                onClick={() => navigate('/enquiry', { state: { selectedProduct: product.name } })}
                className="w-full py-4 rounded-xl font-bold text-base text-white transition-all hover:-translate-y-0.5"
                style={{ background:`linear-gradient(135deg,#2563eb,#1d4ed8)`,boxShadow:`0 8px 30px rgba(37,99,235,0.25)` }}>
                📋 Send Enquiry for {product.name}
              </button>
              <a href="mailto:vrmenterprises006@gmail.com"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{ background:'rgba(37,99,235,0.06)',border:'1px solid rgba(37,99,235,0.2)',color:'#2563eb' }}>
                ✉️ vrmenterprises006@gmail.com
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['WHO-GMP Certified','Fast Delivery','Bulk Pricing','Quality Tested'].map(f => (
                <div key={f} className="flex items-center gap-1.5 text-xs font-medium" style={{ color:'#64748b' }}>
                  <span style={{ color:'#059669' }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
