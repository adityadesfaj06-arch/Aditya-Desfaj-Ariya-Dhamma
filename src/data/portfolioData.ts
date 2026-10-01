export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  primaryCategory: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  highlights?: string[];
  tools: string[];
  link?: string;
  accentColor: string;
  badge: string;
  tagline: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: 'Design' | 'Product' | 'AI' | 'Development';
  level: string;
}

export const PERSONAL_INFO = {
  name: 'Aditya Desfaj Ariya Dhamma',
  role: 'Digital Product Creator & AI Strategist',
  tagline: 'Bridging Business Strategy, Human-Centered Design, and Artificial Intelligence',
  college: 'Politeknik Internasional Bali',
  program: 'D4 Bisnis Digital',
  semester: 'Semester 3',
  highSchool: 'SMA Cinta Kasih Tzu Chi',
  curriculum: 'Kurikulum Merdeka',
  major: 'Jurusan IPS',
  bio: 'Saya adalah mahasiswa Politeknik Internasional Bali program D4 Bisnis Digital (Semester 3) yang memiliki ketertarikan mendalam dalam pengembangan digital product, business strategy, dan teknologi berbasis Artificial Intelligence. Saya berfokus menciptakan solusi digital yang tidak hanya memiliki tampilan menarik, tetapi juga memberikan dampak nyata bagi pengguna.',
  bioExtended: 'Dengan fondasi pembelajaran Kurikulum Merdeka (Jurusan IPS di SMA Cinta Kasih Tzu Chi) yang berakar pada empati sosial dan problem solving kritis, saya terus mengasah pengalaman dalam merancang konsep produk, melakukan analisis masalah, menyusun strategi bisnis, membuat prototype digital, serta mengembangkan solusi berbasis teknologi untuk menjawab kebutuhan masyarakat.',
  location: 'Indonesia',
  status: 'Open for Digital Product & AI Collaborations',
  email: 'adityadesfaj06@gmail.com',
  instagram: 'https://instagram.com/adityadesfaj06',
  instagramHandle: 'adityadesfaj06',
  linkedin: 'https://www.linkedin.com/in/aditya-desfaj-ariya-dhamma-042797387',
  linkedinName: 'Aditya Desfaj Ariya Dhamma'
};

export const WORK_PHILOSOPHY = {
  quote: 'Saya percaya bahwa teknologi terbaik bukan hanya tentang kecanggihan fitur, tetapi tentang bagaimana teknologi mampu menyelesaikan masalah nyata manusia.',
  principles: [
    {
      number: '01',
      title: 'Think Problem First',
      description: 'Setiap solusi dimulai dari memahami masalah pengguna secara mendalam sebelum membuat produk. Membedah akar persoalan menjadi fondasi kuat solusi berkelanjutan.'
    },
    {
      number: '02',
      title: 'Build With Purpose',
      description: 'Setiap desain dan teknologi harus memiliki tujuan yang jelas serta memberikan nilai bagi pengguna. Tidak ada fitur yang dibangun tanpa dampak terukur.'
    },
    {
      number: '03',
      title: 'Continuous Improvement',
      description: 'Saya percaya sebuah produk digital harus terus berkembang melalui evaluasi, feedback, dan inovasi berkelanjutan demi mencapai relevansi jangka panjang.'
    }
  ]
};

export const CATEGORIES = [
  'Semua Proyek',
  'Business & Strategy',
  'Web & Digital Product',
  'Creative & Visual',
  'Marketing & Content'
] as const;

export const PROJECTS: ProjectItem[] = [
  {
    id: 'hospi-ai',
    title: 'HOSPI AI',
    subtitle: 'Hospi Resort Bali & AI Guest Experience Suite',
    tagline: 'Otomatisasi Layanan Tamu & Alur Terpadu Berbasis AI',
    badge: 'Hospitality & Healthcare',
    category: ['Business & Strategy', 'Web & Digital Product'],
    primaryCategory: 'Business & Strategy',
    description: 'HOSPI AI merupakan solusi digital interaktif untuk layanan Hospi Resort Bali yang menyederhanakan alur permintaan tamu (kamar, makanan, bantuan darurat) melalui antarmuka cerdas, dukungan multi-bahasa, dan pengiriman otomatis ke tim terkait.',
    problem: 'Proses pelayanan manual yang memerlukan waktu tunggu serta hambatan komunikasi bahasa antar tamu resort dan staf operasional.',
    solution: 'Portal tamu digital intuitif dengan fitur pemilihan ukuran teks ramah pengguna, pengiriman permintaan instan, dan penanganan darurat sekali sentuh.',
    highlights: [
      'Interactive Guest Care System',
      'Multi-language Support & Voice',
      'One-Touch Emergency Protocol',
      'Operational Task Dispatching'
    ],
    features: [
      'Pemesanan layanan kamar dan makanan terintegrasi',
      'Fitur penyesuaian ukuran teks (Accessibility A/A/A)',
      'Dukungan multi-bahasa (Bahasa Indonesia & Inggris)',
      'Otomatisasi dispatch ke tim internal resort'
    ],
    tools: ['Figma', 'React', 'ChatGPT', 'Business Model Canvas'],
    link: 'https://hospi-ai.vercel.app/guest',
    accentColor: 'from-violet-500 to-indigo-600'
  },
  {
    id: 'tim-sehat-kendalitensi',
    title: 'Tim Sehat - KendaliTensi Lawan Hipertensi',
    subtitle: 'Dari Angka Tensi Menjadi Tindakan · Program Pemantauan 90 Hari',
    tagline: 'Kendali Hipertensi dengan Pengukuran Valid & AI Patient Prioritization',
    badge: 'Healthcare Innovation',
    category: ['Business & Strategy', 'Web & Digital Product'],
    primaryCategory: 'Business & Strategy',
    description: 'KendaliTensi adalah platform pemantauan hipertensi terintegrasi yang menghubungkan pengukuran tekanan darah di rumah (HBPM valid), peninjauan berkala oleh tenaga kesehatan, dan tindak lanjut terstruktur selama 90 hari.',
    problem: 'Rendahnya tingkat pengendalian hipertensi akibat pengukuran mandiri yang tidak valid, ketiadaan pemantauan teratur, dan minimnya tindak lanjut pasien.',
    solution: 'KendaliTensi mengubah hasil pengukuran tensi menjadi rencana aksi harian yang jelas, didukung penentuan prioritas risiko dan evaluasi klinis berkala.',
    features: [
      'Panduan pengukuran HBPM valid (pagi & malam)',
      'Pemantauan terstruktur protokol 90 hari (contoh: Hari ke-24)',
      'Riwayat dan grafik tensi interaktif (128 / 82 mmHg)',
      'Peninjauan hasil langsung bersama tenaga kesehatan',
      'Rencana aksi harian pasien dan pengingat kontrol'
    ],
    highlights: [
      '90-Day Patient Follow-up Protocol',
      'HBPM Standardized Guidance',
      'AI Risk-Stratification Model',
      'End-to-end Healthcare Provider Ecosystem'
    ],
    tools: ['Figma', 'AI', 'Business Model Canvas', 'Product Strategy'],
    link: 'https://kendali-tensi.vercel.app/',
    accentColor: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'kawan-lokal',
    title: 'KAWAN LOKAL',
    subtitle: 'Official Store Jajanan Viral & Bubuk Minuman Cafe',
    tagline: 'Platform E-Commerce Produk Kuliner & Minuman Kekinian',
    badge: 'E-Commerce & Digital Product',
    category: ['Web & Digital Product', 'Marketing & Content', 'Business & Strategy'],
    primaryCategory: 'Web & Digital Product',
    link: 'https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10',
    description: 'Kawan Lokal adalah platform digital e-commerce dan marketplace produk kuliner terkurasi yang menghadirkan aneka jajanan viral (Latiao Mala, Cuanki Bandung, Cimol Bojot, Basreng Pedas) serta bubuk minuman cafe premium (Matcha Uji, Taro, Red Velvet, Es Teh Solo) siap seduh.',
    problem: 'Sulitnya pecinta kuliner mendapatkan jajanan viral otentik berkualitas higienis dan bubuk minuman cafe premium dengan takaran yang pas dalam satu platform terpercaya.',
    solution: 'Etalase digital terintegrasi dengan rating ulasan jujur pelanggan (Garansi Enak 9.5/10), segmentasi produk jelas, dan kemudahan belanja online langsung dari rumah.',
    highlights: [
      'Official Store UMKM Kuliner Modern',
      'Curated Viral Snacks & Cafe Powder',
      'Authentic Taste Guarantee 9.5/10',
      'Seamless Shopping Experience'
    ],
    features: [
      'Katalog Jajanan Gurih & Pedas Nampol',
      'Koleksi Bubuk Minuman Siap Seduh (20-50 Cup)',
      'Fitur Ulasan Jujur Pelanggan & Rating Produk',
      'Navigasi kategori dinamis: Discover, Artikel, Reviews, Trending'
    ],
    tools: ['Figma', 'Google AI Studio', 'E-Commerce Strategy', 'React'],
    accentColor: 'from-amber-600 to-orange-700'
  },
  {
    id: 'linguapulse',
    title: 'LinguaPulse',
    subtitle: 'AI Voice & Smart Polyglot Translation Platform',
    tagline: 'Translate & Learn Fast · Trilingual Voice AI',
    badge: 'AI Application & EdTech',
    category: ['Web & Digital Product', 'Creative & Visual'],
    primaryCategory: 'Web & Digital Product',
    link: 'https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5',
    description: 'LinguaPulse adalah aplikasi penerjemah pintar dan akselerator belajar bahasa interaktif berbasis AI. Dilengkapi pengenalan suara dual-arah, materi trilingual (Mandarin, Indonesia, Inggris), sistem Daily Streak, dan pelacak target belajar harian.',
    problem: 'Hambatan komunikasi lintas bahasa dan proses belajar bahasa asing konvensional yang kaku dan minim latihan percakapan dua arah secara langsung.',
    solution: 'Platform polyglot interaktif dengan antarmuka modern bernuansa biru pastel & langit, feedback pengucapan instan, serta gamifikasi level penguasaan kata.',
    highlights: [
      'Trilingual Dual-Way Voice Translation',
      'Gamified Daily Streak & XP Tracking',
      'Smart Flashcard Fluency Engine',
      'Clean Pastel & Sky UI Design'
    ],
    features: [
      'Pengenalan suara instan dual-arah (AI Voice Polyglot)',
      'Kartu belajar interaktif ribuan kosakata trilingual',
      'Pelacak Daily Streak (7 Hari konsistensi) & XP Leveling',
      'Target harian belajar terukur (Target: 15 menit/hari)'
    ],
    tools: ['Google AI Studio', 'Gemini AI Voice', 'TypeScript', 'Web Speech API'],
    accentColor: 'from-sky-500 to-blue-700'
  },
  {
    id: 'gitar-akustik-pro',
    title: 'GitarAkustik Pro - Studio Gitar & Chord Virtual',
    subtitle: 'Virtual Guitar, Fretboard Akurat & Chord Studio Interaktif',
    tagline: 'Virtual Guitar • Fretboard Akurat • Perekam WAV • Tuner Real-Time',
    badge: 'Web Audio & Interactive Music',
    category: ['Creative & Visual', 'Web & Digital Product'],
    primaryCategory: 'Creative & Visual',
    link: 'https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f',
    description: 'GitarAkustik Pro merupakan studio gitar virtual dan pembelajaran akor berbasis web interaktif. Menampilkan visual leher gitar (fretboard) 13 fret akurat, diagram penempatan nomor jari, audio senar nyata, tuner real-time, dan perekam latihan format WAV HQ.',
    problem: 'Ketiadaan instrumen fisik atau tuner akurat saat ingin belajar akor gitar, melatih posisi jari, atau merekam ide petikan lagu secara spontan.',
    solution: 'Aplikasi web audio komprehensif yang mensimulasikan fretboard akustik presisi lengkap dengan status senar terpetik/mute, pemilih kunci instan (C, D, Dm, E, Em, dll), dan sinkronisasi awan.',
    highlights: [
      '13-Fret Interactive Fretboard Visualizer',
      'Accurate Chord Finger Number Placement',
      'Real-Time Audio Tuner & Waveform',
      'WAV HQ Audio Recording Engine'
    ],
    features: [
      'Visualisasi leher gitar (13 fret akurat) dengan nomor jari',
      'Status senar interaktif: Posisi Jari, Senar Terpetik & Senar Mati',
      'Pemilih kunci instan (C Mayor, D, Dm, E, Em, F, G, A, Am, Bm)',
      'Perekam latihan (WAV HQ), Tuner audio, dan Pustaka Akor kustom'
    ],
    tools: ['Web Audio API', 'Google AI Studio', 'Figma', 'TypeScript'],
    accentColor: 'from-amber-500 to-orange-600'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Digital Product Development',
    iconName: 'Boxes',
    skills: ['Product Research', 'User Journey Mapping', 'Product Strategy', 'Business Model Canvas']
  },
  {
    title: 'Design & Prototype',
    iconName: 'LayoutTemplate',
    skills: ['UI/UX Design', 'Wireframing', 'Prototype Development', 'Visual Design']
  },
  {
    title: 'Technology & AI',
    iconName: 'Sparkles',
    skills: ['Artificial Intelligence', 'AI Product Development', 'Prompt Engineering', 'Digital Solution Development']
  },
  {
    title: 'Business & Strategy',
    iconName: 'TrendingUp',
    skills: ['Market Research', 'Problem Identification', 'Business Analysis', 'Strategic Planning']
  }
];

export const TOOLS: ToolItem[] = [
  { name: 'Figma', category: 'Design', level: 'Interface & Prototyping' },
  { name: 'Canva', category: 'Design', level: 'Visual & Marketing Assets' },
  { name: 'Notion', category: 'Product', level: 'Documentation & Planning' },
  { name: 'Miro', category: 'Product', level: 'Brainstorming & User Flow' },
  { name: 'ChatGPT', category: 'AI', level: 'Ideation & Prompt Design' },
  { name: 'Google Gemini', category: 'AI', level: 'Multimodal & Reasoning' },
  { name: 'HTML', category: 'Development', level: 'Semantic Web Structure' },
  { name: 'CSS', category: 'Development', level: 'Modern Styling & Layout' },
  { name: 'JavaScript', category: 'Development', level: 'Frontend Logic & Web Apps' }
];

export const ACADEMIC_EXPERIENCE = [
  {
    title: 'HOSPI AI',
    tag: 'Healthcare AI Platform',
    period: 'Digital Innovation',
    description: 'Business proposal dan pengembangan konsep healthcare AI platform yang mengintegrasikan otomatisasi alur kerja rumah sakit dan efisiensi layanan medis.'
  },
  {
    title: 'Tim Sehat',
    tag: 'KendaliTensi Inovasi',
    period: 'Healthcare Solution',
    description: 'Pengembangan solusi digital kesehatan untuk membantu pengendalian hipertensi melalui AI, edukasi HBPM valid, dan pemantauan pasien 90 hari.'
  },
  {
    title: 'AI Studio Projects',
    tag: 'Google AI Studio',
    period: 'Generative AI Apps',
    description: 'Eksplorasi pengembangan aplikasi interaktif berbasis Artificial Intelligence dan prompt engineering menggunakan ekosistem Google AI Studio.'
  }
];

export const EDUCATION_LIST = [
  {
    institution: 'Politeknik Internasional Bali',
    degree: 'D4 Bisnis Digital',
    period: 'Semester 3 (Aktif)',
    type: 'Pendidikan Tinggi',
    highlights: [
      'Penerapan strategi bisnis digital, market research, dan product growth',
      'Pengembangan konsep dan alur antarmuka aplikasi digital berbasis pengguna',
      'Eksplorasi integrasi Artificial Intelligence dalam efisiensi bisnis dan healthcare'
    ]
  },
  {
    institution: 'SMA Cinta Kasih Tzu Chi',
    degree: 'Kurikulum Merdeka · Jurusan IPS',
    period: 'Pendidikan Menengah Atas',
    type: 'Sekolah Menengah Atas',
    highlights: [
      'Fondasi analitis ilmu sosial, ekonomi bisnis, dan pemecahan masalah (Problem-First)',
      'Pengembangan proyek digital dan inovasi sosial dengan pendekatan empati humanis'
    ]
  }
];

export const EDUCATION = {
  school: 'Politeknik Internasional Bali',
  curriculum: 'D4 Bisnis Digital',
  major: 'Semester 3',
  period: 'Pendidikan Tinggi',
  highlights: [
    'Fokus pada eksplorasi ide produk, strategi bisnis berbasis teknologi, dan digital product development',
    'Aktif mengembangkan proyek teknologi dan produk digital berdampak nyata',
    'Didukung fondasi Kurikulum Merdeka (Jurusan IPS, SMA Cinta Kasih Tzu Chi)'
  ]
};
