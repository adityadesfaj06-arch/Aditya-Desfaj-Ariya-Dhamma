import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  ArrowUp,
  Send,
  CheckCircle2
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() && !senderMessage.trim()) return;

    // Construct mailto link
    const subject = encodeURIComponent(`Discussion / Note from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`From: ${senderName}\n\nMessage:\n${senderMessage}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setSenderName('');
      setSenderMessage('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="relative pt-20 pb-12 bg-white border-t border-purple-100 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-purple-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Connect Banner Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-xs font-bold text-[#6B21A8] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.footer.collabBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A0B3B] tracking-tight">
            {t.footer.title}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            {t.footer.description}
          </p>
        </div>

        {/* Send a Friendly Note Card matching user's Image 3 */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200/90 shadow-xl shadow-purple-950/5 relative overflow-hidden">
            
            {/* Header of Form */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#2A0E4B]">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>{t.footer.friendlyNoteTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                {t.footer.friendlyNoteDesc}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  {t.footer.yourName}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={t.footer.yourNamePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  {t.footer.yourMessage}
                </label>
                <textarea
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder={t.footer.yourMessagePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#2A0E4B] hover:bg-[#3D146A] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-950/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.footer.sendMessage}</span>
                </button>
              </div>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.footer.messageSent}</span>
                </div>
              )}
            </form>

          </div>
        </div>

        {/* Social Links Row matching user's Image 1 */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-6 mb-10 border-y border-slate-100">
          {/* Instagram link matching Image 1 */}
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 hover:text-purple-700 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-50 group-hover:bg-purple-100 text-purple-600 flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </div>
            <span>Instagram (@{PERSONAL_INFO.instagramHandle})</span>
          </a>

          {/* LinkedIn link matching Image 1 */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 hover:text-blue-700 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
            <span>LinkedIn</span>
          </a>

          {/* Email quick copy */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-mono text-slate-600">{PERSONAL_INFO.email}</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-[#2A0E4B] transition-colors cursor-pointer"
              title="Salin alamat email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Bottom Navigation & Brand Footer */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-bold text-slate-800">{PERSONAL_INFO.name}</span> · Portfolio &copy; {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-6">
            <a href="#proyek" className="hover:text-[#2A0E4B] transition-colors">{t.nav.projects}</a>
            <a href="#keahlian" className="hover:text-[#2A0E4B] transition-colors">{t.nav.skills}</a>
            <a href="#tools" className="hover:text-[#2A0E4B] transition-colors">{t.nav.tools}</a>
            <a href="#filosofi" className="hover:text-[#2A0E4B] transition-colors">{t.nav.philosophy}</a>
            <a href="#pengalaman" className="hover:text-[#2A0E4B] transition-colors">{t.nav.experience}</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#2A0E4B] hover:text-purple-900 font-bold cursor-pointer transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
