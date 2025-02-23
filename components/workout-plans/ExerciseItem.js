"use client";
import { useState, useEffect } from 'react';

export default function ExerciseItem({ title, reps, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [restTime, setRestTime] = useState(60);
  const [isResting, setIsResting] = useState(false);
  const [isRestPaused, setIsRestPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    let interval;
    if (isResting && restTime > 0 && !isRestPaused) {
      interval = setInterval(() => {
        setRestTime(prev => prev - 1);
      }, 1000);
    } else if (restTime === 0) {
      setIsResting(false);
      setIsRestPaused(false);
      setRestTime(60);
    }
    return () => clearInterval(interval);
  }, [isResting, restTime, isRestPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRest = () => {
    if (isResting) {
      setIsRestPaused(!isRestPaused);
    } else {
      setIsResting(true);
      setIsRestPaused(false);
      setRestTime(60);
    }
  };

  const handleRestReset = () => {
    setIsResting(false);
    setIsRestPaused(false);
    setRestTime(60);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsCompleted(isChecked);
    onComplete?.(isChecked);
  };

  return (
    <div className="space-y-2">
      <div className="bg-black border border-[#03624c] p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            className="w-5 h-5 rounded border-[#03624c] text-[#00df82] focus:ring-[#00df82]"
          />
          <div>
            <h3 className={`font-medium ${isCompleted ? 'text-gray-500 line-through' : 'text-white'}`}>
              {title}
            </h3>
            <p className="text-gray-400">{reps}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-[#00df82] font-mono">{formatTime(time)}</div>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`px-3 py-1 rounded ${
              isTimerRunning 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-[#03624c] hover:bg-[#03624c]/80'
            } text-white text-sm`}
          >
            {isTimerRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={() => setTime(0)}
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm"
          >
            Reset
          </button>
          <button
            onClick={handleRest}
            className={`px-3 py-1 rounded ${
              isResting 
                ? isRestPaused
                  ? 'bg-[#03624c] hover:bg-[#03624c]/80'
                  : 'bg-yellow-600 hover:bg-yellow-700'
                : 'bg-gray-700 hover:bg-gray-600'
            } text-white text-sm`}
          >
            {isResting 
              ? `${isRestPaused ? 'Resume' : 'Pause'} Rest (${restTime}s)`
              : 'Rest (60s)'
            }
          </button>
          {isResting && (
            <button
              onClick={handleRestReset}
              className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
            >
              Reset Rest
            </button>
          )}
        </div>
      </div>
      
      {isResting && (
        <div className="bg-gray-800 p-2 rounded text-center mt-2">
          Rest Time {isRestPaused ? 'Paused' : 'Remaining'}: {restTime}s
        </div>
      )}
    </div>
  );
}
