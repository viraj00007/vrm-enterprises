const INFO_CARDS = [
  { icon: '📍', label: 'Location', value: 'Meerut, Uttar Pradesh', sub: 'Serving Pan India' },
  { icon: '🕐', label: 'Availability', value: '24/7', sub: 'Fast response guaranteed' },
  { icon: '✉️', label: 'Official Email', value: 'vrmenterprises006@gmail.com', sub: 'We reply within 24 hours', link: 'mailto:vrmenterprises006@gmail.com' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32"
      style={{ background: 'linear-gradient(180deg, #f8faff, #eff6ff)' }}
    >
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[3px] uppercase mb-3 reveal" style={{ color: '#2563eb' }}>
            Contact Us
          </p>
          <h2 className="font-display font-black leading-tight mb-4 reveal" style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#0f172a' }}>
            Get In <span style={{ color: '#2563eb' }}>Touch</span>
          </h2>
          <p className="text-base leading-relaxed reveal" style={{ color: '#64748b' }}>
            Reach out for pricing, bulk orders, or any queries. We respond fast.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-4">
          {INFO_CARDS.map((c, i) => (
            <div
              key={i}
              className="flex gap-5 items-center p-7 rounded-2xl transition-all duration-300 reveal"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(37,99,235,0.1)',
                boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                transitionDelay: `${i * 0.1}s`,
                cursor: c.link ? 'pointer' : 'default',
              }}
              onClick={() => c.link && window.open(c.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.06)'
              }}
            >
              <div
                className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}
              >
                {c.icon}
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1" style={{ color: '#94a3b8' }}>
                  {c.label}
                </div>
                <div className="text-lg font-semibold break-all" style={{ color: c.link ? '#2563eb' : '#0f172a' }}>{c.value}</div>
                <div className="text-sm mt-0.5" style={{ color: '#64748b' }}>{c.sub}</div>
              </div>
              {c.link && (
                <div className="text-xl" style={{ color: '#2563eb' }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
