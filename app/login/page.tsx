'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (password === 'admin123') {
        router.push('/dashboard')
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.')
        setLoading(false)
      }
    }, 800)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card-header">
          <div className="login-logo">🏛</div>
          <h2>Espace Administration</h2>
          <p>Mairie de Rufisque Nord</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-input"
              placeholder="admin@mairierufisquenord.sn"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(231, 76, 60, 0.08)',
              border: '1px solid rgba(231, 76, 60, 0.2)',
              padding: '10px 14px',
              borderRadius: 8,
              fontSize: '0.85rem',
              color: '#c0392b',
              marginBottom: '1rem',
            }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? '⏳ Connexion en cours...' : '🔐 Se connecter'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          fontSize: '0.82rem',
          color: 'var(--gray-400)',
        }}>
          <a href="/" style={{ color: 'var(--navy-500)', fontWeight: 600 }}>
            ← Retour au site
          </a>
        </div>
      </div>
    </div>
  )
}
