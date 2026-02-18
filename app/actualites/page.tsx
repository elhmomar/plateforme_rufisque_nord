const actualites = [
  {
    id: 1,
    tag: 'Infrastructure',
    tagColor: 'green',
    icon: '🛣',
    date: '12 Février 2026',
    titre: "Lancement de 900 millions FCFA de travaux de voirie",
    contenu: "Le maire de Rufisque Nord a lancé un vaste programme de construction de voiries et d'assainissement pour améliorer la mobilité urbaine. Ces travaux, financés à hauteur de 900 millions de francs CFA, s'inscrivent dans le Plan de Développement Urbain Durable (PDUD). Les quartiers de Dangou, Darou Rahmane et les zones d'extension bénéficieront en priorité de ces aménagements qui incluent l'éclairage public et le pavage des rues.",
  },
  {
    id: 2,
    tag: 'PROMOVILLES',
    tagColor: 'gold',
    icon: '🏗',
    date: '8 Février 2026',
    titre: "PROMOVILLES : 14,5 km de voiries modernisées",
    contenu: "Le Programme de Modernisation des Villes avance dans les communes de Rufisque Nord, Est et Ouest. Ce sont déjà 14,5 km de voiries assainies et éclairées qui ont été réalisées, ainsi que 23 397 m² de pavage. Ces travaux visent à réduire les risques d'inondation et à faciliter la mobilité quotidienne des habitants dans tous les quartiers.",
  },
  {
    id: 3,
    tag: 'Urbanisme',
    tagColor: 'blue',
    icon: '🏘',
    date: '3 Février 2026',
    titre: "Restructuration du quartier Darou Rahmane : un projet de 5 milliards FCFA",
    contenu: "Le quartier Darou Rahmane, situé au nord de Rufisque, fait l'objet d'un ambitieux projet de restructuration d'un coût prévisionnel de 5 milliards de FCFA sur la période 2023-2026. Ce programme vise le réaménagement complet, l'équipement en infrastructures de base et la régularisation foncière pour offrir un cadre de vie digne à tous les résidents.",
  },
  {
    id: 4,
    tag: 'Social',
    tagColor: 'red',
    icon: '🤝',
    date: '28 Janvier 2026',
    titre: "Le programme PASIC encourage l'engagement citoyen",
    contenu: "Le Programme d'Appui et de Suivi des Initiatives Communautaires (PASIC) dynamise l'engagement citoyen à Rufisque Nord. Les associations locales sont accompagnées dans la résolution des problèmes environnementaux et économiques de leur quartier. Un appel à projets communautaires est ouvert pour les initiatives portant sur l'assainissement, le reboisement et le soutien aux jeunes.",
  },
  {
    id: 5,
    tag: 'Planification',
    tagColor: 'gold',
    icon: '📊',
    date: '20 Janvier 2026',
    titre: "Dangou Nord adopte son Document d'Orientation Stratégique 2025-2035",
    contenu: "Le quartier de Dangou Nord s'est doté d'un Document d'Orientation Stratégique (DOS) pour la décennie 2025-2035. Ce document fixe les priorités de développement : réfection de la route du cimetière, extension du cimetière, amélioration des réseaux d'eau et d'assainissement, et création d'espaces verts pour les habitants du quartier.",
  },
  {
    id: 6,
    tag: 'Environnement',
    tagColor: 'green',
    icon: '🌊',
    date: '15 Janvier 2026',
    titre: "Programme PALM : extension de l'assainissement à tous les quartiers",
    contenu: "Le Programme d'Assainissement Liquide Municipal (PALM) poursuit son déploiement pour étendre la couverture d'assainissement à l'ensemble des quartiers de Rufisque. La commune investit dans des canaux de drainage et des systèmes de collecte pour protéger les populations contre les inondations récurrentes lors de l'hivernage.",
  },
]

export default function Actualites() {
  return (
    <>
      <div className="page-header">
        <div className="page-breadcrumb">
          <a href="/">Accueil</a>
          <span>/</span>
          <span style={{ color: 'var(--gold-400)' }}>Actualités</span>
        </div>
        <h1>Actualités de la Commune</h1>
        <p>Toute l&#39;information officielle de Rufisque Nord — projets, événements et décisions du conseil municipal.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {actualites.map(a => (
              <div key={a.id} className="news-card">
                <div className="news-card-image">
                  <span className={`news-card-tag ${a.tagColor}`}>{a.tag}</span>
                  <span className="news-visual-icon">{a.icon}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-card-date">{a.date}</div>
                  <h3>{a.titre}</h3>
                  <p>{a.contenu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
