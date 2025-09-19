import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId }) => {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer group"
    >
      <div className="flex flex-col items-center space-y-[-18px]">
        {/* Three chevrons with different animation delays for a cascading effect */}
        <ChevronDown
          className="w-10 h-10 text-white/70 animate-chevron-scroll"
          style={{ animationDelay: '0s' }}
        />
        <ChevronDown
          className="w-10 h-10 text-white/70 animate-chevron-scroll"
          style={{ animationDelay: '0.2s' }}
        />
        <ChevronDown
          className="w-10 h-10 text-white/70 animate-chevron-scroll"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
