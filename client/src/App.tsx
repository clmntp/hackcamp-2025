import { useState } from 'react'
import './App.css'

type NewStudent = {
  firstName: string
  lastName: string
  email: string
  password: string
}

type NewClub = {
  name: string
  email: string
  password: string
}

function App() {
  const API_BASE =
    (import.meta as any)?.env?.VITE_API_URL || 'http://localhost:5174'
  const [form, setForm] = useState<NewStudent>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [clubForm, setClubForm] = useState<NewClub>({
    name: '',
    email: '',
    password: '',
  })
  const [created, setCreated] = useState<any | null>(null)
  const [createdClub, setCreatedClub] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [clubError, setClubError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingClub, setLoadingClub] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Failed to create student')
      }
      const stu = await res.json()
      setCreated(stu)
    } catch (err: any) {
      setError(err?.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  async function handleClubSubmit(e: React.FormEvent) {
    e.preventDefault()
    setClubError(null)
    setLoadingClub(true)
    try {
      const res = await fetch(`${API_BASE}/api/clubs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clubForm),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Failed to create club')
      }
      const club = await res.json()
      setCreatedClub(club)
    } catch (err: any) {
      setClubError(err?.message || 'Unknown error')
    } finally {
      setLoadingClub(false)
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', padding: '1rem' }}>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
        <input
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
        />
        <input
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Create account'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {created && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Created Student</h2>
          <pre style={{ background: '#f4f4f4', padding: '0.75rem' }}>
{JSON.stringify({
  firstName: created.firstName,
  lastName: created.lastName,
  email: created.email,
  password: created.password,
}, null, 2)}
          </pre>
        </div>
      )}

      <hr style={{ margin: '2rem 0' }} />

      <h1>Create club</h1>
      <form onSubmit={handleClubSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
        <input
          placeholder="Club name"
          value={clubForm.name}
          onChange={(e) => setClubForm({ ...clubForm, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Contact email"
          value={clubForm.email}
          onChange={(e) => setClubForm({ ...clubForm, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={clubForm.password}
          onChange={(e) => setClubForm({ ...clubForm, password: e.target.value })}
        />
        <button type="submit" disabled={loadingClub}>
          {loadingClub ? 'Submitting…' : 'Create club'}
        </button>
      </form>

      {clubError && <p style={{ color: 'red' }}>{clubError}</p>}

      {createdClub && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Created Club</h2>
          <pre style={{ background: '#f4f4f4', padding: '0.75rem' }}>
{JSON.stringify({
  name: createdClub.name,
  email: createdClub?.contact?.email,
  password: createdClub.password,
}, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default App
