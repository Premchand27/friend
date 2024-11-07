import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: 4rem 2rem;
  background: #34495e;
  text-align: center;
`;

const CertificationCard = styled(motion.div)`
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background: #1abc9c;
`;

export default function Certifications() {
  return (
    <CertificationsSection>
      <h2>Certifications</h2>
      <CertificationCard whileHover={{ scale: 1.05 }}>
        <h3>Certification 1</h3>
        <p>Description here</p>
      </CertificationCard>
    </CertificationsSection>
  );
}
