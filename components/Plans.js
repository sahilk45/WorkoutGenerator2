"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Plans() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    gender: null,
    level: null
  });

  useEffect(() => {
    const savedGender = localStorage.getItem('selectedGender');
    const savedLevel = localStorage.getItem('selectedLevel');
    if (savedGender && savedLevel) {
      setUserInfo({ gender: savedGender, level: savedLevel });
    }
  }, []);

  const goals = [
    { title: "Weight Gain", description: "Increase muscle mass with strength training and a calorie-surplus diet." },
    { title: "Weight Loss", description: "Burn calories with high-intensity workouts and cardio." },
    { title: "Muscle Progress", description: "Build muscle with strength training and progressive overload." },
    { title: "Flexibility & Mobility", description: "Improve range of motion with stretching and yoga." },
    { title: "Rehabilitation & Recovery", description: "Low-impact exercises for injury recovery and mobility." },
  ];

  const handlePlanClick = (planTitle) => {
    try {
      const route = planTitle.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      localStorage.setItem('selectedPlan', route);
      router.push(`/workout-plans/${route}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
        Workout Goals
      </h1>
      <p className="text-gray-400 mb-12">
        {userInfo.gender?.charAt(0).toUpperCase() + userInfo.gender?.slice(1)} - {userInfo.level?.charAt(0).toUpperCase() + userInfo.level?.slice(1)} Level
      </p>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        {goals.map((goal, index) => (
          <div
            key={index}
            onClick={() => handlePlanClick(goal.title)}
            className="bg-black border border-[#03624c] text-white p-8 rounded-3xl shadow-lg w-80 h-48 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00df82]/20 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
              {goal.title}
            </h2>
            <p className="text-gray-400 mt-2">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}