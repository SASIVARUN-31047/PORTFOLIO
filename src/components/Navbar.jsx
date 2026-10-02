import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      background: isScrolled ? 'rgba(5, 5, 15, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    },
    inner: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logo: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #fff, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '1px',
      flexShrink: 0
    },
    link: {
      color: 'var(--text-secondary)',
      fontSize: '0.85rem',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap'
    },
    activeLink: { color: '#fff' },
    socialIcon: { color: 'var(--text-secondary)', transition: 'color 0.3s ease' },
    mobileMenuBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' },
    mobileMenu: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'var(--bg-dark)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '2rem',
      padding: '0 24px',
      zIndex: 999,
      transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.4s ease'
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div className="container" style={styles.inner}>
          <a href="#home" style={styles.logo}>SRI SASI VARUN</a>

          <div className="desktop-nav" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{ ...styles.link, ...(activeSection === link.toLowerCase() ? styles.activeLink : {}) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href={portfolioData.contact.githubUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-hover"><Github size={20} /></a>
              <a href={portfolioData.contact.linkedinUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-hover"><Linkedin size={20} /></a>
              <a href={portfolioData.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
                <FileText size={15} /> Resume
              </a>
            </div>
          </div>

          <button className="mobile-toggle" style={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{ ...styles.link, fontSize: '1.5rem', color: '#fff' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <a href={portfolioData.contact.githubUrl} target="_blank" rel="noreferrer"><Github size={28} color="#fff" /></a>
          <a href={portfolioData.contact.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={28} color="#fff" /></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .social-hover:hover { color: #fff !important; }
      `}</style>
    </>
  );
};

export default Navbar;
