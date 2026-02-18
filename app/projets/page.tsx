'use client'
import { useEffect, useState } from 'react'

const projets = [
    {
        title: 'PROMOVILLES — Modernisation des Voiries',
        desc: "Programme national de modernisation des villes avec plus de 300 km de voiries prévues. À Rufisque Nord, 14,5 km de voiries assainies et éclairées ont été réalisées, avec 23 397 m² de pavage pour réduire les inondations et améliorer la mobilité urbaine.",
        progress: 65,
        status: 'active',
        budget: '900M FCFA',
        periode: '2023 - 2027',
        icon: '🛣',
    },
    {
        title: 'Restructuration du Quartier Darou Rahmane',
        desc: "Projet ambitieux de réaménagement, équipement et régularisation foncière du quartier nord de Rufisque. Objectif : offrir un cadre de vie digne avec des infrastructures de base à tous les résidents.",
        progress: 35,
        status: 'active',
        budget: '5 Milliards FCFA',
        periode: '2023 - 2026',
        icon: '🏘',
    },
    {
        title: "Programme d'Assainissement PALM",
        desc: "Extension de la couverture d'assainissement liquide à tous les quartiers de Rufisque. Construction de canaux de drainage et systèmes de collecte pour protéger les populations contre les inondations en hivernage.",
        progress: 45,
        status: 'active',
        budget: '',
        periode: '2024 - 2028',
        icon: '🌊',
    },
    {
        title: 'DOS Dangou Nord 2025-2035',
        desc: "Document d'orientation stratégique pour un développement harmonieux et durable du quartier Dangou Nord. Priorités : réfection routière, extension du cimetière, réseaux d'eau et création d'espaces verts.",
        progress: 20,
        status: 'upcoming',
        budget: '',
        periode: '2025 - 2035',
        icon: '📊',
    },
    {
        title: 'PASIC — Appui aux Initiatives Communautaires',
        desc: "Accompagnement des associations locales dans la résolution des défis environnementaux et économiques. Soutien à l'engagement citoyen avec des appels à projets communautaires.",
        progress: 50,
        status: 'active',
        budget: '',
        periode: '2024 - 2026',
        icon: '🤝',
    },
    {
        title: 'Stade Multifonctionnel de Rufisque',
        desc: "Construction d'un complexe sportif moderne pour la jeunesse. Le projet inclut un terrain de football, des pistes d'athlétisme, tribunes couvertes et vestiaires aux normes internationales.",
        progress: 10,
        status: 'upcoming',
        budget: '',
        periode: '2026 - 2029',
        icon: '🏟',
    },
    {
        title: 'Maison des Arts de Rufisque',
        desc: "Espace culturel dédié à la promotion des arts locaux, artisanat et patrimoine rufisquois. Un lieu de formation, d'exposition et de spectacle pour valoriser la richesse culturelle de la commune.",
        progress: 5,
        status: 'upcoming',
        budget: '',
        periode: '2027 - 2030',
        icon: '🎭',
    },
]

export default function Projets() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <a href="/">Accueil</a>
                    <span>/</span>
                    <span style={{ color: 'var(--gold-400)' }}>Projets de Développement</span>
                </div>
                <h1>Projets de Développement</h1>
                <p>Les grands chantiers qui façonnent l'avenir de Rufisque Nord.</p>
            </div>

            <section className="section section-dark">
                <div className="container">
                    <div className="projects-grid">
                        {projets.map((p, i) => (
                            <div key={i} className="project-card">
                                <div className="project-card-header">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                                        <div className={`project-status ${p.status}`}>
                                            <span className="project-status-dot" />
                                            {p.status === 'active' ? 'En cours' : 'À venir'}
                                        </div>
                                    </div>
                                    {p.budget && (
                                        <span style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700 }}>
                                            {p.budget}
                                        </span>
                                    )}
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', marginBottom: '0.8rem' }}>
                                    📅 Période : {p.periode}
                                </div>
                                <div className="project-progress">
                                    <div
                                        className="project-progress-bar"
                                        style={{ width: mounted ? `${p.progress}%` : '0%' }}
                                    />
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
        </>
    )
}
