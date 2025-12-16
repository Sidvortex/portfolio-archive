import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  night: {
    name: 'night',
    bg: '#0a0a0a',
    bgSecondary: '#111111',
    text: '#ffffff',
    textMuted: '#888888',
    accent: '#dc143c',
    accentHover: '#ff1a4b',
    border: '#222222',
    card: '#0f0f0f',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)'
  },
  day: {
    name: 'day',
    bg: '#f5f0e8',
    bgSecondary: '#ebe4d9',
    text: '#2a2a2a',
    textMuted: '#6b6b6b',
    accent: '#8b7355',
    accentHover: '#6d5a44',
    border: '#d4ccc0',
    card: '#faf7f2',
    gradient: 'linear-gradient(135deg, #f5f0e8 0%, #e8e0d5 100%)'
  },
  cyberpunk: {
    name: 'cyberpunk',
    bg: '#0d0d1a',
    bgSecondary: '#1a1a2e',
    text: '#00fff2',
    textMuted: '#fcee09',
    accent: '#ff00ff',
    accentHover: '#ff3864',
    border: '#2a2a4e',
    card: '#12121f',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 50%, #0a1a2e 100%)'
  }
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('night');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && themes[saved]) {
      setCurrentTheme(saved);
    }
  }, []);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('portfolio-theme', themeName);
    }
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}