"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaDumbbell, FaRunning, FaFire } from 'react-icons/fa';

export default function Level() {
    const [gender, setGender] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const savedGender = localStorage.getItem('selectedGender');
        if (savedGender) {
            setGender(savedGender);
        }
    }, []);

    const handleLevelSelect = (level) => {
        try {
            localStorage.setItem('selectedLevel', level);
            console.log('Redirecting to plans page...');
            router.replace('/library/plans');
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
        text-4xl md:text-5xl
        transition-transform duration-500
        group-hover:scale-110 group-hover:rotate-6
    `;

    const levels = [
        { level: "Beginner", Icon: FaDumbbell },
        { level: "Intermediate", Icon: FaRunning },
        { level: "Advanced", Icon: FaFire }
    ];

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 text-center
                    bg-gradient-to-r from-[#00df82] via-[#00df82]/90 to-[#00df82]
                    bg-clip-text text-transparent
                    tracking-wide leading-tight drop-shadow-2xl">
                    Select Your Level
                    <span className="block text-2xl md:text-3xl mt-4 text-[#00df82]/80">
                        {gender?.charAt(0).toUpperCase() + gender?.slice(1)}
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {levels.map(({ level, Icon }) => (
                        <button
                            key={level}
                            onClick={() => handleLevelSelect(level.toLowerCase())}
                            className={buttonClasses}
                        >
                            <div className="relative h-full flex flex-col items-center justify-center gap-4
                                text-white group-hover:text-[#00df82] transition-colors duration-500">
                                <Icon className={iconClasses} />
                                <span className="text-2xl md:text-3xl font-bold capitalize tracking-wide">
                                    {level}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}