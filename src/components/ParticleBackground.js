import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styled from 'styled-components';

const ParticleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParticleBackground = () => {
  // Initialize the particles
  const particlesInit = async (main) => {
    await loadFull(main); // Ensure the full particle system is loaded
  };

  return (
    <ParticleWrapper>
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: { value: "#141414" }, // Dark background
          },
          particles: {
            color: {
              value: ["#ff4c4c", "#4c4cff", "#4cff8f", "#fff"], // Dynamic colors
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,  // Fast particle speed
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              bounce: true, // Allow particles to bounce off edges, simulating a "hit" effect
              rotation: {
                enable: true,
                speed: 10, // Rotation speed
              },
            },
            size: {
              value: 20,  // Increased particle size
              animation: {
                enable: true,
                speed: 30, // Speed of size animation
                minimumValue: 8, // Minimum size value
              },
            },
            opacity: {
              value: 0.7,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.2,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse effect on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push more particles on click
              },
            },
            modes: {
              repulse: { distance: 150 },
              push: { particles_nb: 5 },
            },
          },
          particlesNumber: {
            value: 800,  // Increased number of particles for a denser effect
          },
        }}
      />
    </ParticleWrapper>
  );
};

export default ParticleBackground;
