import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/mock';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';

export default function Projects() {
  const { theme, currentTheme } = useTheme();
  const [projectStats, setProjectStats] = useState({});

  // Fetch GitHub stats (mock for now, will connect to backend later)
  useEffect(() => {
    const fetchStats = async () => {
      const stats = {};
      for (const project of projects) {
        // Extract repo name from URL
        const repoMatch = project.url.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (repoMatch) {
          const [, owner, repo] = repoMatch;
          try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (response.ok) {
              const data = await response.json();
              stats[project.id] = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                language: data.language
              };
            }
          } catch (error) {
            // Use mock data on error
            stats[project.id] = { stars: project.stars, forks: project.forks };
          }
        }
      }
      setProjectStats(stats);
    };
    fetchStats();
  }, []);

  const languageColors = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Java: '#b07219'
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative"
      style={{ backgroundColor: theme.bgSecondary }}
    >
      {/* Background decoration for cyberpunk */}
      {currentTheme === 'cyberpunk' && (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, ${theme.accent} 0px, ${theme.accent} 1px, transparent 1px, transparent 50px)`,
            }}
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
            Technical Work
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-display uppercase"
            style={{ 
              color: theme.text,
              fontFamily: 'Sohne Schmal, sans-serif',
              fontWeight: 800
            }}
          >
            Projects
            {currentTheme === 'cyberpunk' && (
              <span style={{ color: theme.accent }}>_</span>
            )}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const stats = projectStats[project.id] || project;
            const langColor = languageColors[stats.language || project.language] || theme.accent;

            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block group"
              >
                <div 
                  className="p-6 sm:p-8 rounded-lg transition-all duration-300 group-hover:translate-x-2"
                  style={{ 
                    backgroundColor: theme.card,
                    border: `1px solid ${theme.border}`,
                    boxShadow: currentTheme === 'cyberpunk' 
                      ? `0 0 0 1px ${theme.border}, inset 0 0 30px ${theme.accent}05`
                      : 'none'
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Code size={20} style={{ color: theme.accent }} />
                        <h3 
                          className="text-lg sm:text-xl font-medium group-hover:underline"
                          style={{ color: theme.text }}
                        >
                          {project.title}
                        </h3>
                        <ExternalLink 
                          size={16} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: theme.textMuted }}
                        />
                      </div>
                      
                      <p 
                        className="text-sm leading-relaxed mb-4 max-w-3xl"
                        style={{ color: theme.textMuted }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-mono"
                            style={{ 
                              backgroundColor: theme.bgSecondary,
                              color: theme.textMuted,
                              border: `1px solid ${theme.border}`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 lg:flex-col lg:items-end lg:gap-3">
                      <div className="flex items-center gap-4">
                        <div 
                          className="flex items-center gap-1.5"
                          style={{ color: theme.textMuted }}
                        >
                          <Star size={16} />
                          <span className="text-sm font-mono">{stats.stars}</span>
                        </div>
                        <div 
                          className="flex items-center gap-1.5"
                          style={{ color: theme.textMuted }}
                        >
                          <GitFork size={16} />
                          <span className="text-sm font-mono">{stats.forks}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: langColor }}
                        />
                        <span 
                          className="text-sm font-mono"
                          style={{ color: theme.textMuted }}
                        >
                          {stats.language || project.language}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}