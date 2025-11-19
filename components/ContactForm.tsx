import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, ChevronDown, AlertCircle } from 'lucide-react';
import { ContactStatus, ServiceType } from '../types';

const services: ServiceType[] = [
  { id: 'carotaj', label: 'Carotaj Beton' },
  { id: 'taiere', label: 'Tăiere Beton' },
  { id: 'demolare', label: 'Demolare Controlată' },
  { id: 'consultanta', label: 'Consultanță Tehnică' },
];

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0].id,
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === ContactStatus.ERROR) setStatus(ContactStatus.IDLE);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SUBMITTING);

    try {
      // This URL should be set in your environment variables (e.g. Google Cloud Function URL)
      const apiUrl = process.env.REACT_APP_CONTACT_WEBHOOK_URL;

      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Server error');
      } else {
        // Simulation fallback if no backend is connected yet
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      setStatus(ContactStatus.SUCCESS);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus(ContactStatus.ERROR);
    }
  };

  if (status === ContactStatus.SUCCESS) {
    return (
      <div className="h-full min-h-[450px] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 rounded-full animate-pulse"></div>
            <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/20 border border-green-50">
                <CheckCircle size={48} className="text-green-500" strokeWidth={2} />
            </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">Solicitare Trimisă</h3>
        <p className="text-slate-500 mb-8 text-base md:text-lg max-w-xs mx-auto leading-relaxed font-medium text-balance">
          Am primit detaliile tale. Un specialist Carotaj Pro te va contacta în scurt timp.
        </p>
        
        <button 
          onClick={() => {
             setStatus(ContactStatus.IDLE);
             setFormData({ name: '', email: '', phone: '', service: services[0].id, message: '' });
          }}
          className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full font-semibold transition-all active:scale-95 hover:shadow-lg"
        >
          Trimite altă cerere
        </button>
      </div>
    );
  }

  // Helper to generate the glass/blur class string
  const getInputClass = (fieldName: string) => `
    w-full bg-transparent border-none px-4 py-3.5 text-slate-900 placeholder-slate-400 
    focus:ring-0 text-base font-medium outline-none transition-all duration-300
  `;

  const getContainerClass = (fieldName: string) => `
    relative group transition-all duration-500 rounded-2xl overflow-hidden border
    ${focusedField === fieldName 
      ? 'bg-white/80 backdrop-blur-xl border-white/60 ring-2 ring-industrial-500/20 shadow-2xl shadow-industrial-500/10 scale-[1.02] z-20' 
      : 'bg-slate-50/50 border-transparent hover:bg-white/80 hover:border-white/40 hover:shadow-lg z-10'
    }
  `;

  return (
    <div className="h-full flex flex-col p-5 md:p-8 relative overflow-hidden">
      {/* Decorative background elements inside the form container for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-1">Hai să discutăm</h2>
        <p className="text-slate-500 text-sm md:text-base font-medium">
          Completează formularul pentru o ofertă gratuită.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 flex-1 flex flex-col space-y-4 md:space-y-5">
        
        {/* Name Input */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Nume</label>
          <div className={getContainerClass('name')}>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={getInputClass('name')}
              placeholder="ex. Andrei Popescu"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
          <div className={getContainerClass('email')}>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={getInputClass('email')}
              placeholder="ex. contact@email.com"
            />
          </div>
        </div>

        {/* Phone & Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Telefon</label>
                <div className={getContainerClass('phone')}>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={getInputClass('phone')}
                    placeholder="07xx xxx xxx"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Serviciu</label>
                <div className={getContainerClass('service')}>
                    <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`${getInputClass('service')} appearance-none cursor-pointer`}
                    >
                        {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
            </div>
        </div>

        {/* Message Input */}
        <div className="space-y-1.5 flex-1 flex flex-col">
          <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Detalii Proiect</label>
          <div className={`${getContainerClass('message')} flex-1`}>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`${getInputClass('message')} resize-none min-h-[100px] h-full`}
              placeholder="Descrie pe scurt lucrarea..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="space-y-3 pt-2">
            <button
            type="submit"
            disabled={status === ContactStatus.SUBMITTING}
            className={`
                relative w-full py-4 px-6 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform
                flex items-center justify-center space-x-2 overflow-hidden shadow-lg
                ${status === ContactStatus.SUBMITTING 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none scale-[0.98]' 
                    : status === ContactStatus.ERROR
                        ? 'bg-red-50 text-red-500 border border-red-200 hover:bg-red-100'
                        : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-slate-900/25 hover:scale-[1.02] active:scale-[0.98]'
                }
            `}
            >
                {status === ContactStatus.SUBMITTING ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Se trimite...</span>
                    </>
                ) : status === ContactStatus.ERROR ? (
                    <>
                         <AlertCircle size={20} />
                         <span>Eroare. Reîncearcă.</span>
                    </>
                ) : (
                    <>
                        <span>Solicită Ofertă</span>
                        <Send size={18} className="ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
            
            <p className="text-center text-xs text-slate-400 font-medium">
                Garantăm confidențialitatea datelor tale.
            </p>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;