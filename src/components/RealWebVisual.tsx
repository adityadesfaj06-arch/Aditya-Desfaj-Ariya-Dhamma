import React, { useState } from 'react';
import { 
  Lock, 
  ExternalLink, 
  Search, 
  ShoppingBag, 
  Flame, 
  Star, 
  ArrowRight, 
  Home, 
  FileText, 
  Utensils, 
  MessageSquare, 
  Menu, 
  AlertTriangle, 
  Globe, 
  Repeat, 
  Volume2, 
  Sliders, 
  BookOpen, 
  Radio, 
  Sun, 
  Zap, 
  Check, 
  Music, 
  Mic
} from 'lucide-react';

interface RealWebVisualProps {
  projectId: string;
  isDetailed?: boolean;
}

export const RealWebVisual: React.FC<RealWebVisualProps> = ({ projectId, isDetailed = false }) => {
  // Mini interactive state for guitar chord selector
  const [selectedChord, setSelectedChord] = useState('C');
  // Mini interactive state for hotel text size
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('sm');

  const getUrl = () => {
    switch (projectId) {
      case 'hospi-ai':
        return 'https://hospi-ai.vercel.app/guest';
      case 'tim-sehat-kendalitensi':
        return 'https://kendali-tensi.vercel.app/';
      case 'kawan-lokal':
        return 'https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10';
      case 'linguapulse':
        return 'https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5';
      case 'gitar-akustik-pro':
        return 'https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f';
      default:
        return 'https://portfolio-aditya.vercel.app';
    }
  };

  const url = getUrl();

  return (
    <div className="w-full h-full bg-[#1e1e28] text-slate-100 flex flex-col font-sans select-none overflow-hidden rounded-t-2xl sm:rounded-2xl border border-slate-700/60 shadow-lg">
      
      {/* Realistic Browser Top Chrome */}
      <div className="bg-[#24273A] px-3 py-1.5 border-b border-white/10 flex items-center justify-between gap-2 shrink-0">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto bg-[#181926]/90 border border-white/10 rounded-lg px-2.5 py-0.5 flex items-center gap-2 text-[10px] sm:text-xs text-slate-300">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate text-slate-200 font-mono">{url}</span>
        </div>

        {/* Browser Action Link */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-300 transition-colors p-1"
          title="Buka Website Asli"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Website Viewport Content - Matches User's Exact 5 Uploaded Screenshots */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">

        {/* ========================================================
            PROJECT 1: KAWAN LOKAL (Screenshot 1)
        ======================================================== */}
        {projectId === 'kawan-lokal' && (
          <div className="relative min-h-[300px] w-full bg-[#1a120c] text-white overflow-hidden p-3 sm:p-5 flex flex-col justify-between">
            {/* Background Ramen/Snack Image Overlay */}
            <div 
              className="absolute inset-0 opacity-25 bg-cover bg-center"
              style={{
                backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(245,158,11,0.2), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop")'
              }}
            />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-full bg-white/95 text-slate-900 font-extrabold flex items-center gap-1.5 shadow-xs">
                  <span>🏠 Kawan Lokal</span>
                  <span className="text-emerald-600 text-xs">🌿</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-slate-300 text-[11px] ml-2">
                  <span className="text-amber-400 font-semibold">Discover</span>
                  <span>Artikel</span>
                  <span>Reviews</span>
                  <span>Trending</span>
                  <span>Categories</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Search className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
                <ShoppingBag className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
                <span className="hidden sm:inline text-slate-300">Masuk</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900/90 text-white font-semibold text-[10px] border border-white/20 flex items-center gap-1">
                  Jelajahi Sekarang ➔
                </span>
              </div>
            </div>

            {/* Main Hero Banner Grid */}
            <div className="relative z-10 my-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Left Column */}
              <div className="md:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-bold text-emerald-300 border border-emerald-400/30">
                  <span>🌿 OFFICIAL STORE</span>
                  <span>·</span>
                  <span>Jajanan Viral &amp; Bubuk Minuman Cafe</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white uppercase">
                  JAJANAN VIRAL &amp; <br />
                  <span className="text-amber-400">BUBUK MINUMAN.</span>
                </h1>

                <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 max-w-lg leading-relaxed">
                  Dari Latiao Mala, Cuanki Bandung, Cimol Bojot, &amp; Basreng pedas, sampai aneka bubuk minuman cafe premium: Matcha Uji, Taro, Red Velvet, &amp; Es Teh Solo. Nikmati rasa viral terbaik di rumahmu!
                </p>

                {/* Badge tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-600/40 text-[9px] text-amber-200 flex items-center gap-1">
                    🌶️ Cemilan Gurih &amp; Pedas Nampol
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-600/40 text-[9px] text-emerald-200 flex items-center gap-1">
                    🧋 Bubuk Minuman Siap Seduh 20-50 Cup
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px]">
                  <span className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md flex items-center gap-1 cursor-pointer">
                    🔥 Belanja Semua Produk
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 text-white font-medium border border-white/20 flex items-center gap-1">
                    ☕ Bubuk Minuman 🧋
                  </span>
                  <span className="text-slate-300 text-[10px] ml-1">
                    Review Jujur ↓
                  </span>
                </div>
              </div>

              {/* Right Card */}
              <div className="hidden md:block md:col-span-4">
                <div className="p-3 rounded-2xl bg-[#f5ede2] text-slate-900 border border-white/30 shadow-xl space-y-2">
                  <div className="text-center py-2 border-b border-amber-900/10">
                    <div className="text-xs font-black text-amber-950">🏠 Kawan Lokal 🌿</div>
                    <div className="text-[10px] text-slate-600">Jajanan Viral &amp; Bubuk Minuman</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 text-white text-[9px] space-y-1">
                    <div className="flex items-center justify-between text-amber-400 font-bold">
                      <span>✨ Garansi Enak</span>
                      <span>⭐ 9.5 / 10</span>
                    </div>
                    <p className="text-slate-300 italic text-[8.5px] leading-tight">
                      &ldquo;Dibuat dari bahan segar berkualitas, higienis, dan rasa otentik yang bikin nagih!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 2: HOSPI AI (Screenshot 2)
        ======================================================== */}
        {projectId === 'hospi-ai' && (
          <div className="min-h-[300px] w-full bg-[#fbfbfb] text-slate-900 p-4 sm:p-5 flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div>
                  <div className="font-extrabold text-sm text-slate-900">Hospi Resort Bali</div>
                  <div className="text-[10px] text-slate-500">Kamar 508</div>
                </div>

                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-semibold flex items-center gap-1">
                    <Repeat className="w-3 h-3" />
                    Beralih tampilan
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    Bahasa Inggris ▾
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Keadaan darurat
                  </span>
                </div>
              </div>

              {/* Greeting */}
              <div className="my-3">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Selamat pagi, Alex.
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kamar 508 · Kamar Taman Eksekutif
                </p>
              </div>

              {/* Card 1: Cara Kerjanya */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
                <div className="font-bold text-xs text-slate-900">Cara kerjanya</div>
                
                <div className="space-y-1.5 text-[11px] text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                    <span>Ketuk apa yang Anda butuhkan di bawah ini, atau ketik atau ucapkan dengan kata-kata Anda sendiri.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                    <span>Kami langsung mengirimkannya ke tim yang tepat.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                    <span>Ikuti perkembangannya di sini sampai selesai.</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span>Butuh teks yang lebih besar?</span>
                    <div className="flex bg-slate-100 rounded p-0.5">
                      <button onClick={() => setTextSize('sm')} className={`px-1.5 py-0.5 rounded ${textSize === 'sm' ? 'bg-white font-bold' : ''}`}>A</button>
                      <button onClick={() => setTextSize('md')} className={`px-1.5 py-0.5 rounded ${textSize === 'md' ? 'bg-white font-bold text-xs' : ''}`}>A</button>
                      <button onClick={() => setTextSize('lg')} className={`px-1.5 py-0.5 rounded ${textSize === 'lg' ? 'bg-white font-bold text-sm' : ''}`}>A</button>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-bold text-[10px] cursor-pointer">
                    Mengerti
                  </span>
                </div>
              </div>

              {/* Inquiry prompt */}
              <div className="mt-3 p-3 rounded-2xl bg-white border border-slate-200/90 text-xs">
                <div className="font-bold text-slate-900">Bagaimana kami dapat membantu Anda hari ini?</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Ketik atau bicaralah dalam bahasa apa pun.</div>
              </div>
            </div>

            {/* Bottom Navigation matching screenshot */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-5 text-center text-[10px] text-slate-500">
              <div className="font-bold text-slate-900 flex flex-col items-center gap-0.5">
                <Home className="w-4 h-4 text-slate-900" />
                <span>Rumah</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <FileText className="w-4 h-4" />
                <span>Permintaan</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Utensils className="w-4 h-4" />
                <span>Makanan</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <MessageSquare className="w-4 h-4" />
                <span>Mengobrol</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Menu className="w-4 h-4" />
                <span>Lagi</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 3: TIM SEHAT KENDALITENSI (Screenshot 3)
        ======================================================== */}
        {projectId === 'tim-sehat-kendalitensi' && (
          <div className="min-h-[300px] w-full bg-[#fcfdfd] text-slate-900 p-4 sm:p-6 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0F3D39] text-white flex items-center justify-center font-bold text-xs">
                  KT
                </div>
                <span className="font-extrabold text-sm sm:text-base text-[#0F3D39]">KendaliTensi</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="hover:text-slate-900">Cara kerja</span>
                <span className="hover:text-slate-900">Tentang</span>
                <span className="text-[#0F3D39] border-b-2 border-[#0F3D39] pb-0.5 font-bold">
                  Buka demo ➔
                </span>
              </div>
            </div>

            {/* Main Content Split Grid */}
            <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column */}
              <div className="md:col-span-7 space-y-3">
                <div className="text-xs font-semibold text-[#134E4A]">
                  KendaliTensi · pemantauan hipertensi
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F3D39] tracking-tight leading-tight">
                  Dari angka tensi, <br />
                  menjadi tindakan.
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                  Program 90 hari yang menghubungkan pengukuran di rumah, peninjauan tenaga kesehatan, dan tindak lanjut yang dapat dipahami pasien.
                </p>

                <div className="flex items-center gap-3 pt-2 text-xs">
                  <span className="px-4 py-2 rounded-xl bg-[#0F3D39] text-white font-bold flex items-center gap-1.5 shadow-sm">
                    Jelajahi demo ➔
                  </span>
                  <span className="text-[#0F3D39] font-semibold hover:underline">
                    Lihat alur pemantauan
                  </span>
                </div>
              </div>

              {/* Right Column Patient Experience Card */}
              <div className="md:col-span-5 md:border-l-2 md:border-[#134E4A]/20 md:pl-5 space-y-3">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Contoh pengalaman pasien
                </div>

                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Hari ke-24 dari 90</div>
                  <div className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">
                    Yang perlu dilakukan hari ini
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Ukur tekanan darah malam
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-medium">Pengukuran terakhir</div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-[#0F3D39]">128 / 82</span>
                    <span className="text-xs text-slate-500 font-medium">mmHg</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Kemarin, 19.42 · ditinjau bersama tenaga kesehatan
                  </div>
                </div>

                <div className="text-xs font-bold text-[#0F3D39] flex items-center gap-1">
                  <span>Lihat pengalaman pasien</span>
                  <span>➔</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 4: LINGUAPULSE (Screenshot 4)
        ======================================================== */}
        {projectId === 'linguapulse' && (
          <div className="min-h-[300px] w-full bg-[#0d1e3a] text-white p-4 sm:p-5 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                  🌐
                </div>
                <div>
                  <div className="font-black text-xs text-white">LinguaPulse <span className="text-[9px] bg-sky-400/30 text-sky-200 px-1 rounded">PRO</span></div>
                  <div className="text-[9px] text-sky-200">Translate &amp; Learn Fast</div>
                </div>
              </div>

              {/* Center Tabs */}
              <div className="hidden sm:flex items-center gap-1 p-0.5 rounded-xl bg-white/10 text-[10px]">
                <span className="px-2.5 py-1 rounded-lg bg-sky-600 text-white font-bold">🏠 Dashboard</span>
                <span className="px-2 py-1 text-slate-300">文A Translate Live</span>
                <span className="px-2 py-1 text-slate-300">📖 Learn &amp; Practice</span>
                <span className="px-2 py-1 text-slate-300">👤 Profile</span>
              </div>

              {/* Right Stats */}
              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30">
                  🔥 7d
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 font-bold border border-sky-400/30">
                  ⚡ 840 XP
                </span>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              </div>
            </div>

            {/* Hero Card with Gradient Ambient */}
            <div className="my-3 p-4 rounded-2xl bg-gradient-to-r from-sky-900/60 via-blue-900/50 to-indigo-950/70 border border-sky-500/30 shadow-lg space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] text-sky-200 border border-white/10">
                <span>☁️ Tema Biru Pastel &amp; Langit · AI Voice &amp; Smart Polyglot</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <span>Selamat datang, Alex Tan!</span>
                <span>🌤️</span>
              </h2>

              <p className="text-[11px] sm:text-xs text-sky-100 max-w-xl leading-relaxed">
                Terjemahkan percakapan secara instan dengan pengenalan suara dual-arah, pelajari ribuan kosakata trilingual (Mandarin, Indonesia, Inggris), dan asah kefasihan dengan kartu belajar interaktif.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="px-3.5 py-1.5 rounded-xl bg-white text-blue-950 font-bold flex items-center gap-1.5 shadow-md">
                  <span>文A Mulai Menerjemahkan</span>
                  <span>➔</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white font-medium border border-white/20">
                  📖 Lanjut Belajar
                </span>
              </div>
            </div>

            {/* Bottom 3 Metrics Cards */}
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400">🔥 Daily Streak</div>
                <div className="text-sm font-bold text-amber-300 mt-0.5">7 Hari</div>
                <div className="text-[9px] text-slate-400">Konsistensi setiap hari</div>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400">🎯 Target Harian</div>
                <div className="text-sm font-bold text-sky-300 mt-0.5">75%</div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-1 overflow-hidden">
                  <div className="bg-sky-400 h-full w-[75%]" />
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-slate-400">⚡ Level 4 Polyglot</div>
                <div className="text-sm font-bold text-emerald-300 mt-0.5">Tier IV</div>
                <div className="text-[9px] text-slate-400">840 Total XP terkumpul</div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 5: GITARAKUSTIK PRO (Screenshot 5)
        ======================================================== */}
        {projectId === 'gitar-akustik-pro' && (
          <div className="min-h-[300px] w-full bg-[#121214] text-white p-3 sm:p-5 flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-500 text-black font-black flex items-center justify-center text-xs">
                  🎸
                </div>
                <div>
                  <span className="font-extrabold text-sm text-white">GitarAkustik Pro</span>
                  <span className="ml-1 text-[9px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">STUDIO</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black font-extrabold flex items-center gap-1">
                  <Volume2 className="w-3 h-3" />
                  Tes Suara Gitar
                </span>
                <span className="hidden sm:inline px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                  ⚙ Standar (E A D G B E) ▾
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">🔥 3 Hari</span>
              </div>
            </div>

            {/* Tabs Row */}
            <div className="flex items-center gap-1.5 py-1.5 text-[10px] overflow-x-auto no-scrollbar">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-black font-bold whitespace-nowrap">
                🎸 Studio Fretboard &amp; Petikan
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 whitespace-nowrap">
                📈 Tuner &amp; Gelombang Audio
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 whitespace-nowrap">
                ⏺ Perekam Latihan (WAV HQ)
              </span>
            </div>

            {/* Chord Selection Buttons */}
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 my-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-amber-300">Pilih Kunci:</span>
                {['C', 'D', 'Dm', 'E', 'Em', 'G', 'Am'].map((kunci) => (
                  <button
                    key={kunci}
                    onClick={() => setSelectedChord(kunci)}
                    className={`w-6 h-6 rounded-full text-[10px] font-extrabold transition-all ${
                      selectedChord === kunci
                        ? 'bg-amber-500 text-black shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {kunci}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                  Kunci: {selectedChord} (Mayor)
                </span>
              </div>
            </div>

            {/* Fretboard SVG / Visual Grid */}
            <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-[10px]">
              <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                <span>Leher Gitar (Fretboard) • 13 Fret Akurat</span>
                <span className="flex items-center gap-2">
                  <span className="text-amber-400">● Posisi Jari</span>
                  <span className="text-emerald-400">● Senar Terpetik</span>
                  <span className="text-rose-400">✕ Senar Mati</span>
                </span>
              </div>

              {/* Fretboard String Lines */}
              <div className="space-y-1.5 pt-1 relative">
                {/* 6 strings */}
                <div className="flex items-center border-b border-slate-700/60 pb-1">
                  <span className="w-8 text-[9px] text-slate-400">#1 E</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="text-emerald-400 font-bold">O</span>
                  </div>
                </div>

                <div className="flex items-center border-b border-slate-700/60 pb-1">
                  <span className="w-8 text-[9px] text-slate-400">#2 B</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="w-4 h-4 rounded-full bg-amber-500 text-black font-black text-[9px] flex items-center justify-center mx-auto shadow-sm">1</span>
                  </div>
                </div>

                <div className="flex items-center border-b border-slate-700/60 pb-1">
                  <span className="w-8 text-[9px] text-slate-400">#3 G</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="text-emerald-400 font-bold">O</span>
                  </div>
                </div>

                <div className="flex items-center border-b border-slate-700/60 pb-1">
                  <span className="w-8 text-[9px] text-slate-400">#4 D</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="col-start-2 w-4 h-4 rounded-full bg-amber-500 text-black font-black text-[9px] flex items-center justify-center mx-auto shadow-sm">2</span>
                  </div>
                </div>

                <div className="flex items-center border-b border-slate-700/60 pb-1">
                  <span className="w-8 text-[9px] text-slate-400">#5 A</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="col-start-3 w-4 h-4 rounded-full bg-amber-500 text-black font-black text-[9px] flex items-center justify-center mx-auto shadow-sm">3</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-8 text-[9px] text-slate-400">#6 E</span>
                  <div className="flex-1 grid grid-cols-13 text-center">
                    <span className="text-rose-500 font-bold">✕</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
              <span className="text-amber-400">🔊 Audio Web Audio API Aktif</span>
              <span>13 Fret Akurat · Real-Time Audio Engine</span>
            </div>
          </div>
        )}

      </div>

      {/* Website Bottom Bar */}
      <div className="bg-[#181926] px-3 py-1.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Status: Live Application
        </span>
        <span className="text-purple-300 font-mono">200 OK · HTTPS</span>
      </div>

    </div>
  );
};
