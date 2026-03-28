"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2, X, Clock, Lock } from "lucide-react";

function BookingPopup({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ motivo: '', horario: '', nombre: '', telefono: '' });
  const totalSteps = 4;
  const next = () => { if (step < totalSteps) setStep(step + 1); else handleSubmit(); };
  const prev = () => { if (step > 1) setStep(step - 1); };
  const handleSubmit = async () => {
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientData: formData, therapistEmail: 'cfernandez@psyclaudio.cl', therapistName: 'Ps. Claudio Fernández' }),
      });
    } catch (_) {}
    setSubmitted(true);
  };
  const progress = (step / totalSteps) * 100;
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[10000] p-4 backdrop-blur-md" onClick={onClose}>
        <div className="bg-white rounded-3xl max-w-lg w-full p-12 text-center shadow-2xl" onClick={e => e.stopPropagation()}>
          <CheckCircle2 size={60} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">¡Solicitud enviada!</h2>
          <p className="text-slate-600 mb-8">Claudio te contactará a la brevedad por WhatsApp. Gracias, {formData.nombre}.</p>
          <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[10000] p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="bg-white rounded-3xl max-w-xl w-full p-16 relative shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400"><X size={24} /></button>
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 rounded-t-3xl overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-2xl font-black mb-8">¿Cuál es el motivo de consulta?</h3>
              {['Terapia de Pareja', 'Psicoterapia Individual', 'Crisis o Separación', 'Otro motivo'].map(opt => (
                <button key={opt} onClick={() => { setFormData({ ...formData, motivo: opt }); next(); }} className="w-full text-left p-4 mb-3 border-2 border-slate-100 rounded-xl hover:border-blue-600 font-semibold">{opt}</button>
              ))}
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-2xl font-black mb-8">¿En qué horario prefieres?</h3>
              {['Mañana (09:00 - 13:00)', 'Tarde (14:00 - 18:00)', 'Vespertino (18:00 - 21:00)'].map(opt => (
                <button key={opt} onClick={() => { setFormData({ ...formData, horario: opt }); next(); }} className="w-full text-left p-4 mb-3 border-2 border-slate-100 rounded-xl hover:border-blue-600 font-semibold flex items-center gap-3"><Clock size={18} /> {opt}</button>
              ))}
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-2xl font-black mb-8">¿Cuál es tu nombre?</h3>
              <input autoFocus type="text" className="w-full p-4 border-2 border-blue-600 rounded-xl text-xl font-bold mb-6" value={formData.nombre} onChange={e => setLeadData({ ...formData, nombre: e.target.value })} />
              <button disabled={!formData.nombre} onClick={next} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">Continuar</button>
            </motion.div>
          )}
          {step === 4 && (
            <motion.div key="4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-2xl font-black mb-8">Tu número de WhatsApp</h3>
              <div className="flex items-center gap-2 p-4 border-2 border-blue-600 rounded-xl text-xl font-bold mb-6">
                <span className="text-slate-400">+56</span>
                <input autoFocus type="tel" className="flex-1 outline-none" value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} />
              </div>
              <button disabled={!formData.telefono} onClick={next} className="w-full bg-green-500 text-white py-4 rounded-xl font-bold">Solicitar Reserva</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function LandingBolton() {
  const [showPopup, setShowPopup] = useState(false);
  const name = "Claudio Fernández Bolton";
  const profession = "Psicólogo Clínico Especialista en Vínculos";
  const service = "Atención Psicológica y Terapia de Pareja";
  const location = "Concepción / San Pedro de la Paz";
  const phone = "+56 9 7878 9839";
  const experience = "Psicólogo con más de 15 años de experiencia clínica. Experto en alta complejidad clínica y resolución de crisis de pareja.";
  const specialties = ["Problemas de comunicación", "Reconstrucción de la confianza", "Falta de conexión emocional", "Crisis y cambios en la pareja", "Intimidad y sexualidad", "Dificultades en la crianza", "Desgaste y rutina", "Manejo de conflictos externos", "Procesos de separación y divorcio"];
  const slogan = "Recuperando la arquitectura emocional de la relación.";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] flex flex-col font-sans overflow-x-hidden">
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}
      <header className="bg-white border-b border-black/5 py-4 px-[5%] flex justify-between items-center z-10 shrink-0">
        <div className="flex flex-col">
            <h1 className="text-xl lg:text-3xl font-black text-[#1e4b6b] leading-tight">{service}</h1>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold italic"><MapPin size={14} /> <span>{location}</span></div>
        </div>
        <div className="text-right hidden sm:block">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contacto Directo</p>
            <p className="text-xl font-bold text-[#2c6a91] tracking-tighter">{phone}</p>
        </div>
      </header>

      <main className="flex-1 p-2 lg:p-6 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white w-full max-w-[1400px] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[22%_56%_22%] lg:min-h-[750px]">
          <div className="p-8 flex flex-col items-center bg-[#f8fafc] border-b lg:border-r border-black/5">
            <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6">
                <img src="/claudio-portrait.png" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-slate-500 font-semibold text-center leading-relaxed italic mb-8">"{slogan}"</p>
            <button onClick={() => setShowPopup(true)} className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full font-black text-xs hover:bg-blue-600 hover:text-white transition-all">RESERVAR HORA</button>
          </div>

          <div className="p-8 lg:p-16 flex flex-col">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none mb-2">{name}</h2>
            <p className="text-xl lg:text-2xl font-bold text-blue-600 mb-12">{profession}</p>
            <div className="bg-slate-50 p-8 rounded-2xl border border-black/5 mb-8">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-6 underline decoration-blue-600 decoration-2">Intervención Clínica</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specialties.map(s => <div key={s} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 size={16} className="text-green-500" /> {s}</div>)}
                </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{experience}</p>
          </div>

          <div className="p-12 bg-[#1e293b] text-white flex flex-col items-center justify-center text-center">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full mb-12">
                <Lock size={24} className="text-blue-400 mx-auto mb-4" />
                <p className="font-black text-[9px] text-slate-400 uppercase mb-3 text-center">GARANTÍA BOLTON</p>
                <p className="text-xs leading-relaxed opacity-90 text-center">Si la primera cita no te parece excelente, devolvemos tu dinero. Sin preguntas.</p>
            </div>
            <button onClick={() => setShowPopup(true)} className="w-full bg-blue-600 py-6 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-transform">RESERVAR <ArrowRight /></button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
