import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MenuIcon = styled.div`
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(20, 20, 30, 0.95);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  font-size: 1.5rem;
  color: #f5f5f5;
  padding: 1rem 0;
  cursor: pointer;

  &:hover {
    color: #a1c4fd;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>Premchand</Logo>
      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu open={open} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <NavItem onClick={() => setOpen(false)}>About</NavItem>
        <NavItem onClick={() => setOpen(false)}>Projects</NavItem>
        <NavItem onClick={() => setOpen(false)}>Certifications</NavItem>
        <NavItem onClick={() => setOpen(false)}>Contact</NavItem>
      </NavMenu>
    </NavbarContainer>
  );
}
