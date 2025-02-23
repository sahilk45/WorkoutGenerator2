"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import WorkoutModal from '@/components/WorkoutModal';
import ProgressDashboard from '@/components/ProgressDashboard';

const ProgressTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [workoutData, setWorkoutData] = useState({});

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleWorkoutUpdate = (date, status, details) => {
    setWorkoutData(prev => ({
      ...prev,
      [date.toDateString()]: { status, details }
    }));
    toast.success('Workout status updated!');
    setShowModal(false);
  };

  const tileClassName = ({ date }) => {
    const workout = workoutData[date.toDateString()];
    if (!workout) return '';
    
    return {
      'bg-green-500/20 text-green-500 border-2 border-green-500': workout.status === 'completed',
      'bg-red-500/20 text-red-500 border-2 border-red-500': workout.status === 'missed',
      'bg-yellow-500/20 text-yellow-500 border-2 border-yellow-500': workout.status === 'rest'
    }[workout.status] || '';
  };

  const tileContent = ({ date }) => {
    const workout = workoutData[date.toDateString()];
    if (!workout) return null;
    
    const icons = {
      completed: '✅',
      missed: '❌',
      rest: '📅'
    };
    
    return (
      <div className="absolute bottom-1 right-1 text-xs">
        {icons[workout.status]}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00df82] to-[#03624c] bg-clip-text text-transparent">
          Progress Tracker
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Updated Calendar Section */}
          <div className="lg:col-span-2 bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20 h-fit flex flex-col">
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              tileClassName={tileClassName}
              tileContent={tileContent}
              className="flex-1 scale-90 transform origin-top"
            />
          </div>

          {/* Dashboard Section */}
          <div className="lg:col-span-1">
            <ProgressDashboard workoutData={workoutData} />
          </div>
        </div>

        {/* Workout Modal */}
        <WorkoutModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={(status, details) => handleWorkoutUpdate(selectedDate, status, details)}
          date={selectedDate}
        />

        <ToastContainer
          position="bottom-right"
          theme="dark"
          autoClose={3000}
        />
      </motion.div>
    </div>
  );
};

export default ProgressTracker;