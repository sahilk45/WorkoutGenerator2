"use client";
import { useParams } from 'next/navigation';
import WeightGain from '../../../components/workout-plans/WeightGain';
import WeightLoss from '../../../components/workout-plans/WeightLoss';
import MuscleProgress from '../../../components/workout-plans/MuscleProgress';
import FlexibilityMobility from '../../../components/workout-plans/FlexibilityMobility';
import Rehabilitation from '../../../components/workout-plans/Rehabilitation';

const WorkoutPlan = () => {
  const params = useParams();
  
  const getWorkoutComponent = () => {
    switch(params.plan) {
      case 'weight-gain':
        return <WeightGain />;
      case 'weight-loss':
        return <WeightLoss />;
      case 'muscle-progress':
        return <MuscleProgress />;
      case 'flexibility-mobility':
        return <FlexibilityMobility />;
      case 'rehabilitation-recovery':
        return <Rehabilitation />;
      default:
        return (
          <div className="min-h-screen bg-black flex items-center justify-center">
            <h1 className="text-2xl text-white">Plan not found</h1>
          </div>
        );
    }
  };

  return getWorkoutComponent();
};

export default WorkoutPlan;
