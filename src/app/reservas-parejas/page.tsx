'use client';
import { useState } from 'react';

// ─── Typeform-Style Popup ─────────────────────────────────────────────────────
function BookingPopup({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        motivo: '',
        horario: '',
        nombre: '',
        telefono: '',
    });

    const totalSteps = 4;

    const next = () => {
        if (step < totalSteps) setStep(step + 1);
        else handleSubmit();
    };
    const prev = () => { if (step > 1) setStep(step - 1); };

    const handleSubmit = async () => {
        try {
            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    patientData: formData,
                    therapistEmail: 'cfernandez@psyclaudio.cl',
                    therapistName: 'Ps. Claudio Fernández'
                }),
            });
        } catch (_) { /* silent */ }
        setSubmitted(true);
    };

    const progress = (step / totalSteps) * 100;

    const overlayStyle: React.CSSProperties = {
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999, padding: '1rem', backdropFilter: 'blur(6px)'
    };

    const cardStyle: React.CSSProperties = {
        background: '#fff', borderRadius: '20px', maxWidth: '560px',
        width: '100%', padding: '3.5rem 3rem', position: 'relative',
        minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
    };

    const btnPrimary: React.CSSProperties = {
        background: '#1a6b46', color: '#fff', border: 'none',
        borderRadius: '100px', padding: '1rem 2.5rem', fontSize: '1rem',
        fontWeight: 700, cursor: 'pointer', display: 'inline-flex',
        alignItems: 'center', gap: '0.6rem', transition: 'opacity 0.2s'
    };

    const optBtn = (active: boolean): React.CSSProperties => ({
        display: 'block', width: '100%', textAlign: 'left',
        padding: '1rem 1.4rem', marginBottom: '0.8rem',
        borderRadius: '12px', border: active ? '2px solid #1a6b46' : '1.5px solid #ddd',
        background: active ? '#f0f7f4' : '#fff', cursor: 'pointer',
        fontSize: '1rem', fontWeight: active ? 700 : 400, transition: 'all 0.15s'
    });

    if (submitted) {
        return (
            <div style={overlayStyle} onClick={onClose}>
                <div style={cardStyle} onClick={e => e.stopPropagation()}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a6b46' }}>¡Solicitud enviada!</h2>
                        <p style={{ color: '#555', marginBottom: '2rem' }}>
                            Claudio te contactará a la brevedad por WhatsApp al número que indicaste. Gracias, <strong>{formData.nombre}</strong>.
                        </p>
                        <button style={btnPrimary} onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={cardStyle} onClick={e => e.stopPropagation()}>
                {/* Close */}
                <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.4rem', border: 'none', background: 'none', fontSize: '1.6rem', cursor: 'pointer', color: '#aaa', lineHeight: 1 }}>×</button>

                {/* Progress bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: '#eee', borderRadius: '20px 20px 0 0' }}>
                    <div style={{ height: '100%', width: `${progress}%`, background: '#1a6b46', borderRadius: 'inherit', transition: 'width 0.4s ease' }} />
                </div>

                {/* Step label */}
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#1a6b46', marginBottom: '1.5rem' }}>
                    PASO {step} DE {totalSteps}
                </p>

                {/* STEP 1 – Motivo */}
                {step === 1 && (
                    <div>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 800 }}>¿Cuál es el principal motivo de consulta?</h2>
                        <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Selecciona la opción que más se ajusta a tu situación actual.</p>
                        {[
                            'Problemas de comunicación y conflictos frecuentes',
                            'Infidelidad o reconstrucción de la confianza',
                            'Falta de conexión emocional / distanciamiento',
                            'Crisis de pareja o posible separación',
                            'Otro motivo',
                        ].map(opt => (
                            <button key={opt} style={optBtn(formData.motivo === opt)}
                                onClick={() => { setFormData({ ...formData, motivo: opt }); setTimeout(next, 200); }}>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 2 – Horario */}
                {step === 2 && (
                    <div>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 800 }}>¿Qué horario te acomoda mejor?</h2>
                        <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Claudio atiende Lunes, Miércoles y Viernes en Concepción y Martes en Andalué.</p>
                        {[
                            'Mañana (09:00 – 13:00)',
                            'Tarde (14:00 – 18:00)',
                            'Vespertino (18:00 – 21:30)',
                        ].map(opt => (
                            <button key={opt} style={optBtn(formData.horario === opt)}
                                onClick={() => { setFormData({ ...formData, horario: opt }); setTimeout(next, 200); }}>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 3 – Nombre */}
                {step === 3 && (
                    <div>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 800 }}>¿Cuál es tu nombre?</h2>
                        <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Solo el primero está bien.</p>
                        <div style={{ borderBottom: '2px solid #1a6b46', display: 'flex', alignItems: 'center', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
                            <input
                                autoFocus type="text" placeholder="Mi nombre es..."
                                value={formData.nombre}
                                onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                                onKeyDown={e => e.key === 'Enter' && formData.nombre && next()}
                                style={{ border: 'none', outline: 'none', fontSize: '1.3rem', width: '100%', fontFamily: 'inherit' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', color: '#aaa' }}>Presiona ENTER para continuar</span>
                            <button style={{ ...btnPrimary, opacity: formData.nombre ? 1 : 0.4 }} disabled={!formData.nombre} onClick={next}>
                                Continuar →
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 4 – Teléfono */}
                {step === 4 && (
                    <div>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 800 }}>Tu número de WhatsApp</h2>
                        <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Claudio te escribirá directamente para confirmar tu hora.</p>
                        <div style={{ borderBottom: '2px solid #1a6b46', display: 'flex', alignItems: 'center', paddingBottom: '0.5rem', marginBottom: '2rem', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.3rem', color: '#555' }}>🇨🇱 +56</span>
                            <input
                                autoFocus type="tel" placeholder="9 1234 5678"
                                value={formData.telefono}
                                onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                                onKeyDown={e => e.key === 'Enter' && formData.telefono && next()}
                                style={{ border: 'none', outline: 'none', fontSize: '1.3rem', width: '100%', fontFamily: 'inherit' }}
                            />
                        </div>
                        <button
                            style={{ ...btnPrimary, width: '100%', justifyContent: 'center', opacity: formData.telefono ? 1 : 0.4 }}
                            disabled={!formData.telefono}
                            onClick={next}
                        >
                            Enviar solicitud de reserva ✓
                        </button>
                    </div>
                )}

                {/* Back button */}
                {step > 1 && (
                    <button onClick={prev} style={{ border: 'none', background: 'none', color: '#aaa', cursor: 'pointer', marginTop: '1.5rem', fontSize: '0.9rem', alignSelf: 'flex-start' }}>
                        ← Volver
                    </button>
                )}
            </div>
        </div>
    );
}

// ─── Main Landing Page ────────────────────────────────────────────────────────
export default function ReservasParejas() {
    const [showPopup, setShowPopup] = useState(false);

    const headerStyle: React.CSSProperties = {
        background: '#1a3a2a',
        color: '#fff',
        padding: '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
    };

    const btnReserva: React.CSSProperties = {
        background: '#2c5f3f',
        color: '#fff',
        border: '2px solid #4a9e6a',
        borderRadius: '8px',
        padding: '0.9rem 2rem',
        fontSize: '1rem',
        fontWeight: 800,
        cursor: 'pointer',
        letterSpacing: '0.04em',
        transition: 'background 0.2s'
    };

    const areas = [
        'Problemas de comunicación', 'Falta de conexión emocional',
        'Infidelidad y reconstrucción de la confianza', 'Celos y control',
        'Problemas en la intimidad y sexualidad', 'Crisis y cambios en la relación',
        'Dificultades con la crianza y diferencias en la educación de los hijos',
        'Desgaste y rutina en la relación', 'Problemas financieros y toma de decisiones económicas',
        'Desacuerdos en valores y expectativas de vida', 'Dependencia emocional y falta de autonomía',
        'Manejo del estrés y conflictos externos que afectan la pareja',
        'Violencia emocional o psicológica en la relación',
        'Dificultades en la negociación y acuerdos de pareja',
        'Procesos de separación y divorcio'
    ];

    return (
        <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a', background: '#fff', maxWidth: '100vw', overflowX: 'hidden' }}>
            {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}

            {/* Header Banner */}
            <div style={headerStyle}>
                <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, margin: 0, fontFamily: 'Arial, sans-serif' }}>
                    Atención psicológica para parejas
                </h1>
                <a href="tel:+56978789839" style={{ color: '#7ecfa0', fontWeight: 700, textDecoration: 'underline', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                    +56 9 7878 9839
                </a>
            </div>

            {/* Location Badge */}
            <div style={{ background: '#2c5f3f', color: '#fff', padding: '0.6rem 2rem', fontSize: '0.95rem', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                Consulta Ubicada en Concepción
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,380px)', gap: '3rem', alignItems: 'start' }}>

                {/* Left Column */}
                <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, marginBottom: '1.8rem', fontFamily: 'Arial, sans-serif', color: '#1a3a2a' }}>
                        Claudio Fernández Bolton
                    </h2>

                    <div style={{ display: 'flex', gap: '1.8rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        {/* Photo */}
                        <div style={{ flexShrink: 0 }}>
                            <img
                                src="/claudio-portrait.png"
                                alt="Foto del Ps. Claudio Fernández Bolton, psicólogo de parejas en Concepción"
                                style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #2c5f3f' }}
                            />
                            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                <button style={btnReserva} onClick={() => setShowPopup(true)}>
                                    RESERVAR AHORA
                                </button>
                            </div>
                        </div>

                        {/* Bio */}
                        <div style={{ flex: 1, minWidth: '220px' }}>
                            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif' }}>
                                Psicólogo con más de 15 años de experiencia clínica.
                            </p>
                            <p style={{ fontWeight: 700, marginBottom: '1rem', fontFamily: 'Arial, sans-serif' }}>
                                Experto en atención a parejas.
                            </p>
                            <p style={{ lineHeight: '1.7', fontSize: '0.95rem', color: '#222', fontFamily: 'Arial, sans-serif' }}>
                                <strong>Áreas de experiencia:</strong>{' '}
                                {areas.join(' - ')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem' }}>
                    {/* Garantía */}
                    <div style={{
                        border: '2px solid #1a3a2a', borderRadius: '50%', width: '220px', height: '220px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        textAlign: 'center', padding: '1.5rem', margin: '0 auto', boxSizing: 'border-box'
                    }}>
                        <p style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.8rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Garantía de Satisfacción
                        </p>
                        <p style={{ fontSize: '0.88rem', lineHeight: '1.5', color: '#333', fontFamily: 'Arial, sans-serif' }}>
                            Si la primera sesión no te parece <strong>GENIAL</strong> te devuelvo tu dinero
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div style={{ textAlign: 'center' }}>
                        <button
                            style={{ ...btnReserva, fontSize: '1.15rem', padding: '1.1rem 2.5rem', borderRadius: '12px', width: '100%' }}
                            onClick={() => setShowPopup(true)}
                        >
                            RESERVAR AHORA
                        </button>
                        <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>
                            Te confirmamos por WhatsApp en menos de 2 horas
                        </p>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/56978789839?text=Hola%20Claudio%2C%20me%20interesa%20una%20sesi%C3%B3n%20de%20terapia%20de%20pareja"
                target="_blank" rel="noopener noreferrer"
                style={{
                    position: 'fixed', bottom: '2rem', right: '2rem',
                    background: '#25d366', color: '#fff',
                    width: '60px', height: '60px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', textDecoration: 'none', zIndex: 1000,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
            >
                💬
            </a>

            {/* Mobile Responsive */}
            <style>{`
        @media (max-width: 700px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
