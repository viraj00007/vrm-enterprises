const TESTIMONIALS = [
    {
        name: 'Dr. Rajesh Sharma',
        role: 'Chief Medical Officer',
        hospital: 'City General Hospital, Meerut',
        text: 'VRM has been our trusted supplier for over 2 years. The quality of their injectable formulations is consistently excellent and delivery is always on time. Highly recommended for any hospital.',
        rating: 5,
        avatar: 'RS',
        color: '#00d2ff',
    },
    {
        name: 'Dr. Priya Verma',
        role: 'ICU Head',
        hospital: 'Apollo Clinic, Ghaziabad',
        text: 'We specifically use Linomox-IV and Zolbacten from VRM for our ICU patients. The WHO-GMP certification gives us confidence in every batch. Pricing is very competitive for bulk orders.',
        rating: 5,
        avatar: 'PV',
        color: '#00e5a0',
    },
    {
        name: 'Mr. Anil Gupta',
        role: 'Pharmacy Manager',
        hospital: 'Medplus Hospital Chain, UP',
        text: 'Fast supply, great pricing, and responsive team. When we had an urgent requirement for Tazomor-4.5 at midnight, VRM arranged delivery by morning. Outstanding service.',
        rating: 5,
        avatar: 'AG',
        color: '#f0c060',
    },
    {
        name: 'Dr. Sunita Yadav',
        role: 'Surgeon',
        hospital: 'Ram Manohar Lohia Hospital',
        text: 'Paracline-IV from VRM is our go-to post-operative analgesic. The consistency in quality across every batch is remarkable. Our patients recover faster with reliable medicines.',
        rating: 5,
        avatar: 'SY',
        color: '#c084fc',
    },
]

function StarRating({ count }) {
    return (
        <div className="flex gap-1 mb-4">
            {[...Array(count)].map((_, i) => (
                <span key={i} style={{ color: '#f0c060', fontSize: 14 }}>★</span>
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="px-6 md:px-12 py-24" style={{ background: 'linear-gradient(180deg, var(--bg), rgba(6,20,38,0.8), var(--bg))' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[3px] uppercase mb-3 reveal" style={{ color: '#00d2ff' }}>
                        Trusted By
                    </p>
                    <h2 className="font-display font-black leading-tight mb-4 reveal" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                        What Doctors <span style={{ color: '#00d2ff' }} className="glow-text">Say</span>
                    </h2>
                    <p className="text-base font-light reveal" style={{ color: '#5a8aaa' }}>
                        Trusted by hospitals and clinics across Uttar Pradesh
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className="reveal rounded-2xl p-7 transition-all duration-300"
                            style={{
                                background: 'rgba(10,30,53,0.7)',
                                border: '1px solid rgba(0,210,255,0.1)',
                                transitionDelay: `${i * 0.1}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${t.color}40`
                                e.currentTarget.style.transform = 'translateY(-4px)'
                                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.1)'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            {/* Quote mark */}
                            <div className="font-display font-black text-6xl leading-none mb-2" style={{ color: `${t.color}25` }}>"</div>

                            <StarRating count={t.rating} />

                            <p className="text-sm leading-relaxed mb-6 font-light" style={{ color: '#c8dff0' }}>
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3" style={{ borderTop: '1px solid rgba(0,210,255,0.08)', paddingTop: 16 }}>
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                                    style={{ background: `${t.color}20`, border: `1px solid ${t.color}40`, color: t.color }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-sm" style={{ color: '#e8f4ff' }}>{t.name}</div>
                                    <div className="text-xs font-light" style={{ color: t.color }}>{t.role}</div>
                                    <div className="text-xs font-light" style={{ color: '#5a8aaa' }}>{t.hospital}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div
                    className="grid grid-cols-3 gap-6 mt-14 p-8 rounded-2xl reveal"
                    style={{ background: 'rgba(10,30,53,0.5)', border: '1px solid rgba(0,210,255,0.1)' }}
                >
                    {[
                        { num: '50+', label: 'Hospitals Served', color: '#00d2ff' },
                        { num: '10,000+', label: 'Orders Delivered', color: '#00e5a0' },
                        { num: '100%', label: 'Quality Assured', color: '#f0c060' },
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="font-display font-black text-3xl md:text-4xl" style={{ color: s.color }}>{s.num}</div>
                            <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: '#5a8aaa' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
