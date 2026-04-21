import { useState, useEffect } from 'react'
import { api } from '../services/api'

const STATUS_OPTIONS = ['new', 'contacted', 'followup', 'converted', 'closed']
const STATUS_COLORS = { new: '#f59e0b', contacted: '#2563eb', followup: '#8b5cf6', converted: '#059669', closed: '#64748b' }
const STATUS_BG = { new: 'rgba(245,158,11,0.12)', contacted: 'rgba(37,99,235,0.12)', followup: 'rgba(139,92,246,0.12)', converted: 'rgba(5,150,105,0.12)', closed: 'rgba(100,116,139,0.12)' }
const STATUS_ICONS = { new: '🆕', contacted: '📞', followup: '🔄', converted: '✅', closed: '🔒' }

function LoginScreen({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const submit = async (e) => {
    e.preventDefault(); setLoading(true); setError('')
    try { const res = await api.adminLogin(form); localStorage.setItem('vrm_admin_token', res.token); onLogin() }
    catch (err) { setError(err.message) } finally { setLoading(false) }
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0f172a' }}>
      <div className="w-full max-w-sm p-8 rounded-2xl" style={{ background: 'rgba(30,41,59,0.9)', border: '1px solid rgba(37,99,235,0.2)' }}>
        <div className="text-center mb-8">
          <div className="font-display font-black text-4xl mb-1" style={{ color: '#2563eb' }}>VRM</div>
          <div className="text-sm" style={{ color: '#94a3b8' }}>Admin Dashboard</div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          {['username','password'].map(f => (
            <div key={f}>
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>{f}</label>
              <input type={f==='password'?'password':'text'} required className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background:'rgba(15,23,42,0.8)',border:'1px solid rgba(37,99,235,0.2)',color:'#e2e8f0' }}
                value={form[f]} onChange={e=>setForm(p=>({...p,[f]:e.target.value}))}/>
            </div>
          ))}
          {error && <div className="text-xs p-3 rounded-xl" style={{ background:'rgba(239,68,68,0.1)',color:'#f87171' }}>❌ {error}</div>}
          <button type="submit" disabled={loading} className="w-full py-3 rounded-xl font-bold text-sm"
            style={{ background:'linear-gradient(135deg,#2563eb,#1d4ed8)',color:'#ffffff' }}>
            {loading?'Logging in...':'Login →'}
          </button>
        </form>
      </div>
    </div>
  )
}

function StatCard({ label, value, color='#2563eb', icon }) {
  return (
    <div className="rounded-2xl p-6" style={{ background:'rgba(30,41,59,0.8)',border:`1px solid ${color}25` }}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-display font-black text-3xl" style={{ color }}>{value}</div>
      <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color:'#94a3b8' }}>{label}</div>
    </div>
  )
}

function EnquiryRow({ enquiry, onStatusChange }) {
  const [updating, setUpdating] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [notes, setNotes] = useState(enquiry.adminNotes || '')
  const changeStatus = async (status) => { setUpdating(true); try { await onStatusChange(enquiry._id, { status, adminNotes: notes }) } finally { setUpdating(false) } }
  const color = STATUS_COLORS[enquiry.status]
  return (
    <>
      <tr className="transition-colors cursor-pointer hover:bg-white/5" style={{ borderBottom:'1px solid rgba(37,99,235,0.08)' }} onClick={() => setExpanded(!expanded)}>
        <td className="px-4 py-4 font-bold font-display text-sm" style={{ color:'#2563eb' }}>{enquiry.enquiryId}</td>
        <td className="px-4 py-4"><div className="text-sm font-semibold" style={{ color:'#e2e8f0' }}>{enquiry.contactName}</div><div className="text-xs" style={{ color:'#94a3b8' }}>{enquiry.designation||'N/A'}</div></td>
        <td className="px-4 py-4"><div className="text-sm font-semibold" style={{ color:'#e2e8f0' }}>{enquiry.hospitalName}</div><div className="text-xs" style={{ color:'#94a3b8' }}>{enquiry.city}, {enquiry.state}</div></td>
        <td className="px-4 py-4 text-sm font-medium" style={{ color:'#2563eb' }}>{enquiry.phone}</td>
        <td className="px-4 py-4 text-xs" style={{ color:'#94a3b8' }}>{enquiry.products?.map(p=>p.productName).join(', ')}</td>
        <td className="px-4 py-4"><span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ background:STATUS_BG[enquiry.status],color }}>{STATUS_ICONS[enquiry.status]} {enquiry.status}</span></td>
        <td className="px-4 py-4 text-xs" style={{ color:'#94a3b8' }}>{new Date(enquiry.createdAt).toLocaleDateString('en-IN')}</td>
        <td className="px-4 py-4" onClick={e=>e.stopPropagation()}>
          <select disabled={updating} onChange={e=>changeStatus(e.target.value)} value={enquiry.status} className="text-xs px-2 py-1.5 rounded-lg outline-none"
            style={{ background:'rgba(15,23,42,0.8)',border:'1px solid rgba(37,99,235,0.2)',color:'#e2e8f0',cursor:'pointer' }}>
            {STATUS_OPTIONS.map(s=><option key={s} value={s}>{STATUS_ICONS[s]} {s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
          </select>
        </td>
      </tr>
      {expanded && (
        <tr style={{ background:'rgba(37,99,235,0.03)',borderBottom:'1px solid rgba(37,99,235,0.08)' }}>
          <td colSpan={8} className="px-6 py-5">
            <div className="grid sm:grid-cols-3 gap-4 text-xs mb-4">
              <div><div className="font-bold mb-1 uppercase tracking-widest" style={{ color:'#94a3b8' }}>Contact</div>
                <div style={{ color:'#e2e8f0' }}>📞 {enquiry.phone}</div>
                {enquiry.email&&<div style={{ color:'#94a3b8' }}>✉️ {enquiry.email}</div>}
              </div>
              <div><div className="font-bold mb-1 uppercase tracking-widest" style={{ color:'#94a3b8' }}>Products</div>
                {enquiry.products?.map((p,i)=><div key={i} style={{ color:'#e2e8f0' }}>• {p.productName} {p.approximateQty&&<span style={{ color:'#94a3b8' }}>({p.approximateQty})</span>}</div>)}
              </div>
              <div><div className="font-bold mb-1 uppercase tracking-widest" style={{ color:'#94a3b8' }}>Admin Notes</div>
                <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={2} placeholder="Add notes..."
                  className="w-full text-xs p-2 rounded-lg outline-none resize-none"
                  style={{ background:'rgba(15,23,42,0.8)',border:'1px solid rgba(37,99,235,0.2)',color:'#e2e8f0' }}/>
                <button onClick={()=>changeStatus(enquiry.status)} className="mt-1 px-3 py-1 rounded-lg text-xs font-bold" style={{ background:'rgba(37,99,235,0.15)',color:'#2563eb' }}>Save</button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <a href={`tel:${enquiry.phone}`} className="px-4 py-2 rounded-lg text-xs font-bold" style={{ background:'linear-gradient(135deg,#2563eb,#1d4ed8)',color:'#ffffff',textDecoration:'none' }}>📞 Call Now</a>
              <a href={`https://wa.me/91${enquiry.phone.replace(/\D/g,'')}?text=Hi%20${encodeURIComponent(enquiry.contactName)}%2C%20this%20is%20VRM%20Pharmaceuticals%20regarding%20your%20enquiry.`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg text-xs font-bold" style={{ background:'linear-gradient(135deg,#25d366,#128c7e)',color:'#fff',textDecoration:'none' }}>💬 WhatsApp</a>
              {enquiry.email&&<a href={`mailto:${enquiry.email}`} className="px-4 py-2 rounded-lg text-xs font-bold" style={{ background:'rgba(37,99,235,0.1)',border:'1px solid rgba(37,99,235,0.2)',color:'#2563eb',textDecoration:'none' }}>✉️ Email</a>}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(!!localStorage.getItem('vrm_admin_token'))
  const [enquiries, setEnquiries] = useState([])
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const [enqRes, analyticsRes] = await Promise.all([api.getAllEnquiries(filterStatus?`?status=${filterStatus}`:''), api.getAnalytics()])
      setEnquiries(enqRes.data); setAnalytics(analyticsRes.data)
    } catch (err) { if (err.message?.includes('401')) { localStorage.removeItem('vrm_admin_token'); setAuthed(false) } }
    finally { setLoading(false) }
  }

  useEffect(() => { if (authed) loadData() }, [authed, filterStatus])
  const handleStatusChange = async (id, body) => { await api.updateEnquiryStatus(id, body); loadData() }
  const logout = () => { localStorage.removeItem('vrm_admin_token'); setAuthed(false) }

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />

  return (
    <div className="min-h-screen" style={{ background:'#0f172a' }}>
      <div className="sticky top-0 z-50 px-6 h-16 flex items-center justify-between" style={{ background:'rgba(15,23,42,0.95)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(37,99,235,0.15)' }}>
        <div className="font-display font-black text-2xl" style={{ color:'#2563eb' }}>VRM Admin</div>
        <div className="flex gap-3">
          <button onClick={loadData} className="text-xs px-3 py-1.5 rounded-lg" style={{ color:'#94a3b8' }}>🔄 Refresh</button>
          <button onClick={logout} className="text-xs px-3 py-1.5 rounded-lg" style={{ background:'rgba(239,68,68,0.1)',color:'#f87171',border:'1px solid rgba(239,68,68,0.2)' }}>Logout</button>
        </div>
      </div>
      <div className="px-6 py-8 max-w-[1400px] mx-auto">
        {analytics && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Enquiries" value={analytics.totalEnquiries} color="#2563eb" icon="📋"/>
            <StatCard label="New Enquiries" value={analytics.newEnquiries} color="#f59e0b" icon="🆕"/>
            <StatCard label="Converted" value={analytics.converted} color="#059669" icon="✅"/>
            <StatCard label="Top Product" value={analytics.topProducts?.[0]?._id||'—'} color="#8b5cf6" icon="🏆"/>
          </div>
        )}
        <div className="rounded-2xl overflow-hidden" style={{ background:'rgba(30,41,59,0.6)',border:'1px solid rgba(37,99,235,0.15)' }}>
          <div className="flex items-center justify-between px-6 py-4 flex-wrap gap-3" style={{ borderBottom:'1px solid rgba(37,99,235,0.1)' }}>
            <h3 className="font-bold font-display text-xl" style={{ color:'#e2e8f0' }}>All Enquiries</h3>
            <div className="flex gap-2 flex-wrap">
              {['', ...STATUS_OPTIONS].map(s => (
                <button key={s} onClick={() => setFilterStatus(s)} className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                  style={{ background:filterStatus===s?(s?STATUS_BG[s]:'rgba(37,99,235,0.15)'):'transparent', color:filterStatus===s?(s?STATUS_COLORS[s]:'#2563eb'):'#94a3b8', border:`1px solid ${filterStatus===s?(s?STATUS_COLORS[s]+'40':'rgba(37,99,235,0.3)'):'rgba(37,99,235,0.1)'}` }}>
                  {s?`${STATUS_ICONS[s]} ${s}`:'All'}
                </button>
              ))}
            </div>
          </div>
          {loading ? <div className="py-16 text-center" style={{ color:'#94a3b8' }}>Loading...</div>
          : enquiries.length === 0 ? <div className="py-16 text-center"><div className="text-4xl mb-3">📋</div><div style={{ color:'#94a3b8' }}>No enquiries yet</div></div>
          : <div className="overflow-x-auto"><table className="w-full">
              <thead><tr style={{ borderBottom:'1px solid rgba(37,99,235,0.1)' }}>
                {['ID','Contact','Hospital','Phone','Products','Status','Date','Action'].map(h=>(
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest" style={{ color:'#94a3b8' }}>{h}</th>
                ))}
              </tr></thead>
              <tbody>{enquiries.map(enq=><EnquiryRow key={enq._id} enquiry={enq} onStatusChange={handleStatusChange}/>)}</tbody>
            </table></div>}
        </div>
      </div>
    </div>
  )
}
