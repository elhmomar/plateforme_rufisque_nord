'use client'
import { useEffect, useState } from 'react'

/* ---- Animated Counter ---- */
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])
  return <>{count.toLocaleString('fr-FR')}{suffix}</>
}

/* ---- Data ---- */
const services = [
  { icon: '📋', title: 'État Civil', desc: "Actes de naissance, mariage, décès. Obtenez vos documents officiels rapidement.", color: 'blue', href: '/demarches' },
  { icon: '🏗', title: 'Urbanisme', desc: "Permis de construire, autorisations d'occupation, plans cadastraux.", color: 'green', href: '/demarches' },
  { icon: '📜', title: 'Légalisation', desc: 'Légalisation de documents, certifications conformes et authentifications.', color: 'gold', href: '/demarches' },
  { icon: '🏠', title: 'Certificats', desc: 'Certificats de résidence, de domicile et attestations diverses.', color: 'purple', href: '/demarches' },
  { icon: '🌊', title: 'Assainissement', desc: "Programme PALM pour l'extension de la couverture en assainissement.", color: 'teal', href: '/projets' },
  { icon: '🤝', title: 'Action Sociale', desc: "Soutien communautaire, initiatives PASIC et aide aux personnes vulnérables.", color: 'red', href: '/projets' },
]

const actualites = [
  {
    id: 1,
    tag: 'Infrastructure',
    tagColor: 'green',
    icon: '🛣',
    date: '12 Février 2026',
    titre: "Travaux de voirie et d'assainissement à Rufisque Nord",
    contenu: "Dans le cadre du PROMOVILLES, 14,5 km de voiries assainies et \u00e9clair\u00e9es sont r\u00e9alis\u00e9s pour am\u00e9liorer la mobilit\u00e9 urbaine et r\u00e9duire les risques d'inondation.",
  },
  {
    id: 2,
    tag: 'Développement',
    tagColor: 'gold',
    icon: '🏘',
    date: '8 Février 2026',
    titre: 'Restructuration du quartier Darou Rahmane',
    contenu: "Le projet de réaménagement de 5 milliards de FCFA avance avec la régularisation foncière et l'équipement du quartier nord de Rufisque.",
  },
  {
    id: 3,
    tag: 'Social',
    tagColor: 'blue',
    icon: '👥',
    date: '3 Février 2026',
    titre: 'Engagement citoyen : le programme PASIC',
    contenu: "Le Programme d'Appui aux Initiatives Communautaires encourage les associations locales à résoudre les défis environnementaux et économiques.",
  },
]

const projets = [
  { title: 'PROMOVILLES', desc: "Modernisation des voiries, assainissement et éclairage dans les quartiers d'extension.", progress: 65, status: 'active', budget: '900M FCFA' },
  { title: 'Restructuration Darou Rahmane', desc: "Réaménagement complet, équipement et régularisation foncière du quartier.", progress: 35, status: 'active', budget: '5Mds FCFA' },
  { title: 'Dangou Nord — DOS 2025-2035', desc: "Document d'orientation stratégique pour un développement harmonieux et durable.", progress: 20, status: 'upcoming', budget: '' },
  { title: 'Stade Multifonctionnel', desc: "Construction d'un complexe sportif moderne pour la jeunesse de Rufisque.", progress: 10, status: 'upcoming', budget: '' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-grid-overlay" />
        <div className="hero-floating-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Plateforme Digitale Officielle
          </div>
          <h1>
            Commune de<br />
            <span className="highlight">Rufisque Nord</span>
          </h1>
          <p className="hero-description">
            Au cœur de la région de Dakar, la Mairie de Rufisque Nord s'engage pour la modernisation
            des services publics, le développement durable et le bien-être de ses citoyens.
          </p>
          <div className="hero-buttons">
            <a href="/demarches" className="btn btn-primary">
              📋 Démarches en ligne
            </a>
            <a href="/actualites" className="btn btn-secondary">
              📰 Voir les actualités
            </a>
          </div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{mounted ? <AnimatedCounter end={120000} suffix="+" /> : '...'}</div>
            <div className="stat-label">Habitants</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏘</div>
            <div className="stat-number">{mounted ? <AnimatedCounter end={28} /> : '...'}</div>
            <div className="stat-label">Quartiers</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏗</div>
            <div className="stat-number">{mounted ? <AnimatedCounter end={12} /> : '...'}</div>
            <div className="stat-label">Projets en cours</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📋</div>
            <div className="stat-number">{mounted ? <AnimatedCounter end={15000} suffix="+" /> : '...'}</div>
            <div className="stat-label">Actes délivrés / an</div>
          </div>
        </div>
      </div>

      {/* ====== SERVICES ====== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Nos Services</div>
            <h2 className="section-title">Au service de chaque citoyen</h2>
            <p className="section-subtitle">
              Des services administratifs modernes et accessibles pour simplifier
              vos démarches au quotidien.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <a href={s.href} key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`service-icon ${s.color}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card-arrow">En savoir plus →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ACTUALITÉS ====== */}
      <section className="section section-gray" id="actualites">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Actualités</div>
            <h2 className="section-title">Dernières nouvelles</h2>
            <p className="section-subtitle">
              Restez informés des projets, événements et décisions
              de votre commune.
            </p>
          </div>
          <div className="news-grid">
            {actualites.map(a => (
              <a href="/actualites" key={a.id} className="news-card">
                <div className="news-card-image">
                  <span className={`news-card-tag ${a.tagColor}`}>{a.tag}</span>
                  <span className="news-visual-icon">{a.icon}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-card-date">{a.date}</div>
                  <h3>{a.titre}</h3>
                  <p>{a.contenu}</p>
                  <div className="news-card-link">Lire la suite →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROJETS ====== */}
      <section className="section section-dark" id="projets">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Projets Majeurs</div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Construire l'avenir de Rufisque Nord
            </h2>
            <p className="section-subtitle">
              Des investissements structurants pour moderniser les infrastructures
              et améliorer le cadre de vie.
            </p>
          </div>
          <div className="projects-grid">
            {projets.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-card-header">
                  <div className={`project-status ${p.status}`}>
                    <span className="project-status-dot" />
                    {p.status === 'active' ? 'En cours' : p.status === 'completed' ? 'Terminé' : 'À venir'}
                  </div>
                  {p.budget && <span style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700 }}>{p.budget}</span>}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-progress">
                  <div className="project-progress-bar" style={{ width: mounted ? `${p.progress}%` : '0%' }} />
                </div>
                <div className="project-progress-label">
                  <span>Avancement</span>
                  <span>{p.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FACEBOOK / COMMUNAUTÉ ====== */}
      <section className="section fb-section" id="communaute">
        <div className="container">
          <div className="fb-section-content">
            <div className="fb-info">
              <div className="section-label" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                Suivez-nous
              </div>
              <h3>Rejoignez notre communauté en ligne</h3>
              <p>
                Suivez l'actualité de la commune de Rufisque Nord sur nos réseaux sociaux.
                Événements culturels, travaux d'infrastructure, conseils municipaux —
                soyez au cœur de l'information.
              </p>
              <div className="fb-stats">
                <div className="fb-stat">
                  <div className="fb-stat-number">5.2K</div>
                  <div className="fb-stat-label">Abonnés Facebook</div>
                </div>
                <div className="fb-stat">
                  <div className="fb-stat-number">320+</div>
                  <div className="fb-stat-label">Publications</div>
                </div>
                <div className="fb-stat">
                  <div className="fb-stat-number">98%</div>
                  <div className="fb-stat-label">Taux de réponse</div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=100083041"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📘 Suivre sur Facebook
              </a>
            </div>

            <div className="fb-embed-wrapper">
              <div className="fb-embed-placeholder">
                <div className="fb-icon">📘</div>
                <h4>Commune de Rufisque Nord</h4>
                <p>
                  Retrouvez nos dernières publications, photos des événements
                  et annonces officielles.
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=100083041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                  style={{ marginTop: 8 }}
                >
                  Visiter notre page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section className="section section-dark" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Une question ? Un besoin ?
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Notre équipe est à votre disposition pour vous accompagner
            dans toutes vos démarches administratives.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">📞 Nous contacter</a>
            <a href="/demarches" className="btn btn-secondary">📋 Voir les démarches</a>
          </div>
        </div>
      </section>
    </>
  )
}
