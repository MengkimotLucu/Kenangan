import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section id="quote" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Quote className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Kata-kata dari Hati
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-200 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-50" />
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-8">
              "Beberapa pertemuan tidak pernah kita rencanakan, tapi kehadirannya mampu mengubah cara kita melihat hari-hari. Terima kasih karena telah menjadi bagian dari hariku—dengan tawa, cerita, dan kehadiran yang tak tergantikan."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;