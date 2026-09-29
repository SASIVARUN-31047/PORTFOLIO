import React from 'react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { contact } = portfolioData;

  const styles = {
    footer: {
      background: 'rgba(5, 5, 15, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '4rem 0 2rem',
      marginTop: '2rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '3rem',
      marginBottom: '3rem'
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #fff, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      display: 'inline-block'
    },
    desc: {
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      maxWidth: '300px'
    },
    title: {
      color: '#fff',
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      fontWeight: '600'
    },
    links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    link: {
      color: 'var(--text-secondary)',
      transition: 'color 0.3s ease',
      fontSize: '0.95rem'
    },
    socials: {
      display: 'flex',
      gap: '1rem'
    },
    socialIcon: {
      color: 'var(--text-secondary)',
      transition: 'all 0.3s ease'
    },
    bottom: {
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid} className="footer-grid">
          
          <div>
            <a href="#home" style={styles.brand}>SASI VARUN</a>
            <p style={styles.desc}>
              AI-focused developer building intelligent software experiences.
            </p>
          </div>

          <div>
            <h4 style={styles.title}>Links</h4>
            <div style={styles.links}>
              <a href="#home" style={styles.link} className="footer-link">Home</a>
              <a href="#about" style={styles.link} className="footer-link">About</a>
              <a href="#projects" style={styles.link} className="footer-link">Projects</a>
              <a href="#skills" style={styles.link} className="footer-link">Skills</a>
              <a href="#contact" style={styles.link} className="footer-link">Contact</a>
            </div>
          </div>

          <div>
            <h4 style={styles.title}>Socials</h4>
            <div style={styles.socials}>
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="footer-social">
                <Github size={20} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="footer-social">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${contact.email}`} style={styles.socialIcon} className="footer-social">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        <div style={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Sasi Varun. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        .footer-link:hover { color: #fff !important; }
        .footer-social:hover { color: #3b82f6 !important; transform: translateY(-2px); }
      `}</style>
    </footer>
  );
};

export default Footer;
