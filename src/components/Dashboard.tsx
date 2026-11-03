import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Target, 
  Flame, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Dumbbell, 
  Info, 
  Activity,
  Layers,
  ChevronDown,
  MessageSquare,
  Sparkles,
  Youtube
} from 'lucide-react';
import { DayOfWeek, FitnessLevel, WeightUnit, LanguageMode, DayWorkout, Exercise } from '../types/workout';
import { WORKOUT_DATABASE } from '../data/workoutData';
import { convertWeight } from '../utils/storage';
import { ExerciseIllustration } from './ExerciseIllustration';
import { VideoModal } from './VideoModal';

interface DashboardProps {
  selectedDay: DayOfWeek;
  onSelectDay: (day: DayOfWeek) => void;
  fitnessLevel: FitnessLevel;
  onSelectFitnessLevel: (level: FitnessLevel) => void;
  weightUnit: WeightUnit;
  languageMode: LanguageMode;
  onChangeLanguageMode: (mode: LanguageMode) => void;
  onStartWorkout: () => void;
}

const DAYS_LIST: { day: DayOfWeek; name: string; short: string; focus: string }[] = [
  { day: 'monday', name: 'Monday', short: 'Mon', focus: 'Chest & Triceps' },
  { day: 'tuesday', name: 'Tuesday', short: 'Tue', focus: 'Back & Biceps' },
  { day: 'wednesday', name: 'Wednesday', short: 'Wed', focus: 'Legs & Calves' },
  { day: 'thursday', name: 'Thursday', short: 'Thu', focus: 'Shoulders & Traps' },
  { day: 'friday', name: 'Friday', short: 'Fri', focus: 'Full Body & HIIT' },
  { day: 'saturday', name: 'Saturday', short: 'Sat', focus: 'Conditioning & Arms' },
];

export const Dashboard: React.FC<DashboardProps> = ({
  selectedDay,
  onSelectDay,
  fitnessLevel,
  onSelectFitnessLevel,
  weightUnit,
  languageMode,
  onChangeLanguageMode,
  onStartWorkout,
}) => {
  const currentWorkout: DayWorkout = WORKOUT_DATABASE[selectedDay];
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(null);
  const [videoExercise, setVideoExercise] = useState<Exercise | null>(null);

  const totalExercises = currentWorkout.phases.reduce((acc, phase) => acc + phase.exercises.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-8">
      
      {/* Hero Banner with Dark Athletic Theme */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-950 border border-zinc-800 p-6 md:p-8 athletic-glow">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            
            {/* Metadata indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>60-MINUTE STRUCTURED GYM ROUTINE</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400 uppercase tracking-wider">{selectedDay} SESSION</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none uppercase">
              {currentWorkout.shortTitle} <span className="text-amber-400">+ GUT BURN</span>
            </h1>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {currentWorkout.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>60 Mins Total</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>4 Sequential Phases</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Target className="w-4 h-4 text-amber-400" />
                <span>{totalExercises} Total Exercises</span>
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-stretch sm:items-end gap-3">
            <button
              onClick={onStartWorkout}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-base md:text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Play className="w-6 h-6 fill-zinc-950 stroke-zinc-950 group-hover:scale-110 transition-transform shrink-0" />
              <span>START {selectedDay.toUpperCase()} WORKOUT (60 MINS)</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
            <span className="text-center sm:text-right text-xs text-zinc-400 font-medium">
              Interactive timer, form guides & set logging
            </span>
          </div>
        </div>
      </section>

      {/* Fitness Level & Weight Scaling Selector */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wide">
              1. Select Your Fitness Level & Intensity
            </h2>
            <p className="text-xs text-zinc-400">
              Weights and intensity automatically scale for your experience tier
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Beginner Tier */}
          <button
            onClick={() => onSelectFitnessLevel('beginner')}
            className={`p-5 rounded-xl text-left border transition-all relative overflow-hidden ${
              fitnessLevel === 'beginner'
                ? 'bg-zinc-900 border-amber-500 ring-1 ring-amber-500 shadow-lg shadow-amber-500/10'
                : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40'
            }`}
          >
            {fitnessLevel === 'beginner' && (
              <div className="absolute top-0 right-0 bg-amber-500 text-zinc-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-bl-lg uppercase">
                Active Level
              </div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className={`w-5 h-5 ${fitnessLevel === 'beginner' ? 'text-amber-400' : 'text-zinc-500'}`} />
              <h3 className="font-display text-lg font-bold text-white uppercase">Beginner Tier</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Light & form-focused training. Emphasizes joint mobility, muscle memory, and proper execution.
            </p>
            <div className="text-[11px] font-mono-num text-amber-400/90 font-medium bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              Weight Range: 5–7.5 kg DBs / Empty Bar (RPE 5/10)
            </div>
          </button>

          {/* Intermediate Tier */}
          <button
            onClick={() => onSelectFitnessLevel('intermediate')}
            className={`p-5 rounded-xl text-left border transition-all relative overflow-hidden ${
              fitnessLevel === 'intermediate'
                ? 'bg-zinc-900 border-amber-500 ring-1 ring-amber-500 shadow-lg shadow-amber-500/10'
                : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40'
            }`}
          >
            {fitnessLevel === 'intermediate' && (
              <div className="absolute top-0 right-0 bg-amber-500 text-zinc-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-bl-lg uppercase">
                Active Level
              </div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <Zap className={`w-5 h-5 ${fitnessLevel === 'intermediate' ? 'text-amber-400' : 'text-zinc-500'}`} />
              <h3 className="font-display text-lg font-bold text-white uppercase">Intermediate Tier</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Progressive overload & muscle growth. Balanced volume with steady strength progression.
            </p>
            <div className="text-[11px] font-mono-num text-amber-400/90 font-medium bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              Weight Range: 12.5–17.5 kg DBs / 50-60 kg Bar (RPE 7-7.5/10)
            </div>
          </button>

          {/* Pro Tier */}
          <button
            onClick={() => onSelectFitnessLevel('pro')}
            className={`p-5 rounded-xl text-left border transition-all relative overflow-hidden ${
              fitnessLevel === 'pro'
                ? 'bg-zinc-900 border-amber-500 ring-1 ring-amber-500 shadow-lg shadow-amber-500/10'
                : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40'
            }`}
          >
            {fitnessLevel === 'pro' && (
              <div className="absolute top-0 right-0 bg-amber-500 text-zinc-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-bl-lg uppercase">
                Active Level
              </div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <Flame className={`w-5 h-5 ${fitnessLevel === 'pro' ? 'text-amber-400' : 'text-zinc-500'}`} />
              <h3 className="font-display text-lg font-bold text-white uppercase">Pro Tier</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Heavy compound loading & maximal hypertrophy. High intensity near failure with strict mechanical control.
            </p>
            <div className="text-[11px] font-mono-num text-amber-400/90 font-medium bg-zinc-950 p-2 rounded-lg border border-zinc-800">
              Weight Range: 22.5 kg+ DBs / 80-120 kg+ Bar (RPE 8.5-9/10)
            </div>
          </button>

        </div>
      </section>

      {/* Day Selector Bar */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wide">
              2. Select Workout Day (Monday to Saturday Split)
            </h2>
            <p className="text-xs text-zinc-400">
              Pre-loaded 6-day split targeting complementary muscle groups
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {DAYS_LIST.map((item) => {
            const isSelected = selectedDay === item.day;
            return (
              <button
                key={item.day}
                onClick={() => onSelectDay(item.day)}
                className={`flex-1 min-w-[150px] p-3 rounded-xl border text-left transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase mb-1 opacity-80">
                  <span>{item.short}</span>
                  {isSelected && <span className="text-[10px] bg-zinc-950 text-amber-400 px-1.5 py-0.5 rounded font-bold">Selected</span>}
                </div>
                <div className={`font-display text-base font-bold truncate ${isSelected ? 'text-zinc-950' : 'text-white'}`}>
                  {item.focus}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 60-Minute Phase Structure Breakdown for Selected Day */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span>{currentWorkout.dayTitle}</span>
            </h2>
            <p className="text-xs text-zinc-400">
              60 Minutes broken down into 4 sequential training phases
            </p>
          </div>

          <button
            onClick={onStartWorkout}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase rounded-lg shadow-md transition-all"
          >
            <Play className="w-4 h-4 fill-zinc-950" />
            <span>Launch Player</span>
          </button>
        </div>

        {/* Phase Cards Stack */}
        <div className="space-y-6">
          {currentWorkout.phases.map((phase) => (
            <div 
              key={phase.phaseNumber}
              className="bg-zinc-900/80 rounded-xl border border-zinc-800 overflow-hidden"
            >
              {/* Phase Header */}
              <div className="p-4 md:p-5 bg-zinc-950/80 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase border ${phase.badgeColor}`}>
                    Phase {phase.phaseNumber} · {phase.durationMinutes} Mins
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase">
                      {phase.title} <span className="text-zinc-400 font-sans text-xs lowercase">({phase.subtitle})</span>
                    </h3>
                    <p className="text-xs text-zinc-400">{phase.description}</p>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400">
                  {phase.exercises.length} Exercises
                </div>
              </div>

              {/* Exercises Grid / List */}
              <div className="divide-y divide-zinc-800/60">
                {phase.exercises.map((exercise: Exercise) => {
                  const isExpanded = expandedExerciseId === exercise.id;
                  const recommendedWeight = exercise.weights[fitnessLevel];

                  return (
                    <div 
                      key={exercise.id}
                      className="p-4 md:p-5 hover:bg-zinc-800/30 transition-colors space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          
                          {/* Animated SVG Workout Illustration */}
                          <ExerciseIllustration
                            muscleGroup={exercise.primaryMuscleGroup}
                            category={exercise.category}
                            exerciseName={exercise.name}
                            imageUrl={exercise.imageUrl}
                            className="w-28 h-28 sm:w-32 sm:h-32"
                            onClick={() => setVideoExercise(exercise)}
                          />

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-white text-base">
                                {exercise.name}
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-medium">
                                {exercise.targetMuscle}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                              <span className="flex items-center gap-1">
                                <Dumbbell className="w-3.5 h-3.5 text-zinc-500" />
                                <strong className="text-zinc-300 font-normal">Equipment:</strong> {exercise.equipment}
                              </span>
                            </div>

                            {/* Watch Video Button */}
                            <button
                              onClick={() => setVideoExercise(exercise)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-red-300 transition-colors"
                            >
                              <Youtube className="w-3 h-3 text-red-500 fill-red-500/30" />
                              <span>Watch Form Video</span>
                            </button>
                          </div>
                        </div>

                        {/* Prescribed Sets / Reps & Scaled Weight */}
                        <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
                          <div className="text-right">
                            <div className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                              {exercise.sets} Sets × {exercise.repsOrDuration}
                            </div>
                            <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                              {exercise.restSeconds}s rest between sets
                            </div>
                          </div>

                          <button
                            onClick={() => setExpandedExerciseId(isExpanded ? null : exercise.id)}
                            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                            title="Toggle form guide"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Scaled Weight Banner */}
                      <div className="flex items-center justify-between bg-zinc-950/80 p-2.5 rounded-lg border border-zinc-800 text-xs">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-amber-400" />
                          <strong className="text-zinc-200">Recommended Intensity ({fitnessLevel.toUpperCase()}):</strong>
                        </span>
                        <span className="font-mono font-semibold text-amber-300">
                          {recommendedWeight}
                        </span>
                      </div>

                      {/* Form Guide & Tanglish Coach Tip (Expanded) */}
                      {isExpanded && (
                        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 mt-2">
                          
                          {/* English Form Guide */}
                          {(languageMode === 'both' || languageMode === 'en') && (
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                                <Activity className="w-3.5 h-3.5 text-amber-400" />
                                English Step-by-Step Form Guide
                              </h4>
                              <ul className="space-y-1 text-xs text-zinc-300 pl-4 list-disc marker:text-amber-500">
                                {exercise.formGuide.map((pointer, idx) => (
                                  <li key={idx} className="leading-relaxed">
                                    {pointer}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tanglish Coach Tip Card */}
                          {(languageMode === 'both' || languageMode === 'tanglish') && (
                            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1 text-xs">
                              <div className="flex items-center gap-1.5 font-bold text-amber-300 uppercase tracking-wide">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>Tanglish Gym Master Tip</span>
                              </div>
                              <p className="text-zinc-200 italic leading-relaxed pl-1">
                                "{exercise.tanglishTip}"
                              </p>
                            </div>
                          )}

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Bottom Sticky Bar for Mobile Launching */}
      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
        <button
          onClick={onStartWorkout}
          className="w-full py-3.5 bg-amber-500 text-zinc-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Play className="w-5 h-5 fill-zinc-950" />
          <span>START {selectedDay.toUpperCase()} WORKOUT (60 MINS)</span>
        </button>
      </div>

      {/* YouTube Form Video Modal */}
      {videoExercise && (
        <VideoModal
          exerciseName={videoExercise.name}
          targetMuscle={videoExercise.targetMuscle}
          formGuide={videoExercise.formGuide}
          tanglishTip={videoExercise.tanglishTip}
          commonMistakes={videoExercise.commonMistakes}
          onClose={() => setVideoExercise(null)}
        />
      )}

    </div>
  );
};
