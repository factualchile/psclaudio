"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, X, Clock, User, Heart } from 'lucide-react';

export default function ReservasParejas() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ motive: 'Terapia de Pareja', time: '', name: '', whatsapp: '' });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleSubmit = async () => {
    setSubmitted(true);
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientData: formData, therapistEmail: 'cfernandez@psyclaudio.cl', therapistName: 'Claudio Fernández Bolton' })
      });
    } catch (_) {}
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col p-4">
      <header className="py-6 px-[5%] flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black text-blue-500 italic tracking-tighter leading-none">Ps. Claudio Fernández</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Especialista en Terapia de Pareja</p>
        </div>
        <div className="text-right hidden sm:block">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Atención en Concepción y San Pedro</p>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                {step === 1 && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-8">¿Cuál es el motivo de su consulta de pareja?</h2>
                        {['Crisis emocional', 'Problemas de comunicación', 'Reconciliación', 'Proceso de Separación'].map(opt => (
                            <button key={opt} onClick={() => { setFormData({...formData, motive: opt}); next(); }} className="w-full text-left p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 transition-all font-bold text-xl">{opt}</button>
                        ))}
                    </div>
                )}
                {step === 2 && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-8">¿En qué horario le acomoda más?</h2>
                        {['Mañana (9:00 - 13:00)', 'Tarde (14:00 - 18:00)', 'Vespertino (18:00 - 21:00)'].map(opt => (
                            <button key={opt} onClick={() => { setFormData({...formData, time: opt}); next(); }} className="w-full text-left p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500 transition-all font-bold text-xl flex items-center gap-4"><Clock className="text-blue-400" /> {opt}</button>
                        ))}
                        <button onClick={back} className="mt-4 text-slate-500 font-bold tracking-widest uppercase text-xs mx-auto">← Volver</button>
                    </div>
                )}
                {step === 3 && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-8">¿Cuál es su nombre completo?</h2>
                        <input autoFocus type="text" className="w-full bg-transparent border-b-4 border-white/20 text-4xl font-black p-4 outline-none focus:border-blue-500" placeholder="Escriba aquí..." value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} onKeyDown={e => e.key === 'Enter' && formData.name && next()} />
                        <button disabled={!formData.name} onClick={next} className="bg-blue-600 py-6 rounded-2xl font-black text-xl mt-8">SIGUIENTE</button>
                    </div>
                )}
                {step === 4 && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-8">Su número de WhatsApp:</h2>
                        <div className="flex items-center gap-4 text-4xl font-black border-b-4 border-white/20 focus-within:border-blue-500">
                            <span className="text-white/40">+56</span>
                            <input autoFocus type="tel" className="flex-1 bg-transparent p-4 outline-none" placeholder="9 1234 5678" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} onKeyDown={e => e.key === 'Enter' && formData.whatsapp && handleSubmit()} />
                        </div>
                        <button disabled={!formData.whatsapp} onClick={handleSubmit} className="bg-green-500 py-6 rounded-2xl font-black text-2xl mt-8 shadow-xl shadow-green-500/10">SOLICITAR RESERVA AHORA</button>
                    </div>
                )}
              </motion.div>
            ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                    <CheckCircle2 size={100} className="text-green-500 mx-auto mb-8" />
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4">¡Solicitud Enviada!</h2>
                    <p className="text-xl text-slate-400 mb-12">Claudio te contactará personalmente vía WhatsApp a la brevedad para confirmar tu hora.</p>
                    <a href="/" className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs">Cerrar</a>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-600 text-[10px] uppercase tracking-widest font-black">
        Confidencialidad Absoluta · Concepción, Chile 2026
      </footer>
    </div>
  );
}
