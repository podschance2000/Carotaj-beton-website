import React from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
  highlight?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, content, href, highlight }) => {
  const CardContent = () => (
    <div className={`
      relative p-6 rounded-3xl border transition-all duration-500 ease-out flex flex-col gap-3 h-full
      ${highlight 
        ? 'bg-industrial-500/80 backdrop-blur-2xl border-industrial-400/50 text-white hover:bg-industrial-500/90 hover:shadow-xl hover:shadow-industrial-500/20' 
        : 'bg-white/5 backdrop-blur-lg border-white/10 text-white hover:bg-white/10 hover:border-white/20'
      }
      hover:scale-[1.01] active:scale-[0.99] cursor-pointer group
    `}>
      <div className="flex justify-between items-start">
        <div className={`p-2.5 rounded-2xl transition-colors duration-300 ${highlight ? 'bg-white/20 text-white' : 'bg-white/5 text-white/90 group-hover:bg-white/10'}`}>
          <Icon size={20} />
        </div>
        {href && (
          <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-end mt-2">
        <h4 className={`text-xs font-medium uppercase tracking-wider mb-2 ${highlight ? 'text-white/90' : 'text-white/50 group-hover:text-white/70 transition-colors'}`}>
          {title}
        </h4>
        <p className="text-base font-bold leading-snug text-balance opacity-95 whitespace-normal break-words">
          {content}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default InfoCard;