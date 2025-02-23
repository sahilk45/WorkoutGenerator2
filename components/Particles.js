"use client";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50, // Reduced for better performance
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#00df82"
      },
      links: {
        enable: true,
        color: "#03624c",
        opacity: 0.2
      },
      move: {
        enable: true,
        speed: 0.8, // Reduced speed for smoother animation
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      size: {
        value: 2
      },
      opacity: {
        value: 0.3
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        }
      }
    },
    fpsLimit: 60 // Add FPS limit for better performance
  };

  return (
    <Particles
      className="absolute inset-0 -z-10 pointer-events-none"
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesComponent;