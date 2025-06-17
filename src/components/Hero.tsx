import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-pink-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-purple-300/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 bg-blue-300/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-14 h-14 sm:w-18 sm:h-18 bg-yellow-300/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto w-full">
        {/* Main Title */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mr-2 animate-spin-slow" />
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500 animate-pulse" />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 ml-2 animate-spin-slow" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-fade-in leading-tight">
            Anasia Anggun
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-6 sm:mb-8 font-light animate-fade-in-delay px-4">
          Sahabat yang Mengubah Hari-hari
        </p>

        {/* Date */}
        <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 inline-block mb-6 sm:mb-8 border border-pink-200 animate-fade-in-delay-2 mx-4">
          <p className="text-sm sm:text-lg text-gray-600">
            <span className="font-semibold text-pink-600">19 Juni 2024</span> - Hari ini
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-delay-3">
            Untuk seseorang yang hadir dengan keceriaan, kebaikan, dan kehangatan yang tak tergantikan.
            Terima kasih telah menjadi bagian dari cerita yang indah ini.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;