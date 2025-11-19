import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
    }, 1500);
  };

  if (status === ContactStatus.SUCCESS) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-green-400 blur-xl opacity-20 rounded-full"></div>
            <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/10 border border-green-100">
                <CheckCircle size={48} className="text-green-500" strokeWidth={2} />
            </div>
        </div>
        
        <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Solicitare Trimisă</h3>
        <p className="text-slate-500 mb-8 text-lg max-w-xs mx-auto leading-relaxed font-medium text-balance">
          Am primit detaliile tale. Un specialist Carotaj Pro te va contacta în scurt timp.
        </p>
        
        <button 
          onClick={() => {
             setStatus(ContactStatus.IDLE);
             setFormData({ name: '', email: '', phone: '', service: services[0].id, message: '' });
          }}
          className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full font-semibold transition-all active:scale-95"
        >
          Trimite altă cerere
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-5 md:p-10 relative overflow-hidden">
        {/* Decorative background elements inside the form container for depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Hai să discutăm</h2>
        <p className="text-slate-500 text-base md:text-lg font-medium">
          Completează formularul pentru o ofertă gratuită.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 flex-1 flex flex-col space-y-3 md:space-y-4">
        
        {/* Name Input */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Nume</label>
          <div className={`
            relative group transition-all duration-300 rounded-2xl overflow-hidden
            ${focusedField === 'name' 
              ? 'ring-2 ring-industrial-500/20 shadow-lg shadow-industrial-500/10 bg-white/80 backdrop-blur-md' 
              : 'bg-slate-50/80 hover:bg-white hover:shadow-md'
            }
          `}>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-none px-4 py-3 md:py-3.5 text-slate-900 placeholder-slate-400 focus:ring-0 text-base font-medium outline-none"
              placeholder="ex. Andrei Popescu"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Email</label>
          <div className={`
            relative group transition-all duration-300 rounded-2xl overflow-hidden
            ${focusedField === 'email' 
              ? 'ring-2 ring-industrial-500/20 shadow-lg shadow-industrial-500/10 bg-white/80 backdrop-blur-md' 
              : 'bg-slate-50/80 hover:bg-white hover:shadow-md'
            }
          `}>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-none px-4 py-3 md:py-3.5 text-slate-900 placeholder-slate-400 focus:ring-0 text-base font-medium outline-none"
              placeholder="ex. contact@email.com"
            />
          </div>
        </div>

        {/* Phone & Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Telefon</label>
                <div className={`
                    relative group transition-all duration-300 rounded-2xl overflow-hidden
                    ${focusedField === 'phone' 
                      ? 'ring-2 ring-industrial-500/20 shadow-lg shadow-industrial-500/10 bg-white/80 backdrop-blur-md' 
                      : 'bg-slate-50/80 hover:bg-white hover:shadow-md'
                    }
                `}>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-none px-4 py-3 md:py-3.5 text-slate-900 placeholder-slate-400 focus:ring-0 text-base font-medium outline-none"
                    placeholder="07xx xxx xxx"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Serviciu</label>
                <div className={`
                    relative group transition-all duration-300 rounded-2xl overflow-hidden
                    ${focusedField === 'service' 
                      ? 'ring-2 ring-industrial-500/20 shadow-lg shadow-industrial-500/10 bg-white/80 backdrop-blur-md' 
                      : 'bg-slate-50/80 hover:bg-white hover:shadow-md'
                    }
                `}>
                    <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-none px-4 py-3 md:py-3.5 text-slate-900 focus:ring-0 text-base font-medium outline-none appearance-none cursor-pointer"
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
          <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Detalii Proiect</label>
          <div className={`
            flex-1 relative group transition-all duration-300 rounded-2xl overflow-hidden
            ${focusedField === 'message' 
              ? 'ring-2 ring-industrial-500/20 shadow-lg shadow-industrial-500/10 bg-white/80 backdrop-blur-md' 
              : 'bg-slate-50/80 hover:bg-white hover:shadow-md'
            }
          `}>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full h-full bg-transparent border-none px-4 py-3 md:py-3.5 text-slate-900 placeholder-slate-400 focus:ring-0 text-base font-medium outline-none resize-none min-h-[100px]"
              placeholder="Descrie pe scurt lucrarea..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === ContactStatus.SUBMITTING}
          className={`
            relative w-full py-3.5 md:py-4 px-6 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform
            flex items-center justify-center space-x-2 overflow-hidden
            ${status === ContactStatus.SUBMITTING 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 hover:scale-[1.01] active:scale-[0.98]'
            }
          `}
        >
            {status === ContactStatus.SUBMITTING ? (
                <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Se trimite...</span>
                </>
            ) : (
                <>
                    <span>Solicită Ofertă</span>
                    <Send size={18} className="ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </button>

        <p className="text-center text-xs text-slate-400 mt-1 font-medium">
            Răspundem de obicei în maxim 30 de minute.
        </p>

      </form>
    </div>
  );
};

export default ContactForm;