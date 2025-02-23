"use client";

import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const ProgressDashboard = ({ workoutData }) => {
  // Calculate streak
  const calculateStreak = () => {
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const workout = workoutData[date.toDateString()];
      if (workout?.status === 'completed') {
        streak++;
      } else break;
    }
    return streak;
  };

  // Prepare data for charts
  const getWeeklyData = () => {
    const data = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const workout = workoutData[date.toDateString()];
      data.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        completed: workout?.status === 'completed' ? 1 : 0,
        status: workout?.status || 'none'
      });
    }
    return data;
  };

  const weeklyData = getWeeklyData();

  return (
    <div className="space-y-6">
      {/* Streak Card */}
      <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20">
        <h3 className="text-xl font-bold text-[#00df82] mb-2">Current Streak</h3>
        <div className="text-4xl font-bold">{calculateStreak()} days</div>
      </div>

      {/* Weekly Progress */}
      <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20">
        <h3 className="text-xl font-bold text-[#00df82] mb-4">Weekly Progress</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#000',
                  border: '1px solid #00df82',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="completed" 
                fill="#00df82"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-[#00df82]/20">
          <h4 className="text-sm text-gray-400">Completed</h4>
          <div className="text-2xl font-bold text-[#00df82]">
            {Object.values(workoutData).filter(w => w.status === 'completed').length}
          </div>
        </div>
        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-[#00df82]/20">
          <h4 className="text-sm text-gray-400">Rest Days</h4>
          <div className="text-2xl font-bold text-yellow-500">
            {Object.values(workoutData).filter(w => w.status === 'rest').length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
