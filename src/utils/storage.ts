import { UserStats, FitnessLevel, WeightUnit, WorkoutSessionLog } from '../types/workout';

const STORAGE_KEY = 'daily_gym_companion_user_stats_v1';

export const DEFAULT_STATS: UserStats = {
  fitnessLevel: 'intermediate',
  weightUnit: 'kg',
  languageMode: 'both',
  completedWorkoutsCount: 0,
  totalVolumeKg: 0,
  streakDays: 0,
  lastWorkoutDate: null,
  workoutLogs: [],
  exercisePRs: {},
  soundEnabled: true,
  vibrationEnabled: true
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATS, ...parsed };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage errors
  }
}

export function convertWeight(kgAmount: number, unit: WeightUnit): { value: number; label: string } {
  if (unit === 'lbs') {
    const lbs = Math.round(kgAmount * 2.20462 * 10) / 10;
    return { value: lbs, label: `${lbs} lbs` };
  }
  return { value: kgAmount, label: `${kgAmount} kg` };
}

export function parseWeightStringToKg(weightStr: string): number {
  const match = weightStr.match(/(\d+(\.\d+)?)/);
  if (match) {
    const val = parseFloat(match[1]);
    if (weightStr.toLowerCase().includes('lbs')) {
      return Math.round(val / 2.20462);
    }
    return val;
  }
  return 0;
}
