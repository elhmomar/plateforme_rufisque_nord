'use client'
import { useState } from 'react'

const statsData = [
  { icon: '📋', label: 'Demandes en cours', value: 47, color: 'blue' },
  { icon: '✅', label: 'Traitées ce mois', value: 312, color: 'green' },
  { icon: '👥', label: 'Visiteurs du site', value: 1843, color: 'gold' },
  { icon: '⚠️', label: 'En attente', value: 8, color: 'red' },
]

const demandesRecentes = [
  { dot: 'green', text: 'Acte de naissance — Fatou DIOP', meta: 'Il y a 2h' },
  { dot: 'gold', text: 'Permis de construire — Ibrahima FALL', meta: 'Il y a 4h' },
  { dot: 'blue', text: 'Certificat de résidence — Moussa NDIAYE', meta: 'Hier' },
  { dot: 'green', text: 'Légalisation — Awa GUEYE', meta: 'Hier' },
  { dot: 'red', text: 'Autorisation occupation — Société TOUBA BTP', meta: 'Il y a 2 jours' },
  { dot: 'gold', text: 'Acte de mariage — A. SECK & M. BA', meta: 'Il y a 3 jours' },
]

const activitesRecentes = [
  { dot: 'blue', text: 'Conseil municipal — Approbation budget 2026', meta: '10 Fév' },
  { dot: 'green', text: 'Visite de chantier PROMOVILLES — Dangou', meta: '8 Fév' },
  { dot: 'gold', text: 'Séance de travail — Commission urbanisme', meta: '5 Fév' },
  { dot: 'green', text: 'Lancement programme PASIC — Phase 2', meta: '1 Fév' },
  { dot: 'red', text: 'Alerte inondation — Quartiers nord', meta: '28 Jan' },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'demandes' | 'actualites' | 'gestion'>('demandes')

  return (
    <div className="dashboard-layout">
      <div className="dashboard-header">
        <div className="dashboard-header-inner">
          <div className="dashboard-welcome">
            <h2>Tableau de bord Administrateur</h2>
            <p>Bienvenue, M. le Maire. Voici l'état de votre commune.</p>
          </div>
          <a href="/" className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            ← Retour au site
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        {statsData.map((s, i) => (
          <div key={i} className="dashboard-stat-card">
            <div className={`dashboard-stat-icon ${s.color}`}>{s.icon}</div>
            <div>
              <div className="dashboard-stat-value">{s.value}</div>
              <div className="dashboard-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="dashboard-content">
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <div style={{ display: 'flex', gap: 8 }}>
              {(['demandes', 'actualites', 'gestion'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    background: activeTab === tab ? 'var(--navy-800)' : 'var(--gray-100)',
                    color: activeTab === tab ? 'white' : 'var(--gray-600)',
                    transition: 'all 200ms ease',
                  }}
                >
                  {tab === 'demandes' ? '📋 Demandes' : tab === 'actualites' ? '📰 Actualités' : '⚙️ Gestion'}
                </button>
              ))}
            </div>
          </div>
          <div className="dashboard-panel-body">
            {activeTab === 'demandes' && demandesRecentes.map((d, i) => (
              <div key={i} className="dashboard-list-item">
                <div className={`dashboard-list-dot ${d.dot}`} />
                <span className="dashboard-list-text">{d.text}</span>
                <span className="dashboard-list-meta">{d.meta}</span>
              </div>
            ))}
            {activeTab === 'actualites' && (
              <div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Gérez les actualités publiées sur le site de la commune.
                </p>
                {[
                  'Lancement de 900M FCFA de travaux de voirie',
                  'PROMOVILLES : 14,5 km de voiries modernisées',
                  'Restructuration du quartier Darou Rahmane',
                  'Le programme PASIC encourage l\'engagement citoyen',
                ].map((t, i) => (
                  <div key={i} className="dashboard-list-item">
                    <div className={`dashboard-list-dot ${['green', 'gold', 'blue', 'green'][i]}`} />
                    <span className="dashboard-list-text">{t}</span>
                    <span className="dashboard-list-meta" style={{ color: 'var(--green-500)', cursor: 'pointer' }}>Publié ✓</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'gestion' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { icon: '👥', label: 'Utilisateurs', count: 24 },
                  { icon: '📰', label: 'Actualités', count: 6 },
                  { icon: '🏗', label: 'Projets', count: 12 },
                  { icon: '📋', label: 'Formulaires', count: 8 },
                ].map((g, i) => (
                  <div key={i} style={{
                    padding: '1.2rem',
                    background: 'var(--gray-50)',
                    borderRadius: 12,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{g.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>{g.count}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)' }}>{g.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            📅 Activités récentes
          </div>
          <div className="dashboard-panel-body">
            {activitesRecentes.map((a, i) => (
              <div key={i} className="dashboard-list-item">
                <div className={`dashboard-list-dot ${a.dot}`} />
                <span className="dashboard-list-text">{a.text}</span>
                <span className="dashboard-list-meta">{a.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
