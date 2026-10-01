import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

interface PortraitCardProps {
  name: string;
  profileBadge?: string;
  college?: string;
  program?: string;
  semester?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({
  name,
  profileBadge = 'PROFIL MAHASISWA',
  college = 'Politeknik Internasional Bali',
  program = 'D4 Bisnis Digital',
  semester = 'Semester 3',
}) => {
  // Check candidate image sources in order of preference
  const candidatePaths = [
    '/aditya-photo.jpg',
    '/WhatsApp Image 2026-09-26 at 13.21.51.jpeg',
    '/photo.jpg',
    '/aditya.jpg',
    '/profile.jpg',
  ];

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [userPhoto, setUserPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('aditya_portfolio_photo');
    } catch {
      return null;
    }
  });

  const [hasRealPhoto, setHasRealPhoto] = useState(false);

  const handleImageError = () => {
    // If not user-uploaded and there are more candidates, try next candidate
    if (!userPhoto && candidateIndex < candidatePaths.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasRealPhoto(false);
    }
  };

  const handleImageLoad = () => {
    setHasRealPhoto(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setUserPhoto(result);
        setHasRealPhoto(true);
        try {
          localStorage.setItem('aditya_portfolio_photo', result);
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Determine current active image URL
  const currentSrc = userPhoto || candidatePaths[candidateIndex];

  return (
    <div className="relative group w-full max-w-[420px] mx-auto select-none">
      {/* Outer Card Frame matching reference image */}
      <div className="bg-white p-3.5 rounded-[32px] shadow-2xl shadow-purple-950/10 border border-slate-200/90 transition-all duration-300 hover:shadow-purple-900/15">
        
        {/* Photo Container */}
        <div className="relative rounded-[24px] overflow-hidden aspect-[3.7/5] bg-[#E8EBF0] flex flex-col justify-end select-none">
          
          {/* Main Photo Image Element */}
          <img 
            src={currentSrc} 
            alt={name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
              hasRealPhoto ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />

          {/* Fallback Detailed Illustration if image is loading or hasn't loaded yet */}
          {!hasRealPhoto && (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end overflow-hidden">
              {/* Studio White Presentation Screen Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-[#EEF1F5] to-[#DFE3E9]" />
              
              {/* Screen Rail Frame Bar at Bottom Background (matching real photo) */}
              <div className="absolute bottom-28 left-0 right-0 h-2 bg-slate-300 shadow-inner" />
              <div className="absolute bottom-[114px] left-0 right-0 h-0.5 bg-white" />

              {/* Ambient Soft Studio Shadow behind Aditya */}
              <div className="absolute inset-x-12 top-20 bottom-10 bg-slate-400/20 blur-2xl rounded-full" />

              {/* Portrait SVG Illustration of Aditya */}
              <svg 
                viewBox="0 0 400 520" 
                className="relative z-10 w-full h-[106%] max-h-none translate-y-3 object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Skin Tone Gradient (Indonesian Medium Tan) */}
                  <linearGradient id="adityaSkin2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C99468" />
                    <stop offset="50%" stopColor="#BA8356" />
                    <stop offset="100%" stopColor="#A26C41" />
                  </linearGradient>

                  <linearGradient id="skinHighlight2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#DFAD82" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#B67F54" stopOpacity="0" />
                  </linearGradient>

                  {/* Batik Megamendung Pattern */}
                  <pattern id="batikPattern2" width="70" height="70" patternUnits="userSpaceOnUse">
                    <rect width="70" height="70" fill="#182032" />
                    <path d="M 0 35 Q 15 15, 35 25 T 65 25 A 10 10 0 0 1 60 40 Q 40 50, 20 40 Z" fill="#8C7456" opacity="0.9" />
                    <path d="M 5 35 Q 18 18, 32 27 T 60 27" stroke="#D8C4AA" strokeWidth="2" fill="none" />
                    <path d="M 10 35 Q 20 23, 28 30 T 54 30" stroke="#F4EDE2" strokeWidth="1.5" fill="none" />
                    <path d="M 15 35 Q 22 28, 26 32 T 48 32" stroke="#485A75" strokeWidth="1" fill="none" />
                    <path d="M 35 70 Q 50 50, 70 60" stroke="#BAA284" strokeWidth="2" fill="none" />
                    <path d="M 25 5 Q 45 20, 55 5" stroke="#7A6449" strokeWidth="1.5" fill="none" />
                    <circle cx="50" cy="55" r="2.5" fill="#E8DBC9" />
                    <circle cx="15" cy="65" r="2" fill="#E8DBC9" />
                  </pattern>

                  <linearGradient id="adityaHair2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#241E1E" />
                    <stop offset="60%" stopColor="#151212" />
                    <stop offset="100%" stopColor="#080707" />
                  </linearGradient>
                </defs>

                {/* Neck & Shadows */}
                <path d="M 172 215 L 172 268 Q 200 282 228 268 L 228 215 Z" fill="url(#adityaSkin2)" />
                <path d="M 172 215 Q 200 238 228 215 L 228 232 Q 200 248 172 232 Z" fill="#84522C" opacity="0.4" />

                {/* Ears */}
                <ellipse cx="141" cy="182" rx="9.5" ry="16" fill="url(#adityaSkin2)" />
                <path d="M 141 174 Q 144 182 141 190" stroke="#875630" strokeWidth="1.5" fill="none" />
                <ellipse cx="259" cy="182" rx="9.5" ry="16" fill="url(#adityaSkin2)" />
                <path d="M 259 174 Q 256 182 259 190" stroke="#875630" strokeWidth="1.5" fill="none" />

                {/* Face Structure */}
                <path d="M 145 158 Q 143 218 200 236 Q 257 218 255 158 Q 250 114 200 114 Q 150 114 145 158 Z" fill="url(#adityaSkin2)" />
                <ellipse cx="170" cy="170" rx="20" ry="30" fill="url(#skinHighlight2)" />

                {/* Hair */}
                <path d="M 139 155 Q 143 112 176 101 Q 200 95 224 101 Q 257 112 261 155 Q 261 135 248 116 Q 224 105 200 105 Q 176 105 152 116 Q 141 135 139 155 Z" fill="url(#adityaHair2)" />
                <path d="M 148 127 Q 200 114 252 127 Q 255 142 258 152 Q 248 133 200 128 Q 152 133 144 152 Q 146 140 148 127 Z" fill="#120F0F" />

                {/* Eyebrows */}
                <path d="M 158 153 Q 174 148 186 153" stroke="#1F1916" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 214 153 Q 226 148 242 153" stroke="#1F1916" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Eyes */}
                <ellipse cx="173" cy="166" rx="7" ry="4.5" fill="#1F1916" />
                <circle cx="174.5" cy="165" r="1.3" fill="#FFF" />
                <ellipse cx="227" cy="166" rx="7" ry="4.5" fill="#1F1916" />
                <circle cx="228.5" cy="165" r="1.3" fill="#FFF" />

                {/* Nose */}
                <path d="M 197 166 L 195 188 Q 200 193 205 188" stroke="#945F37" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <ellipse cx="193" cy="189" rx="3.5" ry="2" fill="#945F37" opacity="0.6" />
                <ellipse cx="207" cy="189" rx="3.5" ry="2" fill="#945F37" opacity="0.6" />

                {/* Closed-Lip Smile */}
                <path d="M 183 208 Q 200 217 217 208" stroke="#874735" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M 186 208 Q 200 213 214 208" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

                {/* Batik Shirt Body with Folded Arms Pose */}
                <path d="M 95 300 Q 128 250 172 254 L 228 254 Q 272 250 305 300 L 330 435 L 70 435 Z" fill="url(#batikPattern2)" />

                {/* Collar */}
                <path d="M 172 254 L 188 295 L 200 268 L 212 295 L 228 254 Z" fill="#141C2B" stroke="#D3BD9F" strokeWidth="1.8" />
                <path d="M 200 292 L 200 425" stroke="#D3BD9F" strokeWidth="2" strokeDasharray="3,7" />

                {/* Folded Arms */}
                <path d="M 85 320 Q 105 390 190 410 Q 240 410 315 320 L 320 370 Q 240 435 180 435 Q 95 420 75 370 Z" fill="url(#batikPattern2)" stroke="#111722" strokeWidth="2" />
                <path d="M 150 385 Q 200 405 250 385" stroke="#D3BD9F" strokeWidth="2.5" fill="none" />
                <path d="M 160 395 Q 200 412 240 395" stroke="#9A7F5F" strokeWidth="1.5" fill="none" />

                <rect y="445" width="400" height="75" fill="#10141D" />
              </svg>
            </div>
          )}

          {/* Quick Photo Upload Button (Discreet in corner) to ensure Aditya can easily load WhatsApp Image 2026-09-26 */}
          <label 
            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 text-[11px] font-semibold"
            title="Pilih file foto WhatsApp Image 2026-09-26 asli Anda"
          >
            <Camera className="w-3.5 h-3.5" />
            {!hasRealPhoto && <span className="hidden sm:inline pr-1">Pasang Foto</span>}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="hidden" 
            />
          </label>

          {/* Bottom Gradient Overlay Box matching reference */}
          <div className="relative z-20 p-5 bg-gradient-to-t from-[#260E45]/95 via-[#2E1054]/85 to-transparent pt-12 text-white">
            <div className="text-[11px] uppercase tracking-widest font-bold text-purple-200/90 mb-0.5">
              {profileBadge}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              {name}
            </h3>

            <div className="text-xs text-purple-200 mt-1 font-medium">
              {college}
            </div>

            <div className="text-[11px] text-purple-300/80 mt-0.5">
              {program} · {semester}
            </div>
          </div>
        </div>

        {/* Card Bottom Strip matching reference image */}
        <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs font-semibold">
          <div className="font-bold text-[#1E0E45]">
            {program}
          </div>

          <div className="text-slate-500 font-medium">
            {semester}
          </div>
        </div>

      </div>
    </div>
  );
};
