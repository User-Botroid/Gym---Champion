import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Dumbbell, 
  Clock, 
  Check, 
  Plus, 
  Volume2, 
  VolumeX, 
  AlertCircle, 
  ListOrdered, 
  X,
  Sparkles,
  Zap,
  Activity,
  Award,
  Target,
  Video,
  Youtube,
  Calendar,
  SkipForward,
  SkipBack
} from 'lucide-react';
import { DayWorkout, DayOfWeek, FitnessLevel, WeightUnit, LanguageMode, Exercise, SetLog, WorkoutSessionLog } from '../types/workout';
import { WORKOUT_DATABASE } from '../data/workoutData';
import { playTimerBeep, playWorkoutCompleteFanfare, triggerHapticVibration } from '../utils/audio';
import { ExerciseIllustration } from './ExerciseIllustration';
import { VideoModal } from './VideoModal';

interface WorkoutPlayerProps {
  workout: DayWorkout;
  selectedDay?: DayOfWeek;
  onSelectDay?: (day: DayOfWeek) => void;
  fitnessLevel: FitnessLevel;
  weightUnit: WeightUnit;
  languageMode: LanguageMode;
  onChangeLanguageMode: (mode: LanguageMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onCompleteWorkout: (sessionLog: WorkoutSessionLog) => void;
  onExitWorkout: () => void;
}

interface FlatStep {
  phaseNumber: 1 | 2 | 3 | 4;
  phaseTitle: string;
  phaseBadgeColor: string;
  exercise: Exercise;
  exerciseIndexInPhase: number;
  totalInPhase: number;
  flatIndex: number;
}

const DAYS_LIST: { day: DayOfWeek; short: string }[] = [
  { day: 'monday', short: 'Mon' },
  { day: 'tuesday', short: 'Tue' },
  { day: 'wednesday', short: 'Wed' },
  { day: 'thursday', short: 'Thu' },
  { day: 'friday', short: 'Fri' },
  { day: 'saturday', short: 'Sat' },
];

export const WorkoutPlayer: React.FC<WorkoutPlayerProps> = ({
  workout,
  selectedDay,
  onSelectDay,
  fitnessLevel,
  weightUnit,
  languageMode,
  onChangeLanguageMode,
  soundEnabled,
  onToggleSound,
  onCompleteWorkout,
  onExitWorkout,
}) => {
  // Flatten all exercises across all 4 phases into a single sequence of steps
  const flatSteps: FlatStep[] = [];
  let indexCounter = 0;

  workout.phases.forEach((phase) => {
    phase.exercises.forEach((ex, exIdx) => {
      flatSteps.push({
        phaseNumber: phase.phaseNumber,
        phaseTitle: phase.title,
        phaseBadgeColor: phase.badgeColor,
        exercise: ex,
        exerciseIndexInPhase: exIdx,
        totalInPhase: phase.exercises.length,
        flatIndex: indexCounter++
      });
    });
  });

  const totalSteps = flatSteps.length;
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const currentFlatStep = flatSteps[currentStepIdx] || flatSteps[0];
  const activeExercise = currentFlatStep.exercise;

  // Track overall session time & running state
  const [totalElapsedSeconds, setTotalElapsedSeconds] = useState<number>(0);
  const [isSessionTimerRunning, setIsSessionTimerRunning] = useState<boolean>(true);

  // Set-by-set completed logs: exerciseId -> SetLog[]
  const [exerciseSetLogs, setExerciseSetLogs] = useState<Record<string, SetLog[]>>(() => {
    const initial: Record<string, SetLog[]> = {};
    flatSteps.forEach((step) => {
      const setsArr: SetLog[] = [];
      for (let i = 1; i <= step.exercise.sets; i++) {
        setsArr.push({
          setNumber: i,
          weightKg: 0,
          reps: parseInt(step.exercise.repsOrDuration) || 10,
          completed: false
        });
      }
      initial[step.exercise.id] = setsArr;
    });
    return initial;
  });

  // Rest Timer State
  const [restTimerSeconds, setRestTimerSeconds] = useState<number>(activeExercise.restSeconds);
  const [isRestTimerRunning, setIsRestTimerRunning] = useState<boolean>(false);
  const [isRestMode, setIsRestMode] = useState<boolean>(false);

  // Quick Jump Modal state
  const [showQuickMap, setShowQuickMap] = useState<boolean>(false);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  // Interval timer for global session workout duration
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSessionTimerRunning) {
      interval = setInterval(() => {
        setTotalElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionTimerRunning]);

  // Rest Timer Countdown Effect
  useEffect(() => {
    let restInterval: NodeJS.Timeout;
    if (isRestTimerRunning && restTimerSeconds > 0) {
      restInterval = setInterval(() => {
        setRestTimerSeconds((prev) => {
          if (prev <= 4 && prev > 1 && soundEnabled) {
            playTimerBeep(false);
          }
          if (prev === 1) {
            if (soundEnabled) playTimerBeep(true);
            triggerHapticVibration([300, 100, 300]);
            setIsRestTimerRunning(false);
            setIsRestMode(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(restInterval);
  }, [isRestTimerRunning, restTimerSeconds, soundEnabled]);

  // Handle current step change
  const handleJumpToStep = (newIdx: number) => {
    if (newIdx >= 0 && newIdx < totalSteps) {
      setCurrentStepIdx(newIdx);
      const newEx = flatSteps[newIdx].exercise;
      setRestTimerSeconds(newEx.restSeconds);
      setIsRestTimerRunning(false);
      setIsRestMode(false);
    }
  };

  // Jump to specific phase
  const handleJumpToPhase = (phaseNum: 1 | 2 | 3 | 4) => {
    const targetStep = flatSteps.find((s) => s.phaseNumber === phaseNum);
    if (targetStep) {
      handleJumpToStep(targetStep.flatIndex);
    }
  };

  // Switch Day from Player
  const handleSelectDayFromPlayer = (day: DayOfWeek) => {
    if (onSelectDay) {
      onSelectDay(day);
      setCurrentStepIdx(0);
      setRestTimerSeconds(WORKOUT_DATABASE[day].phases[0].exercises[0].restSeconds);
      setIsRestTimerRunning(false);
      setIsRestMode(false);
    }
  };

  const handleToggleSetComplete = (exerciseId: string, setNumber: number) => {
    setExerciseSetLogs((prev) => {
      const currentSets = prev[exerciseId] || [];
      const updatedSets = currentSets.map((s) => {
        if (s.setNumber === setNumber) {
          const nextState = !s.completed;
          if (nextState) {
            // Start rest timer automatically on set completion!
            setRestTimerSeconds(activeExercise.restSeconds);
            setIsRestTimerRunning(true);
            setIsRestMode(true);
            if (soundEnabled) playTimerBeep(false);
            triggerHapticVibration([150]);
          }
          return { ...s, completed: nextState };
        }
        return s;
      });
      return { ...prev, [exerciseId]: updatedSets };
    });
  };

  const handleUpdateSetWeight = (exerciseId: string, setNumber: number, weightVal: number) => {
    setExerciseSetLogs((prev) => {
      const currentSets = prev[exerciseId] || [];
      const updatedSets = currentSets.map((s) => 
        s.setNumber === setNumber ? { ...s, weightKg: weightVal } : s
      );
      return { ...prev, [exerciseId]: updatedSets };
    });
  };

  const handleCompleteCurrentStep = () => {
    // Mark all sets for this exercise as completed if not done
    setExerciseSetLogs((prev) => {
      const currentSets = prev[activeExercise.id] || [];
      const updatedSets = currentSets.map((s) => ({ ...s, completed: true }));
      return { ...prev, [activeExercise.id]: updatedSets };
    });

    if (currentStepIdx < totalSteps - 1) {
      handleJumpToStep(currentStepIdx + 1);
    } else {
      // Workout Finished! Calculate total volume lifted
      let totalVolKg = 0;
      let completedExCount = 0;

      Object.values(exerciseSetLogs).forEach((setsArr) => {
        let exDone = false;
        setsArr.forEach((s) => {
          if (s.completed) {
            exDone = true;
            totalVolKg += (s.weightKg || 10) * s.reps;
          }
        });
        if (exDone) completedExCount++;
      });

      const sessionLog: WorkoutSessionLog = {
        id: `log_${Date.now()}`,
        date: new Date().toISOString(),
        day: workout.day,
        fitnessLevel,
        durationSeconds: totalElapsedSeconds,
        totalVolumeKg: totalVolKg,
        completedExercisesCount: completedExCount,
        totalExercisesCount: totalSteps,
        exerciseLogs: exerciseSetLogs
      };

      if (soundEnabled) playWorkoutCompleteFanfare();
      triggerHapticVibration([200, 100, 200, 100, 400]);
      onCompleteWorkout(sessionLog);
    }
  };

  // Rest Timer Controls
  const toggleRestTimer = () => {
    setIsRestTimerRunning(!isRestTimerRunning);
  };

  const resetRestTimer = () => {
    setIsRestTimerRunning(false);
    setRestTimerSeconds(activeExercise.restSeconds);
  };

  const add15SecRest = () => {
    setRestTimerSeconds((prev) => prev + 15);
  };

  const add30SecRest = () => {
    setRestTimerSeconds((prev) => prev + 30);
  };

  // Session Timer Controls
  const toggleSessionTimer = () => {
    setIsSessionTimerRunning(!isSessionTimerRunning);
  };

  const resetSessionTimer = () => {
    setTotalElapsedSeconds(0);
  };

  const formatMMSS = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Progress percentage
  const progressPercent = Math.round(((currentStepIdx + 1) / totalSteps) * 100);

  // Active step sets array
  const activeStepSets = exerciseSetLogs[activeExercise.id] || [];
  const recommendedWeight = activeExercise.weights[fitnessLevel];

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 md:py-6 space-y-6">
      
      {/* Sticky Top Workout Control Bar */}
      <div className="sticky top-14 z-30 bg-zinc-950/95 backdrop-blur-md p-4 rounded-2xl border border-zinc-800 shadow-xl space-y-3">
        
        {/* Top Meta & Interactive Day Switcher row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2">
            <button
              onClick={onExitWorkout}
              className="flex items-center gap-1 text-zinc-400 hover:text-white font-medium transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Exit</span>
            </button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            
            {/* Interactive Day Switcher Bar in Player */}
            <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              <Calendar className="w-3.5 h-3.5 text-amber-400 ml-1 shrink-0" />
              {DAYS_LIST.map((item) => {
                const isSelected = (selectedDay || workout.day.toLowerCase()) === item.day;
                return (
                  <button
                    key={item.day}
                    onClick={() => handleSelectDayFromPlayer(item.day)}
                    className={`px-2 py-0.5 rounded-lg font-mono font-bold uppercase transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-zinc-950 shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                    title={`Switch to ${item.day.toUpperCase()} session`}
                  >
                    {item.short}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            
            {/* Live Session Timer with Pause/Resume & Reset Controls */}
            <div className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-xl border border-zinc-800 shadow-inner">
              <Clock className={`w-3.5 h-3.5 text-amber-400 ${isSessionTimerRunning ? 'animate-spin-slow' : ''}`} />
              <span className="font-mono text-zinc-200 font-extrabold">{formatMMSS(totalElapsedSeconds)}</span>
              {!isSessionTimerRunning && (
                <span className="text-[9px] font-mono font-bold text-red-400 uppercase bg-red-950 px-1 rounded animate-pulse">
                  PAUSED
                </span>
              )}
              <button
                onClick={toggleSessionTimer}
                className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer ml-1"
                title={isSessionTimerRunning ? "Pause session timer" : "Resume session timer"}
              >
                {isSessionTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-amber-400 text-amber-400" />}
              </button>
              <button
                onClick={resetSessionTimer}
                className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Reset session timer to 00:00"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Workout Overview Quick Jump Drawer Trigger */}
            <button
              onClick={() => setShowQuickMap(true)}
              className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-xl border border-zinc-800 font-medium transition-colors cursor-pointer"
              title="View full workout map"
            >
              <ListOrdered className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Workout Map</span>
            </button>

          </div>
        </div>

        {/* 60-Min Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-zinc-300 font-bold">
              Step {currentStepIdx + 1} of {totalSteps} · Phase {currentFlatStep.phaseNumber} ({currentFlatStep.phaseTitle})
            </span>
            <span className="font-mono font-bold text-amber-400">{progressPercent}% Completed</span>
          </div>
          <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/80">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Clickable Phase Jump Tabs (P1: Warm-up | P2: Gut | P3: Weights | P4: Warm-down) */}
        <div className="grid grid-cols-4 gap-1.5 pt-1">
          {workout.phases.map((p) => {
            const isCurrentPhase = currentFlatStep.phaseNumber === p.phaseNumber;
            const isCompletedPhase = currentFlatStep.phaseNumber > p.phaseNumber;
            return (
              <button 
                key={p.phaseNumber}
                onClick={() => handleJumpToPhase(p.phaseNumber)}
                className={`py-1.5 px-2 rounded-lg text-center text-[10px] sm:text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${
                  isCurrentPhase 
                    ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20 font-extrabold ring-1 ring-amber-400'
                    : isCompletedPhase
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50 hover:bg-emerald-900/60'
                    : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-amber-400'
                }`}
                title={`Jump directly to Phase ${p.phaseNumber}: ${p.title}`}
              >
                P{p.phaseNumber}: {p.title.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Exercise Card */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl athletic-glow">
        
        {/* Phase Header Strip with Animated Exercise Illustration */}
        <div className="p-4 md:p-6 bg-zinc-950 border-b border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            
            {/* Animated SVG Workout Illustration */}
            <ExerciseIllustration
              muscleGroup={activeExercise.primaryMuscleGroup}
              category={activeExercise.category}
              exerciseName={activeExercise.name}
              imageUrl={activeExercise.imageUrl}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
              onClick={() => setShowVideoModal(true)}
            />

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase border ${currentFlatStep.phaseBadgeColor}`}>
                  Phase {currentFlatStep.phaseNumber}: {currentFlatStep.phaseTitle}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Ex {currentFlatStep.exerciseIndexInPhase + 1} of {currentFlatStep.totalInPhase}
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-none">
                {activeExercise.name}
              </h2>

              <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>Target Muscle: {activeExercise.targetMuscle}</span>
              </div>

              {/* Watch Form Video Trigger Button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 rounded-lg text-xs font-bold transition-all cursor-pointer"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500 fill-red-500/30" />
                <span>Watch Form Video</span>
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-left md:text-right shrink-0 self-stretch md:self-center flex flex-row md:flex-col justify-between items-center md:items-end gap-2">
            <div>
              <div className="text-[10px] uppercase font-mono text-zinc-400">Prescribed Target</div>
              <div className="font-display text-lg font-bold text-white">
                {activeExercise.sets} Sets × {activeExercise.repsOrDuration}
              </div>
            </div>

            {/* Quick Next/Prev Exercise Navigation Buttons */}
            <div className="flex items-center gap-1 pt-1">
              <button
                onClick={() => handleJumpToStep(currentStepIdx - 1)}
                disabled={currentStepIdx === 0}
                className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 text-[11px] font-bold flex items-center gap-1 border border-zinc-700 transition-colors cursor-pointer"
                title="Go to previous exercise"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Ex</span>
              </button>

              <button
                onClick={() => handleJumpToStep(currentStepIdx + 1)}
                disabled={currentStepIdx === totalSteps - 1}
                className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 text-[11px] font-bold flex items-center gap-1 border border-zinc-700 transition-colors cursor-pointer"
                title="Skip to next exercise"
              >
                <span>Next Ex</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Card Body: Specs, Equipment & Form */}
        <div className="p-4 md:p-6 space-y-6">
          
          {/* Equipment & Scaled Intensity Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Equipment Setup Box */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                Equipment Setup
              </span>
              <p className="font-bold text-sm text-zinc-100">
                {activeExercise.equipment}
              </p>
            </div>

            {/* Level Scaled Weight Box */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Recommended Intensity ({fitnessLevel.toUpperCase()})
              </span>
              <p className="font-mono font-bold text-sm text-amber-400">
                {recommendedWeight}
              </p>
            </div>

          </div>

          {/* Interactive Set-by-Set Tracker */}
          <div className="bg-zinc-950 p-4 md:p-5 rounded-xl border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Log Completed Sets</span>
              </h3>
              <span className="text-xs text-zinc-400 font-mono">
                Tap checkbox to complete set & auto-start rest timer
              </span>
            </div>

            <div className="space-y-2.5">
              {activeStepSets.map((s) => (
                <div 
                  key={s.setNumber}
                  className={`flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl border transition-all ${
                    s.completed
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleSetComplete(activeExercise.id, s.setNumber)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold transition-all cursor-pointer ${
                        s.completed
                          ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border border-zinc-700'
                      }`}
                    >
                      {s.completed ? <Check className="w-5 h-5 stroke-[3]" /> : s.setNumber}
                    </button>
                    <div>
                      <div className="font-bold text-sm">
                        Set {s.setNumber}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        Target: {activeExercise.repsOrDuration}
                      </div>
                    </div>
                  </div>

                  {/* Weight Input */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-zinc-400 font-mono">Logged Weight:</span>
                    <input
                      type="number"
                      placeholder="e.g. 15"
                      value={s.weightKg || ''}
                      onChange={(e) => handleUpdateSetWeight(activeExercise.id, s.setNumber, parseFloat(e.target.value) || 0)}
                      className="w-20 bg-zinc-950 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-amber-400 text-center focus:outline-none focus:border-amber-500"
                    />
                    <span className="text-xs font-mono text-zinc-400 uppercase">{weightUnit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rest Countdown Timer Module with Full Controls */}
          <div className="bg-zinc-950/90 p-4 md:p-5 rounded-xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Circular Digital Timer Box */}
              <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-mono font-extrabold text-xl border transition-all ${
                isRestTimerRunning 
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20 animate-pulse' 
                  : 'bg-zinc-900 text-white border-zinc-800'
              }`}>
                <span>{restTimerSeconds}s</span>
                <span className="text-[9px] uppercase tracking-tighter opacity-80">
                  {isRestTimerRunning ? 'RESTING' : 'REST TIMER'}
                </span>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-white uppercase">
                  {isRestMode ? 'Resting Between Sets' : 'Rest Countdown Controls'}
                </h4>
                <p className="text-xs text-zinc-400">
                  Prescribed rest: {activeExercise.restSeconds} seconds per set
                </p>
              </div>
            </div>

            {/* Rest Timer Button Group: Pause/Resume, Reset, +15s, +30s */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={toggleRestTimer}
                className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isRestTimerRunning
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700'
                    : 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md'
                }`}
              >
                {isRestTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-zinc-950" />}
                <span>{isRestTimerRunning ? 'Pause Rest' : 'Start Rest'}</span>
              </button>

              <button
                onClick={add15SecRest}
                className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Add 15 seconds to rest countdown"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                <span>+15s</span>
              </button>

              <button
                onClick={add30SecRest}
                className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Add 30 seconds to rest countdown"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                <span>+30s</span>
              </button>

              <button
                onClick={resetRestTimer}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Reset rest timer back to starting duration"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step-by-Step Form & Tanglish Coach Guide */}
          <div className="bg-zinc-950 p-4 md:p-5 rounded-xl border border-zinc-800 space-y-4">
            
            {/* Header with Language Selector Button Group */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>Trainer Execution Guide</span>
              </h3>

              {/* In-Player Language Mode Switcher */}
              <div className="flex items-center bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[11px] font-mono font-bold">
                <button
                  onClick={() => onChangeLanguageMode('both')}
                  className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                    languageMode === 'both' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  BOTH
                </button>
                <button
                  onClick={() => onChangeLanguageMode('en')}
                  className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                    languageMode === 'en' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => onChangeLanguageMode('tanglish')}
                  className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                    languageMode === 'tanglish' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  TANGLISH
                </button>
              </div>
            </div>

            {/* English Form Guide */}
            {(languageMode === 'both' || languageMode === 'en') && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  English Form Steps:
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeExercise.formGuide.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono font-bold flex items-center justify-center text-[10px] shrink-0 border border-amber-500/20">
                        {idx + 1}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tanglish Gym Master Coach Tip Badge */}
            {(languageMode === 'both' || languageMode === 'tanglish') && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/5 border border-amber-500/40 space-y-1.5 shadow-md">
                <div className="flex items-center gap-1.5 font-extrabold text-amber-300 text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
                  <span>Tanglish Gym Master Coach Tip</span>
                </div>
                <p className="text-zinc-100 font-medium text-xs md:text-sm leading-relaxed pl-1">
                  "{activeExercise.tanglishTip}"
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Footer Navigation & Step Controls */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          
          {/* Previous Step Button */}
          <button
            onClick={() => handleJumpToStep(currentStepIdx - 1)}
            disabled={currentStepIdx === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
              currentStepIdx === 0
                ? 'opacity-40 cursor-not-allowed bg-zinc-900 text-zinc-600'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Unrestricted Skip Exercise Button */}
          <button
            onClick={() => handleJumpToStep(currentStepIdx + 1)}
            disabled={currentStepIdx === totalSteps - 1}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-2 transition-all cursor-pointer ${
              currentStepIdx === totalSteps - 1
                ? 'opacity-40 cursor-not-allowed bg-zinc-900 text-zinc-600'
                : 'bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700'
            }`}
            title="Skip to next exercise step anytime"
          >
            <span>Skip Exercise</span>
            <SkipForward className="w-4 h-4" />
          </button>

          {/* Complete Set & Next Button */}
          <button
            onClick={handleCompleteCurrentStep}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>{currentStepIdx === totalSteps - 1 ? 'Finish Workout' : 'Complete Set & Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Workout Map Quick Jump Drawer Modal */}
      {showQuickMap && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase">Workout Map & Quick Jump</h3>
                <p className="text-xs text-zinc-400">Tap any exercise step or phase to jump directly to it</p>
              </div>
              <button
                onClick={() => setShowQuickMap(false)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-4 divide-y divide-zinc-800">
              {workout.phases.map((phase) => (
                <div key={phase.phaseNumber} className="pt-3 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center justify-between">
                    <span>Phase {phase.phaseNumber}: {phase.title} ({phase.durationMinutes} mins)</span>
                    <button
                      onClick={() => {
                        handleJumpToPhase(phase.phaseNumber);
                        setShowQuickMap(false);
                      }}
                      className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 hover:bg-amber-500 hover:text-zinc-950 font-bold transition-all cursor-pointer"
                    >
                      Jump to Phase
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {phase.exercises.map((ex) => {
                      const stepObj = flatSteps.find((s) => s.exercise.id === ex.id);
                      if (!stepObj) return null;

                      const isCurrent = stepObj.flatIndex === currentStepIdx;
                      const setsForEx = exerciseSetLogs[ex.id] || [];
                      const isAllSetsDone = setsForEx.every((s) => s.completed);

                      return (
                        <button
                          key={ex.id}
                          onClick={() => {
                            handleJumpToStep(stepObj.flatIndex);
                            setShowQuickMap(false);
                          }}
                          className={`w-full text-left p-3 rounded-xl border flex items-center justify-between gap-3 text-xs transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold'
                              : isAllSetsDone
                              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40'
                              : 'bg-zinc-950/80 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                              isCurrent ? 'bg-zinc-950 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                            }`}>
                              {stepObj.flatIndex + 1}
                            </span>
                            <div>
                              <div className="font-bold text-sm">{ex.name}</div>
                              <div className="opacity-80 text-[11px]">{ex.targetMuscle}</div>
                            </div>
                          </div>

                          <div className="font-mono text-right shrink-0">
                            {ex.sets} Sets × {ex.repsOrDuration}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* YouTube Form Video Modal */}
      {showVideoModal && (
        <VideoModal
          exerciseName={activeExercise.name}
          targetMuscle={activeExercise.targetMuscle}
          formGuide={activeExercise.formGuide}
          tanglishTip={activeExercise.tanglishTip}
          commonMistakes={activeExercise.commonMistakes}
          onClose={() => setShowVideoModal(false)}
        />
      )}

    </div>
  );
};
