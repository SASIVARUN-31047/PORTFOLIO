import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  const { contact } = portfolioData;

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '4rem',
      maxWidth: '600px'
    },
    infoText: {
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      marginBottom: '2.5rem',
      lineHeight: 1.6
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      marginBottom: '2rem'
    },
    iconBox: {
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      background: 'rgba(59, 130, 246, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3b82f6',
      flexShrink: 0
    },
    infoTitle: {
      color: '#fff',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    infoValue: {
      color: 'var(--text-secondary)',
      fontSize: '1rem'
    },
    socials: {
      display: 'flex',
      gap: '1rem',
      marginTop: '3rem'
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Let's Build Something Together</h2>
        <div style={styles.grid}>
          
          <div>
            <p style={styles.infoText}>
              Have a project, opportunity, or idea? I'd be happy to connect.
            </p>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><Mail size={24} /></div>
              <div>
                <h4 style={styles.infoTitle}>Email</h4>
                <a href={`mailto:${contact.email}`} style={styles.infoValue} className="hover-link">{contact.email}</a>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><Phone size={24} /></div>
              <div>
                <h4 style={styles.infoTitle}>Phone</h4>
                <span style={styles.infoValue}>{contact.phone}</span>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><MapPin size={24} /></div>
              <div>
                <h4 style={styles.infoTitle}>Location</h4>
                <span style={styles.infoValue}>{contact.location}</span>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', maxWidth: '300px' }}>
              <a href={`mailto:${contact.email}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                <Mail size={20} /> Email Me
              </a>
            </div>

            <div style={styles.socials}>
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon">
                <Github size={24} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .hover-link:hover { color: #3b82f6 !important; text-decoration: underline !important; }
        .social-icon:hover { background: #3b82f6 !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
};

export default Contact;
