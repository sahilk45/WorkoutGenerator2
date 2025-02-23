"use client";
import { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import ProgressMeter from './ProgressMeter';

export default function FlexibilityMobility() {
  const [completedExercises, setCompletedExercises] = useState(0);
  const exercises = [
    {
      name: "Dynamic Warm-up",
      sets: [
        { title: "Arm Circles", reps: "2 sets of 30 seconds each direction" },
        { title: "Leg Swings", reps: "2 sets of 15 reps each leg" },
        { title: "Hip Circles", reps: "2 sets of 30 seconds each direction" }
      ]
    },
    {
      name: "Yoga Flow",
      sets: [
        { title: "Sun Salutation", reps: "5 complete flows" },
        { title: "Warrior Sequence", reps: "3 minutes each side" },
        { title: "Balance Poses", reps: "30 seconds each pose" }
      ]
    },
    {
      name: "Mobility Work",
      sets: [
        { title: "Joint Mobility", reps: "15 reps per joint" },
        { title: "Dynamic Stretches", reps: "45 seconds per stretch" },
        { title: "Foam Rolling", reps: "1 minute per muscle group" }
      ]
    }
  ];

  const totalExercises = exercises.reduce((total, category) => total + category.sets.length, 0);

  const handleExerciseComplete = (isCompleted) => {
    setCompletedExercises(prev => isCompleted ? prev + 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <ProgressMeter 
        completedExercises={completedExercises}
        totalExercises={totalExercises}
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
          Flexibility & Mobility Program
        </h1>
        <p className="text-gray-400 mb-8">
          Enhance your range of motion and body awareness through targeted mobility work and stretching.
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
