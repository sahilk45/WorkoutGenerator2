"use client";
import { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import ProgressMeter from './ProgressMeter';

export default function WeightLoss() {
  const [completedExercises, setCompletedExercises] = useState(0);
  const exercises = [
    {
      name: "High-Intensity Cardio",
      sets: [
        { title: "Sprint Intervals", reps: "30 seconds sprint, 30 seconds rest x 10" },
        { title: "Jump Rope", reps: "3 sets of 2 minutes" },
        { title: "Burpees", reps: "3 sets of 15 reps" },
      ]
    },
    {
      name: "Circuit Training",
      sets: [
        { title: "Mountain Climbers", reps: "3 sets of 30 seconds" },
        { title: "Push-ups", reps: "3 sets of 12-15 reps" },
        { title: "Bodyweight Squats", reps: "3 sets of 20 reps" },
      ]
    },
    {
      name: "Core Exercises",
      sets: [
        { title: "Plank Hold", reps: "3 sets of 45 seconds" },
        { title: "Russian Twists", reps: "3 sets of 20 reps" },
        { title: "Bicycle Crunches", reps: "3 sets of 30 seconds" },
      ]
    }
  ];

  const totalExercises = exercises.reduce((total, category) => total + category.sets.length, 0);

  const handleExerciseComplete = (isCompleted) => {
    setCompletedExercises(prev => isCompleted ? prev + 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-black p-8 relative flex justify-center">
      <ProgressMeter 
        completedExercises={completedExercises}
        totalExercises={totalExercises}
      />
      <div className="max-w-4xl w-full mx-auto px-4 md:px-8 mr-40">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
            Weight Loss Program
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-intensity workouts designed to maximize calorie burn and improve cardiovascular fitness.
          </p>
        </div>
        
        <div className="space-y-10">
          {exercises.map((category, idx) => (
            <div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#03624c]/20">
              <h2 className="text-2xl font-semibold text-[#00df82] mb-6">{category.name}</h2>
              <div className="space-y-6">
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
