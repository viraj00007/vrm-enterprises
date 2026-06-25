import { useState } from 'react'

const FAQS = [
  {
    q: 'What is the minimum order quantity?',
    a: 'We cater to bulk procurement for hospitals and clinics. Minimum quantities vary by product — submit an enquiry and our team will provide specific details for your requirement.',
  },
  {
    q: 'How long does delivery take?',
    a: 'We deliver within 24–48 hours across major cities. For urgent critical care requirements, same-day delivery can often be arranged on request.',
  },
  {
    q: 'Where are the products sourced from?',
    a: 'All products are sourced from licensed pharmaceutical manufacturers in Baddi, Himachal Pradesh — one of India\'s leading pharmaceutical manufacturing hubs. Batch documentation and quality details are available on the product packaging.',
  },
  {
    q: 'Do you offer credit terms for hospitals?',
    a: 'Yes, we offer flexible credit terms for registered hospitals and healthcare institutions. Contact our team to discuss payment options suited to your institution.',
  },
  {
    q: 'Can we get a custom quote for large orders?',
    a: 'Absolutely. Fill our enquiry form with your product requirements and quantities. Our team responds within 24 hours with competitive bulk pricing.',
  },
  {
    q: 'Which areas do you supply to?',
    a: 'We supply pan-India with primary focus on Karnataka and major metropolitan hospitals. Coverage is expanding continuously to serve more regions.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="px-6 md:px-12 py-24 relative" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-[860px] mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 reveal">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #0ea5e9)' }} />
            <p className="text-xs font-bold tracking-[3px] uppercase" style={{ color: '#0ea5e9' }}>Support</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #0ea5e9, transparent)' }} />
          </div>
          <h2
            className="font-display font-black leading-tight mb-3 reveal"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)', color: '#0f172a' }}
          >
            Frequently Asked{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Questions
            </span>
          </h2>
          <p className="text-base reveal" style={{ color: '#64748b' }}>
            Everything you need to know about ordering from VRM Enterprises
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="reveal rounded-2xl overflow-hidden"
              style={{
                border: open === i ? '1px solid rgba(14,165,233,0.35)' : '1px solid rgba(8,145,178,0.1)',
                boxShadow: open === i ? '0 8px 30px rgba(14,165,233,0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
                transitionDelay: `${i * 0.04}s`,
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                style={{ background: open === i ? 'rgba(14,165,233,0.04)' : '#ffffff', border: 'none', cursor: 'pointer' }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base" style={{ color: '#0f172a', lineHeight: 1.5 }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    background: open === i ? 'linear-gradient(135deg, #0ea5e9, #6366f1)' : 'rgba(14,165,233,0.1)',
                    color: open === i ? '#ffffff' : '#0ea5e9',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
