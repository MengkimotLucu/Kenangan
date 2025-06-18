import React, { useState } from 'react';
import { MessageCircle, AlertCircle, Copy } from 'lucide-react';

const ShareButton = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCopyOption, setShowCopyOption] = useState(false);
  
  // Format nomor telepon dengan kode negara Indonesia (+62)
  const phoneNumber = "6282127428365"; // Tambahkan 62 di depan untuk kode negara Indonesia
  
  const message = "Satria… makasih ya, buat semua yang udah kamu beri ke aku—dari perhatian kecil sampai hal-hal yang nggak pernah aku minta tapi kamu kasih. Terima kasih juga udah jadi teman di waktu senggangku, tempat cerita saat hari rasanya berat, dan alasan kenapa aku senyum tiba-tiba. Semoga kamu tahu… kehadiranmu berarti.";
  
  // Encode message dengan aman
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp Web URL
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // WhatsApp App URL (untuk mobile)
  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

  const handleShare = async () => {
    setIsSharing(true);
    setError(null);
    setShowCopyOption(false);
    
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
    console.log('WhatsApp Web URL:', whatsappWebUrl);
    console.log('WhatsApp App URL:', whatsappAppUrl);
    
    try {
      // Cek apakah di mobile device
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Untuk mobile, coba buka WhatsApp app dulu
        console.log('Detected mobile device, trying WhatsApp app...');
        
        // Buat hidden iframe untuk test apakah WhatsApp app ada
        const testIframe = document.createElement('iframe');
        testIframe.style.display = 'none';
        testIframe.src = whatsappAppUrl;
        document.body.appendChild(testIframe);
        
        // Set timeout untuk fallback ke web
        setTimeout(() => {
          document.body.removeChild(testIframe);
          console.log('WhatsApp app not available, using web version');
          openWhatsAppWeb();
        }, 2000);
        
      } else {
        // Untuk desktop, langsung buka WhatsApp Web
        console.log('Detected desktop device, opening WhatsApp Web...');
        openWhatsAppWeb();
      }
      
    } catch (err) {
      console.error('Error sharing to WhatsApp:', err);
      setError('Gagal membuka WhatsApp. Coba copy pesan manual.');
      setShowCopyOption(true);
    } finally {
      setTimeout(() => {
        setIsSharing(false);
      }, 3000);
    }
  };

  const openWhatsAppWeb = () => {
    try {
      // Coba buka di tab baru
      const newWindow = window.open(whatsappWebUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        // Jika popup diblokir, coba buka di tab yang sama
        console.log('Popup blocked, opening in same tab');
        window.location.href = whatsappWebUrl;
      }
    } catch (err) {
      console.error('Error opening WhatsApp Web:', err);
      setError('Gagal membuka WhatsApp Web. Coba copy pesan manual.');
      setShowCopyOption(true);
    }
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert('Pesan berhasil di-copy! Silakan paste ke WhatsApp manual.');
    } catch (err) {
      console.error('Error copying message:', err);
      // Fallback untuk browser yang tidak support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = message;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Pesan berhasil di-copy! Silakan paste ke WhatsApp manual.');
    }
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert('Nomor telepon berhasil di-copy!');
    } catch (err) {
      console.error('Error copying phone number:', err);
      alert('Nomor telepon: ' + phoneNumber);
    }
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
          <div className="absolute -top-32 left-0 bg-red-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center space-x-1 mb-2">
              <AlertCircle className="w-3 h-3" />
              <span>{error}</span>
            </div>
            <div className="space-y-1">
              <button 
                onClick={copyMessage}
                className="flex items-center space-x-1 text-xs underline hover:no-underline w-full"
              >
                <Copy className="w-3 h-3" />
                <span>Copy pesan</span>
              </button>
              <button 
                onClick={copyPhoneNumber}
                className="flex items-center space-x-1 text-xs underline hover:no-underline w-full"
              >
                <Copy className="w-3 h-3" />
                <span>Copy nomor</span>
              </button>
            </div>
          </div>
        )}
        
        {showCopyOption && !error && (
          <div className="absolute -top-20 left-0 bg-blue-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
            <button 
              onClick={copyMessage}
              className="flex items-center space-x-1 text-xs underline hover:no-underline"
            >
              <Copy className="w-3 h-3" />
              <span>Copy pesan manual</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareButton;