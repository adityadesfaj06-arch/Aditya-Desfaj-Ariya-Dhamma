import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { RealWebVisual } from './RealWebVisual';
import { ArrowUpRight, Sparkles, Layers, Eye, ExternalLink, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { t, lang } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<string>('all');

  const filterCategories = [
    { key: 'all', label: t.projects.categories.all, match: 'Semua Proyek' },
    { key: 'business', label: t.projects.categories.business, match: 'Business & Strategy' },
    { key: 'web', label: t.projects.categories.web, match: 'Web & Digital Product' },
    { key: 'creative', label: t.projects.categories.creative, match: 'Creative & Visual' },
    { key: 'marketing', label: t.projects.categories.marketing, match: 'Marketing & Content' },
  ];

  const currentCategory = filterCategories.find(c => c.key === selectedKey) || filterCategories[0];

  const filteredProjects = selectedKey === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(currentCategory.match));

  return (
    <section id="proyek" className="py-20 sm:py-28 bg-[#fafaff] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-[#2A0E4B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {/* Interactive Category Filter Tabs matching reference pill design */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-xs max-w-full">
            {filterCategories.map((cat) => {
              const isActive = selectedKey === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedKey(cat.key)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2A0E4B] text-white shadow-md shadow-purple-950/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Real Website Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-950/10 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Real Website Visual Mockup with Browser Frame */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative h-56 sm:h-60 w-full overflow-hidden cursor-pointer bg-[#181926]"
              >
                <RealWebVisual projectId={project.id} />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#1A0B3B]/40 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-semibold text-xs pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-white text-[#2A0E4B] shadow-lg flex items-center gap-1.5 font-bold">
                    <Eye className="w-4 h-4" />
                    <span>{t.projects.evidenceDetail}</span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-bold text-[#581C87] bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200/60">
                      {project.primaryCategory}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-slate-900 group-hover:text-[#2A0E4B] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tools & Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate max-w-[45%]">
                    <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="truncate">{project.tools.slice(0, 2).join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#2A0E4B] text-xs font-bold border border-purple-200/60 transition-colors shadow-2xs"
                        title={lang === 'ID' ? 'Buka Website Langsung' : 'Open Live Website'}
                      >
                        <span>{t.projects.liveWeb}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2A0E4B] hover:text-[#4A1882] cursor-pointer transition-colors"
                    >
                      <span>{t.projects.evidenceDetail}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">{t.projects.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
};
