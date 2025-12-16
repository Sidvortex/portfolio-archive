import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { creativeExplorations } from '../data/mock';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';

export default function Explorations() {
  const { theme, currentTheme } = useTheme();

  const statusColors = {
    'Planned': theme.textMuted,
    'In Progress': theme.accent,
    'Conceptual': currentTheme === 'cyberpunk' ? theme.textMuted : theme.accent
  };

  return (
    <section 
      id="explorations" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: theme.bgSecondary }}
    >
      {/* Background decoration */}
      {currentTheme === 'cyberpunk' && (
        <div className="absolute inset-0">
          <div 
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: theme.accent }}
          />
          <div 
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: theme.text }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            Future Projects
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-display uppercase"
            style={{ 
              color: theme.text,
              fontFamily: 'Sohne Schmal, sans-serif',
              fontWeight: 800
            }}
          >
            Creative Explorations
            {currentTheme === 'cyberpunk' && (
              <span style={{ color: theme.accent }}>_</span>
            )}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeExplorations.map((exploration, index) => (
            <motion.div
              key={exploration.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`,
                boxShadow: currentTheme === 'cyberpunk' 
                  ? `0 0 20px ${theme.accent}10`
                  : 'none'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="p-3 rounded-lg"
                  style={{ 
                    backgroundColor: theme.bgSecondary,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <Compass size={24} style={{ color: theme.accent }} />
                </div>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-mono uppercase"
                  style={{ 
                    backgroundColor: statusColors[exploration.status] + '22',
                    color: statusColors[exploration.status]
                  }}
                >
                  {exploration.status}
                </span>
              </div>

              <h3 
                className="text-xl font-medium mb-3"
                style={{ color: theme.text }}
              >
                {exploration.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed mb-4"
                style={{ color: theme.textMuted }}
              >
                {exploration.description}
              </p>

              <div 
                className="flex items-center gap-2 pt-4"
                style={{ borderTop: `1px solid ${theme.border}` }}
              >
                <span 
                  className="text-xs font-mono uppercase tracking-wider"
                  style={{ color: theme.textMuted }}
                >
                  Stack:
                </span>
                <span 
                  className="text-xs font-mono"
                  style={{ color: theme.text }}
                >
                  {exploration.framework}
                </span>
              </div>

              <motion.div 
                className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: theme.accent }}
              >
                <span className="text-sm font-mono">Learn more</span>
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}