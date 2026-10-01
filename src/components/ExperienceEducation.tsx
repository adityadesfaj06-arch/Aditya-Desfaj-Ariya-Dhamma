import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Briefcase, Calendar, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pengalaman" className="py-20 sm:py-28 bg-[#fafaff] border-t border-purple-50/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Pengalaman Akademik & Proyek Digital */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-xs font-bold text-[#6B21A8] mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.experience.trackRecordBadge}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A0B3B] tracking-tight mb-3">
              {t.experience.trackRecordTitle}
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              {t.experience.trackRecordDesc}
            </p>

            <div className="space-y-4">
              {t.experience.academicList.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      {exp.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                      {exp.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-purple-100 mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pendidikan Timeline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-bold text-indigo-700 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.experience.eduBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A0B3B] tracking-tight mb-3">
              {t.experience.eduTitle}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              {t.experience.eduDesc}
            </p>

            {/* Education Timeline Cards */}
            <div className="relative pl-6 border-l-2 border-purple-200 space-y-6">
              
              {/* Higher Education: Politeknik Internasional Bali */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#2A0E4B] border-4 border-white shadow-sm" />
                
                <div className="p-5 sm:p-6 bg-white rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-[#2A0E4B] border border-purple-200">
                      {t.experience.higherEduBadge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-purple-600" />
                      {t.experience.higherEduPeriod}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {t.experience.higherEduName}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs font-medium text-slate-600">
                    <span className="font-semibold text-purple-900">Program:</span>
                    <span className="px-2 py-0.5 rounded bg-purple-50 font-bold text-[#2A0E4B]">
                      {t.experience.higherEduProgram}
                    </span>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                    {t.experience.higherEduHighlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High School Foundation: SMA Cinta Kasih Tzu Chi */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />

                <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {t.experience.highSchoolBadge}
                    </span>
                    <span className="text-xs text-purple-700 font-semibold">
                      {t.experience.highSchoolCurriculum}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {t.experience.highSchoolName}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed border-l-2 border-indigo-100 pl-3">
                    {t.experience.highSchoolDesc}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
