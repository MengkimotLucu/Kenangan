import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

const PoemSection = () => {
  const poemLines = [
    "Di antara hiruk pikuk dunia yang tak pernah diam,",
    "Hadirlah kamu dengan senyum yang menenangkan.",
    "Bukan sebagai badai yang menggemuruh,",
    "Tapi sebagai angin sepoi yang menyejukkan.",
    "",
    "Kamu datang membawa cerita-cerita kecil,",
    "Yang ternyata mampu mengubah hari yang biasa",
    "Menjadi istimewa dengan caramu sendiri,",
    "Yang sederhana namun penuh makna.",
    "",
    "Terima kasih, Anggun,",
    "Untuk setiap tawa yang kamu bagikan,",
    "Untuk setiap kebaikan yang kamu tunjukkan,",
    "Dan untuk menjadi sahabat yang tak tergantikan."
  ];

  return (
    <section id="poem" className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-orange-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Puisi untuk Anggun
            </h2>
          </div>
          <p className="text-xl text-gray-600">Kata-kata yang tertulis dari hati</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-300/10 to-orange-300/10 rounded-full translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-orange-300/10 to-red-300/10 rounded-full -translate-x-14 translate-y-14"></div>
          
          <div className="relative z-10 text-center">
            <Heart className="w-12 h-12 text-orange-400 mx-auto mb-8 opacity-50" />
            
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              {poemLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${line === '' ? 'h-4' : 'animate-fade-in-up'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {line && (
                    <p className="font-light italic">{line}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;