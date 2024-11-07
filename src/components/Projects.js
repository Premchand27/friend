import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(45deg, #1e1e2f, #2a2a3b);
  text-align: center;
  color: #fff;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, #283048, #859398);
  padding: 2rem;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default function Projects() {
  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectCard whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
        <h3>Project 1</h3>
        <p>A description of the project goes here.</p>
      </ProjectCard>
      <ProjectCard whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
        <h3>Project 2</h3>
        <p>A description of the project goes here.</p>
      </ProjectCard>
    </ProjectsSection>
  );
}
