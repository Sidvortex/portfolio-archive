import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks } from '../data/mock';
import { motion } from 'framer-motion';
import { Github, Linkedin, Link, Twitter, Coffee, Heart, ArrowUp } from 'lucide-react';

const iconMap = { Github, Linkedin, Link, Twitter, Coffee };

export default function Footer() {
  const { theme, currentTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Works', href: '#artworks' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Explorations', href: '#explorations' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      className="py-16 relative"
      style={{ 
        backgroundColor: theme.bgSecondary,
        borderTop: `1px solid ${theme.border}`
      }}
    >
      {/* Background decoration for cyberpunk */}
      {currentTheme === 'cyberpunk' && (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`
            }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="inline-block text-4xl font-display uppercase mb-4"
              style={{ 
                color: theme.text,
                fontFamily: 'Sohne Schmal, sans-serif',
                fontWeight: 800
              }}
              whileHover={{ scale: 1.02 }}
            >
              {personalInfo.nickname}
              {currentTheme === 'cyberpunk' && (
                <span style={{ color: theme.accent }}>_</span>
              )}
            </motion.a>
            <p 
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: theme.textMuted }}
            >
              {personalInfo.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 
              className="text-sm font-mono uppercase tracking-widest mb-4"
              style={{ color: theme.text }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: theme.textMuted }}
                  whileHover={{ color: theme.accent, x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 
              className="text-sm font-mono uppercase tracking-widest mb-4"
              style={{ color: theme.text }}
            >
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Link;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors"
                    style={{ 
                      backgroundColor: theme.card,
                      color: theme.textMuted,
                      border: `1px solid ${theme.border}`
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: theme.accent,
                      color: '#ffffff'
                    }}
                    title={link.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${theme.border}` }}
        >
          <p 
            className="text-sm flex items-center gap-1"
            style={{ color: theme.textMuted }}
          >
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={14} style={{ color: theme.accent }} fill={theme.accent} />
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full transition-colors"
            style={{ 
              backgroundColor: theme.card,
              color: theme.textMuted,
              border: `1px solid ${theme.border}`
            }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: theme.accent,
              color: '#ffffff'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}