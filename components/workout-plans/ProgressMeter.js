export default function ProgressMeter({ completedExercises, totalExercises }) {
  const progress = (completedExercises / totalExercises) * 100;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-gray-900/90 to-black/90 
                    backdrop-blur-xl rounded-3xl p-6 border border-[#03624c]/40 
                    shadow-lg shadow-[#03624c]/10 w-32 transition-all duration-300
                    hover:shadow-xl hover:border-[#00df82]/40">
      <div className="flex flex-col items-center h-80 relative">
        {/* Title */}
        <div className="mb-6">
          <h3 className="text-[#00df82] font-semibold text-lg">
            Progress
          </h3>
        </div>
        
        {/* Progress Bar */}
        <div className="relative w-3 h-48 bg-gray-800/50 rounded-full overflow-hidden
                        ring-2 ring-gray-800/30 ring-offset-2 ring-offset-gray-900/50">
          <div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#03624c] via-[#029670] to-[#00df82] 
                       transition-all duration-700 ease-out shadow-lg"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Counter */}
        <div className="mt-6 bg-gray-900/50 px-4 py-2 rounded-full
                        backdrop-blur-sm border border-[#03624c]/20">
          <span className="text-base text-[#00df82] font-medium">
            {completedExercises}/{totalExercises}
          </span>
        </div>
      </div>
    </div>
  );
}
