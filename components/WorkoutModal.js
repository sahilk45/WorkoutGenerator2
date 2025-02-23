"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkoutModal = ({ isOpen, onClose, onSubmit, date }) => {
  const [status, setStatus] = useState('completed');
  const [details, setDetails] = useState('');

  const statusIcons = {
    completed: '✅',
    missed: '❌',
    rest: '📅'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(status, details);
    setDetails('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-black/80 border border-[#00df82]/20 rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#00df82]">
              {date.toDateString()}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Workout Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-black/50 border border-[#00df82]/20 rounded-lg p-2 focus:ring-2 focus:ring-[#00df82]/50"
                >
                  <option value="completed">✅ Completed</option>
                  <option value="missed">❌ Missed</option>
                  <option value="rest">📅 Rest Day</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Notes
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-black/50 border border-[#00df82]/20 rounded-lg p-2 h-24 focus:ring-2 focus:ring-[#00df82]/50"
                  placeholder="Add workout details..."
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-[#00df82]/20 hover:bg-[#00df82]/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#03624c] to-[#00df82] hover:from-[#00df82] hover:to-[#03624c]"
                >
                  Save
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkoutModal;
