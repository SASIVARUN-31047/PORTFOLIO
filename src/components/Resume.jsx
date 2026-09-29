import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  const { resumeUrl } = portfolioData;

  const styles = {
    card: {
      padding: '4rem 2rem',
      textAlign: 'center',
      background: 'linear-gradient(to right, rgba(15, 15, 30, 0.8), rgba(25, 25, 50, 0.8))',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    title: {
      fontSize: '2rem',
      color: '#fff',
      marginBottom: '1rem'
    },
    text: {
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto 2.5rem',
      lineHeight: 1.6
    },
    actions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  };

  return (
    <section id="resume">
      <div className="container">
        <div className="glass" style={styles.card}>
          <h2 style={{...styles.title, background: 'none', WebkitTextFillColor: 'initial', textAlign: 'center'}}>
            Want to know more about my experience?
          </h2>
          <p style={styles.text}>
            Explore my resume for a complete overview of my education, technical skills, projects and certifications.
          </p>
          <div style={styles.actions}>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <FileText size={18} /> View Resume
            </a>
            <a href={resumeUrl} download className="btn-secondary">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
