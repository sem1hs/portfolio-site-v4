/**
 * Single source of truth for site config and content.
 * Edit values here — components read from these constants.
 */

// TODO: set `email` and `url` before deploy.
export const site = {
  name: "Semih Şahinoğlu", // full name (used in JSON-LD, footer)
  nameShort: "SEMİH ŞAHİNOĞLU", // short mark shown in nav / footer
  role: "Full-Stack Developer",
  email: "semihshngl@gmail.com",
  githubUrl: "https://github.com/sem1hs",
  linkedinUrl:
    "https://www.linkedin.com/in/semih-%C5%9Fahino%C4%9Flu-2b7834289/",
  // Absolute site URL, no trailing slash. Used for metadata + sitemap.
  url: "https://semihsahinoglu.online",
  locale: "tr_TR",
  lang: "tr",
  accentColor: "#c99b52", // options: #c99b52 #7aa2c9 #a88bd6 #c97a7a
  title: "Semih Şahinoğlu — Full - Stack Developer",
  description:
    "Semih Şahinoğlu — Yazılım Mühendisi ve Full-Stack Web geliştirici. Java, Kotlin, Spring Boot, Spring Cloud ile ölçeklenebilir REST API'ler ve mikroservisler; Next.js, React ve TypeScript ile modern web arayüzleri geliştiriyorum.",
  keywords: [
    "Semih Şahinoğlu",
    "Full-Stack Developer",
    "Back-End Developer",
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
    "Redis",
    "Elasticsearch",
    "Docker",
    "Mikroservis",
    "REST API",
  ],
} as const;

export const nav = [
  { href: "#about", label: "Hakkımda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
] as const;

export const hero = {
  label: "Backend Developer",
  title: { line1: "İhtiyaca uygun projeler,", emphasis: "temiz mimari." },
  lede: "Kotlin, Spring Boot ve Go ile yüksek performanslı REST API'ler tasarlıyorum. Güçlü veri yapıları ve modern yapay zeka entegrasyonlarıyla birlikte üretim ortamında dayanıklı backend servisleri geliştiriyorum.",
} as const;

export const about = {
  index: "01",
  label: "Hakkımda",
  lead: {
    pre: "Yazılım Mühendisliği mezunu, ",
    em: "Full-Stack Web geliştiricisiyim.",
    post: "",
  },
  paragraphs: [
    "Ağırlıklı olarak Java, Kotlin, Spring Boot ekosistemi ve React, TypeScript, Next.js ile çalışıyorum. Projelerimde genellikle veritabanı olarak PostgreSQL kullanıyorum; performansı artırmak için Kafka, Redis, Docker ve Elasticsearch gibi araçları aktif olarak kullanıyorum.",
    "Takım çalışmasında tecrübeli, çözüm odaklı, çevik yazılım geliştirme süreçlerinde deneyimli ve sürekli öğrenmeye açık bir mühendisim.",
  ],
} as const;

export const skills = {
  index: "02",
  label: "Yetenekler",
  items: [
    "Java",
    "Kotlin",
    "Spring Boot",
    "Spring Cloud",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "Elasticsearch",
    "Docker",
  ],
  note: "Günlük araç setim: Java / Kotlin / Spring / Go / Gin & Fiber, Next.js + TypeScript ve Kafka / Redis / Elasticsearch / Docker / Nginx / Jenkins ile üretim ortamına hazır altyapılar.",
} as const;

export type Project = {
  num: string;
  title: string;
  description: string;
  tags: readonly string[];
  url?: string; // canlı/proje linki (opsiyonel)
};

export const projects = {
  index: "03",
  label: "Projeler",
  intro: "",
  items: [
    {
      num: "01",
      title: "Biri Pazaryeri Uygulaması",
      description:
        "Pazaryeri uygulamasının backend tarafında Spring Boot ile REST API'ler geliştirdim. Elasticsearch ile hizmetleri lokasyon bazlı filtreleyip mesafe hesaplamalarıyla hızlı arama sağladım. Debezium ve Kafka ile PostgreSQL verisini gerçek zamanlı Elasticsearch'e senkronize eden event-driven bir yapı kurdum. Redis ile arama sonuçlarını cacheleyerek performansı artırdım, Google Maps Platform entegrasyonu ile konum bazlı servis ve kullanıcıya özel sıralama algoritmaları geliştirdim. Kafka üzerinden eventleri yöneterek mobil bildirim süreçlerini kurdum, Firebase ile mail doğrulama yaptım.",
      tags: ["Spring Boot", "Elasticsearch", "Kafka", "Redis", "PostgreSQL"],
    },
    {
      num: "02",
      title: "Sportseus Futbol Veri ve Oyun Platformu",
      description:
        "Futbol verileri üzerine kurulu, oyunlaştırılmış bir veri platformu. Lig, takım, oyuncu verilerini dış servisten (API-Football) çekip yöneten bir REST API ile bunu kullanan sunucu taraflı render'lı (SSR) bir web arayüzünden oluşuyor; uçtan uca tasarım, geliştirme ve canlıya alma bana ait. Backend: Kotlin, Spring Boot, PostgreSQL, Redis, Flyway, Spring Security + JWT; frontend: Next.js, TypeScript, SSR; DevOps: Docker, Jenkins CI/CD, Nginx, HTTPS. SEO uyumlu veri odaklı sayfalar, güne göre gruplanmış fikstür ve içerik yönetimi için admin panel geliştirdim; Redis önbellekleme, Jenkins ile otomatik deploy ve Nginx üzerinden HTTPS yayını sağladım.",
      tags: ["Kotlin", "Spring Boot", "Next.js", "Redis", "Docker", "Jenkins"],
      url: "https://sportseus.com", // Site linki
    },
    {
      num: "03",
      title: "SemihScore Futbol Haber Sitesi",
      description:
        "Bitirme projem. Spring Cloud ile mikroservis mimarisi kurarak backend'i tasarladım; Eureka ve Config Server ekleyip 10 mikroservis oluşturdum. Feign Client ile servisler arası iletişimi, API Gateway ile istekleri tek noktadan yönlendirmeyi sağladım. Servisleri Eureka'ya kaydederek load balancing yaptım. Veritabanı PostgreSQL. Frontend'i Next.js, TypeScript ve React ile geliştirdim; admin paneli, fikstür, puan durumu ve haber sayfaları oluşturup liglere göre filtreleme ekledim. Tüm servisleri ayrı GitHub repository'lerinde tutuyorum.",
      tags: ["Spring Cloud", "Mikroservis", "API Gateway", "PostgreSQL", "Next.js"],
      url: "https://github.com/sem1hs/news-app-teams-service", // Proje linki
    },
    {
      num: "04",
      title: "Filo Kiralama Yönetim",
      description:
        "5-6 kişilik bir ekiple geliştirdiğimiz web uygulaması. Spring Boot ile araç kiralama, rezervasyon ve araç yönetimi servislerini tasarladım. Veritabanı PostgreSQL; sistemin tüm işlemleri RESTful API'ler üzerinden yürüyor. Uygulama araç durum takibi, rezervasyon yönetimi ve araç kiralama işlevlerini destekliyor.",
      tags: ["Spring Boot", "PostgreSQL", "REST API", "Takım Çalışması"],
    },
    {
      num: "05",
      title: "Ata Medya Landing Page",
      description:
        "Stajımda Ata Medya için geliştirdiğim projede Next.js ile modern ve responsive bir tasarım oluşturdum. SEO optimizasyonlarına özen göstererek sitenin görünürlüğünü artırdım. Gerçek dünya standartlarına uygun bir yapıyla performans ve kullanıcı deneyimi açısından verimli bir sonuç elde ettim.",
      tags: ["Next.js", "TypeScript", "SEO", "Responsive"],
    },
    {
      num: "06",
      title: "Kripto Para Analiz",
      description:
        "Spring Boot ve WebFlux ile Binance API üzerinden kripto para verilerini çeken bir uygulama geliştirdim. Reactive programlama yaklaşımıyla yüksek performanslı ve düşük gecikmeli veri akışı sağladım. Uygulama, API'den gelen verileri işleyip matematiksel hesaplamalar yapabiliyor.",
      tags: ["Spring Boot", "WebFlux", "Reactive", "Binance API"],
      // url: "https://...", // Proje linki
    },
  ] satisfies Project[],
} as const;

export const contact = {
  index: "04",
  label: "İletişim",
  heading: "Birlikte çalışalım.",
  text: "Yeni bir proje, iş birliği ya da sadece merhaba demek için bana ulaşabilirsiniz.",
} as const;
