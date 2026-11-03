import React from 'react';
import { Trophy, Flame, Dumbbell, Calendar, Clock, BarChart3, Trash2 } from 'lucide-react';
import { UserStats, WeightUnit } from '../types/workout';
import { convertWeight } from '../utils/storage';

interface StatsViewProps {
  stats: UserStats;
  weightUnit: WeightUnit;
  onClearLogs?: () => void;
}

export const StatsView: React.FC<StatsViewProps> = ({ stats, weightUnit, onClearLogs }) => {
  const formattedTotalVolume = convertWeight(stats.totalVolumeKg, weightUnit);

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Trophy className="w-4 h-4" />
          <span>Personal Training Log & History</span>
        </div>
        <h1 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
          Progress & Performance Dashboard
        </h1>
        <p className="text-xs text-zinc-400">
          Track your session completions, cumulative weight lifted volume, and active streak.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Completed Workouts */}
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs">
            <span>Workouts Done</span>
            <Trophy className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-mono text-3xl font-extrabold text-white">
            {stats.completedWorkoutsCount}
          </div>
          <div className="text-[11px] font-mono text-zinc-500">Total sessions finished</div>
        </div>

        {/* Active Streak */}
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs">
            <span>Active Streak</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="font-mono text-3xl font-extrabold text-amber-400">
            {stats.streakDays} {stats.streakDays === 1 ? 'Day' : 'Days'}
          </div>
          <div className="text-[11px] font-mono text-zinc-500">Consecutive days active</div>
        </div>

        {/* Total Volume */}
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs">
            <span>Total Volume</span>
            <Dumbbell className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-mono text-2xl font-extrabold text-white">
            {formattedTotalVolume.label}
          </div>
          <div className="text-[11px] font-mono text-zinc-500">Cumulative weight lifted</div>
        </div>

        {/* Fitness Tier */}
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs">
            <span>Active Tier</span>
            <BarChart3 className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-display text-2xl font-extrabold text-amber-400 uppercase">
            {stats.fitnessLevel}
          </div>
          <div className="text-[11px] font-mono text-zinc-500">Scaled intensity level</div>
        </div>

      </div>

      {/* Workout Logs History Table */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="font-display text-xl font-bold text-white uppercase flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Workout History Logs</span>
          </h2>

          {stats.workoutLogs.length > 0 && onClearLogs && (
            <button
              onClick={onClearLogs}
              className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {stats.workoutLogs.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Dumbbell className="w-10 h-10 text-zinc-600 mx-auto stroke-1" />
            <h3 className="text-zinc-300 font-bold text-sm">No workout sessions logged yet</h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              Select a day on the Dashboard and launch the 60-Minute Workout Player to complete your first routine!
            </p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {stats.workoutLogs.map((log) => {
              const formattedLogVol = convertWeight(log.totalVolumeKg, weightUnit);
              const dateStr = new Date(log.date).toLocaleDateString(undefined, {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });
              const mins = Math.round(log.durationSeconds / 60);

              return (
                <div key={log.id} className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white uppercase text-sm">
                      {log.day} Session ({log.fitnessLevel.toUpperCase()})
                    </div>
                    <div className="text-zinc-500 font-mono text-[11px]">{dateStr}</div>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-zinc-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {mins} mins
                    </span>
                    <span className="text-amber-400 font-bold">
                      {formattedLogVol.label}
                    </span>
                    <span className="bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 font-bold text-zinc-200">
                      {log.completedExercisesCount} / {log.totalExercisesCount} Ex
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
