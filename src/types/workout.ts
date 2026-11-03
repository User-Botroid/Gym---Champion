export type FitnessLevel = 'beginner' | 'intermediate' | 'pro';

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export type WeightUnit = 'kg' | 'lbs';

export type LanguageMode = 'both' | 'en' | 'tanglish';

export type MuscleGroup = 
  | 'chest' 
  | 'back' 
  | 'legs' 
  | 'shoulders' 
  | 'biceps' 
  | 'triceps' 
  | 'abs' 
  | 'obliques' 
  | 'calves' 
  | 'traps' 
  | 'fullbody';

export interface WeightRecommendation {
  beginner: string;
  intermediate: string;
  pro: string;
}

export interface Exercise {
  id: string;
  name: string;
  targetMuscle: string;
  primaryMuscleGroup: MuscleGroup;
  equipment: string;
  weights: WeightRecommendation;
  sets: number;
  repsOrDuration: string;
  restSeconds: number;
  formGuide: [string, string, string];
  tanglishTip: string;
  category: 'warmup' | 'gut' | 'weights' | 'warmdown';
  imageUrl?: string;
  commonMistakes?: [string, string, string];
}

export interface WorkoutPhase {
  phaseNumber: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  durationMinutes: number;
  description: string;
  badgeColor: string;
  exercises: Exercise[];
}

export interface DayWorkout {
  day: DayOfWeek;
  dayTitle: string;
  shortTitle: string;
  focus: string;
  description: string;
  totalMinutes: number;
  targetMuscles: MuscleGroup[];
  phases: WorkoutPhase[];
}

export interface SetLog {
  setNumber: number;
  weightKg: number;
  reps: number;
  completed: boolean;
}

export interface ExerciseLog {
  exerciseId: string;
  exerciseName: string;
  sets: SetLog[];
}

export interface WorkoutSessionLog {
  id: string;
  date: string; // ISO string
  day: DayOfWeek;
  fitnessLevel: FitnessLevel;
  durationSeconds: number;
  totalVolumeKg: number;
  completedExercisesCount: number;
  totalExercisesCount: number;
  exerciseLogs: Record<string, SetLog[]>;
}

export interface UserStats {
  fitnessLevel: FitnessLevel;
  weightUnit: WeightUnit;
  languageMode: LanguageMode;
  completedWorkoutsCount: number;
  totalVolumeKg: number;
  streakDays: number;
  lastWorkoutDate: string | null;
  workoutLogs: WorkoutSessionLog[];
  exercisePRs: Record<string, number>; // exerciseId -> max weight in kg
  soundEnabled: boolean;
  vibrationEnabled: boolean;
}
