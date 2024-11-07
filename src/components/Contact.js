import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #3a3a52, #252545);
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background: #444;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #555;
  color: #fff;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #555;
  color: #fff;
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #70e1f5, #ffd194);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Contact() {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" rows="4" required />
        <SubmitButton whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>Send</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}
