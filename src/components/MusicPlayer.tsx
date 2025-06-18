import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoading, setIsLoading] = useState(false);

  // Using a working audio file for demonstration
  const audioSrc = "/semua-tentang-kita.mp3.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      
      if (isPlaying) {
        setIsLoading(true);
        console.log('Attempting to play audio:', audioSrc);
        audioRef.current.play()
          .then(() => {
            console.log('Audio started successfully');
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
            setIsLoading(false);
            setIsPlaying(false);
          });
      } else {
        audioRef.current.pause();
        setIsLoading(false);
      }
    }
  }, [isPlaying, volume, isMuted, setIsPlaying, audioSrc]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-4 right-2 sm:right-4 z-40 max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 md:p-4 shadow-2xl border border-pink-200">
        <audio
          ref={audioRef}
          loop
          preload="metadata"
          onLoadStart={() => {
            console.log('Audio loading started');
            setIsLoading(true);
          }}
          onCanPlay={() => {
            console.log('Audio can play');
            setIsLoading(false);
          }}
          onError={(e) => {
            console.error('Audio error:', e);
            setIsLoading(false);
            setIsPlaying(false);
          }}
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 ml-0.5" />
            )}
          </button>
          
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
              Semua Tentang Kita
            </p>
            <p className="text-xs text-gray-600 truncate">Peterpan</p>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={toggleMute}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center text-gray-600 hover:text-pink-500 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              ) : (
                <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              )}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-8 sm:w-12 md:w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
        
        <div className="mt-1 sm:mt-2 text-xs text-gray-500 text-center">
          🎵 Background Music
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;