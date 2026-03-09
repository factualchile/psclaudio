import { MapPin, Clock, Phone, ArrowRight, ShieldCheck, Heart, User, Building, Lock } from 'lucide-react';

export default function HomePage() {
    return (
        <main>
            {/* Hero Section - High End Minimalist */}
            <section id="inicio" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8%',
                background: 'linear-gradient(rgba(252, 251, 249, 0.9), rgba(252, 251, 249, 0.7)), url("/office-view.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div className="container animate-fade-in">
                    <div style={{ maxWidth: '900px' }}>
                        <span className="sub-header">Práctica Privada en Concepción</span>

                        <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', lineHeight: '1', marginBottom: '3rem', color: 'var(--primary)' }}>
                            La excelencia académica <br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>al servicio de su bienestar.</span>
                        </h1>

                        <p style={{ fontSize: '1.4rem', color: 'var(--text-soft)', maxWidth: '650px', marginBottom: '4rem', fontWeight: '300', lineHeight: '1.8' }}>
                            Un espacio de alta confidencialidad y rigor clínico diseñado para quienes exigen un estándar superior en su proceso de salud mental.
                        </p>

                        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                            <a href="https://wa.me/56978789839" className="btn-primary">
                                Iniciar Proceso Privado
                            </a>
                            <a href="#servicios" style={{
                                color: 'var(--primary)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                fontWeight: '600',
                                borderBottom: '1px solid var(--accent)',
                                paddingBottom: '5px'
                            }}>Explorar Áreas Clinicas</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discretion Section - ABC1 Priority */}
            <section style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '6rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Lock size={32} color="var(--accent)" />
                        <div>
                            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Absoluta Discreción</h4>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Protocolos de privacidad rigurosos.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Clock size={32} color="var(--accent)" />
                        <div>
                            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Agendas Espaciadas</h4>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Garantía de flujo sin contacto entre consultantes.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <ShieldCheck size={32} color="var(--accent)" />
                        <div>
                            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Rigor Profesional</h4>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Enfoque clínico basado en evidencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Portrait */}
            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="grid-2">
                        <div style={{ position: 'relative' }}>
                            <img src="/claudio-portrait.png" alt="Ps. Claudio Fernández" style={{ width: '100%', borderRadius: '0', boxShadow: 'var(--shadow-premium)' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                backgroundColor: 'var(--bg-serene)',
                                padding: '3rem',
                                maxWidth: '350px',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <p className="serif" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--primary)' }}>
                                    "La elegancia de la salud mental reside en la capacidad de integrar nuestras sombras con nuestra luz."
                                </p>
                            </div>
                        </div>
                        <div>
                            <span className="sub-header">Experiencia y Trayectoria</span>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Ps. Claudio Fernández</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-soft)', marginBottom: '2rem' }}>
                                Con años de práctica clínica dedicada al acompañamiento de individuos en roles de alta exigencia, entiendo los desafíos específicos de quienes lideran entornos complejos.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-soft)', marginBottom: '3rem' }}>
                                Mi enfoque combina el rigor de la teoría clínica con una calidez humana genuina, ofreciendo un refugio intelectual y emocional para procesar lo que otros no ven.
                            </p>
                            <a href="https://wa.me/56978789839" className="btn-accent">Línea Directa de Consultas</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Redefined as Investment */}
            <section id="servicios" className="section-padding" style={{ backgroundColor: 'var(--bg-serene)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span className="sub-header">Servicios Exclusivos</span>
                        <h2 style={{ fontSize: '4rem' }}>Modalidades de Trabajo</h2>
                    </div>

                    <div className="grid-2">
                        {/* Individual */}
                        <div style={{
                            padding: '5rem',
                            backgroundColor: 'var(--white)',
                            textAlign: 'center',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'transform 0.4s ease'
                        }}>
                            <User size={40} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                            <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Psicoterapia Individual</h3>
                            <p style={{ color: 'var(--text-soft)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                                Un proceso de síntesis personal para abordar las presiones modernas, el estrés ejecutivo y el autoconocimiento profundo.
                            </p>
                            <div className="price-tag">Inversión por sesión: $65.000</div>
                        </div>

                        {/* Couple */}
                        <div style={{
                            padding: '5rem',
                            backgroundColor: 'var(--white)',
                            textAlign: 'center',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'transform 0.4s ease'
                        }}>
                            <Heart size={40} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                            <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Dirección de Vínculos</h3>
                            <p style={{ color: 'var(--text-soft)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                                Intervenciones estratégicas para parejas que buscan restaurar la armonía, la comunicación y el propósito compartido.
                            </p>
                            <div className="price-tag">Inversión por sesión: $75.000</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations & Contact */}
            <section id="contacto" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <span className="sub-header">Acceso Preferencial</span>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '3.5rem' }}>Sedes de Atención</h2>

                            <div style={{ marginBottom: '4rem' }}>
                                <div style={{ padding: '2.5rem', borderLeft: '1px solid var(--accent)', marginBottom: '2rem' }}>
                                    <h4 className="serif" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Sede Financiera Concepción</h4>
                                    <p style={{ color: 'var(--text-soft)', marginBottom: '1rem' }}>Barros Arana 188, Concepción</p>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                                        <Clock size={16} color="var(--accent)" /> Lunes, Miércoles y Viernes: 09:15 - 21:30
                                    </div>
                                </div>

                                <div style={{ padding: '2.5rem', borderLeft: '1px solid var(--accent)' }}>
                                    <h4 className="serif" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Sede Andalué Privada</h4>
                                    <p style={{ color: 'var(--text-soft)', marginBottom: '1rem' }}>San Pedro de la Paz</p>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                                        <Clock size={16} color="var(--accent)" /> Martes: 09:15 - 20:00
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            padding: '6rem 4rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span className="sub-header" style={{ color: 'var(--accent)' }}>Concierge Digital</span>
                                <h3 className="serif" style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>Línea de Contacto <br />Directa</h3>
                                <p style={{ opacity: 0.7, marginBottom: '4rem', maxWidth: '400px', margin: '0 auto 4rem' }}>
                                    Su consulta será atendida con absoluta reserva. Puede iniciar el contacto vía WhatsApp o llamada telefónica.
                                </p>

                                <a href="https://wa.me/56978789839" className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)', fontWeight: '800', width: '100%', fontSize: '1.1rem' }}>
                                    <Phone size={20} style={{ marginRight: '1rem' }} /> +56 9 7878 9839
                                </a>
                            </div>

                            {/* Decorative accent */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                border: '2px solid rgba(184, 151, 113, 0.1)',
                                borderRadius: '50%'
                            }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax-like Quote Section */}
            <section style={{ padding: '12rem 0', textAlign: 'center', backgroundColor: 'var(--bg-serene)', backgroundImage: 'radial-gradient(var(--accent-light) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
                <div className="container">
                    <p className="serif" style={{ fontSize: '2.5rem', color: 'var(--text-soft)', lineHeight: '1.4', maxWidth: '1000px', margin: '0 auto' }}>
                        "El acompañamiento de alto nivel no es una transacción, es la construcción de un refugio para la mente que lidera."
                    </p>
                    <div style={{ marginTop: '3rem', fontSize: '0.9rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>Estándar de Seguridad Mental</div>
                </div>
            </section>
        </main>
    );
}
