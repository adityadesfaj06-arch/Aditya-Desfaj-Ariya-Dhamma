import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { RealWebVisual } from './RealWebVisual';
import { 
  X, 
  ExternalLink, 
  Info, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Lightbulb, 
  Wrench, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [showDocumentation, setShowDocumentation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setShowDocumentation(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const targetLink = project.link || 'https://hospi-ai.vercel.app/guest';
  const isVercel = targetLink.includes('vercel.app');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header matching reference image */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="text-sm font-bold text-[#6B21A8]">
            {project.primaryCategory} / {t.modal.categorySuffix}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Section Heading: EVIDENCE & DOCUMENTATION */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[#6B21A8] font-bold text-base sm:text-lg tracking-wide uppercase">
                <Info className="w-5 h-5 text-[#6B21A8]" />
                <span>{t.modal.evidenceTitle}</span>
              </div>

              <span className="px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 text-xs font-semibold">
                {t.modal.evidenceBadge}
              </span>
            </div>

            <p className="italic text-slate-500 text-xs sm:text-sm mt-1.5">
              {t.modal.evidenceSubtitle(project.title)}
            </p>
          </div>

          {/* Card 1: Live Platform Deployment matching screenshot */}
          <div className="border border-slate-200/90 rounded-2xl p-5 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {t.modal.deploymentTitle}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  {t.modal.deploymentDesc(isVercel)}
                </p>
              </div>

              <span className="px-3 py-1 rounded-lg bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200/60">
                {t.modal.onlineBadge}
              </span>
            </div>

            {/* Interactive Browser Frame Preview */}
            <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-inner border border-slate-700/60">
              <RealWebVisual projectId={project.id} isDetailed={true} />
            </div>
          </div>

          {/* Card 2: Tautan & Referensi matching screenshot */}
          <div className="border border-slate-200/90 rounded-2xl p-5 bg-white shadow-2xs">
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {t.modal.linksTitle}
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm mb-4">
              {t.modal.linksDesc(isVercel)}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Live Website Button */}
              <a
                href={targetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A0E4B] hover:bg-[#3E1668] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>{t.modal.liveWebsite}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Secondary Documentation Toggle Button */}
              <button
                type="button"
                onClick={() => setShowDocumentation(!showDocumentation)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <span>{t.modal.docToggle}</span>
                {showDocumentation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <span className="text-xs text-slate-400 font-mono hidden sm:inline ml-auto truncate max-w-xs">
                {targetLink}
              </span>
            </div>
          </div>

          {/* Collapsible Detailed Documentation */}
          {showDocumentation && (
            <div className="border border-purple-100 rounded-2xl p-5 bg-purple-50/30 space-y-4 transition-all">
              <h5 className="font-bold text-[#2A0E4B] text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{t.modal.docToggle}</span>
              </h5>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>

              {(project.problem || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {project.problem && (
                    <div className="p-3.5 rounded-xl bg-white border border-rose-100 text-xs text-slate-700">
                      <div className="font-bold text-rose-800 mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                        {t.modal.challenges}
                      </div>
                      {project.problem}
                    </div>
                  )}

                  {project.solution && (
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-100 text-xs text-slate-700">
                      <div className="font-bold text-emerald-800 mb-1 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                        {t.modal.solutionTitle}
                      </div>
                      {project.solution}
                    </div>
                  )}
                </div>
              )}

              {project.features && (
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-700 mb-2">{t.modal.keyFeatures}:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-white p-2 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Wrench className="w-3.5 h-3.5 text-purple-600" />
                <span>Tools: {project.tools.join(', ')}</span>
              </div>
            </div>
          )}

          {/* Bottom Info Note Banner matching screenshot */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-2.5 text-xs text-slate-600">
            <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.modal.note}
            </p>
          </div>

          {/* Bottom Close Button matching screenshot */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
            >
              {t.modal.close}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
