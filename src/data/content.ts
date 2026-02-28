// Veritabanı yok — tüm içerik burada. Kendi bilgilerinle güncelle.

export const site = {
  name: "İsmet MERCANLI",
  tagline: "Yazılım geliştirici · Meraklı ve öğrenmeye açık",
  email: "mercanliismet@gmail.com",
  github: "https://github.com/ismetmercanli",
  linkedin: "https://www.linkedin.com/in/ismet-mercanl%C4%B1-a97325256/",
};

export const about = {
  title: "Hakkımda",
  paragraphs: [
    "Merhaba! Ben bir yazılım geliştiriciyim. Kod yazmayı, yeni teknolojileri keşfetmeyi ve problem çözmeyi seviyorum.",
    "Projelerimde kullanıcı deneyimine ve temiz koda önem veriyorum. Öğrendiklerimi projelere döküp paylaşmayı hedefliyorum.",
  ],
};

export const projects = [
  {
    id: "1",
    title: "Örnek Proje 1",
    description: "Bu projede X teknolojisi kullanarak Y problemi çözdüm. Açıklamayı kendi projenize göre düzenleyin.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/kullaniciadin/proje-1",
    live: "https://canli-demo.vercel.app",
  },
  {
    id: "2",
    title: "Örnek Proje 2",
    description: "Kısa proje açıklaması. Ne yaptığınızı ve neden önemli olduğunu anlatın.",
    tech: ["React", "Node.js"],
    github: "https://github.com/kullaniciadin/proje-2",
    live: undefined,
  },
  {
    id: "3",
    title: "Örnek Proje 3",
    description: "Üçüncü projenizin kısa tanımı. İsterseniz daha fazla proje ekleyebilirsiniz.",
    tech: ["Python", "FastAPI"],
    github: undefined,
    live: "https://demo.com",
  },
];

export const goals = {
  title: "Hedeflerim",
  items: [
    "Full-stack veya frontend alanında daha derinlemesine ilerlemek.",
    "Açık kaynak projelere katkıda bulunmak.",
    "Öğrendiklerimi blog veya içeriklerle paylaşmak.",
    "Takım içinde güçlü iletişim ve iş birliği becerilerimi geliştirmek.",
  ],
};

export const navLinks = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#hedefler", label: "Hedefler" },
  { href: "#iletisim", label: "İletişim" },
];
