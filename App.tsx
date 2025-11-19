import React from 'react';
import { Phone, MapPin, Hammer, Clock } from 'lucide-react';
import InfoCard from './components/InfoCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 font-sans selection:bg-industrial-500 selection:text-white overflow-x-hidden flex flex-col">
      
      {/* Background - Solid Deep Zinc with subtle lighting effects */}
      <div className="fixed inset-0 z-0 bg-zinc-950"></div>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[60vw] h-[60vw] z-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(245,158,11,0.08)_0%,_rgba(0,0,0,0)_50%)] blur-3xl pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex flex-col justify-center items-center">
        
        {/* Content Container */}
        <div className="w-full flex flex-col items-center text-center space-y-12 md:space-y-16">
            
            {/* Header Section */}
            <div className="space-y-6 animate-in slide-in-from-bottom duration-700 fade-in">
              {/* Tagline Badge */}
              <div className="inline-flex items-center space-x-2 bg-industrial-500/10 border border-industrial-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-industrial-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-industrial-500">București • Ilfov</span>
              </div>
              
              {/* Main Typography */}
              <div className="relative">
                 <h1 className="absolute top-1 left-1/2 -translate-x-1/2 w-full text-[15vw] sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white/5 blur-[1px] select-none pointer-events-none">
                  CAROTAJ
                </h1>
                <h1 className="text-[15vw] sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white relative z-10">
                  CAROTAJ<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">
                    BETON
                  </span>
                  <span className="text-industrial-500">.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto border-b border-white/10 pb-8">
                 Executăm găuri profesionale în beton armat, cărămidă și BCA pentru instalații sanitare, termice și electrice.<br className="hidden md:block" />
                 Fără vibrații. Fără praf. Precizie maximă.
              </p>
            </div>

            {/* Primary CTA: Phone Number - Huge Card */}
            <div className="w-full max-w-xl animate-in zoom-in-95 duration-700 delay-150 fade-in fill-mode-backwards group cursor-pointer">
                <a href="tel:+40762578615" className="block relative">
                    <div className="absolute inset-0 bg-industrial-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-[3rem]"></div>
                    <div className="relative bg-zinc-900/50 hover:bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-industrial-500/50 rounded-[2.5rem] p-8 md:p-12 transition-all duration-300 flex flex-col items-center space-y-5 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-industrial-500/10">
                        
                        <div className="w-24 h-24 bg-gradient-to-br from-industrial-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-xl shadow-industrial-500/20 group-hover:rotate-6 transition-transform duration-500 ease-out">
                            <Phone className="text-white w-10 h-10" strokeWidth={2.5} />
                        </div>
                        
                        <div className="space-y-2">
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Sună pentru Ofertă</p>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight tabular-nums">0762 578 615</h2>
                        </div>
                        
                        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                             </span>
                             <span>Disponibil Acum</span>
                        </div>
                    </div>
                </a>
            </div>

            {/* Info Grid - Secondary Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl animate-in slide-in-from-bottom duration-700 delay-300 fade-in fill-mode-backwards">
                <InfoCard 
                  icon={Hammer} 
                  title="Servicii Complete" 
                  content="Carotaj umed & uscat (Ø50-500mm), tăiere cu fir diamantat." 
                />
                 <InfoCard 
                  icon={MapPin} 
                  title="Arie Acoperire" 
                  content="Intervenții rapide în tot Bucureștiul și județul Ilfov." 
                />
                 <InfoCard 
                  icon={Clock} 
                  title="Program Lucru" 
                  content="Luni - Sâmbătă: 08:00 - 20:00. Urgențe: Non-Stop." 
                />
            </div>

        </div>
      </main>
    </div>
  );
};

export default App;