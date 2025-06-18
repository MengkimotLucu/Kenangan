import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Sparkles, Trophy } from 'lucide-react';

const LoveCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);

  useEffect(() => {
    const startDate = new Date('2024-06-19T00:00:00');
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const createConfetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const newConfetti = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setConfetti(newConfetti);
  };

  const handleSelesai = () => {
    setShowCelebration(true);
    createConfetti();
    
    // Play celebration sound if available
    const audio = new Audio('/semua-tentang-kita.mp3.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      console.log('Audio autoplay blocked');
    });
    
    // Hide celebration after 5 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setConfetti([]);
    }, 5000);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-pink-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute w-2 h-2 animate-bounce"
              style={{
                left: `${piece.x}%`,
                top: `${piece.y}%`,
                backgroundColor: piece.color,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="text-center animate-pulse">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
              SELESAI!
            </h1>
            <p className="text-xl text-white drop-shadow-lg">
              Kenangan kita abadi selamanya! 💕
            </p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Calendar className="w-8 h-8 text-red-500 mr-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Penghitung Kenangan
          </h2>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Sudah berapa lama kita mengenal satu sama lain
        </p>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-red-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-red-500 mb-2">
                {timeElapsed.days}
              </div>
              <div className="text-sm md:text-base text-gray-600">Hari</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-pink-500 mb-2">
                {timeElapsed.hours}
              </div>
              <div className="text-sm md:text-base text-gray-600">Jam</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-500 mb-2">
                {timeElapsed.minutes}
              </div>
              <div className="text-sm md:text-base text-gray-600">Menit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-2">
                {timeElapsed.seconds}
              </div>
              <div className="text-sm md:text-base text-gray-600">Detik</div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Heart className="w-6 h-6 text-red-500 animate-pulse mr-2" />
            <p className="text-gray-700 font-medium">
              Setiap detik bersama adalah kenangan berharga
            </p>
            <Heart className="w-6 h-6 text-red-500 animate-pulse ml-2" />
          </div>

          {/* Selesai Button */}
          <div className="mt-8">
            <button
              onClick={handleSelesai}
              disabled={showCelebration}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              {/* Sparkle effects */}
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              <span>SELESAI</span>
              <Trophy className="w-5 h-5 ml-2 animate-bounce" />
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
            
            <p className="text-sm text-gray-500 mt-2">
              Klik untuk merayakan kenangan kita! 🎊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveCounter;