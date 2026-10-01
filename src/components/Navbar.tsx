import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['beranda', 'tentang', 'proyek', 'keahlian', 'tools', 'filosofi', 'pengalaman', 'kontak'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#beranda', id: 'beranda' },
    { name: t.nav.about, href: '#tentang', id: 'tentang' },
    { name: t.nav.projects, href: '#proyek', id: 'proyek' },
    { name: t.nav.skills, href: '#keahlian', id: 'keahlian' },
    { name: t.nav.tools, href: '#tools', id: 'tools' },
    { name: t.nav.philosophy, href: '#filosofi', id: 'filosofi' },
    { name: t.nav.experience, href: '#pengalaman', id: 'pengalaman' },
    { name: t.nav.contact, href: '#kontak', id: 'kontak' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-purple-100/80 shadow-xs' 
          : 'bg-white/70 backdrop-blur-md border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo with Subtle Gradient Mark */}
          <a 
            href="#beranda" 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2A0E4B] to-violet-700 text-white flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
              AD
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1E0E45] group-hover:text-violet-800 transition-colors">
              Portofolio
            </span>
          </a>

          {/* Navigation Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#2A0E4B] font-bold'
                      : 'text-slate-600 hover:text-[#2A0E4B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2A0E4B] rounded-full shadow-xs animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone: Language Switcher & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setLang('ID')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  lang === 'ID'
                    ? 'bg-white text-[#2A0E4B] shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Beralih ke Bahasa Indonesia"
              >
                ID
              </button>
              <span className="text-slate-300 mx-0.5 text-xs">|</span>
              <button
                type="button"
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  lang === 'EN'
                    ? 'bg-white text-[#2A0E4B] shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Hubungi Saya CTA */}
            <a
              href="#kontak"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#2A0E4B] hover:bg-[#3D146A] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-purple-950/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.contactMe}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang('ID')}
                className={`px-2 py-0.5 rounded ${lang === 'ID' ? 'bg-white text-[#2A0E4B] shadow-2xs' : 'text-slate-500'}`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded ${lang === 'EN' ? 'bg-white text-[#2A0E4B] shadow-2xs' : 'text-slate-500'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#2A0E4B] hover:bg-purple-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-100 bg-white/98 backdrop-blur-xl rounded-b-2xl shadow-xl px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-[#2A0E4B]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-4 py-2.5 rounded-xl bg-[#2A0E4B] text-white text-sm font-bold shadow-sm"
              >
                {t.nav.contactMe} ↗
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
