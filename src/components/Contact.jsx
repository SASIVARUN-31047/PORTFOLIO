import React, { useState } from 'react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { contact } = portfolioData;
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thanks! This demo form is frontend-only. Please use the email above to contact me.');
    setTimeout(() => setFormStatus(''), 5000);
    e.target.reset();
  };

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '4rem'
    },
    infoText: {
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      marginBottom: '2rem',
      lineHeight: 1.6
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    iconBox: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      background: 'rgba(59, 130, 246, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3b82f6',
      flexShrink: 0
    },
    infoTitle: {
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    infoValue: {
      color: 'var(--text-secondary)',
      fontSize: '0.95rem'
    },
    socials: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2.5rem'
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'all 0.3s ease'
    },
    form: {
      padding: '2.5rem'
    },
    statusMsg: {
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '0.9rem'
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Let's Build Something Together</h2>
        <div style={styles.grid} className="contact-grid">
          
          <div>
            <p style={styles.infoText}>
              Have a project, opportunity, or idea? I'd be happy to connect.
            </p>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><Mail size={20} /></div>
              <div>
                <h4 style={styles.infoTitle}>Email</h4>
                <a href={`mailto:${contact.email}`} style={styles.infoValue} className="hover-link">{contact.email}</a>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><Phone size={20} /></div>
              <div>
                <h4 style={styles.infoTitle}>Phone</h4>
                <span style={styles.infoValue}>{contact.phone}</span>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconBox}><MapPin size={20} /></div>
              <div>
                <h4 style={styles.infoTitle}>Location</h4>
                <span style={styles.infoValue}>{contact.location}</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href={`mailto:${contact.email}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Mail size={18} /> Email Me
              </a>
            </div>

            <div style={styles.socials}>
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon">
                <Github size={20} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" style={styles.socialIcon} className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="glass" style={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="5" required placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                <Send size={18} /> Send Message
              </button>
              
              {formStatus && (
                <div style={styles.statusMsg}>{formStatus}</div>
              )}
            </form>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        .hover-link:hover { color: #3b82f6 !important; text-decoration: underline !important; }
        .social-icon:hover { background: #3b82f6 !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
};

export default Contact;
