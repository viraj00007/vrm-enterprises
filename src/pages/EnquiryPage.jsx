import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from '../services/api'
import { PRODUCTS } from '../data'

const DESIGNATIONS = ['Doctor', 'Pharmacist', 'Hospital Administrator', 'Purchase Manager', 'Medical Officer', 'Other']
const QUANTITIES = ['10-50 units/month', '50-100 units/month', '100-500 units/month', '500+ units/month', 'One-time requirement']

function SuccessScreen({ enquiryId, onNew }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6" style={{ background: '#f8faff' }}>
            <div className="text-center max-w-md w-full">
                <div className="text-7xl mb-6">✅</div>
                <h2 className="font-display font-black text-4xl mb-3" style={{ color: '#059669' }}>
                    Enquiry Submitted!
                </h2>
                <p className="mb-2 text-base" style={{ color: '#64748b' }}>
                    Our team will contact you within <strong style={{ color: '#0f172a' }}>24 hours</strong> to discuss pricing and availability.
                </p>
                <div className="my-8 p-6 rounded-2xl" style={{ background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.2)' }}>
                    <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>Enquiry ID</div>
                    <div className="text-3xl font-black font-display" style={{ color: '#059669' }}>{enquiryId}</div>
                    <div className="mt-3 text-sm" style={{ color: '#64748b' }}>Save this for your reference</div>
                </div>
                <div className="space-y-3">
                    <a href="mailto:vrmenterprises006@gmail.com"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm"
                        style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563eb' }}>
                        ✉️ vrmenterprises006@gmail.com
                    </a>
                    <button onClick={onNew} className="w-full py-3 rounded-xl text-sm font-semibold"
                        style={{ border: '1px solid rgba(37,99,235,0.25)', color: '#2563eb' }}>
                        Submit Another Enquiry
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function EnquiryPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const preselected = location.state?.selectedProduct

    const [form, setForm] = useState({
        contactName: '', hospitalName: '', designation: '', phone: '', email: '', city: '', state: '', message: '',
    })
    const [selectedProducts, setSelectedProducts] = useState(
        preselected ? [{ productName: preselected, approximateQty: '' }] : []
    )
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [])

    const toggleProduct = (name) => {
        setSelectedProducts(prev => {
            const exists = prev.find(p => p.productName === name)
            if (exists) return prev.filter(p => p.productName !== name)
            return [...prev, { productName: name, approximateQty: '' }]
        })
    }

    const setQty = (name, qty) => {
        setSelectedProducts(prev => prev.map(p => p.productName === name ? { ...p, approximateQty: qty } : p))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (selectedProducts.length === 0) return setError('Please select at least one product')
        const required = ['contactName', 'hospitalName', 'phone', 'city', 'state']
        for (const f of required) {
            if (!form[f].trim()) return setError(`Please fill: ${f.replace(/([A-Z])/g, ' $1')}`)
        }
        setSubmitting(true)
        try {
            const res = await api.submitEnquiry({ ...form, products: selectedProducts })
            setSuccess(res.data.enquiryId)
        } catch (err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    if (success) return <SuccessScreen enquiryId={success} onNew={() => { setSuccess(null); setSelectedProducts([]); setForm({ contactName: '', hospitalName: '', designation: '', phone: '', email: '', city: '', state: '', message: '' }) }} />

    const f = (key) => ({
        value: form[key],
        onChange: e => setForm(p => ({ ...p, [key]: e.target.value })),
    })

    const inputStyle = {
        background: '#ffffff',
        border: '1px solid rgba(37,99,235,0.15)',
        color: '#0f172a',
        borderRadius: 12,
        padding: '12px 16px',
        fontSize: 14,
        width: '100%',
        outline: 'none',
        fontFamily: 'inherit',
    }

    return (
        <div className="min-h-screen" style={{ background: '#f8faff', paddingTop: 72 }}>
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#2563eb' }}>Product Enquiry</div>
                    <h1 className="font-display font-black mb-3" style={{ fontSize: 'clamp(36px,5vw,60px)', color: '#0f172a', lineHeight: 1.05 }}>
                        Request a <span style={{ color: '#2563eb' }}>Quote</span>
                    </h1>
                    <p style={{ color: '#64748b', fontSize: 15 }}>Fill in your requirements and our team will get back to you with the best pricing within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 space-y-8">
                            {/* Step 1 */}
                            <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 2px 12px rgba(37,99,235,0.06)' }}>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black" style={{ background: '#2563eb', color: '#ffffff' }}>1</div>
                                    <h2 className="font-bold text-lg" style={{ color: '#0f172a' }}>Select Products</h2>
                                </div>
                                <div className="space-y-3">
                                    {PRODUCTS.map(p => {
                                        const isSelected = selectedProducts.find(sp => sp.productName === p.name)
                                        return (
                                            <div key={p.id} className="rounded-xl transition-all duration-200" style={{
                                                background: isSelected ? `${p.color}06` : '#f8faff',
                                                border: `1px solid ${isSelected ? p.color + '40' : 'rgba(37,99,235,0.08)'}`,
                                            }}>
                                                <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={() => toggleProduct(p.name)}>
                                                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                                                        style={{ background: isSelected ? p.color : 'transparent', border: `2px solid ${isSelected ? p.color : 'rgba(37,99,235,0.3)'}` }}>
                                                        {isSelected && <span style={{ color: '#ffffff', fontSize: 11, fontWeight: 900 }}>✓</span>}
                                                    </div>
                                                    <div className="text-xl flex-shrink-0">{p.icon}</div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-bold text-sm" style={{ color: '#0f172a' }}>{p.name}</div>
                                                        <div className="text-xs" style={{ color: p.color }}>{p.composition}</div>
                                                    </div>
                                                    <span className="text-xs px-2 py-1 rounded-full font-bold flex-shrink-0"
                                                        style={{ background: `${p.color}12`, color: p.color }}>{p.tag}</span>
                                                </div>
                                                {isSelected && (
                                                    <div className="px-4 pb-4">
                                                        <select value={isSelected.approximateQty || ''} onChange={e => setQty(p.name, e.target.value)}
                                                            style={{ ...inputStyle, padding: '8px 12px', fontSize: 13 }}>
                                                            <option value="">Select approximate quantity/month</option>
                                                            {QUANTITIES.map(q => <option key={q} value={q}>{q}</option>)}
                                                        </select>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div id="your-details" className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)', boxShadow: '0 2px 12px rgba(37,99,235,0.06)' }}>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black" style={{ background: '#2563eb', color: '#ffffff' }}>2</div>
                                    <h2 className="font-bold text-lg" style={{ color: '#0f172a' }}>Your Details</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Contact Person Name *', key: 'contactName', placeholder: 'Dr. Rajesh Kumar' },
                                        { label: 'Hospital / Clinic Name *', key: 'hospitalName', placeholder: 'City General Hospital' },
                                        { label: 'Phone Number *', key: 'phone', placeholder: '+91 9876543210', type: 'tel' },
                                        { label: 'Email Address', key: 'email', placeholder: 'hospital@email.com', type: 'email' },
                                        { label: 'City *', key: 'city', placeholder: 'Meerut' },
                                        { label: 'State *', key: 'state', placeholder: 'Uttar Pradesh' },
                                    ].map(field => (
                                        <div key={field.key}>
                                            <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>{field.label}</label>
                                            <input type={field.type || 'text'} placeholder={field.placeholder} style={inputStyle} {...f(field.key)} />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>Designation</label>
                                        <select style={inputStyle} {...f('designation')}>
                                            <option value="">Select designation</option>
                                            {DESIGNATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>Additional Requirements / Message</label>
                                    <textarea rows={3} placeholder="Any specific requirements, delivery timeline, or questions..." style={{ ...inputStyle, resize: 'vertical' }} {...f('message')} />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Summary */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24 rounded-2xl p-6 space-y-5" style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.15)', boxShadow: '0 4px 20px rgba(37,99,235,0.08)' }}>
                                <h3 className="font-display font-bold text-xl" style={{ color: '#0f172a' }}>Enquiry Summary</h3>
                                {selectedProducts.length === 0 ? (
                                    <div className="text-center py-8">
                                        <div className="text-4xl mb-3">💊</div>
                                        <p className="text-sm" style={{ color: '#94a3b8' }}>No products selected yet</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {selectedProducts.map(sp => {
                                            const p = PRODUCTS.find(p => p.name === sp.productName)
                                            return (
                                                <div key={sp.productName} className="flex items-center gap-3 p-3 rounded-xl"
                                                    style={{ background: '#f8faff', border: '1px solid rgba(37,99,235,0.1)' }}>
                                                    <span className="text-lg">{p?.icon}</span>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-semibold truncate" style={{ color: '#0f172a' }}>{sp.productName}</div>
                                                        {sp.approximateQty && <div className="text-xs" style={{ color: '#64748b' }}>{sp.approximateQty}</div>}
                                                    </div>
                                                    <button type="button" onClick={() => toggleProduct(sp.productName)}
                                                        className="text-xs flex-shrink-0" style={{ color: '#ef4444' }}>✕</button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                {error && (
                                    <div className="p-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
                                        ⚠️ {error}
                                    </div>
                                )}
                                <button type="submit" disabled={submitting}
                                    className="w-full py-4 rounded-xl font-bold text-base transition-all"
                                    style={{
                                        background: submitting ? 'rgba(37,99,235,0.15)' : 'linear-gradient(135deg,#2563eb,#1d4ed8)',
                                        color: submitting ? '#94a3b8' : '#ffffff',
                                        cursor: submitting ? 'not-allowed' : 'pointer',
                                        boxShadow: submitting ? 'none' : '0 8px 30px rgba(37,99,235,0.25)',
                                    }}>
                                    {submitting ? '⏳ Submitting...' : '📋 Submit Enquiry'}
                                </button>
                                <div className="pt-4 space-y-3" style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}>
                                    <p className="text-xs text-center" style={{ color: '#94a3b8' }}>Or contact us directly</p>
                                    <a href="mailto:vrmenterprises006@gmail.com"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold"
                                        style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563eb' }}>
                                        ✉️ vrmenterprises006@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
