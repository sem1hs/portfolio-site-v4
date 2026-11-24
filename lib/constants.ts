/**
 * Single source of truth for site config and content.
 * Edit values here — components read from these constants.
 */

export const site = {
  name: "Semih Şahinoğlu",
  nameShort: "semih.dev",
  role: "Full-Stack Software Engineer",
  email: "semihshngl@gmail.com",
  githubUrl: "https://github.com/sem1hs",
  linkedinUrl:
    "https://www.linkedin.com/in/semih-%C5%9Fahino%C4%9Flu-2b7834289/",
  location: "İstanbul, Türkiye",
  // Absolute site URL, no trailing slash. Used for metadata + sitemap.
  url: "https://semihsahinoglu.online",
  locale: "tr_TR",
  lang: "tr",
  title: "Semih Şahinoğlu — Full-Stack Software Engineer",
  description:
    "Semih Şahinoğlu — 2 yıllık deneyime sahip Full-Stack Yazılım Mühendisi. Java, Kotlin, Spring Boot ve Spring Cloud ile ölçeklenebilir backend'ler; React, Next.js ve TypeScript ile modern arayüzler. PostgreSQL, Kafka, Redis, Elasticsearch, Docker.",
  keywords: [
    "Semih Şahinoğlu",
    "Full-Stack Developer",
    "Backend Developer",
    "Yazılım Mühendisi",
    "Java",
    "Kotlin",
    "Spring Boot",
    "Spring Cloud",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Kafka",
    "Debezium",
    "Redis",
    "Elasticsearch",
    "Docker",
    "Mikroservis",
    "REST API",
  ],
} as const;

export const nav = [
  { href: "#about", label: "Hakkımda", cmd: "./hakkimda" },
  { href: "#experience", label: "Deneyim", cmd: "./deneyim" },
  { href: "#projects", label: "Projeler", cmd: "./projeler" },
  { href: "#skills", label: "Yetenekler", cmd: "./yetenekler" },
  { href: "#contact", label: "İletişim", cmd: "./iletisim" },
] as const;

export const hero = {
  status: "Yeni fırsatlara açık",
  roles: [
    "Full-Stack Software Engineer",
    "Spring Boot & Kotlin Developer",
    "Event-Driven Systems Builder",
    "React & Next.js Developer",
  ],
  lede: "Backend'i Java, Kotlin ve Spring Boot ile; arayüzü React, TypeScript ve Next.js ile yazıyorum. Kafka, Debezium, Redis ve Elasticsearch ile event-driven sistemler kurup Docker, Jenkins ve Nginx ile production'a taşıyorum.",
  facts: [
    { k: "Konum", v: "İstanbul, TR" },
    { k: "Deneyim", v: "2+ yıl" },
    { k: "Odak", v: "Backend · Event-driven" },
    { k: "Eğitim", v: "Yazılım Müh. '26" },
  ],
} as const;

export const about = {
  index: "01",
  label: "Hakkımda",
  heading: "Backend'den arayüze, uçtan uca ürün geliştiriyorum.",
  paragraphs: [
    "2 yıllık sektör deneyimine sahip bir Full-Stack Yazılım Mühendisiyim. Ağırlıklı olarak Java, Kotlin ve Spring Boot ekosistemiyle; frontend tarafında React, TypeScript ve Next.js ile çalışıyorum.",
    "Veritabanı olarak çoğunlukla PostgreSQL kullanıyor; Kafka, Debezium, Redis, Docker ve Elasticsearch ile event-driven, hızlı ve dayanıklı sistemler kuruyorum. Çözüm odaklı, takım çalışmasına yatkın, yazılım geliştirme yaşam döngüsünde deneyimli ve sürekli öğrenmeye açığım.",
  ],
  stats: [
    { value: 2, suffix: "+", label: "Yıl deneyim" },
    { value: 4, suffix: "", label: "Profesyonel rol" },
    { value: 6, suffix: "", label: "Öne çıkan proje" },
    { value: 10, suffix: "", label: "Mikroservis (bitirme)" },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: readonly string[];
  tech: readonly string[];
};

export const experience = {
  index: "02",
  label: "Deneyim",
  items: [
    {
      company: "Biri Teknoloji",
      role: "Backend Developer",
      period: "Ara 2025 — Nis 2026",
      bullets: [
        "Pazaryeri backend'i için Spring Boot REST API'leri geliştirdim; Elasticsearch ile lokasyon bazlı filtreleme ve mesafe hesaplamalı arama kurdum.",
        "Debezium ve Kafka ile gerçek zamanlı, event-driven PostgreSQL → Elasticsearch senkronizasyon pipeline'ı kurdum; arama sonuçlarını Redis ile cache'ledim, Google Maps Platform entegrasyonuyla özel sıralama algoritmaları yazdım.",
        "Kafka event'leri üzerinden mobil push bildirim akışlarını, Firebase ile e-posta doğrulamayı yönettim; Agile/Jira süreçlerinde teknik dokümantasyon hazırladım.",
      ],
      tech: ["Spring Boot", "Spring Cloud", "Elasticsearch", "Kafka", "Debezium", "Redis", "Firebase", "PostgreSQL"],
    },
    {
      company: "Eywa Bilgi Teknolojileri",
      role: "Full Stack Developer",
      period: "Ağu 2025 — Eki 2025",
      bullets: [
        "Filo Kiralama Yönetim platformunda frontend sorumluluğunu üstlendim; admin panelini React ve TypeScript ile geliştirdim.",
        "RESTful API entegrasyonları ve rol bazlı arayüzlerle uçtan uca araç takibi ve rezervasyon yönetimi akışlarını teslim ettim.",
      ],
      tech: ["Spring Boot", "Spring Security", "React", "TypeScript"],
    },
    {
      company: "Eywa Bilgi Teknolojileri",
      role: "Backend Developer Stajyeri",
      period: "Tem 2025 — Ağu 2025",
      bullets: [
        "Java, Spring Boot ve PostgreSQL ile araç kiralama, rezervasyon ve filo yönetimi mikroservisleri geliştirdim.",
        "5–6 kişilik Agile ekipte GitHub akışlarıyla çalıştım; Docker ile geliştirme ve production ortamlarında container'lı servisleri yönettim.",
      ],
      tech: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "Docker"],
    },
    {
      company: "Ketcap Creative",
      role: "Full Stack Developer Stajyeri",
      period: "Ağu 2024 — Eyl 2024",
      bullets: [
        "Next.js, Node.js ve PostgreSQL ile modern, responsive ve SEO odaklı kurumsal siteler ve landing page'ler (Ata Medya dahil) geliştirdim.",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "SEO"],
    },
  ] satisfies Experience[],
} as const;

export const skills = {
  index: "04",
  label: "Yetenekler",
  groups: [
    { key: "languages", title: "Diller", items: ["Java", "Kotlin", "JavaScript", "TypeScript"] },
    {
      key: "frameworks",
      title: "Framework & Kütüphaneler",
      items: [
        "Spring Boot",
        "Spring Cloud",
        "Spring Data JPA",
        "Spring Security",
        "Spring WebFlux",
        "Spring Test",
        "React",
        "Next.js",
        "TanStack Query",
      ],
    },
    { key: "data", title: "Veritabanı & Arama", items: ["PostgreSQL", "Redis", "Elasticsearch"] },
    {
      key: "messaging",
      title: "Mesajlaşma & Mimari",
      items: ["Apache Kafka", "Debezium", "Eureka", "REST API", "JWT", "Flyway"],
    },
    {
      key: "devops",
      title: "DevOps & Araçlar",
      items: ["Docker", "Jenkins", "Nginx", "AWS", "VPS", "Git", "Jira"],
    },
    { key: "spoken", title: "Konuşulan diller", items: ["Türkçe (ana dil)", "İngilizce (profesyonel)"] },
  ],
  // Flat list for the marquee + JSON-LD knowsAbout.
  marquee: [
    "Java",
    "Kotlin",
    "Spring Boot",
    "Spring Cloud",
    "PostgreSQL",
    "Kafka",
    "Debezium",
    "Redis",
    "Elasticsearch",
    "Docker",
    "Jenkins",
    "Nginx",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
  ],
} as const;

export type Project = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  url?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects = {
  index: "03",
  label: "Projeler",
  intro: "Production'a çıkmış ürünlerden mikroservis mimarilerine, uçtan uca geliştirdiğim işler.",
  items: [
    {
      num: "01",
      title: "Bizim Hikâye",
      subtitle: "Dijital Hediye Platformu",
      description:
        "Çiftlerin kişiselleştirilmiş dijital hediyeleri anında ya da planlı teslimatla gönderebildiği uçtan uca e-ticaret platformu. Canlı önizlemeli (Poster, Çerçeveli, 3D gökyüzü) 5 adımlı yıldız haritası tasarlayıcı, satın alma sonrası filigransız PNG/PDF teslimatı ve sipariş takibi. Shopier ödeme entegrasyonu; Docker ve Nginx ile HTTPS üzerinden production.",
      tags: ["Kotlin", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Nginx"],
      url: "https://bizimhikaye.com",
      linkLabel: "Canlı Site",
      featured: true,
    },
    {
      num: "02",
      title: "Sportseus",
      subtitle: "Futbol Veri ve Oyun Platformu",
      description:
        "API-Football'dan lig, takım ve oyuncu verilerini yöneten REST API ve SSR web arayüzü; uçtan uca tasarım, geliştirme ve canlıya alma. SEO uyumlu sayfalar, güne göre gruplanmış fikstür ve admin panel. Jenkins CI/CD, Docker ve Nginx ile otomatik deploy.",
      tags: ["Kotlin", "Spring Boot", "Redis", "Flyway", "JWT", "Next.js", "Jenkins"],
      url: "https://sportseus.com",
      linkLabel: "Canlı Site",
      featured: true,
    },
    {
      num: "03",
      title: "Lokma",
      subtitle: "Yapay Zeka Destekli Diyet Takip",
      description:
        "Temiz, modüler monolit mimariyle Java ve Spring Boot backend. Günlük öğün kaydı, yapay zeka ile yemek fotoğrafı analizi ve kişiye özel diyet planı üretimi için REST API'ler. PostgreSQL, Redis, Spring Security + JWT; Docker, Jenkins CI/CD ve Nginx ile HTTPS production.",
      tags: ["Java", "Spring Boot", "AI", "PostgreSQL", "Redis", "Jenkins"],
    },
    {
      num: "04",
      title: "Biri Marketplace",
      subtitle: "Hizmet Pazaryeri Backend'i",
      description:
        "Spring Boot ile hizmet pazaryeri backend mimarisi. Elasticsearch geo-filtreleme ve mesafe hesaplamalı arama, Debezium + Kafka ile gerçek zamanlı PostgreSQL → Elasticsearch senkronizasyonu, Redis cache, Google Maps entegrasyonu, Firebase e-posta doğrulama ve push bildirimleri.",
      tags: ["Spring Boot", "Elasticsearch", "Kafka", "Debezium", "Redis"],
    },
    {
      num: "05",
      title: "SemihScore",
      subtitle: "Mikroservis Futbol Haber Platformu",
      description:
        "Bitirme projem: Spring Cloud ile 10 servisli backend mimarisi. API Gateway, Config Server, Feign Client ve Eureka ile servis iletişimi ve load balancing. Next.js, TypeScript ve React ile fikstür, puan durumu, haber, lig filtreleme ve admin panel. Her servis ayrı GitHub repo'sunda.",
      tags: ["Spring Cloud", "Eureka", "API Gateway", "PostgreSQL", "Next.js"],
      url: "https://github.com/sem1hs/news-app-teams-service",
      linkLabel: "GitHub",
    },
    {
      num: "06",
      title: "Filo Kiralama Yönetim",
      subtitle: "Takım Projesi · Eywa",
      description:
        "5–6 kişilik ekiple web tabanlı filo yönetim platformu. Spring Boot ve PostgreSQL ile araç kiralama, rezervasyon ve filo operasyonları için RESTful API'ler; araç durum takibi, rezervasyon akışları ve React + TypeScript admin paneli.",
      tags: ["Spring Boot", "PostgreSQL", "React", "TypeScript"],
    },
  ] satisfies Project[],
} as const;

export const education = {
  index: "05",
  label: "Eğitim & Sertifikalar",
  school: {
    name: "İstanbul Gelişim Üniversitesi",
    degree: "Yazılım Mühendisliği, Lisans",
    period: "2022 — 2026",
    courses: [
      "Algoritma Analizi",
      "Veri Yapıları",
      "Nesne Yönelimli Programlama",
      "İnternet ve Web Programlama",
      "Yazılım Tasarımı ve Mimarisi",
    ],
  },
  certificates: [
    { org: "Udemy", name: "The Ultimate React Course", hours: 84 },
    { org: "Udemy", name: "Spring Boot 3, Spring Framework 6", hours: 41 },
    { org: "Turkcell Geleceği Yazanlar", name: "Java 101, 201, 301", hours: 23 },
    { org: "Techcareer.net", name: "Backend Development Essentials", hours: 20 },
    { org: "Techcareer.net", name: "Modern Frontend Development", hours: 13 },
  ],
} as const;

export const contact = {
  index: "06",
  label: "İletişim",
  heading: "Birlikte bir şeyler inşa edelim.",
  text: "Yeni bir pozisyon, freelance proje ya da sadece merhaba demek için — gelen kutum her zaman açık.",
} as const;
