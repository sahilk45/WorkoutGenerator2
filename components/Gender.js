"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { FaMale, FaFemale } from 'react-icons/fa';

export default function Gender() {
  const [gender, setGender] = useState(null);
  const router = useRouter();

  const handleGenderSelect = async (selectedGender) => {
    try {
      setGender(selectedGender);
      localStorage.setItem('selectedGender', selectedGender);
      router.replace('/library/level');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const buttonClasses = `
    group relative w-48 h-48 md:w-64 md:h-64
    bg-gradient-to-br from-[#03624c]/80 to-[#00df82]/20
    rounded-2xl backdrop-blur-sm
    border border-[#00df82]/30
    transition-all duration-500 ease-out
    hover:scale-105 hover:border-[#00df82]/60
    active:scale-95 transform
    overflow-hidden
  `;

  const iconClasses = `
    text-5xl md:text-6xl 
    transition-transform duration-500
    group-hover:scale-110 group-hover:rotate-6
  `;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 text-center text-[#00df82]">
          Select Your Gender
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {[
            { type: 'male', Icon: FaMale },
            { type: 'female', Icon: FaFemale }
          ].map(({ type, Icon }) => (
            <button
              key={type}
              onClick={() => handleGenderSelect(type)}
              className={buttonClasses}
            >
              <div className="relative h-full flex flex-col items-center justify-center gap-4
                text-white group-hover:text-[#00df82] transition-colors duration-500">
                <Icon className={iconClasses} />
                <span className="text-2xl md:text-3xl font-bold capitalize tracking-wide">
                  {type}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}