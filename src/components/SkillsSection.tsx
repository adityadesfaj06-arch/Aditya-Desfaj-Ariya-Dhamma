import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Boxes, LayoutTemplate, Sparkles, TrendingUp, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-purple-600" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-fuchsia-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-violet-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="keahlian" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-bold text-[#6B21A8] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.categories.map((category, idx) => (
            <div
              key={category.title}
              className="group p-6 bg-slate-50/60 rounded-3xl border border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-purple-50 border border-slate-200/80 group-hover:border-purple-200 flex items-center justify-center mb-5 transition-colors shadow-2xs">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200/60">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-[#6B21A8] font-bold">
                0{idx + 1} · Professional Domain
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
