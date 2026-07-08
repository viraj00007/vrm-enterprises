import { useNavigate } from 'react-router-dom'
import { CONTACT } from '../data'

const INFO_CARDS = [
  {
    icon: '📍',
    label: 'Registered Address',
    value: '237/3 Jagriti Vihar, Meerut',
    sub: 'Uttar Pradesh 250004',
  },
  {
    icon: '📞',
    label: 'Phone Numbers',
    value: `${CONTACT.phone1}  ·  ${CONTACT.phone2}`,
    sub: 'Mon – Sat, 9 AM – 7 PM',
    link: `tel:${CONTACT.phone1}`,
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: CONTACT.email,
    sub: 'We respond within 24 hours',
    link: `mailto:${CONTACT.email}`,
  },
]

export default function Contact() {
  const navigate = useNavigate()

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ecfeff 60%, #ffffff 100%)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(8,145,178,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 reveal">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #0891b2)' }} />
            <p className="text-xs font-bold tracking-[3px] uppercase" style={{ color: '#0891b2' }}>Contact Us</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #0891b2, transparent)' }} />
          </div>
          <h2
            className="font-display font-black leading-tight mb-4 reveal"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#0f172a' }}
          >
            Get In{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Touch
            </span>
          </h2>
          <p className="text-base leading-relaxed reveal" style={{ color: '#64748b' }}>
            Reach out for pricing, bulk orders, or any queries. We respond within 24 hours.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-4 mb-8">
          {INFO_CARDS.map((c, i) => (
            <div
              key={i}
              className="flex gap-5 items-center p-6 rounded-2xl transition-all duration-300 reveal"
              style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(8,145,178,0.1)',
                boxShadow: '0 4px 20px rgba(8,145,178,0.07)',
                transitionDelay: `${i * 0.1}s`,
                cursor: c.link ? 'pointer' : 'default',
              }}
              onClick={() => c.link && window.open(c.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(8,145,178,0.3)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(8,145,178,0.13)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(8,145,178,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(8,145,178,0.07)'
              }}
            >
              <div
                className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(8,145,178,0.12), rgba(8,145,178,0.06))',
                  border: '1.5px solid rgba(8,145,178,0.18)',
                  boxShadow: '0 4px 12px rgba(8,145,178,0.1)',
                }}
              >
                {c.icon}
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1" style={{ color: '#94a3b8' }}>{c.label}</div>
                <div className="text-lg font-semibold break-all" style={{ color: c.link ? '#0891b2' : '#0f172a' }}>{c.value}</div>
                <div className="text-sm mt-0.5" style={{ color: '#64748b' }}>{c.sub}</div>
              </div>
              {c.link && (
                <div className="text-xl font-bold" style={{ color: '#0891b2', opacity: 0.7 }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Enquiry CTA */}
        <div
          className="p-6 rounded-2xl reveal flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(8,145,178,0.07), rgba(3,105,161,0.05))',
            border: '1px solid rgba(8,145,178,0.15)',
          }}
        >
          <div>
            <div className="font-bold text-sm mb-1" style={{ color: '#0f172a' }}>Ready to place an order?</div>
            <div className="text-sm" style={{ color: '#64748b' }}>Fill out our enquiry form and we'll get back to you within 24 hours.</div>
          </div>
          <button
            onClick={() => navigate('/enquiry')}
            className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', boxShadow: '0 4px 15px rgba(8,145,178,0.3)' }}
          >
            📋 Send Enquiry
          </button>
        </div>
      </div>
    </section>
  )
}
