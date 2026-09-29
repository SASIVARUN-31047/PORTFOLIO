import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { certifications } = portfolioData;

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    card: {
      padding: '2.5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    icon: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'rgba(59, 130, 246, 0.1)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      color: '#3b82f6',
      marginBottom: '1.5rem'
    },
    title: {
      fontSize: '1.25rem',
      color: '#fff',
      marginBottom: '0.5rem',
      lineHeight: 1.4
    },
    date: {
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      marginBottom: '1.5rem'
    },
    link: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      color: '#3b82f6',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div style={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className="glass cert-card" style={styles.card}>
              <div style={styles.icon}>
                <Award size={28} />
              </div>
              <h3 style={styles.title}>{cert.title}</h3>
              <p style={styles.date}>{cert.date}</p>
              <a href={cert.credentialUrl} target="_blank" rel="noreferrer" style={styles.link} className="cert-link">
                View Credential <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .cert-card:hover { transform: translateY(-10px); border-color: rgba(59, 130, 246, 0.3); }
        .cert-card:hover .cert-link { color: #fff; }
      `}</style>
    </section>
  );
};

export default Certifications;
