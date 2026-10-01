import React, { useState } from 'react';
import { Github, Linkedin } from './Icons';
import { ExternalLink, ChevronRight, X } from 'lucide-react';

const ProjectCard = ({ project, reversed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center',
      direction: reversed ? 'rtl' : 'ltr'
    },
    content: {
      direction: 'ltr'
    },
    visual: {
      width: '100%',
      height: '350px',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    date: {
      color: '#3b82f6',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      display: 'block'
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#fff'
    },
    description: {
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: '1.5rem'
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '2rem'
    },
    techItem: {
      padding: '0.25rem 0.75rem',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      fontSize: '0.8rem',
      color: '#94a3b8'
    },
    links: {
      display: 'flex',
      gap: '1rem'
    },
    linkBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#fff',
      padding: '0.5rem 1rem',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '8px',
      transition: 'all 0.3s',
      fontSize: '0.9rem'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: isModalOpen ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    modalContent: {
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: '2.5rem',
      position: 'relative'
    },
    closeBtn: {
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      color: '#fff',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background 0.3s'
    }
  };

  const renderVisual = () => {
    if (project.liveUrl && project.liveUrl !== '#') {
      return (
        <iframe 
          src={project.liveUrl} 
          title={project.title}
          style={{
            width: '250%',
            height: '250%',
            border: 'none',
            transform: 'scale(0.4)',
            transformOrigin: '0 0',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          scrolling="no"
        />
      );
    }
    if (project.visualType === 'ai') {
      return (
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <div className="pulse-ring"></div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: '50%', border: '2px solid rgba(59,130,246,0.5)', borderTopColor: 'transparent', animation: 'spin 3s linear infinite' }}></div>
          <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px', borderRadius: '50%', border: '2px solid rgba(147,51,234,0.5)', borderRightColor: 'transparent', animation: 'spin-reverse 4s linear infinite' }}></div>
          <div style={{ position: 'absolute', top: '25px', left: '25px', right: '25px', bottom: '25px', background: 'radial-gradient(circle, rgba(59,130,246,0.6), transparent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>AI</span>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', opacity: 0.5 }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{ width: '10px', height: '10px', background: i % 3 === 0 ? '#3b82f6' : (i % 7 === 0 ? '#9333ea' : 'rgba(255,255,255,0.2)'), borderRadius: '50%', animation: `pulse ${2 + i%3}s infinite` }}></div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div style={styles.container} className="project-grid">
        <div 
          style={styles.visual} 
          className="glass project-visual"
          onClick={() => setIsModalOpen(true)}
        >
          {renderVisual()}
        </div>
        <div style={styles.content}>
          <span style={styles.date}>{project.date}</span>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.description}>{project.description}</p>
          
          <div style={styles.techList}>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} style={styles.techItem}>{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span style={styles.techItem}>+{project.technologies.length - 4} more</span>
            )}
          </div>
          
          <div style={styles.links}>
            <button className="link-btn" style={styles.linkBtn} onClick={() => setIsModalOpen(true)}>
              View Details <ChevronRight size={16} />
            </button>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn" style={styles.linkBtn}>
              <Github size={16} /> Code
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn" style={styles.linkBtn}>
              <ExternalLink size={16} /> Live
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div style={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
        <div className="glass modal-content" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button style={styles.closeBtn} onClick={() => setIsModalOpen(false)} className="close-btn">
            <X size={24} />
          </button>
          
          <span style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 600 }}>{project.date}</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'left', background: 'none', WebkitTextFillColor: 'initial', color: '#fff' }}>{project.title}</h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            {project.description}
          </p>

          <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.2rem' }}>Key Features</h4>
          <ul style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {project.features.map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }}></div>
                {feature}
              </li>
            ))}
          </ul>

          <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.2rem' }}>Technologies</h4>
          <div style={{ ...styles.techList, marginBottom: '3rem' }}>
            {project.technologies.map((tech, i) => (
              <span key={i} style={styles.techItem}>{tech}</span>
            ))}
          </div>

          <div style={styles.links}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={18} /> View Source
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .project-grid { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
        .project-visual:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3) !important;
          box-shadow: 0 0 30px rgba(59,130,246,0.15);
        }
        .pulse-ring {
          position: absolute; width: 100%; height: 100%; borderRadius: 50%;
          border: 1px solid rgba(59,130,246,0.5);
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }
        .link-btn:hover { background: rgba(255,255,255,0.1) !important; }
        .close-btn:hover { background: rgba(255,255,255,0.2) !important; transform: rotate(90deg); }
      `}</style>
    </>
  );
};

export default ProjectCard;
