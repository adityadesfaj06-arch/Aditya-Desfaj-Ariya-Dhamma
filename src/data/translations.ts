export type Language = 'ID' | 'EN';

export interface TranslatedProject {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  category: string[];
  primaryCategory: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  features: string[];
  tools: string[];
  link?: string;
  accentColor: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    tools: string;
    philosophy: string;
    experience: string;
    contact: string;
    contactMe: string;
  };
  hero: {
    meta: string;
    roleTags: string[];
    description: string;
    viewPortfolio: string;
    aboutMe: string;
    kicker: string;
    profileBadge: string;
    college: string;
    program: string;
    semester: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    bio: string;
    bioExtended: string;
    mindsetTitle: string;
    mindsetDesc: string;
    point1: string;
    point2: string;
    point3: string;
    stat1Title: string;
    stat1Value: string;
    stat1Sub: string;
    stat2Title: string;
    stat2Value: string;
    stat2Sub: string;
    stat3Title: string;
    stat3Value: string;
    stat3Sub: string;
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    categories: {
      all: string;
      business: string;
      web: string;
      creative: string;
      marketing: string;
    };
    empty: string;
    liveWeb: string;
    evidenceDetail: string;
    viewProject: string;
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    categories: {
      title: string;
      iconName: string;
      skills: string[];
    }[];
  };
  tools: {
    badge: string;
    title: string;
    description: string;
    all: string;
  };
  philosophy: {
    badge: string;
    title: string;
    quote: string;
    principles: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  experience: {
    trackRecordBadge: string;
    trackRecordTitle: string;
    trackRecordDesc: string;
    academicList: {
      title: string;
      tag: string;
      description: string;
    }[];
    eduBadge: string;
    eduTitle: string;
    eduDesc: string;
    higherEduBadge: string;
    higherEduPeriod: string;
    higherEduName: string;
    higherEduProgram: string;
    higherEduHighlights: string[];
    highSchoolBadge: string;
    highSchoolCurriculum: string;
    highSchoolName: string;
    highSchoolDesc: string;
  };
  footer: {
    collabBadge: string;
    title: string;
    description: string;
    friendlyNoteTitle: string;
    friendlyNoteDesc: string;
    yourName: string;
    yourNamePlaceholder: string;
    yourMessage: string;
    yourMessagePlaceholder: string;
    sendMessage: string;
    messageSent: string;
    emailTitle: string;
    emailDesc: string;
    openEmail: string;
    copied: string;
    copy: string;
    linkedinTitle: string;
    linkedinDesc: string;
    viewLinkedin: string;
    instagramTitle: string;
    instagramDesc: string;
    openInstagram: string;
    backToTop: string;
  };
  modal: {
    categorySuffix: string;
    evidenceTitle: string;
    evidenceBadge: string;
    evidenceSubtitle: (title: string) => string;
    deploymentTitle: string;
    deploymentDesc: (isVercel: boolean) => string;
    onlineBadge: string;
    linksTitle: string;
    linksDesc: (isVercel: boolean) => string;
    liveWebsite: string;
    docToggle: string;
    note: string;
    close: string;
    keyFeatures: string;
    challenges: string;
    solutionTitle: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ID: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      skills: 'Keahlian',
      tools: 'Tools',
      philosophy: 'Filosofi',
      experience: 'Pengalaman',
      contact: 'Kontak',
      contactMe: 'Hubungi Saya',
    },
    hero: {
      meta: 'MAHASISWA POLITEKNIK INTERNASIONAL BALI · D4 BISNIS DIGITAL · SEMESTER 3',
      roleTags: ['Digital Business', 'Product Development', 'Business Innovation'],
      description: 'Fokus pada eksplorasi ide produk, strategi bisnis berbasis teknologi, dan perancangan solusi yang berpusat pada pengguna.',
      viewPortfolio: 'Lihat Portofolio',
      aboutMe: 'Tentang Saya',
      kicker: 'Mahasiswa Politeknik Internasional Bali / D4 Bisnis Digital / Semester 3',
      profileBadge: 'PROFIL MAHASISWA',
      college: 'Politeknik Internasional Bali',
      program: 'D4 Bisnis Digital',
      semester: 'Semester 3',
    },
    about: {
      badge: 'Tentang Profil',
      title: 'Tentang Saya',
      subtitle: 'Mendefinisikan Solusi dari Akar Masalah',
      bio: 'Saya adalah mahasiswa Politeknik Internasional Bali program D4 Bisnis Digital (Semester 3) yang memiliki ketertarikan mendalam dalam pengembangan digital product, business strategy, dan teknologi berbasis Artificial Intelligence. Saya berfokus menciptakan solusi digital yang tidak hanya memiliki tampilan menarik, tetapi juga memberikan dampak nyata bagi pengguna.',
      bioExtended: 'Dengan fondasi pembelajaran Kurikulum Merdeka (Jurusan IPS di SMA Cinta Kasih Tzu Chi) yang berakar pada empati sosial dan problem solving kritis, saya terus mengasah pengalaman dalam merancang konsep produk, melakukan analisis masalah, menyusun strategi bisnis, membuat prototype digital, serta mengembangkan solusi berbasis teknologi untuk menjawab kebutuhan masyarakat.',
      mindsetTitle: 'Mendefinisikan Solusi dari Akar Masalah',
      mindsetDesc: 'Menjembatani pemahaman mendalam tentang kebutuhan manusia dan dinamika pasar dengan kemampuan teknis AI terkini.',
      point1: 'Problem Solver & Creative Thinker',
      point2: 'Future-Oriented AI Integrator',
      point3: 'User-Centered Digital Prototyping',
      stat1Title: 'Pendidikan Saat Ini',
      stat1Value: 'Politeknik Internasional Bali',
      stat1Sub: 'D4 Bisnis Digital · Semester 3',
      stat2Title: 'Fondasi Kurikulum',
      stat2Value: 'Kurikulum Merdeka',
      stat2Sub: 'Jurusan IPS · SMA Tzu Chi',
      stat3Title: 'Orientasi Karya',
      stat3Value: 'Problem-First & AI',
      stat3Sub: 'Nilai Nyata Pengguna',
    },
    projects: {
      badge: 'Curated Works & Real Web Applications',
      title: 'Proyek & Pengalaman Relevan',
      description: 'Visualisasi antarmuka nyata dari platform digital kesehatan, inovasi produk, hingga aplikasi AI generatif di Google AI Studio.',
      categories: {
        all: 'Semua Proyek',
        business: 'Business & Strategy',
        web: 'Web & Digital Product',
        creative: 'Creative & Visual',
        marketing: 'Marketing & Content',
      },
      empty: 'Tidak ada proyek dalam kategori ini.',
      liveWeb: 'Live Web',
      evidenceDetail: 'Evidence & Detail',
      viewProject: 'View Project',
    },
    skills: {
      badge: 'Core Competencies',
      title: 'Keahlian & Kapabilitas',
      description: 'Perpaduan keahlian strategis, pemikiran berpusat pada pengguna, serta kapabilitas teknologi AI modern.',
      categories: [
        {
          title: 'Digital Product Development',
          iconName: 'Boxes',
          skills: ['Product Research', 'User Journey Mapping', 'Product Strategy', 'Business Model Canvas'],
        },
        {
          title: 'Design & Prototype',
          iconName: 'LayoutTemplate',
          skills: ['UI/UX Design', 'Wireframing', 'Prototype Development', 'Visual Design'],
        },
        {
          title: 'Technology & AI',
          iconName: 'Sparkles',
          skills: ['Artificial Intelligence', 'AI Product Development', 'Prompt Engineering', 'Digital Solution Development'],
        },
        {
          title: 'Business & Strategy',
          iconName: 'TrendingUp',
          skills: ['Market Research', 'Problem Identification', 'Business Analysis', 'Strategic Planning'],
        },
      ],
    },
    tools: {
      badge: 'Technology Stack & Workflow',
      title: 'Tools yang Digunakan',
      description: 'Perangkat lunak dan teknologi yang saya gunakan sehari-hari untuk merancang produk digital, menyusun strategi, dan mengeksplorasi automasi AI.',
      all: 'Semua',
    },
    philosophy: {
      badge: 'Filosofi & Landasan Berpikir',
      title: 'Filosofi Kerja',
      quote: 'Saya percaya bahwa teknologi terbaik bukan hanya tentang kecanggihan fitur, tetapi tentang bagaimana teknologi mampu menyelesaikan masalah nyata manusia.',
      principles: [
        {
          number: '01',
          title: 'Think Problem First',
          description: 'Setiap solusi dimulai dari memahami masalah pengguna secara mendalam sebelum membuat produk. Membedah akar persoalan menjadi fondasi kuat solusi berkelanjutan.',
        },
        {
          number: '02',
          title: 'Build With Purpose',
          description: 'Setiap desain dan teknologi harus memiliki tujuan yang jelas serta memberikan nilai bagi pengguna. Tidak ada fitur yang dibangun tanpa dampak terukur.',
        },
        {
          number: '03',
          title: 'Continuous Improvement',
          description: 'Saya percaya sebuah produk digital harus terus berkembang melalui evaluasi, feedback, dan inovasi berkelanjutan demi mencapai relevansi jangka panjang.',
        },
      ],
    },
    experience: {
      trackRecordBadge: 'Track Record',
      trackRecordTitle: 'Pengalaman Akademik & Proyek Digital',
      trackRecordDesc: 'Memiliki pengalaman dalam mengembangkan berbagai proyek digital yang menggabungkan teknologi, strategi bisnis, dan pendekatan berbasis pengguna.',
      academicList: [
        {
          title: 'HOSPI AI',
          tag: 'Hospitality & Healthcare',
          description: 'Business proposal dan pengembangan konsep healthcare & hospitality platform yang mengintegrasikan otomatisasi alur kerja dan penanganan darurat.',
        },
        {
          title: 'Tim Sehat',
          tag: 'KendaliTensi Inovasi',
          description: 'Pengembangan solusi digital kesehatan untuk membantu pengendalian hipertensi melalui AI, edukasi HBPM valid, dan pemantauan pasien 90 hari.',
        },
        {
          title: 'AI Studio Projects',
          tag: 'Google AI Studio',
          description: 'Eksplorasi pengembangan aplikasi interaktif berbasis Artificial Intelligence dan prompt engineering menggunakan ekosistem Google AI Studio.',
        },
      ],
      eduBadge: 'Latar Belakang',
      eduTitle: 'Pendidikan',
      eduDesc: 'Fondasi akademis yang membentuk cara berpikir analitis, empati sosial, dan eksplorasi teknologi terapan.',
      higherEduBadge: 'Pendidikan Tinggi · Aktif',
      higherEduPeriod: 'Semester 3',
      higherEduName: 'Politeknik Internasional Bali',
      higherEduProgram: 'D4 Bisnis Digital',
      higherEduHighlights: [
        'Eksplorasi strategi bisnis digital, product development, dan analisis pasar',
        'Pengembangan solusi teknologi terapan dan inovasi Artificial Intelligence',
      ],
      highSchoolBadge: 'Sekolah Menengah Atas',
      highSchoolCurriculum: 'Kurikulum Merdeka',
      highSchoolName: 'SMA Cinta Kasih Tzu Chi',
      highSchoolDesc: 'Fondasi kuat pemikiran analitis ilmu sosial humaniora, empati terhadap kebutuhan manusia, dan prinsip pembelajaran berbasis proyek nyata.',
    },
    footer: {
      collabBadge: "Let's Collaborate",
      title: 'Connect With Me',
      description: 'Tertarik mendiskusikan peluang kolaborasi produk digital, healthcare innovation, atau eksplorasi Artificial Intelligence? Jangan ragu untuk terhubung!',
      friendlyNoteTitle: 'Send a Friendly Note',
      friendlyNoteDesc: 'Tinggalkan salam hangat, masukan, atau ajakan diskusi seputar proyek digital & inovasi.',
      yourName: 'Nama Anda',
      yourNamePlaceholder: 'Nama Anda atau Institusi',
      yourMessage: 'Pesan atau topik diskusi Anda...',
      yourMessagePlaceholder: 'Halo Aditya, saya tertarik dengan proyek digital Anda...',
      sendMessage: 'Send Message',
      messageSent: 'Pesan Anda berhasil dikirim! Terima kasih.',
      emailTitle: 'Email',
      emailDesc: 'Kirim pesan langsung ke inbox saya.',
      openEmail: 'Buka Email',
      copied: 'Tersalin',
      copy: 'Salin',
      linkedinTitle: 'LinkedIn',
      linkedinDesc: 'Jaringan profesional dan pembaruan proyek.',
      viewLinkedin: 'Lihat Profil LinkedIn',
      instagramTitle: 'Instagram',
      instagramDesc: 'Aktivitas kreatif dan eksplorasi ide.',
      openInstagram: 'Buka Instagram',
      backToTop: 'Kembali ke Atas',
    },
    modal: {
      categorySuffix: 'Digital Product',
      evidenceTitle: 'EVIDENCE & DOCUMENTATION',
      evidenceBadge: 'Website Live & Terdokumentasi',
      evidenceSubtitle: (title: string) => `Tangkapan layar antarmuka asli dari website ${title} yang sedang online.`,
      deploymentTitle: 'Live Platform Deployment',
      deploymentDesc: (isVercel: boolean) => `Akses langsung antarmuka web interaktif di domain ${isVercel ? 'Vercel' : 'Google AI Studio'}.`,
      onlineBadge: 'Aktif Online',
      linksTitle: 'Tautan & Referensi',
      linksDesc: (isVercel: boolean) => `Website aktif dan dapat diakses langsung via ${isVercel ? 'Vercel' : 'Google AI Studio'}`,
      liveWebsite: 'Live Website',
      docToggle: 'Dokumentasi Solusi & Fitur',
      note: 'Catatan: Tangkapan layar dan dokumen pendukung asli akan diperbarui bertahap sesuai perkembangan perkuliahan dan inovasi produk.',
      close: 'Tutup',
      keyFeatures: 'Fitur Utama',
      challenges: 'Tantangan & Masalah',
      solutionTitle: 'Solusi yang Dirancang',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      tools: 'Tools',
      philosophy: 'Philosophy',
      experience: 'Experience',
      contact: 'Contact',
      contactMe: 'Contact Me',
    },
    hero: {
      meta: 'BALI INTERNATIONAL POLYTECHNIC STUDENT · D4 DIGITAL BUSINESS · 3RD SEMESTER',
      roleTags: ['Digital Business', 'Product Development', 'Business Innovation'],
      description: 'Focusing on product ideation, technology-driven business strategy, and human-centered digital solutions.',
      viewPortfolio: 'View Portfolio',
      aboutMe: 'About Me',
      kicker: 'Bali International Polytechnic Student / D4 Digital Business / 3rd Semester',
      profileBadge: 'STUDENT PROFILE',
      college: 'Bali International Polytechnic',
      program: 'D4 Digital Business',
      semester: '3rd Semester',
    },
    about: {
      badge: 'Profile Overview',
      title: 'About Me',
      subtitle: 'Defining Solutions From The Problem Core',
      bio: 'I am a 3rd-semester D4 Digital Business student at Bali International Polytechnic with a profound passion for digital product creation, business strategy, and Artificial Intelligence technologies. I am committed to engineering digital experiences that marry aesthetic excellence with tangible real-world impact.',
      bioExtended: 'Rooted in the analytical foundation of the Merdeka Curriculum (Social Science track at Tzu Chi High School) emphasizing human empathy and critical inquiry, I continuously refine my skills in product concept design, root-cause analysis, business model strategy, digital prototyping, and technology deployment.',
      mindsetTitle: 'Defining Solutions From The Problem Core',
      mindsetDesc: 'Bridging deep human behavioral insights and market dynamics with cutting-edge Artificial Intelligence capabilities.',
      point1: 'Problem Solver & Creative Thinker',
      point2: 'Future-Oriented AI Integrator',
      point3: 'User-Centered Digital Prototyping',
      stat1Title: 'Current Education',
      stat1Value: 'Bali International Polytechnic',
      stat1Sub: 'D4 Digital Business · 3rd Semester',
      stat2Title: 'Foundational Curriculum',
      stat2Value: 'Merdeka Curriculum',
      stat2Sub: 'Social Science · Tzu Chi School',
      stat3Title: 'Product Orientation',
      stat3Value: 'Problem-First & AI',
      stat3Sub: 'Measurable Human Impact',
    },
    projects: {
      badge: 'Curated Works & Real Web Applications',
      title: 'Featured Projects & Live Works',
      description: 'Live interface previews spanning digital health innovations, consumer products, and generative AI apps on Google AI Studio.',
      categories: {
        all: 'All Projects',
        business: 'Business & Strategy',
        web: 'Web & Digital Product',
        creative: 'Creative & Visual',
        marketing: 'Marketing & Content',
      },
      empty: 'No projects found in this category.',
      liveWeb: 'Live Web',
      evidenceDetail: 'Evidence & Details',
      viewProject: 'View Project',
    },
    skills: {
      badge: 'Core Competencies',
      title: 'Skills & Capabilities',
      description: 'A blend of business strategic thinking, user-centered prototyping, and modern Artificial Intelligence capabilities.',
      categories: [
        {
          title: 'Digital Product Development',
          iconName: 'Boxes',
          skills: ['Product Research', 'User Journey Mapping', 'Product Strategy', 'Business Model Canvas'],
        },
        {
          title: 'Design & Prototype',
          iconName: 'LayoutTemplate',
          skills: ['UI/UX Design', 'Wireframing', 'Prototype Development', 'Visual Design'],
        },
        {
          title: 'Technology & AI',
          iconName: 'Sparkles',
          skills: ['Artificial Intelligence', 'AI Product Development', 'Prompt Engineering', 'Digital Solution Development'],
        },
        {
          title: 'Business & Strategy',
          iconName: 'TrendingUp',
          skills: ['Market Research', 'Problem Identification', 'Business Analysis', 'Strategic Planning'],
        },
      ],
    },
    tools: {
      badge: 'Technology Stack & Workflow',
      title: 'Tools & Technologies',
      description: 'Software suites and digital platforms I use daily to design products, orchestrate business models, and build AI automation workflows.',
      all: 'All',
    },
    philosophy: {
      badge: 'Core Principles',
      title: 'Work Philosophy',
      quote: 'I believe the greatest technology is not merely about feature complexity, but how gracefully it solves real human problems.',
      principles: [
        {
          number: '01',
          title: 'Think Problem First',
          description: 'Every enduring solution starts with a deep, empathetic understanding of user pain points before writing code or drawing wireframes.',
        },
        {
          number: '02',
          title: 'Build With Purpose',
          description: 'Every design choice and technical architecture must serve a clear objective and provide measurable value to its end users.',
        },
        {
          number: '03',
          title: 'Continuous Improvement',
          description: 'Great digital products evolve organically through rigorous evaluation, active user feedback, and relentless iteration.',
        },
      ],
    },
    experience: {
      trackRecordBadge: 'Track Record',
      trackRecordTitle: 'Academic & Digital Projects',
      trackRecordDesc: 'Demonstrated experience in spearheading digital initiatives integrating technology, business models, and human empathy.',
      academicList: [
        {
          title: 'HOSPI AI',
          tag: 'Hospitality & Healthcare',
          description: 'Business concept and interactive platform streamlining resort guest services, multi-language support, and automated emergency routing.',
        },
        {
          title: 'Tim Sehat',
          tag: 'KendaliTensi Innovation',
          description: 'Digital health solution assisting hypertension monitoring via AI triage, standardized HBPM protocols, and a 90-day patient follow-up system.',
        },
        {
          title: 'AI Studio Projects',
          tag: 'Google AI Studio',
          description: 'Exploration of multimodal generative AI applications, prompt chaining architecture, and web audio prototyping in Google AI Studio.',
        },
      ],
      eduBadge: 'Academic Journey',
      eduTitle: 'Education',
      eduDesc: 'Foundational academics shaping analytical rigor, ethical empathy, and applied technological innovation.',
      higherEduBadge: 'Higher Education · Active',
      higherEduPeriod: '3rd Semester',
      higherEduName: 'Bali International Polytechnic',
      higherEduProgram: 'D4 Digital Business',
      higherEduHighlights: [
        'Applied digital business models, product growth strategy, and market research',
        'Applied tech solutions and generative Artificial Intelligence workflows',
      ],
      highSchoolBadge: 'Senior High School',
      highSchoolCurriculum: 'Merdeka Curriculum',
      highSchoolName: 'Cinta Kasih Tzu Chi High School',
      highSchoolDesc: 'Solid foundation in social science inquiry, user-centered empathy, and real-world project-based problem solving.',
    },
    footer: {
      collabBadge: "Let's Collaborate",
      title: 'Connect With Me',
      description: 'Interested in digital product collaborations, healthcare innovations, or Artificial Intelligence exploration? Let us connect!',
      friendlyNoteTitle: 'Send a Friendly Note',
      friendlyNoteDesc: 'Leave a friendly hello, feedback, or invite for academic discussions regarding digital projects.',
      yourName: 'Your Name',
      yourNamePlaceholder: 'Your Name or Institution',
      yourMessage: 'Your message or discussion topic...',
      yourMessagePlaceholder: 'Hi Aditya, I found your digital projects insightful...',
      sendMessage: 'Send Message',
      messageSent: 'Your message has been sent! Thank you.',
      emailTitle: 'Email',
      emailDesc: 'Direct inquiries straight to my inbox.',
      openEmail: 'Send Email',
      copied: 'Copied',
      copy: 'Copy',
      linkedinTitle: 'LinkedIn',
      linkedinDesc: 'Professional network & project updates.',
      viewLinkedin: 'View LinkedIn Profile',
      instagramTitle: 'Instagram',
      instagramDesc: 'Creative exploration and visual updates.',
      openInstagram: 'Open Instagram',
      backToTop: 'Back to Top',
    },
    modal: {
      categorySuffix: 'Digital Product',
      evidenceTitle: 'EVIDENCE & DOCUMENTATION',
      evidenceBadge: 'Live Verified Deployment',
      evidenceSubtitle: (title: string) => `Real-time interface snapshot from the live online website of ${title}.`,
      deploymentTitle: 'Live Platform Deployment',
      deploymentDesc: (isVercel: boolean) => `Direct access to the interactive live web application hosted on ${isVercel ? 'Vercel' : 'Google AI Studio'}.`,
      onlineBadge: 'Active Online',
      linksTitle: 'Links & References',
      linksDesc: (isVercel: boolean) => `Active platform accessible directly via ${isVercel ? 'Vercel' : 'Google AI Studio'}`,
      liveWebsite: 'Live Website',
      docToggle: 'Architecture & Feature Details',
      note: 'Note: Live interface captures and documentation assets are continually updated reflecting ongoing academic and product iterations.',
      close: 'Close',
      keyFeatures: 'Key Features',
      challenges: 'Challenges & Problem',
      solutionTitle: 'Designed Solution',
    },
  },
};
