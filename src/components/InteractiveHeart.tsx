import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const InteractiveHeart = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [heartCount, setHeartCount] = useState(0);

  const createHeart = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newHeart = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    
    setHearts(prev => [...prev, newHeart]);
    setHeartCount(prev => prev + 1);
    
    // Remove heart after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="text-center">
        <div className="mb-2">
          <span className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            💕 {heartCount} love clicks
          </span>
        </div>
        <div
          className="relative bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-4 cursor-pointer hover:scale-110 transition-transform shadow-lg"
          onClick={createHeart}
        >
          <Heart className="w-8 h-8 text-white fill-current" />
          
          {hearts.map(heart => (
            <div
              key={heart.id}
              className="absolute pointer-events-none animate-ping"
              style={{
                left: heart.x - 12,
                top: heart.y - 12,
                animation: 'heartFloat 2s ease-out forwards'
              }}
            >
              <Heart className="w-6 h-6 text-pink-500 fill-current" />
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">Klik untuk kasih love! 💕</p>
      </div>
    </div>
  );
};

export default InteractiveHeart;