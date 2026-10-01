import React, { useState } from 'react';
import { TOOLS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Figma, 
  Sparkles, 
  Code2, 
  FileText, 
  Layers, 
  Bot, 
  Cpu, 
  FileCode,
  Flame
} from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Design', 'Product', 'Development'] as const;

  const filteredTools = activeCategory === 'All' 
    ? TOOLS 
    : TOOLS.filter(t => t.category === activeCategory);

  const getToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'figma':
        return <Figma className="w-5 h-5 text-purple-600" />;
      case 'canva':
        return (
          <div className="w-5 h-5 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-xs">
            C
          </div>
        );
      case 'notion':
        return <FileText className="w-5 h-5 text-slate-800" />;
      case 'miro':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'chatgpt':
        return <Bot className="w-5 h-5 text-emerald-600" />;
      case 'google gemini':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'html':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'css':
        return <Code2 className="w-5 h-5 text-sky-500" />;
      case 'javascript':
        return <FileCode className="w-5 h-5 text-yellow-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="tools" className="py-20 sm:py-28 bg-[#fafaff] border-y border-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-[#2A0E4B] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.tools.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight">
              {t.tools.title}
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              {t.tools.description}
            </p>
          </div>

          {/* Filter Pills for Tools */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-2xs w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-[#2A0E4B] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat === 'All' ? t.tools.all : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-50 group-hover:bg-purple-100/70 border border-purple-100 flex items-center justify-center transition-colors">
                  {getToolIcon(tool.name)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {tool.level}
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
