"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, CheckCircle2, MessageCircle, X, ArrowRight, Zap, Clock } from "lucide-react";

// Componente derivativo de Bolton Template
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [leadData, setLeadData] = useState({
    when: '',
    schedule: '',
    name: '',
    phone: '',
    userEmail: 'cfernandez@psyclaudio.cl',
    source: 'Bolton Template'
  });

  const CLIENTE_SERVICIO = "Atención Psicológica y Terapia de Pareja";
  const CLIENTE_NOMBRE = "Claudio Fernández Bolton";
  const PROFESION = "Psicólogo Clínico Especialista en Vínculos";
  const UBICACION = "Concepción / San Pedro de la Paz";
  const TELEFONO = "+56 9 7878 9839";
  const TELEFONO_LIMPIO = "56978789839";
  const URL_IMAGEN = "/claudio-portrait.png";
  const SLOGAN = "Recuperando la arquitectura emocional de la relación.";
  const EXPERIENCIA_DESC = "Psicólogo con más de 15 años de experiencia clínica. Experto en alta complejidad clínica y resolución de crisis de pareja.";
  const TEXTO_GARANTIA = "Si la primera sesión no te parece GENIAL, te devolvemos el dinero. Confianza absoluta en tu proceso.";

  const ESP_1 = "Terapia de Pareja y Crisis";
  const ESP_2 = "Psicoterapia Individual de Adultos";
  const ESP_3 = "Especialista en Vínculos y Comunicación";

  const openModal = () => { setIsModalOpen(true); setStep(1); setSubmitted(false); };
  const closeModal = () => setIsModalOpen(false);

  const handleNextStep = (currentStep: number, value?: string) => {
    if (value) {
      if (currentStep === 1) setLeadData(prev => ({ ...prev, when: value }));
      if (currentStep === 2) setLeadData(prev => ({ ...prev, schedule: value }));
    }
    setStep(currentStep + 1);
  };

  const submitLead = async () => {
    // Aquí podrías disparar conversión si tuvieras gtag
    setSubmitted(true);
    setStep(5); // Final Step
    
    // Simular el post al servidor si existiera
    try {
        await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                patientData: {
                    name: leadData.name,
                    phone: leadData.phone,
                    when: leadData.when,
                    schedule: leadData.schedule
                },
                therapistEmail: leadData.userEmail,
                therapistName: CLIENTE_NOMBRE
            })
        });
    } catch (_) { /* silent */ }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#1e293b] flex flex-col font-sans overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <header className="bg-white border-b border-black/5 py-4 px-[5%] flex justify-between items-center z-10 shrink-0">
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-3xl font-black text-[#1e4b6b] tracking-tighter leading-tight">{CLIENTE_SERVICIO}</h1>
          <div className="flex items-center gap-1 text-slate-500 text-[10px] lg:text-sm font-semibold">
            <MapPin size={12} className="inline lg:hidden" />
            <MapPin size={16} className="hidden lg:inline" />
            <span>{UBICACION}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest hidden lg:block">Contacto Directivo</p>
          <div className="flex items-center gap-2 text-md lg:text-xl font-bold text-[#2c6a91]">
            <Phone size={14} className="inline lg:hidden" />
            <Phone size={20} className="hidden lg:inline" />
            <a href={`tel:${TELEFONO}`}>{TELEFONO}</a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 p-2 lg:p-6 flex items-center justify-center overflow-auto lg:overflow-hidden">
        <div className="bg-white w-full max-w-[1400px] rounded-3xl shadow-2xl border border-white/80 overflow-hidden flex flex-col lg:grid lg:grid-cols-[20%_60%_20%] lg:h-[82vh]">
          
          {/* Column Izquierda (Desktop Order 1) */}
          <div className="p-6 lg:p-8 flex flex-col items-center bg-[#f8fafc] border-b lg:border-b-0 lg:border-r border-black/5 order-3 lg:order-1">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-28 lg:w-40 h-28 lg:h-40 rounded-full overflow-hidden border-4 lg:border-8 border-white shadow-lg mb-6"
            >
              <img src={URL_IMAGEN} alt={CLIENTE_NOMBRE} className="w-full h-full object-cover" />
            </motion.div>
            <p className="text-[10px] lg:text-sm text-slate-500 font-semibold text-center leading-relaxed mb-6 italic">
              "{SLOGAN}"
            </p>
            <button onClick={openModal} className="bg-white text-[#2c6a91] border border-[#2c6a91] px-4 py-2 rounded-full text-[9px] lg:text-xs font-black hover:bg-[#2c6a91] hover:text-white transition-all uppercase tracking-wider">
              SOLICITAR INFORMACIÓN
            </button>
          </div>

          {/* Column Central (Main Info) */}
          <div className="p-6 lg:p-12 flex flex-col justify-start lg:pt-16 order-1 lg:order-2 overflow-y-auto">
            <h2 className="text-3xl lg:text-6xl font-black text-slate-800 tracking-tighter mb-2 text-center lg:text-left">
              {CLIENTE_NOMBRE}
            </h2>
            <p className="text-lg lg:text-2xl font-bold text-[#2c6a91] mb-8 text-center lg:text-left">
              {PROFESION}
            </p>
            
            <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-black/5">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Especialidades</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-slate-600"><CheckCircle2 size={16} className="text-green-500" /> {ESP_1}</li>
                <li className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-slate-600"><CheckCircle2 size={16} className="text-green-500" /> {ESP_2}</li>
                <li className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-slate-600"><CheckCircle2 size={16} className="text-green-500" /> {ESP_3}</li>
              </ul>
            </div>

            <p className="mt-8 text-slate-500 text-xs lg:text-base leading-relaxed text-center lg:text-left max-w-2xl">
              {EXPERIENCIA_DESC}
            </p>
          </div>

          {/* Column Derecha (Action) */}
          <div className="p-8 lg:p-12 flex flex-col items-center justify-center lg:pt-20 bg-[#1e293b] text-white order-2 lg:order-3">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full mb-12 text-center">
              <p className="font-black text-[9px] text-slate-400 uppercase mb-3 tracking-widest">GARANTÍA BOLTON</p>
              <p className="text-xs lg:text-sm leading-relaxed opacity-90">
                {TEXTO_GARANTIA}
              </p>
            </div>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal} 
                className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black text-lg lg:text-xl shadow-2xl flex items-center justify-center gap-3"
            >
              RESERVAR
              <ArrowRight size={20} />
            </motion.button>
          </div>

        </div>
      </main>

      {/* WHATSAPP FLOAT */}
      <a href={`https://wa.me/${TELEFONO_LIMPIO}`} className="fixed bottom-6 right-6 bg-[#25d366] text-white w-14 lg:w-16 h-14 lg:h-16 rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle size={32} />
      </a>

      {/* TYPEFORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 z-[1000] flex items-center justify-center backdrop-blur-lg p-4"
          >
            <button onClick={closeModal} className="absolute top-6 right-6 text-white/50 hover:text-white"><X size={32} /></button>
            
            <div className="w-full max-w-xl text-white">
                <AnimatePresence mode="wait">
                    
                    {step === 1 && (
                        <motion.div key="st1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl font-black mb-4">¿Para cuándo necesitas la atención?</h2>
                            <div className="flex flex-col gap-4">
                                <button className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-blue-600/20 hover:border-blue-500 transition-all text-left text-xl font-bold" onClick={() => handleNextStep(1, "Lo antes posible")}>🚀 Lo antes posible</button>
                                <button className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-blue-600/20 hover:border-blue-500 transition-all text-left text-xl font-bold" onClick={() => handleNextStep(1, "Próxima semana")}>📅 Para la próxima semana</button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="st2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl font-black mb-4">¿En qué horario te acomodaría más?</h2>
                            <div className="flex flex-col gap-4">
                                <button className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-blue-600/20 hover:border-blue-500 transition-all text-left text-xl font-bold" onClick={() => handleNextStep(2, "Mañana")}>🌅 Mañana</button>
                                <button className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-blue-600/20 hover:border-blue-500 transition-all text-left text-xl font-bold" onClick={() => handleNextStep(2, "Tarde")}>☀️ Tarde</button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="st3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl font-black mb-4">Tu nombre completo:</h2>
                            <input 
                                type="text" 
                                autoFocus
                                className="bg-transparent border-b-4 border-white/20 text-3xl lg:text-5xl font-black outline-none py-4 focus:border-blue-500 transition-colors w-full"
                                placeholder="Escribe aquí..."
                                value={leadData.name}
                                onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                                onKeyDown={(e) => e.key === 'Enter' && leadData.name && handleNextStep(3)}
                            />
                            <div className="flex justify-between items-center mt-6">
                                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Presiona ENTER para seguir</p>
                                <button onClick={() => leadData.name && handleNextStep(3)} className="bg-blue-600 px-10 py-4 rounded-2xl font-black text-xl">SIGUIENTE</button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div key="st4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl font-black mb-4">Tu WhatsApp de contacto:</h2>
                            <div className="flex items-center gap-4 text-3xl lg:text-5xl border-b-4 border-white/20 focus-within:border-blue-500 transition-colors">
                                <span className="text-white/40 font-black">+56</span>
                                <input 
                                    type="tel" 
                                    autoFocus
                                    className="bg-transparent flex-1 font-black outline-none py-4"
                                    placeholder="9 1234 5678"
                                    value={leadData.phone}
                                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                                    onKeyDown={(e) => e.key === 'Enter' && leadData.phone && submitLead()}
                                />
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <button onClick={() => leadData.phone && submitLead()} className="bg-green-500 px-10 py-6 rounded-2xl font-black text-2xl shadow-xl shadow-green-500/20">ENVIAR SOLICITUD AHORA</button>
                                <p className="text-center text-white/40 text-sm font-bold">Respuesta inmediata via WhatsApp</p>
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div key="st5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-4">¡Solicitud Enviada! 🎉</h2>
                            <p className="text-xl text-white/60 mb-12">Claudio te contactará personalmente a la brevedad.</p>
                            <button onClick={closeModal} className="bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-black border border-white/10 transition-colors">CERRAR</button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
