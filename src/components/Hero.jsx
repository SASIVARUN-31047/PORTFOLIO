import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { hero, contact, resumeUrl } = portfolioData;

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: '60px',
      alignItems: 'center',
      width: '100%'
    },
    badgeContainer: { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' },
    badge: {
      padding: '0.4rem 0.8rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '20px',
      fontSize: '0.8rem',
      color: '#3b82f6',
      fontWeight: 500
    },
    greeting: { fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' },
    title: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #ffffff, #a5b4fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      marginBottom: '2rem',
      maxWidth: '500px'
    },
    statsBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: '1px solid rgba(255,255,255,0.1)',
      marginBottom: '2rem'
    },
    cgpa: { fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' },
    degreeLabel: { color: 'var(--text-secondary)', fontSize: '0.9rem' },
    actions: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' },
    socialLinks: { display: 'flex', gap: '1rem', alignItems: 'center' },
    socialIcon: {
      width: '40px', height: '40px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)',
      color: '#fff',
      transition: 'all 0.3s ease'
    },
    visualContainer: {
      position: 'relative',
      width: '100%',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    circle1: {
      position: 'absolute',
      width: '300px', height: '300px',
      borderRadius: '50%',
      border: '1px solid rgba(59,130,246,0.3)',
      animation: 'spin 20s linear infinite'
    },
    circle2: {
      position: 'absolute',
      width: '400px', height: '400px',
      borderRadius: '50%',
      border: '1px dashed rgba(147,51,234,0.3)',
      animation: 'spin-reverse 30s linear infinite'
    },
    core: {
      width: '150px', height: '150px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.4) 100%)',
      boxShadow: '0 0 50px rgba(59,130,246,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'white', fontWeight: 'bold', fontSize: '2rem', zIndex: 10
    }
  };

  return (
    <section id="home" style={styles.section}>
      <div className="container hero-grid" style={styles.grid}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.badgeContainer}>
            {hero.badges.map((badge, index) => (
              <span key={index} style={styles.badge}>{badge}</span>
            ))}
          </div>

          <h2 style={styles.greeting}>Hi, I'm {hero.name}.</h2>
          <h1 style={styles.title}>{hero.title}</h1>
          <p style={styles.subtitle}>{hero.subtitle}</p>

          <div style={styles.statsBadge}>
            <span style={styles.cgpa}>{hero.cgpa} CGPA</span>
            <span style={styles.degreeLabel}>• {hero.degree}</span>
          </div>

          <div style={styles.actions}>
            <a href="#projects" className="btn-primary">View My Projects <ArrowRight size={18} /></a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary"><Download size={18} /> Download Resume</a>
            <a href="#contact" className="btn-secondary"><Mail size={18} /> Contact Me</a>
          </div>

          <div style={styles.socialLinks}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connect:</span>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon"><Github size={20} /></a>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon"><Linkedin size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-visual"
          style={styles.visualContainer}
        >
          <div style={styles.circle1}></div>
          <div style={styles.circle2}></div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={styles.core}
          >
            AI
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: left;
          }
          .hero-visual {
            height: 300px !important;
            order: -1;
          }
        }
        @media (max-width: 480px) {
          .hero-visual { display: none; }
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
        .social-icon:hover { background: var(--accent) !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
};

export default Hero;
