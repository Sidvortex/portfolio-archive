import React from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Artworks from "./components/Artworks";
import Projects from "./components/Projects";
import About from "./components/About";
import Explorations from "./components/Explorations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Header />
      <main>
        <Hero />
        <Artworks />
        <Projects />
        <About />
        <Explorations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;