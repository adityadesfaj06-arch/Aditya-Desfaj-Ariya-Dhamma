import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Compass, RefreshCw, Quote, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-purple-600" />;
      case 1:
        return <Compass className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <RefreshCw className="w-6 h-6 text-fuchsia-600" />;
      default:
        return <Target className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section id="filosofi" className="py-20 sm:py-28 bg-gradient-to-b from-[#fafaff] via-purple-50/20 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quote Banner */}
        <div className="relative mb-14 p-8 sm:p-12 rounded-[32px] bg-white border border-purple-100 shadow-md shadow-purple-500/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-xs font-semibold text-[#6B21A8] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.philosophy.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight leading-tight">
              {t.philosophy.title}
            </h2>
            
            <p className="mt-5 text-base sm:text-xl text-slate-700 font-medium leading-relaxed italic">
              &ldquo;{t.philosophy.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.philosophy.principles.map((principle, index) => (
            <div
              key={principle.number}
              className="group p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-100/80 border border-purple-100 flex items-center justify-center transition-colors">
                    {getIcon(index)}
                  </div>
                  <span className="text-2xl font-black text-purple-200 group-hover:text-purple-400 transition-colors">
                    {principle.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-purple-700 transition-colors">
                  {principle.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-purple-700 font-bold flex items-center gap-1.5">
                <span>Principle #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
