import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    text: {
      fontSize: '1.1rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.8,
      marginBottom: '1.5rem'
    },
    status: {
      display: 'inline-block',
      padding: '0.75rem 1.25rem',
      background: 'rgba(59, 130, 246, 0.1)',
      borderLeft: '4px solid #3b82f6',
      color: '#fff',
      borderRadius: '0 8px 8px 0',
      fontSize: '0.95rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem'
    },
    statCard: {
      padding: '1.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #3b82f6, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    statLabel: {
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div style={styles.grid} className="about-grid">
          <div>
            <p style={styles.text}>{about.description}</p>
            <div style={styles.status}>{about.status}</div>
          </div>
          <div style={styles.statsGrid} className="stats-grid">
            {about.stats.map((stat, index) => (
              <div key={index} className="glass" style={styles.statCard}>
                <span style={styles.statValue}>{stat.value}</span>
                <span style={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
