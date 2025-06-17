import React from 'react';
import { Share2, MessageCircle } from 'lucide-react';

const ShareButton = () => {
  const phoneNumber = "082127428365";
  const message = encodeURIComponent(
    "Hai Anggun! 💕\n\nAku buat sesuatu yang spesial untukmu. Lihat website kenangan kita di sini:\n\nhttps://singular-duckanoo-b6a2d1.netlify.app\n\nSemoga kamu suka! ❤️"
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleShare = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <button
        onClick={handleShare}
        className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        title="Bagikan ke WhatsApp Anggun"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Bagikan ke Anggun
        </div>
      </button>
    </div>
  );
};

export default ShareButton;