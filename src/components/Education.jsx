import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  const styles = {
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 0'
    },
    line: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '2px',
      background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(147,51,234,0.1))',
      transform: 'translateX(-50%)'
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '4rem',
      position: 'relative',
      width: '100%'
    },
    content: {
      width: '45%',
      padding: '2rem',
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'var(--bg-dark)',
      border: '2px solid #3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3b82f6',
      zIndex: 2
    },
    period: {
      color: '#3b82f6',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
      display: 'block'
    },
    degree: {
      fontSize: '1.25rem',
      color: '#fff',
      marginBottom: '0.5rem'
    },
    institution: {
      color: 'var(--text-secondary)',
      marginBottom: '1rem',
      fontSize: '1rem'
    },
    score: {
      display: 'inline-block',
      padding: '0.4rem 0.8rem',
      background: 'rgba(59,130,246,0.1)',
      color: '#3b82f6',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600'
    }
  };

  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div style={styles.timeline} className="timeline">
          <div style={styles.line} className="timeline-line"></div>
          
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} style={{...styles.item, flexDirection: isLeft ? 'row' : 'row-reverse'}} className="timeline-item">
                <div style={styles.content} className="glass timeline-content">
                  <span style={styles.period}>{item.period}</span>
                  <h3 style={styles.degree}>{item.degree}</h3>
                  <p style={styles.institution}>{item.institution}</p>
                  <span style={styles.score}>{item.score}</span>
                </div>
                
                <div style={styles.icon} className="timeline-icon">
                  <GraduationCap size={24} />
                </div>
                
                <div style={{ width: '45%' }} className="timeline-empty"></div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 30px !important; }
          .timeline-item { flexDirection: column !important; alignItems: flex-start !important; }
          .timeline-content { width: calc(100% - 70px) !important; }
          .timeline-empty { display: none !important; }
          .timeline-icon { left: 30px !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
