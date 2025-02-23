"use client";

import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const SparkleButton = ({ onClick, children, className }) => {
  const handleClick = (e) => {
    // Trigger confetti from click position
    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.right) / 2 / window.innerWidth;
    const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#00df82', '#03624c', '#ffffff'],
      angle: 90,
      startVelocity: 30,
      gravity: 0.8,
      ticks: 200
    });

    // Call the original onClick handler if provided
    onClick && onClick(e);
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.1 }
      }}
      whileTap={{ 
        scale: 0.95,
        background: "linear-gradient(225deg, #03624c 0%, #00df82 50%, #03624c 100%)",
        transition: { duration: 0.05 }
      }}
      className={`relative group ${className}`}
      onClick={handleClick}
    >
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#00df82] via-[#03624c] to-[#00df82] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur-[8px] transition-all duration-150 animate-gradient-x-fast"></div>
      <div className="relative px-6 py-3 bg-black rounded-lg leading-none">
        <span className="bg-gradient-to-r from-[#00df82] to-[#03624c] bg-clip-text text-transparent font-bold transition-all duration-150 group-hover:text-white">
          {children}
        </span>
      </div>
    </motion.button>
  );
};

export default SparkleButton;
