import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { projects } = portfolioData;

  const styles = {
    grid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem'
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
