import { MapPin, Clock, Phone, ArrowRight, ShieldCheck, Heart, User } from 'lucide-react';

export default function HomePage() {
    return (
        <main>
            {/* Hero Section */}
            <section id="inicio" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8%',
                background: 'linear-gradient(135deg, #faf9f6 0%, #f0efeb 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract decorative element */}
                <div style={{
                    position: 'absolute',
                    right: '-10%',
                    top: '10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(196, 164, 132, 0.1) 0%, rgba(250, 249, 246, 0) 70%)',
                    zIndex: 0
                }}></div>

                <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{
                        color: 'var(--accent)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.8rem',
                        marginBottom: '1.5rem',
                        display: 'block'
                    }}>Psicólogo Clínico en Concepción</span>

                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1.1', maxWidth: '800px', marginBottom: '2.5rem' }}>
                        Un espacio para <span style={{ color: 'var(--primary-light)', fontStyle: 'italic' }}>re-encontrarse</span> y sanar.
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-soft)', maxWidth: '600px', marginBottom: '3.5rem', fontWeight: '300' }}>
                        Acompañamiento profesional con enfoque empático para tu bienestar individual y la armonía de tus vínculos de pareja.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="#contacto" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            Agendar Primera Sesión <ArrowRight size={20} />
                        </a>
                        <a href="#servicios" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid var(--accent)' }}>Ver Servicios</a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" style={{ padding: '8rem 8%', backgroundColor: 'var(--white)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Especialidades</h2>
                    <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent)', margin: '0 auto' }}></div>
                </div>

                <div className="grid-2">
                    {/* Individual Therapy */}
                    <div className="glass" style={{ padding: '3.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-premium)' }}>
                        <div style={{ width: '60px', height: '600x', backgroundColor: 'var(--bg-serene)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', padding: '15px' }}>
                            <User size={32} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Terapia Individual</h3>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Un proceso de autoconocimiento y sanación para abordar ansiedad, depresión, estrés o crisis existenciales en un ambiente de absoluta privacidad.
                        </p>
                        <div style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600' }}>$65.000 <span style={{ fontSize: '0.9rem', fontWeight: '400', opacity: 0.6 }}>/ Presencial</span></div>
                    </div>

                    {/* Couples Therapy */}
                    <div className="glass" style={{ padding: '3.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-premium)' }}>
                        <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--bg-serene)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', padding: '15px' }}>
                            <Heart size={32} color="var(--accent)" />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Terapia de Pareja</h3>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Espacio mediado para mejorar la comunicación, resolver conflictos profundos y fortalecer los vínculos afectivos desde el respeto y la comprensión.
                        </p>
                        <div style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600' }}>$75.000 <span style={{ fontSize: '0.9rem', fontWeight: '400', opacity: 0.6 }}>/ Presencial</span></div>
                    </div>
                </div>
            </section>

            {/* Locations & Schedule */}
            <section style={{ padding: '8rem 8%', backgroundColor: 'var(--bg-serene)' }}>
                <div className="grid-2">
                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Ubicación y Horarios</h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <MapPin size={28} color="var(--accent)" />
                                <div>
                                    <h4 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Consulta Concepción</h4>
                                    <p style={{ color: 'var(--text-soft)' }}>Barros Arana 188, Concepción</p>
                                    <p style={{ color: 'var(--primary)', fontWeight: '500', marginTop: '0.5rem' }}>Luna, Miérc y Vier: 09:15 - 21:30</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <MapPin size={28} color="var(--accent)" />
                                <div>
                                    <h4 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Andalué</h4>
                                    <p style={{ color: 'var(--text-soft)' }}>San Pedro de la Paz</p>
                                    <p style={{ color: 'var(--primary)', fontWeight: '500', marginTop: '0.5rem' }}>Martes: 09:15 - 20:00</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--accent)' }}>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontStyle: 'italic' }}>
                                "Mi compromiso es brindarte un espacio puntual, profesional y humano para trabajar en aquello que más te importa."
                            </p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--white)',
                        padding: '4rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                    }}>
                        <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                        <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>¿Listo para empezar?</h3>
                        <p style={{ opacity: 0.8, marginBottom: '3rem' }}>Reserva ahora a través de WhatsApp o llamada directa.</p>

                        <a href="https://wa.me/56978789839" className="btn-accent" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            width: '100%',
                            padding: '1.5rem',
                            fontSize: '1.2rem',
                            backgroundColor: 'var(--accent)',
                            color: 'var(--primary)',
                            fontWeight: '700'
                        }}>
                            <Phone size={24} /> +56 9 7878 9839
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section style={{ padding: '6rem 8%', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                <p className="serif" style={{ fontSize: '1.8rem', color: 'var(--text-soft)', maxWidth: '900px', margin: '0 auto', opacity: 0.6 }}>
                    La terapia no es solo resolver problemas, es cultivar la fortaleza para vivir una vida con mayor sentido y profundidad.
                </p>
            </section>
        </main>
    );
}
