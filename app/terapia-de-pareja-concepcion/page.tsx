import { Heart, CheckCircle2, MapPin, ArrowUpRight, MessageCircle, ShieldCheck, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terapia de Pareja en Concepción | Ps. Claudio Fernández',
    description: 'Terapia de pareja de alto nivel en Concepción y San Pedro de la Paz (Andalué). Reconstruya la intimidad, mejore la comunicación y supere la crisis. Inversión: $75.000.',
    keywords: ['Terapia de pareja en Concepción', 'Psicólogo de pareja Concepción', 'Terapia matrimonial Concepción', 'Problemas de pareja Concepción', 'Psicólogo Andalué San Pedro de la Paz'],
};

export default function TerapiaParejaPage() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
            <section className="py-24 lg:py-48 px-[5%] bg-slate-900 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[200px] rounded-full" />
                <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-blue-400">
                        <Heart size={14} /> Atención Presencial Exclusiva
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                        Terapia de Pareja en <span className="text-blue-500">Concepción</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-12">
                        Un espacio de alta fidelidad clínica para matrimonios y parejas que buscan restaurar la comunicación, la confianza y la estructura de su vínculo afectivo.
                    </p>
                    <a href="https://wa.me/56978789839" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-105 transition-transform mx-auto w-fit shadow-xl">
                        Consultar Disponibilidad <ArrowUpRight size={24} />
                    </a>
                </div>
            </section>

            <section className="py-24 px-[5%] max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                        <ShieldCheck size={48} className="text-blue-600 mb-8" />
                        <h3 className="text-4xl font-black tracking-tight mb-6">El Enfoque Clínico</h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Mi metodología se basa en la objetividad y la directividad. No busco culpables, sino dinámicas disfuncionales. Entenderemos los patrones de interacción, los ciclos de reactividad y diseñaremos estrategias prácticas para desarticular el conflicto.
                        </p>
                        <ul className="space-y-4">
                            {['Resolución constructiva de conflictos', 'Recuperación de la intimidad y confianza', 'Alineación de proyectos vitales'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                    <CheckCircle2 size={24} className="text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center lg:text-left">
                        <h3 className="text-4xl font-black tracking-tight mb-8">Inversión y Estructura</h3>
                        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl mb-12">
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">VALOR POR SESIÓN CONJUNTA</p>
                            <div className="text-7xl font-black text-blue-500 tracking-tighter">$75.000 <span className="text-xl text-slate-500">CLP</span></div>
                        </div>
                        <p className="text-lg text-slate-400 leading-relaxed italic">
                            Las sesiones de dirección de vínculos garantizan total imparcialidad y un entorno seguro para discusiones difíciles.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-[5%] bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-center mb-16 italic">Dónde Atiendo</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                            <MapPin className="text-blue-600 mb-6" size={32} />
                            <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">UBICACIÓN CÉNTRICA</h4>
                            <h3 className="text-3xl font-black mb-4">Concepción Centro</h3>
                            <p className="text-lg font-bold mb-2">Barros Arana 188, Concepción</p>
                            <p className="text-slate-500 mb-6">Ideal para ejecutivos y profesionales que trabajan en el corazón de la ciudad.</p>
                            <p className="text-sm font-black text-blue-600">Lunes, Miércoles y Viernes</p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                            <MapPin className="text-blue-500 mb-6" size={32} />
                            <h4 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2">SEDE RESIDENCIAL</h4>
                            <h3 className="text-3xl font-black mb-4">Andalué, San Pedro</h3>
                            <p className="text-lg font-bold mb-2">Sector Andalué, San Pedro de la Paz</p>
                            <p className="text-slate-500 mb-6">Ubicación discreta y de fácil acceso para residentes del sector.</p>
                            <p className="text-sm font-black text-blue-500">Martes</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-24 px-[5%] bg-slate-900 text-white text-center">
                <h2 className="text-3xl font-black mb-2">Claudio Fernández</h2>
                <p className="text-slate-500 mb-12">Psicólogo Clínico Especialista en Terapia de Pareja · Concepción</p>
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold italic"><CheckCircle2 size={14} className="text-green-500" /> Profesional Acreditado</div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold italic"><Lock size={14} className="text-blue-400" /> Confidencialidad Absoluta</div>
                </div>
                <a href="/" className="text-blue-400 font-bold hover:underline">← Volver al Inicio</a>
            </footer>
        </div>
    );
}
