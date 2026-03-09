import { ArrowUpRight, Phone, MapPin, Calendar, Lock, Sparkles, MessageCircle, Heart, User, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
    return (
        <div style={{ position: 'relative' }}>
            {/* Hidden FAQ Schema for Featured Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Cuál es el valor de la sesión de psicoterapia individual en Concepción?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "La sesión de psicoterapia individual tiene un valor de $65.000 (CLP). Es un servicio premium enfocado en alta exigencia y confidencialidad."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuál es el costo de la terapia de pareja en Concepción?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "La terapia matrimonial y de vínculos (terapia de pareja) tiene una inversión de $75.000 (CLP) por sesión, con dedicación exclusiva y metodologías clínicas rigurosas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Dónde atiende el Ps. Claudio Fernández en Concepción?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Atiende de forma presencial en dos sedes: Concepción Centro (Barros Arana 188) los días Lunes, Miércoles y Viernes, y en San Pedro de la Paz (Andalué) los días Martes."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Immersive Hero Section */}
            <section id="inicio" style={{
                position: 'relative',
                minHeight: '100vh',
                background: '#0a0b0a',
                padding: '12rem 4vw 6rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Immersive Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/abstract-hero.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5,
                    zIndex: 0,
                    filter: 'blur(100px) saturate(1.5)',
                    transform: 'scale(1.2)'
                }}></div>

                <div className="reveal" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                    <div className="bento-grid">

                        {/* Main Title Block */}
                        <div style={{ gridColumn: 'span 8', padding: '4rem 0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <span style={{ height: '1px', width: '40px', background: 'var(--accent-gold)' }}></span>
                                <span style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.75rem', fontWeight: 600 }}>Psicología de Alta Fidelidad</span>
                            </div>

                            <h1 className="instrument-serif" style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: 'white', lineHeight: '1', letterSpacing: '-0.03em' }}>
                                Ps. Claudio <br />
                                <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Fernández</span>
                            </h1>

                            <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                                <a href="https://wa.me/56978789839" className="magnetic-btn">
                                    Agendar Sesión <ArrowUpRight size={20} />
                                </a>
                                <div className="glass-modern" style={{ padding: '1.2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', borderColor: 'rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></div>
                                    <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 300 }}>DISPONIBILIDAD PARA ESTA SEMANA</span>
                                </div>
                            </div>
                        </div>

                        {/* Side Floating Badge */}
                        <div style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <div className="float" style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.02)',
                                backdropFilter: 'blur(20px)'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Sparkles color="var(--accent-gold)" size={40} style={{ marginBottom: '1rem' }} />
                                    <p className="instrument-serif" style={{ color: 'white', fontSize: '1.5rem', fontStyle: 'italic' }}>Discreción <br />Absoluta</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '4rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: 0.5
                }}>
                    <p style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.3em' }}>SCROLL</p>
                    <div style={{ height: '60px', width: '1px', background: 'linear-gradient(to bottom, white, transparent)' }}></div>
                </div>
            </section>

            {/* 2026 Bento Overview */}
            <section style={{ padding: '4vw', background: 'var(--bg-canvas)' }}>
                <div className="bento-grid">

                    {/* Card 1: The Portrait (Visual Excellence) */}
                    <div className="dark-card" style={{ gridColumn: 'span 5', gridRow: 'span 2', overflow: 'hidden', position: 'relative', minHeight: '600px' }}>
                        <img src="/claudio-portrait.png" alt="Retrato profesional del Ps. Claudio Fernández, psicólogo clínico en su consulta premium de Concepción y Andalué" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                            <h3 className="instrument-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ciencia y Empatía</h3>
                            <p style={{ opacity: 0.6, fontSize: '1rem', fontWeight: 300 }}>Especialista en procesos críticos y alto desempeño emocional.</p>
                        </div>
                    </div>

                    {/* Card 2: Individual Therapy */}
                    <div className="glass-modern" style={{ gridColumn: 'span 7', padding: '4rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <span style={{ padding: '0.5rem 1rem', border: '1px solid var(--accent-sage)', borderRadius: '100px', fontSize: '0.7rem', letterSpacing: '0.1em' }}>ÁREA INDIVIDUAL</span>
                                <h2 className="instrument-serif" style={{ fontSize: '4rem', marginTop: '2rem', marginBottom: '1.5rem' }}>Psicoterapia Individual</h2>
                            </div>
                            <User size={60} strokeWidth={1} color="var(--accent-sage)" />
                        </div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
                            Redefina su trayectoria personal. Un espacio de alta fidelidad para el ejecutivo y el profesional que busca claridad.
                        </p>
                        <div style={{ marginTop: '3rem', fontSize: '1.8rem' }} className="instrument-serif">
                            65k / sesión <span style={{ fontSize: '0.8rem', opacity: 0.5, fontStyle: 'italic' }}>Inversión sugerida</span>
                        </div>
                    </div>

                    {/* Card 3: Couples Therapy */}
                    <a href="/terapia-de-pareja-concepcion" style={{ textDecoration: 'none', color: 'inherit', gridColumn: 'span 4', display: 'block' }} className="hover-scale">
                        <div className="glass-modern" style={{ padding: '3rem', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <Heart size={32} color="var(--accent-gold)" />
                                <ArrowUpRight size={24} color="var(--accent-gold)" style={{ opacity: 0.5 }} />
                            </div>
                            <h3 className="instrument-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Terapia de Pareja</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Restaurando la arquitectura del vínculo afectivo.</p>
                            <div style={{ marginTop: '2rem', fontWeight: 600 }}>75k / sesión</div>
                        </div>
                    </a>

                    {/* Card 4: Location A */}
                    <div className="glass-modern" style={{ gridColumn: 'span 3', padding: '3rem', background: 'var(--bg-dark)', color: 'white' }}>
                        <MapPin size={24} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
                        <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.5 }}>SEDE CENTRAL</p>
                        <h4 className="instrument-serif" style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Barros Arana 188</h4>
                        <div style={{ marginTop: '1.5rem', fontSize: '0.8rem' }}>M, W, F 09:15 - 21:30</div>
                    </div>

                </div>
            </section>

            {/* Interactive Contact Banner */}
            <section style={{ padding: '8vw 4vw', background: 'white' }}>
                <div className="glass-modern" style={{
                    padding: '6rem 4vw',
                    background: 'linear-gradient(135deg, #121413 0%, #1d2120 100%)',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Animated Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '400px',
                        height: '400px',
                        background: 'var(--accent-sage)',
                        filter: 'blur(150px)',
                        opacity: 0.15,
                        zIndex: 0,
                        transform: 'translate(-50%, -50%)'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 className="instrument-serif" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem' }}>Hablemos con <span style={{ color: 'var(--accent-gold)' }}>Privacidad</span>.</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/56978789839" className="magnetic-btn" style={{ background: 'var(--accent-gold)', color: 'black' }}>
                                <MessageCircle size={20} /> WhatsApp Directo
                            </a>
                            <a href="tel:+56978789839" className="glass-modern" style={{
                                padding: '1.5rem 3.5rem',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                textDecoration: 'none',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <Phone size={20} /> +56 9 7878 9839
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer 2026 */}
            <footer style={{ padding: '6rem 4vw', background: 'var(--bg-canvas)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '4rem' }}>
                    <div>
                        <h2 className="instrument-serif" style={{ fontSize: '3rem' }}>Claudio Fernández</h2>
                        <p style={{ opacity: 0.5, marginTop: '1rem', marginBottom: '1rem' }}>Psicólogo Clínico · Concepción · {new Date().getFullYear()}</p>

                        {/* E-E-A-T Credential Badges */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.03)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                <CheckCircle2 size={14} color="var(--accent-sage)" /> Profesional Acreditado
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.03)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                <Lock size={14} color="var(--accent-sage)" /> Secreto Profesional Garantizado
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.5 }}>UBICACIONES</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Centro Concepción</p>
                            <p style={{ fontSize: '0.9rem' }}>Andalué San Pedro</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
