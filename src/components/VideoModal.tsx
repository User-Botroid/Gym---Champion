import React, { useState } from 'react';
import { X, Youtube, ExternalLink, Play, Sparkles, AlertTriangle, CheckCircle2, Video } from 'lucide-react';

interface VideoModalProps {
  exerciseName: string;
  targetMuscle: string;
  formGuide?: [string, string, string];
  tanglishTip?: string;
  commonMistakes?: [string, string, string];
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  exerciseName,
  targetMuscle,
  formGuide,
  tanglishTip,
  commonMistakes,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'execution' | 'mistakes'>('video');

  const searchQuery = `${exerciseName} exercise proper form guide tutorial`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
  const embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(searchQuery)}`;

  // Default common mistakes list if specific mistakes aren't defined
  const defaultMistakes: [string, string, string] = commonMistakes || [
    'Using momentum or body swinging instead of strict controlled tension',
    'Shortening range of motion at peak contraction or stretch',
    'Holding your breath or allowing lower back to arch excessively'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 md:p-5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center shrink-0">
              <Youtube className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                  {exerciseName}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold uppercase border border-amber-500/20">
                  {targetMuscle}
                </span>
              </div>
              <p className="text-xs text-zinc-400">Video Guide & Common Form Mistakes to Avoid</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Segmented Navigation Tabs */}
        <div className="flex items-center gap-2 p-2 bg-zinc-950/80 border-b border-zinc-800 px-4">
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Short Video Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('execution')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'execution'
                ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proper Execution</span>
          </button>

          <button
            onClick={() => setActiveTab('mistakes')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'mistakes'
                ? 'bg-red-500 text-white font-bold shadow-sm'
                : 'text-red-400 hover:text-red-300 hover:bg-zinc-800/60'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>Mistakes to Avoid</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'video' && (
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <iframe
                src={embedUrl}
                title={`${exerciseName} Form Video Guide`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {activeTab === 'execution' && (
            <div className="p-5 space-y-4">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Step-by-Step Movement Execution
              </h4>

              {formGuide && (
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  {formGuide.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                      <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-amber-500/20">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ul>
              )}

              {tanglishTip && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Tanglish Gym Master Tip</span>
                  </div>
                  <p className="text-xs text-zinc-100 italic leading-relaxed">
                    "{tanglishTip}"
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'mistakes' && (
            <div className="p-5 space-y-4">
              <div className="p-3 bg-red-950/40 border border-red-800/40 rounded-xl flex items-center gap-2 text-xs text-red-300 font-medium">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Avoid these 3 common mistakes to protect joints and maximize hypertrophy!</span>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-200">
                {defaultMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-zinc-950 p-3.5 rounded-xl border border-zinc-800">
                    <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-red-500/20">
                      ✕
                    </span>
                    <span className="leading-relaxed pt-0.5">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Always warm up shoulder & knee joints before heavy sets.</span>
          </div>

          <a
            href={youtubeSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
          >
            <span>Open in YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
