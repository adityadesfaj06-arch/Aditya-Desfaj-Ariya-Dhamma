import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Sparkles, CheckCircle2, Compass, Award, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="py-20 sm:py-28 bg-white border-t border-purple-50/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Highlight Card with Glass Effect */}
          <div className="lg:col-span-5">
            <div className="relative p-7 sm:p-9 bg-gradient-to-br from-purple-50/70 via-white to-violet-50/60 rounded-[32px] border border-purple-100 shadow-md shadow-purple-950/5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2A0E4B] to-violet-700 text-white flex items-center justify-center mb-6 shadow-md shadow-purple-900/20">
                <User className="w-6 h-6" />
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-[#6B21A8] font-bold">
                  Personal Mindset
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {t.about.mindsetTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.about.mindsetDesc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-100 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{t.about.point1}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{t.about.point2}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{t.about.point3}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Stats */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-bold text-[#6B21A8] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight mb-6">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-slate-900">
                {t.about.bio}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.about.bioExtended}
              </p>
            </div>

            {/* Quick Stat / Attributes matching screenshot requirements */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all">
                <div className="text-xs text-[#581C87] font-bold mb-1">{t.about.stat1Title}</div>
                <div className="text-sm font-extrabold text-slate-900">{t.about.stat1Value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.about.stat1Sub}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all">
                <div className="text-xs text-indigo-700 font-bold mb-1">{t.about.stat2Title}</div>
                <div className="text-sm font-extrabold text-slate-900">{t.about.stat2Value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.about.stat2Sub}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all">
                <div className="text-xs text-fuchsia-700 font-bold mb-1">{t.about.stat3Title}</div>
                <div className="text-sm font-extrabold text-slate-900">{t.about.stat3Value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.about.stat3Sub}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
