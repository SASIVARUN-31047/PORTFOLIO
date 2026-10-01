import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    card: {
      padding: '2rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    category: {
      fontSize: '1.25rem',
      color: '#fff',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    itemsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem'
    },
    item: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '0.75rem',
      borderRadius: '8px',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div style={styles.grid}>
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass skill-card" style={styles.card}>
              <h3 style={styles.category}>{skillGroup.category}</h3>
              <div style={styles.itemsGrid}>
                {skillGroup.items.map((item, i) => (
                  <div key={i} style={styles.item} className="skill-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-card:hover { transform: translateY(-5px); }
        .skill-item:hover { 
          background: rgba(59, 130, 246, 0.1) !important;
          border-color: rgba(59, 130, 246, 0.3) !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
