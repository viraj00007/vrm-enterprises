const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const req = async (path, options = {}) => {
  const token = localStorage.getItem('vrm_admin_token')
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

export const api = {
  getProducts: () => req('/products'),
  submitEnquiry: (body) => req('/enquiries', { method: 'POST', body: JSON.stringify(body) }),
  adminLogin: (body) => req('/auth/login', { method: 'POST', body: JSON.stringify(body) }),
  getAllEnquiries: (params) => req(`/enquiries${params || ''}`),
  updateEnquiryStatus: (id, body) => req(`/enquiries/${id}/status`, { method: 'PUT', body: JSON.stringify(body) }),
  getAnalytics: () => req('/analytics'),
}
