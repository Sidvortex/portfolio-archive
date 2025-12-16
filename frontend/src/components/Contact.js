import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks } from '../data/mock';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Link, Twitter, Coffee, Copy, Check } from 'lucide-react';

const iconMap = { Github, Linkedin, Link, Twitter, Coffee };

export default function Contact() {
  const { theme, currentTheme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const res = await fetch("https://formspree.io/f/mrbnwqja", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("Failed to send message. Try again.");
    }
  } catch (err) {
    alert("Something went wrong. Please try later.");
  } finally {
    setSending(false);
  }
};


  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputStyle = {
    backgroundColor: theme.card,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    outline: 'none'
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span 
              className="text-xs font-mono uppercase tracking-widest mb-4 block"
              style={{ color: theme.accent }}
            >
              Get in Touch
            </span>
            <h2 
              className="text-4xl sm:text-6xl font-display uppercase mb-8"
              style={{ 
                color: theme.text,
                fontFamily: 'Sohne Schmal, sans-serif',
                fontWeight: 800
              }}
            >
              Contact
              {currentTheme === 'cyberpunk' && (
                <span style={{ color: theme.accent }}>_</span>
              )}
            </h2>

            <div className="space-y-6 mb-8">
              <motion.button
                onClick={copyEmail}
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div 
                  className="p-3 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: theme.card,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <Mail size={20} style={{ color: theme.accent }} />
                </div>
                <div className="text-left">
                  <p 
                    className="text-sm font-mono uppercase tracking-wider mb-1"
                    style={{ color: theme.textMuted }}
                  >
                    Email
                  </p>
                  <p 
                    className="font-medium flex items-center gap-2"
                    style={{ color: theme.text }}
                  >
                    {personalInfo.email}
                    {copied ? (
                      <Check size={16} style={{ color: theme.accent }} />
                    ) : (
                      <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                </div>
              </motion.button>

              <div className="flex items-center gap-3">
                <div 
                  className="p-3 rounded-lg"
                  style={{ 
                    backgroundColor: theme.card,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <MapPin size={20} style={{ color: theme.accent }} />
                </div>
                <div>
                  <p 
                    className="text-sm font-mono uppercase tracking-wider mb-1"
                    style={{ color: theme.textMuted }}
                  >
                    Location
                  </p>
                  <p 
                    className="font-medium"
                    style={{ color: theme.text }}
                  >
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Link;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-colors"
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
                    title={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  className="text-sm font-mono uppercase tracking-wider mb-2 block"
                  style={{ color: theme.textMuted }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:ring-2"
                  style={{ 
                    ...inputStyle,
                    '--tw-ring-color': theme.accent
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  className="text-sm font-mono uppercase tracking-wider mb-2 block"
                  style={{ color: theme.textMuted }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:ring-2"
                  style={inputStyle}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  className="text-sm font-mono uppercase tracking-wider mb-2 block"
                  style={{ color: theme.textMuted }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:ring-2 resize-none"
                  style={inputStyle}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-lg font-mono uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors"
                style={{ 
                  backgroundColor: sent ? '#22c55e' : theme.accent,
                  color: '#ffffff'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <span>Sending...</span>
                ) : sent ? (
                  <>Message Sent <Check size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}