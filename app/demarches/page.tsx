const demarches = [
  {
    icon: '👶',
    titre: 'Acte de Naissance',
    desc: "Demande de copie intégrale ou d'extrait d'acte de naissance. Document indispensable pour toute démarche administrative.",
    delai: '24 - 48h',
    pieces: '2 pièces',
    cout: 'Gratuit',
  },
  {
    icon: '💍',
    titre: 'Acte de Mariage',
    desc: "Célébration de mariage civil et délivrance de l'acte. Constitution du dossier, publication des bans et cérémonie.",
    delai: '2 semaines',
    pieces: '6 pièces',
    cout: 'Variable',
  },
  {
    icon: '🏠',
    titre: 'Certificat de Résidence',
    desc: "Attestation officielle de domicile dans la commune de Rufisque Nord. Nécessaire pour les inscriptions scolaires et démarches bancaires.",
    delai: '24h',
    pieces: '3 pièces',
    cout: 'Gratuit',
  },
  {
    icon: '📜',
    titre: 'Légalisation de Document',
    desc: "Certification conforme de documents officiels. Légalisation de signatures, copies certifiées et authentifications.",
    delai: 'Immédiat',
    pieces: '1 pièce',
    cout: '200 FCFA',
  },
  {
    icon: '🏗',
    titre: "Permis de Construire",
    desc: "Demande d'autorisation de construction sur le territoire de la commune. Étude du dossier par le service d'urbanisme.",
    delai: '1 - 3 mois',
    pieces: '8 pièces',
    cout: 'Variable',
  },
  {
    icon: '📊',
    titre: "Certificat d'Inscription au Rôle",
    desc: "Attestation de contribution fiscale locale. Document requis pour les marchés publics et certaines procédures administratives.",
    delai: '48h',
    pieces: '2 pièces',
    cout: 'Gratuit',
  },
  {
    icon: '⚰️',
    titre: 'Acte de Décès',
    desc: "Déclaration et délivrance d'acte de décès. Service disponible dans les 24h suivant la déclaration au service d'état civil.",
    delai: '24h',
    pieces: '3 pièces',
    cout: 'Gratuit',
  },
  {
    icon: '🗺',
    titre: "Autorisation d'Occupation",
    desc: "Autorisation d'occuper un espace public ou commercial sur le territoire de la commune. Réglementée par arrêté municipal.",
    delai: '1 semaine',
    pieces: '4 pièces',
    cout: 'Variable',
  },
]

export default function Demarches() {
  return (
    <>
      <div className="page-header">
        <div className="page-breadcrumb">
          <a href="/">Accueil</a>
          <span>/</span>
          <span style={{ color: 'var(--gold-400)' }}>Démarches Administratives</span>
        </div>
        <h1>Démarches Administratives</h1>
        <p>Toutes les procédures administratives disponibles à la Mairie de Rufisque Nord.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="demarches-list">
            {demarches.map((d, i) => (
              <div key={i} className="demarche-card">
                <div className="demarche-icon">{d.icon}</div>
                <div className="demarche-info">
                  <h3>{d.titre}</h3>
                  <p>{d.desc}</p>
                  <div className="demarche-meta">
                    <div className="demarche-meta-item">
                      ⏱ <span>Délai : <strong>{d.delai}</strong></span>
                    </div>
                    <div className="demarche-meta-item">
                      📎 <span>Pièces : <strong>{d.pieces}</strong></span>
                    </div>
                    <div className="demarche-meta-item">
                      💰 <span>Coût : <strong>{d.cout}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
