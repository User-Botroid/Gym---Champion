import React from 'react';
import { MuscleGroup } from '../types/workout';
import { Play } from 'lucide-react';

interface ExerciseIllustrationProps {
  muscleGroup: MuscleGroup;
  category: 'warmup' | 'gut' | 'weights' | 'warmdown';
  exerciseName: string;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
}

export const ExerciseIllustration: React.FC<ExerciseIllustrationProps> = ({
  muscleGroup,
  category,
  exerciseName,
  imageUrl,
  className = "min-w-[110px] min-h-[110px] w-32 h-32 md:w-40 md:h-40",
  onClick
}) => {
  // SVG Motion Renderer with Detailed Multi-Joint Anatomical Figures & Red Target Muscles
  const renderSvgMotion = () => {
    switch (muscleGroup) {
      case 'chest':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes benchPressMotion {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(22px); }
              }
              @keyframes redTargetGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.8)); }
                50% { fill: #dc2626; filter: drop-shadow(0 0 8px rgba(239, 68, 68, 1)); }
              }
              .press-bar { animation: benchPressMotion 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .target-red { animation: redTargetGlow 1.8s ease-in-out infinite; }
            `}</style>

            {/* Bench & Frame */}
            <rect x="20" y="70" width="60" height="6" rx="3" fill="#27272a" />
            <rect x="25" y="76" width="5" height="14" fill="#18181b" />
            <rect x="70" y="76" width="5" height="14" fill="#18181b" />

            {/* Head & Neck */}
            <circle cx="26" cy="63" r="5" fill="#a1a1aa" />
            <line x1="31" y1="65" x2="36" y2="65" stroke="#71717a" strokeWidth="3" />

            {/* Anatomical Torso */}
            <path d="M 36 62 L 68 62 L 65 70 L 36 70 Z" fill="#3f3f46" />

            {/* RED HIGHLIGHTED TARGET MUSCLES: Pectoralis Major & Minor */}
            <path d="M 44 62 Q 52 58 60 62 Q 52 68 44 62 Z" className="target-red" />

            {/* Thighs & Calves (Planted Feet) */}
            <path d="M 65 67 L 76 67 L 76 84" fill="none" stroke="#71717a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

            {/* Animated Upper/Lower Arms & Barbell */}
            <g className="press-bar">
              {/* Shoulders to Elbows */}
              <line x1="42" y1="62" x2="42" y2="40" stroke="#a1a1aa" strokeWidth="4" strokeLinecap="round" />
              <line x1="60" y1="62" x2="60" y2="40" stroke="#a1a1aa" strokeWidth="4" strokeLinecap="round" />
              
              {/* Forearms to Hands */}
              <line x1="42" y1="40" x2="42" y2="36" stroke="#e4e4e7" strokeWidth="3.5" />
              <line x1="60" y1="40" x2="60" y2="36" stroke="#e4e4e7" strokeWidth="3.5" />

              {/* Barbell & Plates */}
              <line x1="12" y1="36" x2="90" y2="36" stroke="#e4e4e7" strokeWidth="3.5" strokeLinecap="round" />
              <rect x="15" y="26" width="6" height="20" rx="2" fill="#f59e0b" />
              <rect x="80" y="26" width="6" height="20" rx="2" fill="#f59e0b" />
            </g>
          </svg>
        );

      case 'biceps':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes bicepFullCurl {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(-105deg); }
              }
              @keyframes bicepPeakGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 3px rgba(239, 68, 68, 0.7)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 8px rgba(255, 34, 34, 1)); }
              }
              .curl-arm { animation: bicepFullCurl 1.7s cubic-bezier(0.4, 0, 0.2, 1) infinite; transform-origin: 48px 62px; }
              .bicep-red { animation: bicepPeakGlow 1.7s ease-in-out infinite; }
            `}</style>

            {/* Anatomical Standing Body */}
            {/* Head */}
            <circle cx="35" cy="22" r="6" fill="#a1a1aa" />
            {/* Torso & Hips */}
            <path d="M 28 30 L 42 30 L 38 65 L 30 65 Z" fill="#3f3f46" />

            {/* Thighs & Calves */}
            <path d="M 32 65 L 32 88 M 38 65 L 38 88" stroke="#71717a" strokeWidth="5" strokeLinecap="round" />

            {/* Upper Arm (Fixed Pivot) */}
            <line x1="38" y1="34" x2="48" y2="62" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />

            {/* RED HIGHLIGHTED TARGET MUSCLE: Biceps Brachii Peak */}
            <ellipse cx="43" cy="46" rx="6" ry="8" className="bicep-red" />

            {/* Rotating Forearm + Wrist + Dumbbell */}
            <g className="curl-arm">
              {/* Forearm */}
              <line x1="48" y1="62" x2="78" y2="62" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />
              {/* Hand & Dumbbell */}
              <circle cx="82" cy="62" r="4" fill="#e4e4e7" />
              <rect x="79" y="50" width="7" height="24" rx="2" fill="#f59e0b" />
            </g>
          </svg>
        );

      case 'triceps':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes tricepExtend {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(75deg); }
              }
              @keyframes tricepGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 3px rgba(239, 68, 68, 0.7)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 8px rgba(255, 34, 34, 1)); }
              }
              .tricep-forearm { animation: tricepExtend 1.6s ease-in-out infinite; transform-origin: 58px 46px; }
              .tricep-red { animation: tricepGlow 1.6s ease-in-out infinite; }
            `}</style>

            {/* Standing Torso */}
            <circle cx="42" cy="20" r="6" fill="#a1a1aa" />
            <path d="M 35 28 L 48 28 L 45 68 L 36 68 Z" fill="#3f3f46" />
            <path d="M 38 68 L 38 88 M 44 68 L 44 88" stroke="#71717a" strokeWidth="5" strokeLinecap="round" />

            {/* Cable Machine Frame */}
            <line x1="78" y1="10" x2="78" y2="90" stroke="#27272a" strokeWidth="3" />
            <line x1="78" y1="12" x2="58" y2="28" stroke="#52525b" strokeWidth="1.5" />

            {/* Upper Arm (Pinned to ribs) */}
            <line x1="45" y1="32" x2="58" y2="46" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />

            {/* RED HIGHLIGHTED TARGET MUSCLE: Triceps Lateral & Long Head */}
            <rect x="47" y="32" width="8" height="12" rx="3" className="tricep-red" />

            {/* Rotating Forearm extending downward */}
            <g className="tricep-forearm">
              <line x1="58" y1="46" x2="70" y2="28" stroke="#a1a1aa" strokeWidth="5" strokeLinecap="round" />
              <rect x="67" y="24" width="8" height="8" rx="2" fill="#f59e0b" />
            </g>
          </svg>
        );

      case 'back':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes latPullDown {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(24px); }
              }
              @keyframes latRedGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.8)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 9px rgba(255, 34, 34, 1)); }
              }
              .lat-pulldown { animation: latPullDown 1.8s ease-in-out infinite; }
              .lats-red { animation: latRedGlow 1.8s ease-in-out infinite; }
            `}</style>

            {/* Lat Machine Seat */}
            <rect x="32" y="72" width="36" height="6" rx="2" fill="#27272a" />
            
            {/* Head & Neck */}
            <circle cx="50" cy="46" r="6" fill="#a1a1aa" />

            {/* Torso & V-Taper Back Structure */}
            <path d="M 38 54 L 62 54 L 56 72 L 44 72 Z" fill="#3f3f46" />

            {/* RED HIGHLIGHTED TARGET MUSCLES: Latissimus Dorsi V-Shape */}
            <path d="M 36 54 Q 50 68 64 54 Q 50 78 36 54 Z" className="lats-red" />

            {/* Pull Bar & Reaching Arms */}
            <g className="lat-pulldown">
              <line x1="12" y1="18" x2="88" y2="18" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
              <line x1="50" y1="5" x2="50" y2="18" stroke="#71717a" strokeWidth="2" />
              
              {/* Hands & Arms pulling bar */}
              <path d="M 38 54 L 20 18 M 62 54 L 80 18" stroke="#a1a1aa" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'legs':
      case 'calves':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes deepSquat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(22px); }
              }
              @keyframes quadRedGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.8)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 9px rgba(255, 34, 34, 1)); }
              }
              .squat-motion { animation: deepSquat 1.9s ease-in-out infinite; }
              .quad-red { animation: quadRedGlow 1.9s ease-in-out infinite; }
            `}</style>

            {/* Floor Line */}
            <line x1="12" y1="88" x2="88" y2="88" stroke="#27272a" strokeWidth="3" />

            {/* Squatting Human Anatomical Frame */}
            <g className="squat-motion">
              {/* Head */}
              <circle cx="50" cy="20" r="6" fill="#a1a1aa" />
              
              {/* Torso */}
              <rect x="42" y="26" width="16" height="28" rx="4" fill="#3f3f46" />

              {/* RED HIGHLIGHTED TARGET MUSCLES: Quadriceps & Glutes */}
              <rect x="41" y="54" width="8" height="20" rx="3" className="quad-red" />
              <rect x="51" y="54" width="8" height="20" rx="3" className="quad-red" />

              {/* Calves & Planted Feet */}
              <line x1="45" y1="74" x2="42" y2="88" stroke="#a1a1aa" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="55" y1="74" x2="58" y2="88" stroke="#a1a1aa" strokeWidth="4.5" strokeLinecap="round" />

              {/* Heavy Barbell on Traps */}
              <line x1="15" y1="26" x2="85" y2="26" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
              <rect x="16" y="16" width="7" height="20" rx="2" fill="#f59e0b" />
              <rect x="77" y="16" width="7" height="20" rx="2" fill="#f59e0b" />
            </g>
          </svg>
        );

      case 'shoulders':
      case 'traps':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes lateralFlyLeft {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(-70deg); }
              }
              @keyframes lateralFlyRight {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(70deg); }
              }
              @keyframes deltRedGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.8)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 9px rgba(255, 34, 34, 1)); }
              }
              .left-raise { animation: lateralFlyLeft 1.7s ease-in-out infinite; transform-origin: 38px 36px; }
              .right-raise { animation: lateralFlyRight 1.7s ease-in-out infinite; transform-origin: 62px 36px; }
              .delt-red { animation: deltRedGlow 1.7s ease-in-out infinite; }
            `}</style>

            {/* Torso & Legs */}
            <circle cx="50" cy="22" r="6.5" fill="#a1a1aa" />
            <path d="M 40 32 L 60 32 L 54 70 L 46 70 Z" fill="#3f3f46" />
            <path d="M 47 70 L 47 88 M 53 70 L 53 88" stroke="#71717a" strokeWidth="4.5" strokeLinecap="round" />

            {/* RED HIGHLIGHTED TARGET MUSCLES: Lateral & Front Deltoid Caps */}
            <circle cx="38" cy="36" r="7" className="delt-red" />
            <circle cx="62" cy="36" r="7" className="delt-red" />

            {/* Left Arm & Dumbbell */}
            <g className="left-raise">
              <line x1="38" y1="36" x2="38" y2="68" stroke="#a1a1aa" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="33" y="66" width="10" height="7" rx="2" fill="#f59e0b" />
            </g>

            {/* Right Arm & Dumbbell */}
            <g className="right-raise">
              <line x1="62" y1="36" x2="62" y2="68" stroke="#a1a1aa" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="57" y="66" width="10" height="7" rx="2" fill="#f59e0b" />
            </g>
          </svg>
        );

      case 'abs':
      case 'obliques':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes abCrunchCycle {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(-35deg); }
              }
              @keyframes absRedGlow {
                0%, 100% { fill: #ef4444; filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.8)); }
                50% { fill: #ff2222; filter: drop-shadow(0 0 9px rgba(255, 34, 34, 1)); }
              }
              .crunch-torso { animation: abCrunchCycle 1.5s ease-in-out infinite; transform-origin: 52px 65px; }
              .abs-red { animation: absRedGlow 1.5s ease-in-out infinite; }
            `}</style>

            {/* Mat */}
            <line x1="10" y1="76" x2="90" y2="76" stroke="#27272a" strokeWidth="3" />

            {/* Legs bent at knees */}
            <path d="M 52 65 L 72 65 L 82 76" fill="none" stroke="#71717a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

            {/* Rotating Upper Body Crunching */}
            <g className="crunch-torso">
              <line x1="52" y1="65" x2="26" y2="65" stroke="#3f3f46" strokeWidth="12" strokeLinecap="round" />
              <circle cx="18" cy="65" r="6" fill="#a1a1aa" />

              {/* RED HIGHLIGHTED TARGET MUSCLES: Abdominal Rectus 6-Pack */}
              <rect x="32" y="61" width="16" height="8" rx="2" className="abs-red" />
            </g>
          </svg>
        );

      default:
        // Full Body / Warmup / Warmdown
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <style>{`
              @keyframes fullBodyMotion {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.08); }
              }
              @keyframes fullRedGlow {
                0%, 100% { stroke: #ef4444; }
                50% { stroke: #ff2222; }
              }
              .fullbody-anim { animation: fullBodyMotion 1.2s ease-in-out infinite; transform-origin: center; }
              .fullbody-red { animation: fullRedGlow 1.2s ease-in-out infinite; }
            `}</style>

            <g className="fullbody-anim">
              <circle cx="50" cy="20" r="7" fill="#a1a1aa" />
              <line x1="50" y1="27" x2="50" y2="58" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" className="fullbody-red" />
              <line x1="50" y1="34" x2="22" y2="18" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" className="fullbody-red" />
              <line x1="50" y1="34" x2="78" y2="18" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" className="fullbody-red" />
              <line x1="50" y1="58" x2="28" y2="85" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" className="fullbody-red" />
              <line x1="50" y1="58" x2="72" y2="85" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" className="fullbody-red" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`group relative rounded-2xl bg-zinc-950 border border-zinc-800 p-2 flex items-center justify-center shrink-0 shadow-xl overflow-hidden athletic-glow cursor-pointer hover:border-amber-500/60 transition-all ${className}`}
      title="Tap to preview embedded video tutorial"
    >
      {/* Background glow highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Video Trigger Play Badge Overlay */}
      <div className="absolute top-1.5 right-1.5 z-20 w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <Play className="w-3 h-3 fill-white ml-0.5" />
      </div>

      {/* Image or SVG Motion Animation */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={exerciseName} 
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          renderSvgMotion()
        )}
      </div>

      {/* Hover Prompt Label */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-zinc-950/90 py-1 text-center text-[9px] font-mono font-bold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
        TAP FOR VIDEO
      </div>
    </div>
  );
};
