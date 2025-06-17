import React from 'react';
import { Heart, Star, Sparkles, Flower } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Heart, color: 'text-pink-300/40', size: 'w-3 h-3 sm:w-4 sm:h-4' },
    { Icon: Star, color: 'text-yellow-300/40', size: 'w-3 h-3 sm:w-4 sm:h-4' },
    { Icon: Sparkles, color: 'text-purple-300/40', size: 'w-3 h-3 sm:w-4 sm:h-4' },
    { Icon: Flower, color: 'text-pink-400/40', size: 'w-3 h-3 sm:w-4 sm:h-4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(12)].map((_, i) => {
        const Element = elements[i % elements.length];
        return (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <Element.Icon className={`${Element.size} ${Element.color}`} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;