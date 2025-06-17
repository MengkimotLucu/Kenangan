import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      src: "/photo_2025-06-15_17-34-21.jpg",
      caption: "Senyum yang selalu mencerahkan hari"
    },
    {
      src: "/photo_2025-06-15_17-34-07.jpg",
      caption: "Momen kebersamaan yang tak terlupakan"
    },
    {
      src: "/photo_2025-06-15_17-34-14.jpg",
      caption: "Keceriaan yang menular"
    },
    {
      src: "/photo_2025-06-15_17-34-25.jpg",
      caption: "Petualangan bersama"
    }
  ];

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  return (
    <section id="photos" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mr-2" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Galeri Kenangan
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">Momen-momen indah yang terabadikan</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm sm:text-base">{photo.caption}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].caption}
                className="max-w-full max-h-full object-contain rounded-lg mx-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-sm sm:text-lg font-medium bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
              
              {/* Navigation */}
              <button
                onClick={prevPhoto}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;