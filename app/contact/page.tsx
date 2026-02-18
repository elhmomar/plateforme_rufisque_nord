'use client'
import { useState } from 'react'

export default function Contact() {
    const [sent, setSent] = useState(false)
    const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <a href="/">Accueil</a>
                    <span>/</span>
                    <span style={{ color: 'var(--gold-400)' }}>Contact</span>
                </div>
                <h1>Contactez-nous</h1>
                <p>Notre équipe est à votre écoute pour toute question ou demande.</p>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                        {/* Formulaire */}
                        <div style={{
                            background: 'white',
                            borderRadius: 16,
                            padding: '2.5rem',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                            border: '1px solid var(--gray-100)',
                        }}>
                            {sent ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message envoyé !</h3>
                                    <p style={{ color: 'var(--gray-500)' }}>
                                        Nous vous répondrons dans les meilleurs délais.
                                    </p>
                                    <button
                                        onClick={() => { setSent(false); setFormData({ nom: '', email: '', sujet: '', message: '' }) }}
                                        className="btn btn-primary"
                                        style={{ marginTop: '1.5rem' }}
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                                        📩 Envoyez-nous un message
                                    </h3>
                                    <div className="form-group">
                                        <label className="form-label">Nom complet</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Votre nom"
                                            required
                                            value={formData.nom}
                                            onChange={e => setFormData({ ...formData, nom: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Adresse e-mail</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="votre@email.com"
                                            required
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Sujet</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Objet de votre demande"
                                            required
                                            value={formData.sujet}
                                            onChange={e => setFormData({ ...formData, sujet: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            className="form-input"
                                            placeholder="Décrivez votre demande..."
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            style={{ resize: 'vertical' }}
                                        />
                                    </div>
                                    <button type="submit" className="btn-login">
                                        📤 Envoyer le message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Infos de contact */}
                        <div>
                            <div style={{
                                background: 'linear-gradient(135deg, var(--navy-900), var(--navy-700))',
                                borderRadius: 16,
                                padding: '2.5rem',
                                color: 'white',
                                marginBottom: '1.5rem',
                            }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                                    Informations de contact
                                </h3>
                                {[
                                    { icon: '📍', label: 'Adresse', value: 'Hôtel de Ville, Rufisque Nord\nRégion de Dakar, Sénégal' },
                                    { icon: '📞', label: 'Téléphone', value: '+221 33 836 XX XX' },
                                    { icon: '📧', label: 'E-mail', value: 'contact@mairierufisquenord.sn' },
                                    { icon: '🕐', label: 'Horaires', value: 'Lundi - Vendredi : 8h00 - 17h00\nSamedi : 9h00 - 13h00' },
                                ].map((c, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 12, marginBottom: '1.2rem' }}>
                                        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{c.icon}</span>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 2 }}>{c.label}</div>
                                            <div style={{ fontSize: '0.92rem', whiteSpace: 'pre-line', color: 'var(--gray-300)' }}>{c.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div style={{
                                background: 'var(--gray-100)',
                                borderRadius: 16,
                                height: 220,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                gap: 8,
                                border: '1px solid var(--gray-200)',
                            }}>
                                <span style={{ fontSize: '2.5rem' }}>🗺</span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--gray-500)', fontWeight: 600 }}>
                                    Rufisque Nord, Dakar, Sénégal
                                </span>
                                <a
                                    href="https://maps.google.com/?q=Rufisque+Nord+Dakar+Senegal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '0.85rem', color: 'var(--navy-500)', fontWeight: 600 }}
                                >
                                    📍 Voir sur Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
