import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { WorkoutPlayer } from './components/WorkoutPlayer';
import { WorkoutSummary } from './components/WorkoutSummary';
import { LibraryView } from './components/LibraryView';
import { StatsView } from './components/StatsView';
import { DayOfWeek, FitnessLevel, WeightUnit, LanguageMode, WorkoutSessionLog, UserStats } from './types/workout';
import { WORKOUT_DATABASE } from './data/workoutData';
import { loadUserStats, saveUserStats } from './utils/storage';

export default function App() {
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'library' | 'stats'>('dashboard');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('monday');
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel>(stats.fitnessLevel || 'intermediate');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>(stats.weightUnit || 'kg');
  const [languageMode, setLanguageMode] = useState<LanguageMode>(stats.languageMode || 'both');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(stats.soundEnabled ?? true);
  
  // Player state
  const [isWorkoutActive, setIsWorkoutActive] = useState<boolean>(false);
  const [activeSessionLog, setActiveSessionLog] = useState<WorkoutSessionLog | null>(null);

  // Sync state to localStorage whenever stats update
  useEffect(() => {
    saveUserStats({
      ...stats,
      fitnessLevel,
      weightUnit,
      languageMode,
      soundEnabled
    });
  }, [stats, fitnessLevel, weightUnit, languageMode, soundEnabled]);

  const handleToggleWeightUnit = () => {
    setWeightUnit((prev) => (prev === 'kg' ? 'lbs' : 'kg'));
  };

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const handleStartWorkout = () => {
    setIsWorkoutActive(true);
    setActiveSessionLog(null);
  };

  const handleCompleteWorkout = (log: WorkoutSessionLog) => {
    setIsWorkoutActive(false);
    setActiveSessionLog(log);

    // Update stats: increment count, volume, streak
    setStats((prev) => {
      const today = new Date().toDateString();
      const lastDate = prev.lastWorkoutDate ? new Date(prev.lastWorkoutDate).toDateString() : null;
      
      let newStreak = prev.streakDays;
      if (lastDate !== today) {
        // Calculate streak
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      }

      return {
        ...prev,
        completedWorkoutsCount: prev.completedWorkoutsCount + 1,
        totalVolumeKg: prev.totalVolumeKg + log.totalVolumeKg,
        streakDays: newStreak,
        lastWorkoutDate: new Date().toISOString(),
        workoutLogs: [log, ...prev.workoutLogs]
      };
    });
  };

  const handleClearLogs = () => {
    setStats((prev) => ({
      ...prev,
      completedWorkoutsCount: 0,
      totalVolumeKg: 0,
      streakDays: 0,
      lastWorkoutDate: null,
      workoutLogs: []
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setIsWorkoutActive(false);
          setActiveSessionLog(null);
          setCurrentTab(tab);
        }}
        fitnessLevel={fitnessLevel}
        onSelectFitnessLevel={setFitnessLevel}
        weightUnit={weightUnit}
        onToggleWeightUnit={handleToggleWeightUnit}
        languageMode={languageMode}
        onChangeLanguageMode={setLanguageMode}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        streakDays={stats.streakDays}
        isWorkoutActive={isWorkoutActive}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeSessionLog ? (
          <WorkoutSummary
            sessionLog={activeSessionLog}
            weightUnit={weightUnit}
            streakDays={stats.streakDays}
            onReturnDashboard={() => {
              setActiveSessionLog(null);
              setIsWorkoutActive(false);
              setCurrentTab('dashboard');
            }}
          />
        ) : isWorkoutActive ? (
          <WorkoutPlayer
            workout={WORKOUT_DATABASE[selectedDay]}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
            fitnessLevel={fitnessLevel}
            weightUnit={weightUnit}
            languageMode={languageMode}
            onChangeLanguageMode={setLanguageMode}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            onCompleteWorkout={handleCompleteWorkout}
            onExitWorkout={() => setIsWorkoutActive(false)}
          />
        ) : currentTab === 'dashboard' ? (
          <Dashboard
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
            fitnessLevel={fitnessLevel}
            onSelectFitnessLevel={setFitnessLevel}
            weightUnit={weightUnit}
            languageMode={languageMode}
            onChangeLanguageMode={setLanguageMode}
            onStartWorkout={handleStartWorkout}
          />
        ) : currentTab === 'library' ? (
          <LibraryView
            fitnessLevel={fitnessLevel}
            weightUnit={weightUnit}
            languageMode={languageMode}
          />
        ) : (
          <StatsView
            stats={stats}
            weightUnit={weightUnit}
            onClearLogs={handleClearLogs}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-display text-sm font-bold tracking-tight text-zinc-400 uppercase">
            60-MIN DAILY GYM COMPANION
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>Monday–Saturday Split</span>
            <span aria-hidden="true">·</span>
            <span>Beginner / Intermediate / Pro</span>
            <span aria-hidden="true">·</span>
            <span>Structured 4-Phase System</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
