import React, { useState } from 'react';
import { Search, Filter, Dumbbell, Target, Layers, ChevronDown, Activity, Info, Sparkles, Youtube } from 'lucide-react';
import { Exercise, MuscleGroup, FitnessLevel, WeightUnit, LanguageMode } from '../types/workout';
import { WORKOUT_DATABASE } from '../data/workoutData';
import { ExerciseIllustration } from './ExerciseIllustration';
import { VideoModal } from './VideoModal';

interface LibraryViewProps {
  fitnessLevel: FitnessLevel;
  weightUnit: WeightUnit;
  languageMode: LanguageMode;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ fitnessLevel, weightUnit, languageMode }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState<string>('all');
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [videoExercise, setVideoExercise] = useState<Exercise | null>(null);

  // Collect all unique exercises across all 6 days
  const allExercises: { exercise: Exercise; dayTitle: string; phaseTitle: string }[] = [];
  
  Object.values(WORKOUT_DATABASE).forEach((dayData) => {
    dayData.phases.forEach((phase) => {
      phase.exercises.forEach((ex) => {
        allExercises.push({
          exercise: ex,
          dayTitle: dayData.shortTitle,
          phaseTitle: phase.title
        });
      });
    });
  });

  const filteredExercises = allExercises.filter(({ exercise, dayTitle, phaseTitle }) => {
    const matchesSearch = 
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.targetMuscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.equipment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dayTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMuscle = 
      selectedMuscleFilter === 'all' || 
      exercise.primaryMuscleGroup === selectedMuscleFilter;

    const matchesPhase = 
      selectedPhaseFilter === 'all' || 
      exercise.category === selectedPhaseFilter;

    return matchesSearch && matchesMuscle && matchesPhase;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Header Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Dumbbell className="w-4 h-4" />
          <span>Complete Exercise Database</span>
        </div>
        <h1 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
          Exercise Library & Form Guides
        </h1>
        <p className="text-xs text-zinc-400">
          Browse all {allExercises.length} pre-loaded exercises, equipment setups, and trainer form pointers across the Monday–Saturday split.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search exercise name, target muscle, or equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          
          {/* Muscle Group Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[11px] font-mono text-zinc-400 uppercase mr-1">Muscle:</span>
            {['all', 'chest', 'back', 'legs', 'shoulders', 'biceps', 'triceps', 'abs', 'obliques'].map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMuscleFilter(m)}
                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all whitespace-nowrap shrink-0 ${
                  selectedMuscleFilter === m
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                    : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Phase Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[11px] font-mono text-zinc-400 uppercase mr-1">Phase:</span>
            {[
              { id: 'all', label: 'All Phases' },
              { id: 'warmup', label: 'Warm-up' },
              { id: 'gut', label: 'Core & Gut' },
              { id: 'weights', label: 'Weights' },
              { id: 'warmdown', label: 'Cool-down' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPhaseFilter(p.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  selectedPhaseFilter === p.id
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                    : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Exercise Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map(({ exercise, dayTitle, phaseTitle }) => {
          const isExpanded = expandedId === exercise.id;
          const recommendedWeight = exercise.weights[fitnessLevel];

          return (
            <div 
              key={exercise.id}
              className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-3 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  
                  {/* Animated SVG Illustration */}
                  <ExerciseIllustration
                    muscleGroup={exercise.primaryMuscleGroup}
                    category={exercise.category}
                    exerciseName={exercise.name}
                    imageUrl={exercise.imageUrl}
                    className="w-28 h-28 sm:w-32 sm:h-32"
                    onClick={() => setVideoExercise(exercise)}
                  />

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono font-bold uppercase border border-amber-500/20">
                        {dayTitle}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {phaseTitle}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white uppercase leading-tight">
                      {exercise.name}
                    </h3>
                    <div className="text-xs text-zinc-400 flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-amber-400" />
                      <span>Target: {exercise.targetMuscle}</span>
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

                <div className="text-right shrink-0">
                  <div className="font-mono text-xs font-bold text-white bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800">
                    {exercise.sets} Sets × {exercise.repsOrDuration}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-1">
                    {exercise.restSeconds}s rest
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800/80 text-xs flex flex-wrap items-center justify-between gap-2">
                <span className="text-zinc-400 font-mono">
                  Equipment: <strong className="text-zinc-200 font-normal">{exercise.equipment}</strong>
                </span>
                <span className="font-mono text-amber-400 font-bold">
                  {fitnessLevel.toUpperCase()}: {recommendedWeight}
                </span>
              </div>

              {/* Form Guide Expander */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : exercise.id)}
                className="w-full text-left pt-1 flex items-center justify-between text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isExpanded ? 'Hide Form Guide' : 'View Trainer Form Guide'}</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 pt-3">
                  {(languageMode === 'both' || languageMode === 'en') && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-zinc-400 font-bold uppercase">English Guide:</div>
                      <ul className="space-y-1 text-xs text-zinc-300 pl-4 list-disc marker:text-amber-500">
                        {exercise.formGuide.map((pointer, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {pointer}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(languageMode === 'both' || languageMode === 'tanglish') && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1 text-xs">
                      <div className="flex items-center gap-1 font-bold text-amber-300 uppercase tracking-wide">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Tanglish Gym Master Tip</span>
                      </div>
                      <p className="text-zinc-200 italic leading-relaxed">
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
