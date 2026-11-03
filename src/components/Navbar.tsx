import React from 'react';
import { Dumbbell, Trophy, BookOpen, Volume2, VolumeX, Flame, Globe } from 'lucide-react';
import { FitnessLevel, WeightUnit, LanguageMode } from '../types/workout';

interface NavbarProps {
  currentTab: 'dashboard' | 'library' | 'stats';
  onSelectTab: (tab: 'dashboard' | 'library' | 'stats') => void;
  fitnessLevel: FitnessLevel;
  onSelectFitnessLevel: (level: FitnessLevel) => void;
  weightUnit: WeightUnit;
  onToggleWeightUnit: () => void;
  languageMode: LanguageMode;
  onChangeLanguageMode: (mode: LanguageMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  streakDays: number;
  isWorkoutActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  fitnessLevel,
  onSelectFitnessLevel,
  weightUnit,
  onToggleWeightUnit,
  languageMode,
  onChangeLanguageMode,
  soundEnabled,
  onToggleSound,
  streakDays,
  isWorkoutActive
}) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single Wordmark Brand */}
        <button 
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500 text-zinc-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold tracking-tight text-white leading-none uppercase">
              60-MIN <span className="text-amber-400">GYM</span> COMPANION
            </span>
            <span className="text-[10px] font-medium text-zinc-400 tracking-wider uppercase">
              Pro Workout Routine
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        {!isWorkoutActive && (
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                currentTab === 'dashboard'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              Workout Schedule
            </button>
            <button
              onClick={() => onSelectTab('library')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                currentTab === 'library'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Exercise Library
            </button>
            <button
              onClick={() => onSelectTab('stats')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                currentTab === 'stats'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Progress & Logs
            </button>
          </nav>
        )}

        {/* Zone 3: Primary Actions & Preferences */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Active Streak */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold" title="Active workout streak">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{streakDays} {streakDays === 1 ? 'Day' : 'Days'} Streak</span>
          </div>

          {/* Language Mode Toggle Control */}
          <div className="flex items-center bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[11px] font-semibold font-mono">
            <button
              onClick={() => onChangeLanguageMode('both')}
              className={`px-2 py-0.5 rounded transition-colors ${
                languageMode === 'both' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
              title="Show both English and Tanglish guides"
            >
              BOTH
            </button>
            <button
              onClick={() => onChangeLanguageMode('en')}
              className={`px-2 py-0.5 rounded transition-colors ${
                languageMode === 'en' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
              title="Show English form guide only"
            >
              EN
            </button>
            <button
              onClick={() => onChangeLanguageMode('tanglish')}
              className={`px-2 py-0.5 rounded transition-colors ${
                languageMode === 'tanglish' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
              title="Show Tanglish trainer tips only"
            >
              TANGLISH
            </button>
          </div>

          {/* Weight Unit Toggle */}
          <button
            onClick={onToggleWeightUnit}
            className="px-2 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-bold transition-colors font-mono"
            title="Toggle weight unit between kg and lbs"
          >
            {weightUnit.toUpperCase()}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
            title={soundEnabled ? 'Sound alerts enabled' : 'Sound alerts muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
          </button>

          {/* Level Selector Dropdown */}
          <select
            value={fitnessLevel}
            onChange={(e) => onSelectFitnessLevel(e.target.value as FitnessLevel)}
            className="bg-zinc-900 text-amber-400 font-semibold text-xs border border-amber-500/30 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer uppercase tracking-wider"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="pro">Pro</option>
          </select>
        </div>

      </div>
    </header>
  );
};
