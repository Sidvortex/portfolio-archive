import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { artworks } from '../data/mock';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function Artworks() {
  const { theme, currentTheme } = useTheme();
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (artwork, index = 0) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedArtwork) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedArtwork.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedArtwork) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedArtwork.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section 
      id="artworks" 
      className="py-24 relative"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span 
            className="text-xs font-mono uppercase tracking-widest mb-4 block"
            style={{ color: theme.accent }}
          >
            Visual Studies
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-display uppercase"
            style={{ 
              color: theme.text,
              fontFamily: 'Sohne Schmal, sans-serif',
              fontWeight: 800
            }}
          >
            Artworks
            {currentTheme === 'cyberpunk' && (
              <span style={{ color: theme.accent }}>_</span>
            )}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`
              }}
              onClick={() => openLightbox(artwork)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={artwork.images[0]}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: `${theme.bg}cc` }}
              >
                <Eye size={32} style={{ color: theme.accent }} />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: theme.accent }}
                  >
                    {artwork.category}
                  </span>
                  <span 
                    className="text-xs font-mono"
                    style={{ color: theme.textMuted }}
                  >
                    {artwork.year}
                  </span>
                </div>
                <h3 
                  className="text-xl font-medium mb-2"
                  style={{ color: theme.text }}
                >
                  {artwork.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  {artwork.description}
                </p>
                {artwork.status && (
                  <span 
                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-mono uppercase"
                    style={{ 
                      backgroundColor: theme.accent + '22',
                      color: theme.accent
                    }}
                  >
                    {artwork.status}
                  </span>
                )}
              </div>

              {artwork.images.length > 1 && (
                <div 
                  className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono"
                  style={{ 
                    backgroundColor: theme.bg,
                    color: theme.text
                  }}
                >
                  {artwork.images.length} images
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: `${theme.bg}f5` }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedArtwork.images[currentImageIndex]}
                alt={selectedArtwork.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors"
                style={{ 
                  backgroundColor: theme.bg,
                  color: theme.text,
                  border: `1px solid ${theme.border}`
                }}
              >
                <X size={24} />
              </button>

              {selectedArtwork.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors"
                    style={{ 
                      backgroundColor: theme.bg,
                      color: theme.text,
                      border: `1px solid ${theme.border}`
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors"
                    style={{ 
                      backgroundColor: theme.bg,
                      color: theme.text,
                      border: `1px solid ${theme.border}`
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div 
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-mono"
                    style={{ 
                      backgroundColor: theme.bg,
                      color: theme.text,
                      border: `1px solid ${theme.border}`
                    }}
                  >
                    {currentImageIndex + 1} / {selectedArtwork.images.length}
                  </div>
                </>
              )}

              <div className="mt-4 text-center">
                <h3 
                  className="text-xl font-medium"
                  style={{ color: theme.text }}
                >
                  {selectedArtwork.title}
                </h3>
                <p 
                  className="text-sm mt-1"
                  style={{ color: theme.textMuted }}
                >
                  {selectedArtwork.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}