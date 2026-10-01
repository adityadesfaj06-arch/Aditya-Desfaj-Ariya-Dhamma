import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { PortraitCard } from './PortraitCard';
import { BookOpen, User, Sparkles, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="beranda" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#fafaff] to-white">
      {/* Decorative Ambient Floating Lighting */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-purple-200/40 via-violet-100/30 to-indigo-100/20 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[350px] bg-gradient-to-bl from-violet-200/30 via-fuchsia-100/20 to-purple-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          
          {/* Left Text Zone matching reference screenshot */}
          <div className="flex-1 text-left">
            {/* Top Metadata Line matching reference image */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#6B21A8] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>{t.hero.meta}</span>
            </div>

            {/* Giant Heading matching reference font & weight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A0B3B] tracking-tight leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Sub-tags matching reference typography */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-[#581C87]">
              {t.hero.roleTags.map((tag, idx) => (
                <React.Fragment key={idx}>
                  <span className="hover:text-[#2A0E4B] transition-colors">{tag}</span>
                  {idx < t.hero.roleTags.length - 1 && <span className="text-slate-300">·</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Lead Narrative Description matching reference */}
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {t.hero.description}
            </p>

            {/* Action Buttons matching reference colors & styling */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary Button */}
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2A0E4B] hover:bg-[#3E1668] text-white font-semibold text-sm transition-all shadow-md shadow-purple-950/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.viewPortfolio}</span>
              </a>

              {/* Secondary Button */}
              <a
                href="#tentang"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-2xs transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <User className="w-4 h-4 text-purple-700" />
                <span>{t.hero.aboutMe}</span>
              </a>
            </div>

            {/* Bottom Kicker Strip matching reference */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#6B21A8]">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{t.hero.kicker}</span>
            </div>
          </div>

          {/* Right Column: Photo Card of Aditya matching reference */}
          <div className="w-full max-w-[380px] sm:max-w-[420px] shrink-0">
            <PortraitCard 
              name={PERSONAL_INFO.name}
              profileBadge={t.hero.profileBadge}
              college={t.hero.college}
              program={t.hero.program}
              semester={t.hero.semester}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
