import React, { useState } from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';

const ShareButton = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Format nomor telepon (hapus karakter non-digit)
  const phoneNumber = "082127428365".replace(/\D/g, '');
  
  const message = encodeURIComponent(
    "Satria… makasih ya, buat semua yang udah kamu beri ke aku—dari perhatian kecil sampai hal-hal yang nggak pernah aku minta tapi kamu kasih. Terima kasih juga udah jadi teman di waktu senggangku, tempat cerita saat hari rasanya berat, dan alasan kenapa aku senyum tiba-tiba. Semoga kamu tahu… kehadiranmu berarti."
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleShare = () => {
    setIsSharing(true);
    setError(null);
    
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', decodeURIComponent(message));
    console.log('WhatsApp URL:', whatsappUrl);
    
    try {
      // Cek apakah di mobile device
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      let shareUrl = whatsappUrl;
      
      // Jika mobile, coba gunakan whatsapp:// protocol
      if (isMobile) {
        const whatsappMobileUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
        console.log('Mobile WhatsApp URL:', whatsappMobileUrl);
        
        // Coba buka WhatsApp app, jika gagal fallback ke web
        try {
          window.location.href = whatsappMobileUrl;
          setTimeout(() => {
            // Jika setelah 3 detik masih di halaman yang sama, berarti WhatsApp app tidak ada
            if (document.hidden === false) {
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }
          }, 3000);
        } catch (mobileErr) {
          console.log('Mobile WhatsApp failed, using web version');
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }
      } else {
        // Desktop - langsung buka WhatsApp Web
        const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        if (!newWindow) {
          throw new Error('Popup blocked');
        }
      }
      
      // Reset loading state setelah 2 detik
      setTimeout(() => {
        setIsSharing(false);
      }, 2000);
      
    } catch (err) {
      console.error('Error sharing to WhatsApp:', err);
      setError('Gagal membuka WhatsApp. Coba lagi.');
      setIsSharing(false);
    }
  };

  const copyMessage = () => {
    const messageText = "Satria… makasih ya, buat semua yang udah kamu beri ke aku—dari perhatian kecil sampai hal-hal yang nggak pernah aku minta tapi kamu kasih. Terima kasih juga udah jadi teman di waktu senggangku, tempat cerita saat hari rasanya berat, dan alasan kenapa aku senyum tiba-tiba. Semoga kamu tahu… kehadiranmu berarti.";
    navigator.clipboard.writeText(messageText)
      .then(() => {
        alert('Pesan berhasil di-copy!');
      })
      .catch(() => {
        alert('Gagal copy pesan. Silakan copy manual.');
      });
  };

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <div className="relative">
        <button
          onClick={handleShare}
          disabled={isSharing}
          className="group bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          title="Kirim pesan ke WhatsApp Satria"
        >
          {isSharing ? (
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isSharing ? 'Membuka WhatsApp...' : 'Kirim ke Satria'}
          </div>
        </button>
        
        {error && (
          <div className="absolute -top-20 left-0 bg-red-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{error}</span>
            </div>
            <button 
              onClick={copyMessage}
              className="mt-1 text-xs underline hover:no-underline"
            >
              Copy pesan manual
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareButton;