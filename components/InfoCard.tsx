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
      relative p-5 rounded-3xl backdrop-blur-md border transition-all duration-300 flex flex-col justify-between h-32
      ${highlight 
        ? 'bg-industrial-500/90 border-industrial-400/50 text-white hover:bg-industrial-500' 
        : 'bg-white/10 border-white/10 text-white hover:bg-white/20'
      }
      hover:scale-[1.02] active:scale-[0.98] cursor-pointer group
    `}>
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-2xl ${highlight ? 'bg-white/20' : 'bg-white/10'}`}>
          <Icon size={20} />
        </div>
        {href && (
          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      
      <div>
        <h4 className={`text-xs font-medium uppercase tracking-wider mb-1 ${highlight ? 'text-white/80' : 'text-white/50'}`}>
          {title}
        </h4>
        <p className="text-lg font-bold leading-tight tracking-tight truncate">
          {content}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default InfoCard;