import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import QuoteSection from './components/QuoteSection';
import MessageSection from './components/MessageSection';
import PoemSection from './components/PoemSection';
import MusicPlayer from './components/MusicPlayer';
import ShareButton from './components/ShareButton';
import FloatingElements from './components/FloatingElements';
import LoveCounter from './components/LoveCounter';
import InteractiveHeart from './components/InteractiveHeart';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure everything is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'photos', 'quote', 'poem', 'counter', 'message'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'photos', label: 'Foto' },
    { id: 'quote', label: 'Quote' },
    { id: 'poem', label: 'Puisi' },
    { id: 'counter', label: 'Counter' },
    { id: 'message', label: 'Pesan' }
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat Kenangan Indah...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
              <span className="font-bold text-gray-800 text-sm sm:text-base">Kenangan Anggun</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentSection === item.id ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-pink-200">
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-2 py-2 text-sm font-medium transition-colors ${
                      currentSection === item.id ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Music Player */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Share Button */}
      <ShareButton />

      {/* Interactive Heart */}
      <InteractiveHeart />

      {/* Sections */}
      <Hero />
      <Timeline />
      <PhotoGallery />
      <QuoteSection />
      <PoemSection />
      <div id="counter">
        <LoveCounter />
      </div>
      <MessageSection />

      {/* Floating Elements */}
      <FloatingElements />
    </div>
  );
}

export default App;