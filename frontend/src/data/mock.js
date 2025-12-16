// Mock data for Ravada Siddharth's Portfolio


export const personalInfo = {
  name: "Ravada Siddharth",
  nickname: "Sid",
  title: "Developer | Artist | AI Enthusiast",
  tagline: "Where creation becomes inquiry",
  location: "New Delhi, India",
  experience: "6 months",
  status: "UG Student",
  email: "ravadasiddharth@gmail.com",
  about: `I work in the space where creation becomes inquiry—where art, code, and artificial intelligence are not separate disciplines but different languages attempting to understand the same questions. Through visual studies and reproductions, I engage in slow observation, using repetition and reinterpretation as a way to learn how meaning, form, and emotion are constructed.

Alongside this, coding and AI shape how I think about creativity. I see algorithms as systems of thought—capable of structure, response, and adaptation. Rather than replacing human expression, technology becomes a mirror that reflects our intentions, biases, and imagination, revealing new ways to perceive intelligence and authorship.

This portfolio represents an ongoing process rather than a finished identity. It is a record of learning—where myth meets machine, intuition meets logic, and creativity emerges from the tension between control and surrender.`
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Sidvortex", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/siddharth-ravada-a032b52a2/", icon: "Linkedin" },
  { name: "Linktree", url: "https://linktr.ee/sidmindmirror", icon: "Link" },
  { name: "X", url: "https://x.com/CrisisBySid", icon: "Twitter" },
  { name: "Buy Me a Coffee", url: "https://buymeacoffee.com/sidmindmirror", icon: "Coffee" }
];

export const artworks = [
  {
    id: 1,
    title: "Neelkanth — A Study",
    description: "A deep exploration of the divine form through traditional reproduction techniques",
    images: ["/artworks/neelkanth.jpg"],
    category: "Visual Study",
    year: "2024"
  },
  {
    id: 2,
    title: "L'Ange Déchu (Study)",
    description: "An exploration of the fallen angel motif — underproduction",
    images: [
      "/artworks/fallen-angel.jpg",
      "/artworks/fallen-angel2.jpg"
    ],
    category: "Visual Study",
    year: "2025",
    status: "underproduction"
  }
];

export const projects = [
  {
    id: 1,
    title: "JARVIS-v0.1-Personal-AI-Voice-Assistant",
    description: "An early-stage autonomous assistant designed to listen, interpret, and respond through voice. This system experiments with speech recognition, intent handling, and task execution, treating interaction as a continuous loop rather than a command-response model. JARVIS-v0.1 serves as a foundation for exploring how software can feel present, attentive, and adaptive.",
    url: "https://github.com/Sidvortex/JARVIS-v0.1-Personal-AI-Voice-Assistant-",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["AI", "Voice Assistant", "NLP"]
  },
  {
    id: 2,
    title: "NETRAX-AI",
    description: "NETRAX-AI functions as a visual intelligence interface — an experiment in observation and awareness. Built around real-time perception, it explores face detection, motion tracking, and responsive UI behavior. The project investigates how an artificial system 'watches' its environment and reacts, blurring boundaries between interface, sensor, and entity.",
    url: "https://github.com/Sidvortex/NETRAX-AI",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Computer Vision", "AI", "Real-time"]
  },
  {
    id: 3,
    title: "Project-AES",
    description: "Project-AES (Artificial Emotion System) focuses on machine perception of human emotion. Using visual and audio cues, it attempts to classify emotional states and stabilize them into meaningful signals. The system is designed as a modular layer, intended for future integration into larger intelligent architectures where emotional context influences responses and behavior.",
    url: "https://github.com/Sidvortex/Project-AES",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Emotion AI", "ML", "Audio Processing"]
  }
];

export const creativeExplorations = [
  {
    id: 1,
    title: "Offline Maps System",
    description: "Storage layer for map tiles, routing engine for offline directions, UI layer with map viewer + zoom + navigation, JARVIS integration for voice navigation commands.",
    framework: "OpenStreetMap, Mapbox Offline",
    status: "Planned"
  },
  {
    id: 2,
    title: "Steganography Engine",
    description: "Data hiding in plain sight — encode engine hides data inside images (LSB), decode engine extracts hidden data, security layer with optional encryption, JARVIS integration as secret data vault.",
    framework: "LSB Steganography, OpenCV",
    status: "Planned"
  },
  {
    id: 3,
    title: "JARVIS Holomat",
    description: "Holographic real-life based interfaces — an experiment in spatial computing and ambient intelligence, designed to transform everyday environments into interactive workspaces.",
    framework: "WebGL, Three.js, Spatial Computing",
    status: "Conceptual"
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  frontend: ["React", "Next.js", "WebGL", "HTML", "CSS"],
  backend: ["Node.js", "FastAPI", "GraphQL", "PostgreSQL"],
  aiml: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Speech Recognition"]
};

export const themeColors = {
  night: {
    bg: "#0a0a0a",
    text: "#ffffff",
    accent: "#dc143c",
    secondary: "#1a1a1a",
    muted: "#666666"
  },
  day: {
    bg: "#f5f0e8",
    text: "#2a2a2a",
    accent: "#8b7355",
    secondary: "#e8e0d5",
    muted: "#9a9a9a"
  },
  cyberpunk: {
    bg: "#0d0d1a",
    text: "#00fff2",
    accent: "#ff00ff",
    secondary: "#1a1a2e",
    muted: "#fcee09",
    neon: "#ff3864"
  }
};