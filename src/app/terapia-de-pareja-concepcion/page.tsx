import '../globals.css';
import { Heart, CheckCircle2, MapPin, ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terapia de Pareja en Concepción | Ps. Claudio Fernández',
    description: 'Terapia de pareja de alto nivel en Concepción y San Pedro de la Paz (Andalué). Reconstruya la intimidad, mejore la comunicación y supere la crisis. Inversión: $75.000.',
    keywords: ['Terapia de pareja en Concepción', 'Psicólogo de pareja Concepción', 'Terapia matrimonial Concepción', 'Problemas de pareja Concepción', 'Psicólogo Andalué San Pedro de la Paz'],
    openGraph: {
        title: 'Terapia de Pareja en Concepción | Enfoque Estratégico',
        description: 'Especialista en terapia de pareja en Concepción y Andalué. Enfoque clínico riguroso para la restauración del vínculo.',
        url: 'https://ps-claudio-fernandez.vercel.app/terapia-de-pareja-concepcion',
        siteName: 'Ps. Claudio Fernández',
        locale: 'es_CL',
        type: 'website',
    },
};

export default function TerapiaParejaPage() {
    return (
        <div style={{ position: 'relative', background: 'var(--bg-canvas)' }}>
            {/* Hero Section */}
            <section style={{
                padding: '12rem 4vw 6rem',
                background: 'linear-gradient(to bottom, #111312, #0a0b0a)',
                color: 'white',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Glow Effects */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'var(--accent-gold)',
                    filter: 'blur(200px)',
                    opacity: 0.15,
                    borderRadius: '50%'
                }}></div>

                <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Heart size={16} color="var(--accent-gold)" />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 500, textTransform: 'uppercase' }}>Atención Presencial Exclusiva</span>
                    </div>

                    <h1 className="instrument-serif" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', marginBottom: '2rem' }}>
                        Terapia de Pareja en <span style={{ color: 'var(--accent-gold)' }}>Concepción</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: '#a0a0a0', maxWidth: '700px', margin: '0 auto 3rem', fontWeight: 300 }}>
                        Un espacio de alta fidelidad clínica para matrimonios y parejas que buscan restaurar la comunicación, la confianza y la estructura de su vínculo afectivo.
                    </p>

                    <a href="#contacto" className="magnetic-btn" style={{ background: 'white', color: 'black' }}>
                        Consultar Disponibilidad <ArrowUpRight size={20} />
                    </a>
                </div>
            </section>

            {/* Overview Section */}
            <section style={{ padding: '8rem 4vw' }}>
                <div className="bento-grid" style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    <div style={{ gridColumn: 'span 12', marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 className="instrument-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Restaurando la Arquitectura del Vínculo</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            La crisis no es el final de la relación, sino la señal de que los "términos de contrato" emocionales previos ya no funcionan.
                        </p>
                    </div>

                    <div className="glass-modern" style={{ gridColumn: 'span 6', padding: '4rem' }}>
                        <ShieldCheck size={40} color="var(--accent-sage)" style={{ marginBottom: '2rem' }} />
                        <h3 className="instrument-serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>El Enfoque Clínico</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                            Mi metodología se basa en la objetividad y la directividad. No busco culpables, sino dinámicas disfuncionales. Entenderemos los patrones de interacción, los ciclos de reactividad y diseñaremos estrategias prácticas para desarticular el conflicto.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Resolución constructiva de conflictos', 'Recuperación de la intimidad y confianza', 'Alineación de proyectos vitales'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                                    <CheckCircle2 color="var(--accent-gold)" size={20} />
                                    <span style={{ fontWeight: 500 }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="dark-card" style={{ gridColumn: 'span 6', padding: '4rem', background: '#111312' }}>
                        <h3 className="instrument-serif" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'white' }}>Inversión y Estructura</h3>
                        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
                            <p style={{ opacity: 0.6, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>VALOR POR SESIÓN CONJUNTA</p>
                            <div className="instrument-serif" style={{ fontSize: '3.5rem', color: 'var(--accent-gold)', lineHeight: '1' }}>
                                $75.000 <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>CLP</span>
                            </div>
                        </div>
                        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: '1.6' }}>
                            Las sesiones de dirección de vínculos requieren de un análisis exhaustivo de la historia de ambas partes. El encuadre terapéutico garantiza total imparcialidad y un entorno seguro para discusiones difíciles.
                        </p>
                    </div>

                </div>
            </section>

            {/* Locations SEO Section */}
            <section style={{ padding: '6rem 4vw', background: 'white' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 className="instrument-serif" style={{ fontSize: '3.5rem', marginBottom: '3rem', textAlign: 'center' }}>Dónde Atiendo</h2>
                    <div className="bento-grid">
                        <div className="glass-modern" style={{ gridColumn: 'span 6', padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', background: '#fdfdfd' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: 'var(--bg-canvas)', borderRadius: '12px' }}>
                                    <MapPin color="var(--accent-sage)" size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>UBICACIÓN CÉNTRICA</h4>
                                    <h3 className="instrument-serif" style={{ fontSize: '2rem' }}>Concepción Centro</h3>
                                </div>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}><strong>Barros Arana 188</strong>, Concepción</p>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Ideal para ejecutivos y profesionales que trabajan en el corazón de la ciudad. Orientado a optimizar sus tiempos de traslado.</p>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Días de atención: Lunes, Miércoles y Viernes</p>
                        </div>

                        <div className="glass-modern" style={{ gridColumn: 'span 6', padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', background: '#fdfdfd' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: 'var(--bg-canvas)', borderRadius: '12px' }}>
                                    <MapPin color="var(--accent-gold)" size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>SEDE RESIDENCIAL</h4>
                                    <h3 className="instrument-serif" style={{ fontSize: '2rem' }}>Andalué, San Pedro</h3>
                                </div>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Sector Andalué, San Pedro de la Paz</p>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Ubicación discreta y de fácil acceso para residentes del sector, evitando el tráfico hacia el centro.</p>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Días de atención: Martes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contacto" style={{ padding: '8vw 4vw', background: 'var(--bg-canvas)' }}>
                <div className="dark-card" style={{
                    padding: '6rem 4vw',
                    textAlign: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 className="instrument-serif" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '2rem', color: 'white' }}>
                            Comience su <span style={{ color: 'var(--accent-gold)' }}>Proceso</span>.
                        </h2>
                        <p style={{ color: '#a0a0a0', maxWidth: '500px', margin: '0 auto 3rem' }}>
                            Programe una hora de atención. Las consultas por disponibilidad se manejan con estricta confidencialidad directamente a mi número personal.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/56978789839" className="magnetic-btn" style={{ background: 'var(--accent-gold)', color: 'black' }}>
                                <MessageCircle size={20} /> Agendar vía WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Copy */}
            <footer style={{ padding: '4rem 4vw', background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h2 className="instrument-serif" style={{ fontSize: '2rem' }}>Claudio Fernández</h2>
                <p style={{ opacity: 0.5, marginTop: '0.5rem', fontSize: '0.9rem' }}>Psicólogo Clínico Especialista en Terapia de Pareja · Concepción</p>
                <div style={{ marginTop: '2rem' }}>
                    <a href="/" style={{ color: 'var(--accent-sage)', textDecoration: 'none', fontWeight: 500 }}>← Volver al Inicio</a>
                </div>
            </footer>
        </div>
    );
}
