"use client";
import { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import ProgressMeter from './ProgressMeter';

export default function MuscleProgress() {
  const [completedExercises, setCompletedExercises] = useState(0);
  const exercises = [
    {
      name: "Upper Body Strength",
      sets: [
        { title: "Progressive Bench Press", reps: "5 sets of 5 reps" },
        { title: "Weighted Pull-ups", reps: "4 sets of 6-8 reps" },
        { title: "Military Press", reps: "4 sets of 8-10 reps" }
      ]
    },
    {
      name: "Lower Body Power",
      sets: [
        { title: "Progressive Squats", reps: "5 sets of 5 reps" },
        { title: "Romanian Deadlifts", reps: "4 sets of 8 reps" },
        { title: "Leg Press", reps: "3 sets of 10 reps" }
      ]
    },
    {
      name: "Accessory Work",
      sets: [
        { title: "Face Pulls", reps: "3 sets of 15 reps" },
        { title: "Lateral Raises", reps: "3 sets of 12 reps" },
        { title: "Tricep Extensions", reps: "3 sets of 12 reps" }
      ]
    }
  ];

  const totalExercises = exercises.reduce((total, category) => total + category.sets.length, 0);

  const handleExerciseComplete = (isCompleted) => {
    setCompletedExercises(prev => isCompleted ? prev + 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 p-8 relative">
      <ProgressMeter 
        completedExercises={completedExercises}
        totalExercises={totalExercises}
      />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 mr-40">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#03624c] to-[#00df82] bg-clip-text text-transparent">
            Muscle Progress Program
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Focus on progressive overload and compound movements for maximum muscle growth.
          </p>
        </div>
        
        <div className="space-y-12">
          {exercises.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg 
                         rounded-2xl p-8 shadow-xl border border-[#03624c]/20 
                         hover:border-[#00df82]/30 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-[#00df82] mb-8 pl-4 border-l-4 border-[#03624c]">
                {category.name}
              </h2>
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
