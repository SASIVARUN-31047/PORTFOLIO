import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Terminal } from 'lucide-react';

const CodingProfile = () => {
  const { codingProfile } = portfolioData;

  const styles = {
    card: {
      padding: '3rem',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left'
    },
    iconBg: {
      position: 'absolute',
      right: '-10%',
      bottom: '-10%',
      opacity: 0.05,
      transform: 'rotate(-15deg)'
    },
    value: {
      fontSize: '4rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #3b82f6, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem'
    },
    desc: {
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      maxWidth: '600px',
      lineHeight: 1.6,
      marginBottom: '2rem'
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: '1rem'
    },
    skillBadge: {
      padding: '0.5rem 1rem',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#fff'
    }
  };

  return (
    <section id="coding">
      <div className="container">
        <h2>Problem Solving & Coding</h2>
        <div className="glass" style={styles.card}>
          <Terminal size={300} style={styles.iconBg} />
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <Code2 size={32} />
          </div>
          
          <div style={styles.value}>{codingProfile.problemsSolved}</div>
          <p style={styles.desc}>{codingProfile.description}</p>
          
          <div style={styles.skillsGrid}>
            {codingProfile.skills.map((skill, index) => (
              <span key={index} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
