'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/demarches', label: 'Démarches' },
    { href: '/projets', label: 'Projets' },
    { href: '/contact', label: 'Contact' },
  ]

  const isLoginOrDashboard = pathname === '/login' || pathname === '/dashboard'
  if (isLoginOrDashboard) return null

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="navbar-brand">
        <div className="navbar-logo">🏛</div>
        <div>
          <div className="navbar-title">
            Mairie de <span>Rufisque Nord</span>
          </div>
          <div className="navbar-subtitle">République du Sénégal</div>
        </div>
      </a>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`navbar-link ${pathname === l.href ? 'active' : ''}`}
          >
            {l.label}
          </a>
        ))}
        <a href="/login" className="navbar-link navbar-cta">
          Espace Admin
        </a>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

function Footer() {
  const pathname = usePathname()
  const isLoginOrDashboard = pathname === '/login' || pathname === '/dashboard'
  if (isLoginOrDashboard) return null

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <div className="footer-brand-icon">🏛</div>
            <div className="footer-brand-text">
              <h4>Mairie de Rufisque Nord</h4>
              <span>Commune d'Arrondissement</span>
            </div>
          </div>
          <p className="footer-description">
            La Mairie de Rufisque Nord s'engage au service de ses citoyens avec transparence,
            modernité et proximité. Ensemble, construisons une commune exemplaire.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100083041.." target="_blank" rel="noopener noreferrer" title="Facebook">📘</a>
            <a href="#" title="Twitter/X">🐦</a>
            <a href="#" title="YouTube">🎬</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>

        <div>
          <h5>Navigation</h5>
          <ul className="footer-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/actualites">Actualités</a></li>
            <li><a href="/demarches">Démarches</a></li>
            <li><a href="/projets">Projets</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5>Services</h5>
          <ul className="footer-links">
            <li><a href="/demarches">État Civil</a></li>
            <li><a href="/demarches">Urbanisme</a></li>
            <li><a href="/demarches">Légalisation</a></li>
            <li><a href="/demarches">Certificats</a></li>
            <li><a href="/login">Espace Admin</a></li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span>Hôtel de Ville, Rufisque Nord,<br />Région de Dakar, Sénégal</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <span>+221 33 836 XX XX</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📧</span>
            <span>contact@mairierufisquenord.sn</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">🕐</span>
            <span>Lundi - Vendredi: 8h00 - 17h00</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Mairie de Rufisque Nord. Tous droits réservés.</span>
        <div className="footer-flag">
          <div className="footer-flag-bar" style={{ background: '#00853f' }} />
          <div className="footer-flag-bar" style={{ background: '#fdef42' }} />
          <div className="footer-flag-bar" style={{ background: '#e31b23' }} />
          <span style={{ marginLeft: 4 }}>République du Sénégal</span>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Plateforme digitale officielle de la Mairie de Rufisque Nord — Services, actualités, démarches administratives et projets de développement." />
        <title>Mairie de Rufisque Nord — Plateforme Digitale Officielle</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛</text></svg>" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
