"use client";
import { useState, useEffect } from 'react';
import ExerciseItem from './ExerciseItem';
import ProgressMeter from './ProgressMeter';

export default function WeightGain() {
  const [completedExercises, setCompletedExercises] = useState(0);
  const exercises = [
    {
      name: "Compound Barbell Exercises",
      sets: [
        { title: "Squats", reps: "4 sets of 8-10 reps" },
        { title: "Deadlifts", reps: "4 sets of 6-8 reps" },
        { title: "Bench Press", reps: "4 sets of 8-10 reps" },
      ]
    },
    {
      name: "Muscle Building Exercises",
      sets: [
        { title: "Dumbbell Row", reps: "3 sets of 12 reps" },
        { title: "Overhead Press", reps: "3 sets of 10 reps" },
        { title: "Bulgarian Split Squats", reps: "3 sets of 12 reps per leg" },
      ]
    }
  ];

  // Calculate total exercises
  const totalExercises = exercises.reduce((total, category) => total + category.sets.length, 0);

  const handleExerciseComplete = (isCompleted) => {
    setCompletedExercises(prev => isCompleted ? prev + 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 p-4 sm:p-8 relative">
      <ProgressMeter 
        completedExercises={completedExercises}
        totalExercises={totalExercises}
      />
      
      <div className="max-w-4xl mx-auto pr-24"> {/* Added right padding to prevent overlap */}
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#03624c] via-[#029670] to-[#00df82] bg-clip-text text-transparent">
            Weight Gain Program
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Focus on progressive overload and compound movements to build muscle mass.
          </p>
        </div>
        
        {/* Exercises Section */}
        <div className="space-y-8 sm:space-y-12 px-4">
          {exercises.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-lg 
                         rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#03624c]/20 
                         hover:border-[#00df82]/30 transition-all duration-300
                         hover:shadow-[#03624c]/10 hover:shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00df82] mb-6 sm:mb-8 
                         pl-4 border-l-4 border-[#03624c] flex items-center">
                {category.name}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {category.sets.map((exercise, index) => (
                  <ExerciseItem
                    key={index}
                    title={exercise.title}
                    reps={exercise.reps}
                    onComplete={handleExerciseComplete}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
