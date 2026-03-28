"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2, X, User as UserIcon, Calendar, Clock, Lock } from "lucide-react";

// ─── COMPONENTE DE RESERVA (DERIVADO DE PSICOLOGOS AHORA) ───────────────────────
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
    } catch (_) { /* silent fallback */ }
    setSubmitted(true);
  };

  const progress = (step / totalSteps) * 100;

  if (submitted) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000, padding: '1rem', backdropFilter: 'blur(8px)' }} onClick={onClose}>
        <div style={{ background: '#fff', borderRadius: '24px', maxWidth: '500px', width: '100%', padding: '3.5rem 2rem', textAlign: 'center', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }} onClick={e => e.stopPropagation()}>
          <CheckCircle2 size={60} color="#10b981" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b', fontWeight: 900 }}>¡Solicitud enviada!</h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>Claudio te contactará a la brevedad por WhatsApp para confirmar tu hora. Gracias, <strong>{formData.nombre}</strong>.</p>
          <button style={{ background: '#2c6a91', color: '#fff', border: 'none', borderRadius: '12px', padding: '1rem 2rem', fontWeight: 700, cursor: 'pointer', width: '100%' }} onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000, padding: '1rem', backdropFilter: 'blur(10px)' }} onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ background: '#fff', borderRadius: '24px', maxWidth: '560px', width: '100%', padding: '4rem 3rem', position: 'relative', boxShadow: '0 50px 100px rgba(0,0,0,0.6)' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={24} /></button>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#f1f5f9', borderRadius: '24px 24px 0 0' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: '#2c6a91', borderRadius: 'inherit', transition: 'width 0.4s ease' }} />
        </div>

        <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2c6a91', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>Paso {step} de {totalSteps}</p>

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 900, color: '#1e293b' }}>¿Cuál es el motivo de consulta?</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {['Terapia de Pareja', 'Psicoterapia Individual', 'Crisis o Separación', 'Otro motivo'].map(opt => (
                    <button key={opt} onClick={() => { setFormData({ ...formData, motivo: opt }); next(); }} style={{ textAlign: 'left', padding: '1.2rem', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: 'white', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #2c6a91' }} /> {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 900, color: '#1e293b' }}>¿En qué horario prefieres?</h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {['Mañana (09:00 - 13:00)', 'Tarde (14:00 - 18:00)', 'Vespertino (18:00 - 21:00)'].map(opt => (
                    <button key={opt} onClick={() => { setFormData({ ...formData, horario: opt }); next(); }} style={{ textAlign: 'left', padding: '1.2rem', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: 'white', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Clock size={18} color="#2c6a91" /> {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 900, color: '#1e293b' }}>¿Cuál es tu nombre?</h2>
                <input autoFocus type="text" placeholder="Escribe tu nombre..." value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} onKeyDown={e => e.key === 'Enter' && formData.nombre && next()} style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '2px solid #2c6a91', fontSize: '1.2rem', outline: 'none' }} />
                <button disabled={!formData.nombre} onClick={next} style={{ width: '100%', marginTop: '1.5rem', background: '#2c6a91', color: 'white', padding: '1.2rem', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', opacity: formData.nombre ? 1 : 0.5 }}>Continuar</button>
              </div>
            )}
            {step === 4 && (
              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 900, color: '#1e293b' }}>Tu número de WhatsApp</h2>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', border: '2px solid #2c6a91', borderRadius: '12px', padding: '0 1rem' }}>
                  <span style={{ fontWeight: 800 }}>+56</span>
                  <input autoFocus type="tel" placeholder="9 1234 5678" value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} onKeyDown={e => e.key === 'Enter' && formData.telefono && next()} style={{ flex: 1, padding: '1.2rem 0.5rem', border: 'none', fontSize: '1.2rem', outline: 'none' }} />
                </div>
                <button disabled={!formData.telefono} onClick={next} style={{ width: '100%', marginTop: '1.5rem', background: '#10b981', color: 'white', padding: '1.2rem', borderRadius: '12px', fontWeight: 900, border: 'none', cursor: 'pointer', opacity: formData.telefono ? 1 : 0.5 }}>Finalizar Reserva</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {step > 1 && <button onClick={prev} style={{ background: 'none', color: '#94a3b8', border: 'none', cursor: 'pointer', marginTop: '2rem', fontWeight: 600 }}>← Volver</button>}
      </motion.div>
    </div>
  );
}

// ─── LANDING PAGE BOLTON STYLE ───────────────────────────────────────────────
export default function LandingBolton() {
  const [showPopup, setShowPopup] = useState(false);

  const name = "Claudio Fernández Bolton";
  const profession = "Psicólogo Clínico Especialista en Vínculos";
  const service = "Atención Psicológica y Terapia de Pareja";
  const location = "Concepción / San Pedro de la Paz";
  const phone = "+56 9 7878 9839";
  const experience = "Psicólogo con más de 15 años de experiencia clínica. Experto en alta complejidad clínica y resolución de crisis de pareja.";
  const specialties = [
    "Problemas de comunicación",
    "Reconstrucción de la confianza",
    "Falta de conexión emocional",
    "Crisis y cambios en la pareja",
    "Intimidad y sexualidad",
    "Dificultades en la crianza",
    "Desgaste y rutina",
    "Manejo de conflictos externos",
    "Procesos de separación y divorcio"
  ];
  const slogan = "Recuperando la arquitectura emocional de la relación.";

  return (
    <div className="landing-container" style={{ 
      fontFamily: "'Outfit', sans-serif", 
      color: "#1e293b", 
      backgroundColor: "#f8fafc", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflowX: "hidden"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
      
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}

      {/* HEADER */}
      <header style={{ 
        background: "white",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        padding: "1.2rem 5%", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        zIndex: 10
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: "1.7rem", fontWeight: 900, color: "#1e4b6b", letterSpacing: "-0.5px" }}>{service}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.85rem", fontWeight: 600 }}>
                <MapPin size={14} />
                <span>{location}</span>
            </div>
        </div>
        <div style={{ textAlign: "right" }} className="hide-mobile">
            <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>Contacto Directo</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.2rem", fontWeight: 800, color: "#2c6a91" }}>
                <Phone size={20} />
                <a href={`tel:${phone}`} style={{ color: "inherit", textDecoration: "none" }}>{phone}</a>
            </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ 
        flex: 1,
        padding: "2rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: "white",
            width: "100%",
            maxWidth: "1400px",
            minHeight: "750px", 
            borderRadius: "2rem",
            display: "grid",
            gridTemplateColumns: "22% 56% 22%",
            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.08)",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.03)"
          }}
          className="main-grid"
        >
          
          {/* COLUMNA IZQUIERDA (PERFIL) */}
          <div style={{ 
            padding: "3rem 2rem", 
            backgroundColor: "#f8fafc", 
            borderRight: "1px solid rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{ 
                width: "160px", 
                height: "160px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                margin: "0 auto 1.5rem",
                border: "6px solid white",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}>
                <img src="/claudio-portrait.png" alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ height: "4px", width: "30px", background: "#2c6a91", margin: "0 auto 1.5rem", borderRadius: "2px" }} />
            <p style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: 600, lineHeight: 1.5, marginBottom: "2rem", textAlign: "center", fontStyle: "italic" }}>
                "{slogan}"
            </p>
            <button 
                onClick={() => setShowPopup(true)}
                style={{
                    backgroundColor: "white",
                    color: "#2c6a91",
                    border: "2px solid #2c6a91",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "2rem",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s"
                }}
            >
                RESERVAR HORA
            </button>
          </div>

          {/* COLUMNA CENTRAL (INFO PRINCIPAL) */}
          <div style={{ 
            padding: "4rem 5rem",
            display: "flex",
            flexDirection: "column"
          }}>
            <h2 style={{ 
                fontSize: "clamp(2.2rem, 4vw, 4.2rem)", 
                color: "#1e293b", 
                margin: "0 0 0.5rem", 
                fontWeight: 950, 
                letterSpacing: "-2px"
            }}>{name}</h2>
            
            <p style={{ 
                fontSize: "1.4rem", 
                fontWeight: 600, 
                color: "#2c6a91", 
                marginBottom: "3rem"
            }}>{profession}</p>
            
            <div style={{ 
                background: "#f1f5f9", 
                padding: "2.5rem", 
                borderRadius: "1.5rem",
                border: "1px solid rgba(0,0,0,0.03)"
            }}>
                <p style={{ fontWeight: 800, marginBottom: "1.5rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.75rem" }}>
                    Áreas de intervención clínica
                </p>
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr", 
                    gap: "0.8rem 2.5rem" 
                }}>
                    {specialties.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem", fontWeight: 500 }}>
                        <CheckCircle2 size={16} color="#10b981" />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>

            <p style={{ marginTop: "2.5rem", color: "#475569", fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 400 }}>
                {experience}
            </p>
          </div>

          {/* COLUMNA DERECHA (ACCIÓN) */}
          <div style={{ 
            padding: "4rem 2rem", 
            backgroundColor: "#1e293b", 
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{ 
              background: "rgba(255,255,255,0.04)", 
              padding: "2rem 1.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.1)",
              width: "100%",
              marginBottom: "4rem",
              textAlign: "center"
            }}>
                <Lock size={24} color="#60a5fa" style={{ marginBottom: '1rem' }} />
                <p style={{ fontWeight: 900, fontSize: "0.8rem", margin: "0 0 1rem", letterSpacing: "1px", color: "#94a3b8", textTransform: "uppercase" }}>Garantía Bolton</p>
                <p style={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.5 }}>
                  Si la primera sesión no te parece <strong style={{color: "#60a5fa", fontWeight: 900}}>GENIAL</strong>, te devolvemos el dinero. Confianza absoluta en tu proceso.
                </p>
            </div>

            <div style={{ marginTop: "auto", width: "100%" }}>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "1rem", textAlign: "center", fontWeight: 800 }}>HAZ CLICK PARA COMENZAR</p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPopup(true)}
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "1.5rem",
                    borderRadius: "1.2rem",
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    cursor: "pointer",
                    width: "100%",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.8rem"
                  }}
                >
                  RESERVAR HORA
                  <ArrowRight size={20} />
                </motion.button>
            </div>
          </div>

        </motion.div>
      </main>

      {/* WHATSAPP FLOAT */}
      <a 
        href={`https://wa.me/56978789839`} 
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "#25d366",
          color: "white",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        <MessageCircle size={36} fill="white" />
      </a>

      <style>{`
        @media (max-width: 1100px) {
            .main-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
            .hide-mobile { display: none !important; }
            header { text-align: center; }
            .col-center { padding: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
