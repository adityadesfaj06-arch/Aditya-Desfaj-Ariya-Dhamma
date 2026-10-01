import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle2 } from 'lucide-react';

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
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('aditya_portfolio_photo');
    } catch {
      return null;
    }
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('aditya_portfolio_photo', result);
        } catch {
          // ignore storage error
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative group w-full max-w-[420px] mx-auto">
      {/* Outer Card with subtle shadow & border matching reference image */}
      <div className="bg-white p-3.5 rounded-[32px] shadow-2xl shadow-purple-950/10 border border-slate-100 transition-all duration-300 hover:shadow-purple-900/15">
        
        {/* Photo Container */}
        <div className="relative rounded-[24px] overflow-hidden aspect-[3.8/5] bg-gradient-to-b from-[#8C929E] via-[#666C7A] to-[#454B57] flex flex-col justify-end select-none">
          
          {customPhoto ? (
            <img 
              src={customPhoto} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            /* High-fidelity Vector Representation of Aditya in Batik Shirt */
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end overflow-hidden">
              {/* Studio Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400" />
              
              {/* Whiteboard Frame Bar behind */}
              <div className="absolute top-[28%] left-0 right-0 h-1.5 bg-slate-400/50 shadow-inner" />
              <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-white/60" />

              {/* Portrait SVG Illustration of Aditya with Batik Cloud Motif */}
              <svg 
                viewBox="0 0 400 520" 
                className="relative z-10 w-full h-[105%] max-h-none translate-y-3 object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Skin Tone Gradient */}
                  <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C99368" />
                    <stop offset="100%" stopColor="#A8734A" />
                  </linearGradient>

                  {/* Batik Cloud Pattern Pattern */}
                  <pattern id="batikClouds" width="60" height="60" patternUnits="userSpaceOnUse">
                    {/* Dark Navy Background */}
                    <rect width="60" height="60" fill="#1B2232" />
                    {/* Golden/Tan Cloud Swirls (Megamendung style) */}
                    <path d="M 5 30 Q 15 15, 30 25 T 55 25 A 8 8 0 0 1 50 38 Q 35 45, 20 38 Z" fill="#998064" opacity="0.8" />
                    <path d="M 8 30 Q 16 18, 28 26 T 52 26" stroke="#D3BA9B" strokeWidth="1.5" fill="none" />
                    <path d="M 12 30 Q 18 22, 26 28 T 48 28" stroke="#EFE4D2" strokeWidth="1" fill="none" />
                    {/* Secondary swirl */}
                    <path d="M 30 55 Q 40 40, 55 50" stroke="#B89F82" strokeWidth="1.5" fill="none" opacity="0.7" />
                  </pattern>

                  {/* Hair Gradient */}
                  <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1C1818" />
                    <stop offset="100%" stopColor="#0B0909" />
                  </linearGradient>
                </defs>

                {/* Head / Neck */}
                <path d="M 175 220 L 175 270 Q 200 285 225 270 L 225 220 Z" fill="url(#skinGrad)" />
                {/* Neck shadow */}
                <path d="M 175 220 Q 200 240 225 220 L 225 235 Q 200 250 175 235 Z" fill="#8C5C38" opacity="0.4" />

                {/* Ears */}
                <ellipse cx="140" cy="180" rx="9" ry="16" fill="url(#skinGrad)" />
                <ellipse cx="260" cy="180" rx="9" ry="16" fill="url(#skinGrad)" />

                {/* Face Shape */}
                <path d="M 144 160 Q 142 220 200 236 Q 258 220 256 160 Q 250 115 200 115 Q 150 115 144 160 Z" fill="url(#skinGrad)" />

                {/* Hair (Short neat style matching photo) */}
                <path d="M 138 155 Q 142 112 175 102 Q 200 96 225 102 Q 258 112 262 155 Q 262 135 248 116 Q 225 106 200 106 Q 175 106 152 116 Q 140 135 138 155 Z" fill="url(#hairGrad)" />
                <path d="M 148 128 Q 200 115 252 128 Q 256 145 258 155 Q 248 135 200 130 Q 152 135 144 155 Q 146 142 148 128 Z" fill="#111" />

                {/* Eyebrows */}
                <path d="M 160 152 Q 175 148 186 153" stroke="#221B17" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 214 153 Q 225 148 240 152" stroke="#221B17" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Eyes */}
                <ellipse cx="173" cy="165" rx="7" ry="4.5" fill="#221B17" />
                <circle cx="174.5" cy="164" r="1.2" fill="#FFF" />
                <ellipse cx="227" cy="165" rx="7" ry="4.5" fill="#221B17" />
                <circle cx="228.5" cy="164" r="1.2" fill="#FFF" />

                {/* Nose */}
                <path d="M 197 165 L 195 188 Q 200 193 205 188" stroke="#9E6840" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <ellipse cx="193" cy="189" rx="3.5" ry="2" fill="#9E6840" opacity="0.6" />
                <ellipse cx="207" cy="189" rx="3.5" ry="2" fill="#9E6840" opacity="0.6" />

                {/* Smile / Mouth */}
                <path d="M 183 207 Q 200 216 217 207" stroke="#874735" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M 187 207 Q 200 212 213 207" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

                {/* Batik Shirt Body with Folded Arms */}
                {/* Shoulders & Torso */}
                <path d="M 100 300 Q 130 250 175 255 L 225 255 Q 270 250 300 300 L 325 430 L 75 430 Z" fill="url(#batikClouds)" />

                {/* Collar */}
                <path d="M 175 255 L 190 295 L 200 270 L 210 295 L 225 255 Z" fill="#182030" stroke="#CBB494" strokeWidth="1.5" />
                <path d="M 198 290 L 198 420" stroke="#CBB494" strokeWidth="2" strokeDasharray="3,6" />

                {/* Folded Arms in Front (matching pose in photo) */}
                <path d="M 90 320 Q 110 390 190 410 Q 240 410 310 320 L 315 370 Q 240 435 180 435 Q 100 420 80 370 Z" fill="url(#batikClouds)" stroke="#111827" strokeWidth="2" />

                {/* Wrists / Forearm crossing */}
                <path d="M 155 385 Q 200 405 245 385" stroke="#CBB494" strokeWidth="2" fill="none" />
                
                {/* Lower body shadow */}
                <rect y="440" width="400" height="80" fill="#131924" />
              </svg>
            </div>
          )}

          {/* Photo Custom Upload Button in Corner */}
          <label 
            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white cursor-pointer backdrop-blur-md transition-all shadow-md"
            title="Gunakan foto asli Anda"
          >
            <Camera className="w-4 h-4" />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
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
