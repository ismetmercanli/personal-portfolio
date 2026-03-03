export type Locale = "tr" | "en";

export interface SiteContent {
  name: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
}

export interface ProjectContent {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface GoalsContent {
  title: string;
  items: string[];
}

export interface InterestsContent {
  title: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period?: string;
  location?: string;
}

export interface EducationContent {
  title: string;
  items: EducationItem[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Translations {
  site: SiteContent;
  about: AboutContent;
  education: EducationContent;
  projects: ProjectContent[];
  goals: GoalsContent;
  interests: InterestsContent;
  navLinks: NavLink[];
  ui: {
    heroCtaProjects: string;
    heroCtaContact: string;
    projectsTitle: string;
    projectsSubtitle: string;
    github: string;
    liveDemo: string;
    contactTitle: string;
    contactSubtitle: string;
    sendEmail: string;
    footerRights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  tr: {
    site: {
      name: "İsmet Mercanlı",
      tagline: "Bilgisayar Mühendisliği öğrencisi · C# & .NET meraklısı",
      email: "ornek@email.com",
      github: "https://github.com/ismetmercanli",
      linkedin: "https://linkedin.com/in/ismetmercanli",
      instagram: "https://www.instagram.com/ismetmercanli147/",
    },
    about: {
      title: "Hakkımda",
      paragraphs: [
        "Merhaba, ben İsmet. Bilgisayar Mühendisliği dördüncü sınıf öğrencisiyim. Yazılım tarafında en çok C# ve .NET dünyası ilgimi çekiyor; teknoloji sürekli değişiyor, ben de bu değişime ayak uydurmaya çalışıyorum. Sadece derslerle yetinmek istemiyorum, bu yüzden projeler üzerinde çalışarak hem kendimi geliştiriyorum hem de modern uygulama mimarilerini öğreniyorum.",
        "Üniversite boyunca Python ve React ile deneyim kazandım; şu sıralar ağırlığı .NET'e veriyorum. Spor uygulaması ve yapay zeka destekli film öneri sistemi gibi projelerle hem teknik becerilerimi hem de problem çözme yaklaşımımı güçlendiriyorum. Öğrenmeye açığım, inisiyatif almayı seviyorum ve farklı ortamlara uyum sağlayabiliyorum. Hedefim, profesyonel bir ortamda deneyim kazanıp ekipe gerçek anlamda katkı sunmak.",
      ],
    },
    projects: [
      {
        id: "1",
        title: "Spor Uygulaması",
        description:
          "Spor ve antrenman takibi için geliştirdiğim uygulama. Kullanıcılar antrenmanlarını kaydedebilir ve ilerlemelerini takip edebilir.",
        tech: [".NET", "C#", "React"],
        github: "https://github.com/ismetmercanli/spor-uygulamasi",
        live: undefined,
      },
      {
        id: "2",
        title: "Yapay Zeka Destekli Film Öneri Sistemi",
        description: "Kullanıcı tercihlerine göre film öneren, AI tabanlı bir öneri sistemi.",
        tech: ["Python", "AI/ML", "React"],
        github: "https://github.com/ismetmercanli/film-oneri",
        live: undefined,
      },
      {
        id: "3",
        title: "SupGain",
        description:
          "Supplement (takviye) satış takibi ve haftalık planlama yaptığım uygulama. Stok, satış ve kullanım planını tek yerden yönetmeyi sağlıyor.",
        tech: [".NET", "C#", "React"],
        github: "https://github.com/ismetmercanli/supgain",
        live: undefined,
      },
    ],
    education: {
      title: "Eğitim",
      items: [
        {
          school: "Ertuğrul Gazi Lisesi",
          degree: "Lise",
          period: "2017 – 2021",
          location: "Bursa",
        },
        {
          school: "Süleyman Demirel Üniversitesi",
          degree: "Bilgisayar Mühendisliği",
          period: "2022 – Devam ediyor",
          location: "Isparta",
        },
      ],
    },
    goals: {
      title: "Hedeflerim",
      items: [
        ".NET ve C# ile backend ve full-stack geliştirme konusunda derinleşmek ve modern uygulama mimarileriyle çalışmak.",
        "Spor uygulaması ve AI destekli film öneri sistemi gibi projeleri tamamlayıp portfolyomu güçlendirmek.",
        "Değişen teknolojilere uyum sağlayarak sürekli öğrenmek ve güncel kalabilmek.",
        "Profesyonel bir ekipte staj veya tam zamanlı rol alarak deneyim kazanmak ve projelere somut katkı sağlamak.",
        "Problem çözme ve yazılım tasarımı becerilerimi gerçek projelerde uygulayıp geliştirmek.",
      ],
    },
    interests: {
      title: "İlgi Alanlarım",
      items: ["Spor", "Futbol", "Stratejik oyunlar", "Tarih"],
    },
    navLinks: [
      { href: "#hakkimda", label: "Hakkımda" },
      { href: "#egitim", label: "Eğitim" },
      { href: "#projeler", label: "Projeler" },
      { href: "#hedefler", label: "Hedefler" },
      { href: "#ilgi-alanlari", label: "İlgi Alanları" },
      { href: "#iletisim", label: "İletişim" },
    ],
    ui: {
      heroCtaProjects: "Projelere Git",
      heroCtaContact: "İletişim",
      projectsTitle: "Projeler",
      projectsSubtitle: "Üzerinde çalıştığım ve paylaştığım projeler.",
      github: "GitHub",
      liveDemo: "Canlı Demo",
      contactTitle: "İletişim",
      contactSubtitle:
        "Bir fikriniz veya iş birliği talebiniz varsa benimle iletişime geçebilirsiniz.",
      sendEmail: "E-posta Gönder",
      footerRights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    site: {
      name: "İsmet Mercanlı",
      tagline: "Computer Engineering student · C# & .NET enthusiast",
      email: "ornek@email.com",
      github: "https://github.com/ismetmercanli",
      linkedin: "https://linkedin.com/in/ismetmercanli",
      instagram: "https://www.instagram.com/ismetmercanli147/",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm İsmet. I'm a fourth-year Computer Engineering student. I'm most interested in C# and the .NET ecosystem; technology keeps evolving, and I try to keep up. I don't want to limit myself to coursework, so I work on projects to grow my skills and learn modern application architectures.",
        "Throughout university I've gained experience with Python and React; these days I'm focusing more on .NET. Through projects like a sports app and an AI-powered movie recommendation system, I'm strengthening both my technical skills and my problem-solving approach. I'm eager to learn, I like taking initiative, and I adapt well to different environments. My goal is to gain experience in a professional setting and contribute meaningfully to a team.",
      ],
    },
    projects: [
      {
        id: "1",
        title: "Sports App",
        description:
          "An app I built for tracking sports and workouts. Users can log their sessions and track their progress.",
        tech: [".NET", "C#", "React"],
        github: "https://github.com/ismetmercanli/spor-uygulamasi",
        live: undefined,
      },
      {
        id: "2",
        title: "AI-Powered Movie Recommendation System",
        description: "An AI-based recommendation system that suggests movies based on user preferences.",
        tech: ["Python", "AI/ML", "React"],
        github: "https://github.com/ismetmercanli/film-oneri",
        live: undefined,
      },
      {
        id: "3",
        title: "SupGain",
        description:
          "An app I built for supplement sales tracking and weekly planning. It helps manage stock, sales, and usage plans in one place.",
        tech: [".NET", "C#", "React"],
        github: "https://github.com/ismetmercanli/supgain",
        live: undefined,
      },
    ],
    education: {
      title: "Education",
      items: [
        {
          school: "Ertuğrul Gazi High School",
          degree: "High School Diploma",
          period: "2017 – 2021",
          location: "Bursa",
        },
        {
          school: "Süleyman Demirel University",
          degree: "Computer Engineering",
          period: "2022 – Present",
          location: "Isparta",
        },
      ],
    },
    goals: {
      title: "Goals",
      items: [
        "To go deeper in backend and full-stack development with .NET and C#, and work with modern application architectures.",
        "To complete projects like the sports app and AI movie recommendation system and strengthen my portfolio.",
        "To keep learning and stay current by adapting to changing technologies.",
        "To gain experience in a professional team through an internship or full-time role and contribute to real projects.",
        "To apply and improve my problem-solving and software design skills on real projects.",
      ],
    },
    interests: {
      title: "Interests",
      items: ["Sports", "Football", "Strategy games", "History"],
    },
    navLinks: [
      { href: "#hakkimda", label: "About" },
      { href: "#egitim", label: "Education" },
      { href: "#projeler", label: "Projects" },
      { href: "#hedefler", label: "Goals" },
      { href: "#ilgi-alanlari", label: "Interests" },
      { href: "#iletisim", label: "Contact" },
    ],
    ui: {
      heroCtaProjects: "View Projects",
      heroCtaContact: "Contact",
      projectsTitle: "Projects",
      projectsSubtitle: "Projects I'm working on and sharing.",
      github: "GitHub",
      liveDemo: "Live Demo",
      contactTitle: "Contact",
      contactSubtitle:
        "If you have an idea or collaboration in mind, feel free to get in touch.",
      sendEmail: "Send Email",
      footerRights: "All rights reserved.",
    },
  },
};
