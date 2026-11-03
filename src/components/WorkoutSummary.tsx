import React from 'react';
import { 
  Trophy, 
  Flame, 
  Clock, 
  Dumbbell, 
  CheckCircle2, 
  ArrowRight, 
  Share2, 
  Sparkles,
  Zap,
  Award,
  BarChart3
} from 'lucide-react';
import { WorkoutSessionLog, WeightUnit } from '../types/workout';
import { convertWeight } from '../utils/storage';

interface WorkoutSummaryProps {
  sessionLog: WorkoutSessionLog;
  weightUnit: WeightUnit;
  streakDays: number;
  onReturnDashboard: () => void;
}

export const WorkoutSummary: React.FC<WorkoutSummaryProps> = ({
  sessionLog,
  weightUnit,
  streakDays,
  onReturnDashboard,
}) => {
  const durationMins = Math.round(sessionLog.durationSeconds / 60);
  const formattedVolume = convertWeight(sessionLog.totalVolumeKg, weightUnit);

  // Calorie estimate formula based on level and duration
  const levelMultiplier = sessionLog.fitnessLevel === 'pro' ? 8.5 : sessionLog.fitnessLevel === 'intermediate' ? 7.0 : 5.5;
  const estimatedCalories = Math.round(durationMins * levelMultiplier);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Celebration Hero Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-10 text-center space-y-6 athletic-glow overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Trophy Badge */}
        <div className="relative z-10 w-20 h-20 mx-auto rounded-3xl bg-amber-500 text-zinc-950 flex items-center justify-center shadow-xl shadow-amber-500/30">
          <Trophy className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>60-Minute Workout Completed!</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            {sessionLog.day.toUpperCase()} SESSION CRUSHED!
          </h1>

          <p className="text-zinc-300 text-sm max-w-md mx-auto">
            Great work! You completed all 4 sequential phases, logged your sets, and pushed your limits.
          </p>
        </div>

        {/* Streak Counter Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl text-amber-400 font-semibold text-sm">
          <Flame className="w-5 h-5 fill-amber-500 text-amber-500 animate-bounce" />
          <span>Active Streak: {streakDays} {streakDays === 1 ? 'Day' : 'Days'} in a Row!</span>
        </div>

      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Duration */}
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
          <Clock className="w-5 h-5 text-amber-400 mx-auto" />
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Duration</div>
          <div className="font-mono text-xl font-bold text-white">{durationMins} Mins</div>
        </div>

        {/* Volume Lifted */}
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
          <Dumbbell className="w-5 h-5 text-amber-400 mx-auto" />
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Volume Lifted</div>
          <div className="font-mono text-xl font-bold text-amber-400">{formattedVolume.label}</div>
        </div>

        {/* Exercises Done */}
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Exercises</div>
          <div className="font-mono text-xl font-bold text-white">
            {sessionLog.completedExercisesCount} / {sessionLog.totalExercisesCount}
          </div>
        </div>

        {/* Calorie Burn */}
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
          <Zap className="w-5 h-5 text-amber-400 mx-auto" />
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Est. Burn</div>
          <div className="font-mono text-xl font-bold text-white">~{estimatedCalories} kcal</div>
        </div>

      </div>

      {/* Return to Dashboard CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={onReturnDashboard}
          className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-base uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <span>Return to Dashboard</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
