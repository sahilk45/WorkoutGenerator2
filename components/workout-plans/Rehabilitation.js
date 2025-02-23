"use client";
import { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import ProgressMeter from './ProgressMeter';

export default function Rehabilitation() {
  const [completedExercises, setCompletedExercises] = useState(0);
  const exercises = [
    {
      name: "Gentle Mobility",
      sets: [
        { title: "Joint Circles", reps: "30 seconds per joint" },
        { title: "Walking", reps: "10-15 minutes" },
        { title: "Light Stretching", reps: "Hold each stretch 15-20 seconds" }
      ]
    },
    {
      name: "Stability Work",
      sets: [
        { title: "Balance Exercises", reps: "3 sets of 30 seconds" },
        { title: "Core Activation", reps: "2 sets of 10 reps" },
        { title: "Bird Dogs", reps: "2 sets of 8 each side" }
      ]
    },
    {
      name: "Recovery Techniques",
      sets: [
        { title: "Foam Rolling", reps: "60 seconds per muscle group" },
        { title: "Band Exercises", reps: "2 sets of 15 reps" },
        { title: "Breathing Exercises", reps: "5 sets of 5 deep breaths" }
      ]
    }
  ];

  const totalExercises = exercises.reduce((total, category) => total + category.sets.length, 0);

  const handleExerciseComplete = (isCompleted) => {
    setCompletedExercises(prev => isCompleted ? prev + 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-black p-8 relative">
      <ProgressMeter 
        completedExercises={completedExercises}
        totalExercises={totalExercises}
      />
      <div className="max-w-4xl mx-auto ml-40">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
          Rehabilitation & Recovery Program
        </h1>
        <p className="text-gray-400 mb-8">
          Safe and effective exercises designed to help you recover and rebuild strength gradually.
        </p>
        
        <div className="space-y-8">
          {exercises.map((category, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#00df82] mb-4">{category.name}</h2>
              <div className="space-y-4">
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
