import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, skills } from '../data/mock';
import { motion } from 'framer-motion';

export default function About() {
  const { theme, currentTheme } = useTheme();

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'AI / ML', items: skills.aiml }
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span 
              className="text-xs font-mono uppercase tracking-widest mb-4 block"
              style={{ color: theme.accent }}
            >
              About Me
            </span>
            <h2 
              className="text-4xl sm:text-5xl font-display uppercase mb-8"
              style={{ 
                color: theme.text,
                fontFamily: 'Sohne Schmal, sans-serif',
                fontWeight: 800
              }}
            >
              The Story
              {currentTheme === 'cyberpunk' && (
                <span style={{ color: theme.accent }}>_</span>
              )}
            </h2>
            
            <div className="space-y-6">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-base leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span 
              className="text-xs font-mono uppercase tracking-widest mb-4 block"
              style={{ color: theme.accent }}
            >
              Technical Expertise
            </span>
            <h2 
              className="text-4xl sm:text-5xl font-display uppercase mb-8"
              style={{ 
                color: theme.text,
                fontFamily: 'Sohne Schmal, sans-serif',
                fontWeight: 800
              }}
            >
              Skills
              {currentTheme === 'cyberpunk' && (
                <span style={{ color: theme.accent }}>_</span>
              )}
            </h2>

            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 
                    className="text-sm font-mono uppercase tracking-widest mb-3"
                    style={{ color: theme.text }}
                  >
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                        className="px-4 py-2 rounded-full text-sm font-mono transition-colors"
                        style={{ 
                          backgroundColor: theme.card,
                          color: theme.text,
                          border: `1px solid ${theme.border}`
                        }}
                        whileHover={{ 
                          backgroundColor: theme.accent,
                          color: currentTheme === 'day' ? '#ffffff' : theme.bg,
                          borderColor: theme.accent
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}