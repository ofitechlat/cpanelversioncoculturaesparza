import React from 'react';
import { Music, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Music size={28} className="mr-1" />
        <Zap size={14} className="absolute -right-1 -bottom-1 text-orange-500" />
      </div>
      <span className="font-bold text-xl ml-1">ConCultura</span>
      <span className="text-orange-500 font-light ml-1">Esparza</span>
    </div>
  );
};

export default Logo;