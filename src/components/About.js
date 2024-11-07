import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #232526, #414345);
  color: #fff;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffd194, #70e1f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #f5f5f5;
  max-width: 600px;
  margin: 0 auto;
`;

export default function About() {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I'm a passionate frontend developer specializing in creating visually stunning, user-friendly websites.
      </AboutText>
    </AboutSection>
  );
}
