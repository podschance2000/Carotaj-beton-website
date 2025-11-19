import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from './components/ContactForm';
import InfoCard from './components/InfoCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-zinc-950 font-sans selection:bg-industrial-500 selection:text-white">
      
      {/* Background - Solid Deep Zinc with subtle lighting effects */}
      <div className="fixed inset-0 z-0 bg-zinc-950"></div>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[60vw] h-[60vw] z-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(245,158,11,0.08)_0%,_rgba(0,0,0,0)_50%)] blur-3xl pointer-events-none"></div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-20 lg:min-h-screen lg:flex lg:items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full h-full items-center">
          
          {/* Left Column: Advert Text */}
          <div className="lg:col-span-5 flex flex-col justify-center text-white relative">
            
            {/* Advert Header */}
            <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center space-x-2 bg-industrial-500/10 border border-industrial-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-industrial-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-industrial-500">București • Acoperire Națională</span>
              </div>
              
              {/* Main Typography - Advert Style */}
              <div className="relative">
                {/* Background Blur Text for Depth */}
                <h1 className="absolute top-1 left-1 text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white/5 blur-[1px] select-none pointer-events-none">
                  CAROTAJ<br/>BETON
                </h1>
                
                {/* Main Text */}
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white relative z-10">
                  CAROTAJ<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">
                    BETON
                  </span>
                  <span className="text-industrial-500">.</span>
                </h1>
              </div>
              
              {/* Value Proposition / Subtitle */}
              <div className="space-y-6 max-w-lg">
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-snug border-l-4 border-industrial-500 pl-6">
                   Carotare profesională fără vibrații, Ø50mm - Ø500mm. Ideal pentru instalații HVAC, sanitare, electrice și proiecte complexe.
                </p>
                
                {/* Feature List */}
                <div className="grid grid-cols-1 gap-3 text-slate-400 font-medium text-sm">
                  <div className="flex items-center space-x-3 group cursor-default">
                    <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-industrial-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>Diametre Ø50mm - Ø500mm</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-default">
                    <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-industrial-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>Acoperire Națională (Deplasare contra cost)</span>
                  </div>
                   <div className="flex items-center space-x-3 group cursor-default">
                    <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-industrial-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>Prețuri Negociabile la Telefon</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-default">
                    <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-industrial-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>Tehnologie Fără Vibrații • Tăieri Curate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Widgets */}
            <div className="mt-10 animate-in slide-in-from-bottom duration-700 delay-200 fade-in fill-mode-backwards">
              <div className="max-w-sm">
                <InfoCard 
                  icon={Phone} 
                  title="Sună Acum" 
                  content="0762 578 615" 
                  href="tel:+40762578615"
                  highlight
                />
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 w-full h-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/40 p-2 md:p-6 animate-in zoom-in-95 duration-700 delay-300 fade-in fill-mode-backwards relative overflow-hidden group">
              
              {/* Shine effect on the form container */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <ContactForm />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;