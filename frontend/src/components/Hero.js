import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks } from '../data/mock';
import { motion } from 'framer-motion';
import { Github, Linkedin, Link, Twitter, Coffee, MapPin, ArrowDown } from 'lucide-react';

const iconMap = {
  Github, Linkedin, Link, Twitter, Coffee
};

export default function Hero() {
  const { theme, currentTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: theme.gradient }}
    >
      {/* Animated Background Elements */}
      {currentTheme === 'cyberpunk' && (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: theme.accent }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: theme.text }}
          />
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${theme.accent}22 1px, transparent 1px), linear-gradient(90deg, ${theme.accent}22 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      {currentTheme === 'night' && (
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: theme.accent }}
          />
        </div>
      )}

      <motion.div 
        className="max-w-7xl mx-auto px-6 py-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest"
            style={{ 
              backgroundColor: theme.bgSecondary,
              color: theme.textMuted,
              border: `1px solid ${theme.border}`
            }}
          >
            <MapPin size={12} />
            {personalInfo.location}
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-9xl font-display uppercase leading-none mb-6"
          style={{ 
            color: theme.text,
            fontFamily: 'Sohne Schmal, sans-serif',
            fontWeight: 800
          }}
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className="block">
              {currentTheme === 'cyberpunk' ? (
                <span>
                  {word.split('').map((char, j) => (
                    <span 
                      key={j}
                      style={{ 
                        color: j % 3 === 0 ? theme.accent : j % 3 === 1 ? theme.textMuted : theme.text 
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ) : word}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl max-w-2xl mb-8 leading-relaxed"
          style={{ color: theme.textMuted }}
        >
          {personalInfo.tagline}
          {currentTheme === 'cyberpunk' && (
            <span className="animate-pulse" style={{ color: theme.accent }}> _</span>
          )}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <span 
            className="px-4 py-2 rounded-full text-sm font-mono"
            style={{ 
              backgroundColor: theme.accent,
              color: currentTheme === 'day' ? '#ffffff' : theme.bg
            }}
          >
            {personalInfo.title}
          </span>
          <span 
            className="px-4 py-2 rounded-full text-sm font-mono"
            style={{ 
              backgroundColor: 'transparent',
              color: theme.textMuted,
              border: `1px solid ${theme.border}`
            }}
          >
            {personalInfo.experience} exp • {personalInfo.status}
          </span>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Link;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors"
                style={{ 
                  backgroundColor: theme.bgSecondary,
                  color: theme.textMuted,
                  border: `1px solid ${theme.border}`
                }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: theme.accent,
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} style={{ color: theme.textMuted }} />
      </motion.div>
    </section>
  );
}