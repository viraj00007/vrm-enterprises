const BASE = 'https://vrm-enterprises.onrender.com/api'

const request = async (method, path, body = null, auth = false) => {
  const headers = { 'Content-Type': 'application/json' }
  if (auth) headers.Authorization = `Bearer ${localStorage.getItem('vrm_admin_token')}`
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

export const api = {
  submitEnquiry: async (body) => {
    const data = await request('POST', '/enquiries', body)
    return { data: data.data }
  },

  adminLogin: async (body) => {
    const data = await request('POST', '/auth/login', body)
    if (!data.success) throw new Error(data.message || 'Invalid credentials')
    return { token: data.token }
  },

  getAllEnquiries: async (params) => {
    const data = await request('GET', `/enquiries${params || ''}`, null, true)
    return { data: data.data }
  },

  updateEnquiryStatus: async (id, body) => {
    const data = await request('PUT', `/enquiries/${id}/status`, body, true)
    return { data: data.data }
  },

  getAnalytics: async () => {
    const data = await request('GET', '/analytics', null, true)
    return { data: data.data ?? data }
  },

  getProducts: async () => {
    const data = await request('GET', '/products')
    return { data: data.data }
  },
}
