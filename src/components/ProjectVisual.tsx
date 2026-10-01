import React from 'react';
import { 
  Activity, 
  BrainCircuit, 
  Heart, 
  Sparkles, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3,
  Stethoscope,
  Terminal,
  Palette
} from 'lucide-react';

interface ProjectVisualProps {
  projectId: string;
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId, title }) => {
  switch (projectId) {
    case 'hospi-ai':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-violet-900/90 via-slate-900 to-indigo-950 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
          {/* Background Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar Mockup */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600/80 flex items-center justify-center shadow-inner">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wide">HOSPI AI Clinical Suite</div>
                <div className="text-[10px] text-violet-300">Triage & Hospital Workflow</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[10px] text-emerald-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Active
            </div>
          </div>

          {/* Center Content Mockup */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
              <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
                <Activity className="w-3 h-3 text-violet-400" />
                Triase Pasien
              </div>
              <div className="text-sm font-bold text-white">Otomatisasi 94%</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-400 to-indigo-400 h-full w-[94%]" />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
              <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
                <BrainCircuit className="w-3 h-3 text-cyan-400" />
                Analisis Klinis
              </div>
              <div className="text-sm font-bold text-white">Prioritas Realtime</div>
              <div className="flex gap-1 mt-1.5">
                <span className="h-1.5 flex-1 rounded-full bg-rose-500/80" />
                <span className="h-1.5 flex-1 rounded-full bg-amber-500/80" />
                <span className="h-1.5 flex-1 rounded-full bg-emerald-500/80" />
              </div>
            </div>
          </div>

          {/* Bottom Card Element */}
          <div className="relative z-10 bg-white/10 border border-white/15 rounded-lg p-2 flex items-center justify-between text-[11px]">
            <span className="text-violet-200">Integrasi EHR & Rekam Medis</span>
            <span className="font-semibold text-white flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Terverifikasi
            </span>
          </div>
        </div>
      );

    case 'tim-sehat-kendalitensi':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-purple-950 via-slate-900 to-fuchsia-950 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
          {/* Ambient Glow */}
          <div className="absolute -top-10 right-0 w-44 h-44 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pink-600/80 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white/30" />
              </div>
              <div>
                <div className="text-xs font-semibold">KendaliTensi Tim Sehat</div>
                <div className="text-[10px] text-pink-300">90-Day Hypertension Care</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-pink-500/20 text-[10px] text-pink-200 border border-pink-400/30">
              Protokol HBPM
            </div>
          </div>

          {/* Center Blood Pressure Gauge */}
          <div className="relative z-10 my-2 bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-pink-300/80">Tekanan Darah Terpantau</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-extrabold text-white">120/80</span>
                <span className="text-[10px] text-slate-300">mmHg</span>
              </div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                <ShieldCheck className="w-3 h-3" /> Status Terkendali
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-slate-400">Monitoring Program</div>
              <div className="text-sm font-bold text-pink-300">Hari ke-42 / 90</div>
              <div className="text-[10px] text-slate-300 mt-1">AI Risk: Rendah</div>
            </div>
          </div>

          {/* Bottom Features Indicators */}
          <div className="relative z-10 grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="bg-white/10 rounded py-1 px-1.5 text-purple-200">Pengingat Obat</div>
            <div className="bg-white/10 rounded py-1 px-1.5 text-purple-200">Edukasi HBPM</div>
            <div className="bg-white/10 rounded py-1 px-1.5 text-purple-200">Dashboard RS</div>
          </div>
        </div>
      );

    case 'pulse-ai-studio':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
          <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold">PulseAI Studio</div>
                <div className="text-[10px] text-indigo-300">Google AI Studio Prototype</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
              Gemini 2.5
            </span>
          </div>

          {/* Center Terminal / Prompt Preview */}
          <div className="relative z-10 my-2 bg-slate-950/80 border border-white/10 rounded-xl p-2.5 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1.5 pb-1 border-b border-white/5">
              <Terminal className="w-3 h-3 text-indigo-400" />
              <span>Prompt Chaining & Reasoning</span>
            </div>
            <div className="text-slate-300 text-[10px] truncate">
              &gt; Mengolah data klinis &amp; rekomendasi alur kerja
            </div>
            <div className="mt-1 text-emerald-400 text-[10px] flex items-center gap-1">
              ✓ Output tervalidasi via Google AI Studio API
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>Generative AI Implementation</span>
            <span className="text-indigo-300 font-semibold">Live Applet</span>
          </div>
        </div>
      );

    case 'omniflow-ai-studio':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-violet-950 via-slate-900 to-purple-950 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
          <div className="absolute bottom-0 right-0 w-44 h-44 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold">OmniFlow Workspace</div>
                <div className="text-[10px] text-violet-300">Prompt Intelligence Engine</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 border border-violet-400/30 text-violet-200">
              Multimodal
            </span>
          </div>

          {/* Visual Workspace Node Cards */}
          <div className="relative z-10 my-2 grid grid-cols-2 gap-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2">
              <div className="text-[9px] uppercase tracking-wider text-violet-300">Input Processing</div>
              <div className="text-xs font-medium text-white mt-0.5">Structured Prompts</div>
              <div className="text-[10px] text-slate-400 mt-1">Context guardrails active</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2">
              <div className="text-[9px] uppercase tracking-wider text-violet-300">Automated Pipeline</div>
              <div className="text-xs font-medium text-white mt-0.5">Fast Synthesis</div>
              <div className="text-[10px] text-emerald-400 mt-1">Zero-shot accuracy</div>
            </div>
          </div>

          <div className="relative z-10 bg-white/10 rounded-lg px-2.5 py-1.5 flex items-center justify-between text-[11px]">
            <span className="text-violet-200">Task Execution Engine</span>
            <span className="text-white font-medium">Google AI Studio</span>
          </div>
        </div>
      );

    case 'creative-craft-ai':
      return (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-fuchsia-950 via-slate-900 to-purple-950 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
          <div className="absolute top-0 left-0 w-44 h-44 bg-fuchsia-600/20 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-fuchsia-600 flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold">CreativeCraft Studio</div>
                <div className="text-[10px] text-fuchsia-300">Visual & Content Ideation</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 border border-fuchsia-400/30 text-fuchsia-200">
              Creative AI
            </span>
          </div>

          {/* Moodboard Swatches preview */}
          <div className="relative z-10 my-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
            <div className="text-[10px] text-slate-300 mb-1.5 flex items-center justify-between">
              <span>Brand Moodboard &amp; Copy Engine</span>
              <span className="text-fuchsia-300">4 Formats</span>
            </div>
            <div className="flex gap-1.5 h-6">
              <div className="flex-1 rounded bg-violet-600/70" />
              <div className="flex-1 rounded bg-fuchsia-500/70" />
              <div className="flex-1 rounded bg-pink-400/70" />
              <div className="flex-1 rounded bg-indigo-500/70" />
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300">
            <span>Visual Concept &amp; Copy Acceleration</span>
            <span className="text-fuchsia-300 font-semibold">Digital Product</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 to-purple-950 p-4 text-white flex flex-col justify-between">
          <div className="text-xs font-semibold">{title}</div>
          <div className="text-sm text-slate-300">Digital Product &amp; AI Solution</div>
        </div>
      );
  }
};
