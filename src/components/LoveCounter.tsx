import React, { useState, useEffect } from 'react';
import { Heart, Calendar } from 'lucide-react';

const LoveCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-pink-50">
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
        </div>
      </div>
    </section>
  );
};

export default LoveCounter;