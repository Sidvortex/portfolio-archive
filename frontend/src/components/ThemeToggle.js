import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { currentTheme, switchTheme, theme } = useTheme();

  const themeOptions = [
    { key: 'night', icon: Moon, label: 'Night' },
    { key: 'day', icon: Sun, label: 'Day' },
    { key: 'cyberpunk', icon: Zap, label: 'Cyber' }
  ];

  return (
    <div 
      className="flex items-center gap-1 p-1 rounded-full"
      style={{ 
        backgroundColor: theme.bgSecondary,
        border: `1px solid ${theme.border}`
      }}
    >
      {themeOptions.map(({ key, icon: Icon, label }) => (
        <motion.button
          key={key}
          onClick={() => switchTheme(key)}
          className="relative px-3 py-2 rounded-full flex items-center gap-2 transition-colors"
          style={{
            backgroundColor: currentTheme === key ? theme.accent : 'transparent',
            color: currentTheme === key ? '#ffffff' : theme.textMuted
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={label}
        >
          <Icon size={16} />
          <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">
            {label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}