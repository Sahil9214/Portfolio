export const NAME = "Utkarsh Singhal";
export const DESIGNATION = "Full Stack Developer";
export const EMAIL = "utkarshsinghal369@gmail.com";
export const PHONE = "+91 9214553881";
export const ADDRESS = "Alwar, Rajasthan, India";
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/utkarsh-singhal-2002/",
  github: "https://github.com/utkarshsinghal369",
  twitter: "https://twitter.com/utkarshsinghal369",
  instagram: "https://www.instagram.com/utkarshsinghal369/",
  facebook: "https://www.facebook.com/utkarshsinghal369/",
  youtube: "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
};

export const DESCRIPTION =
  "I bridge user needs and business goals through strategic full stack development, creating intuitive digital solutions that drive engagement and deliver measurable ROI.";

export const techStack = {
  frontend: [
    {
      name: "Javascript",
      logo: "https://img.icons8.com/?size=288&id=108784&format=png",
    },
    {
      name: "Typescript",
      logo: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
    },
    {
      name: "React",
      logo: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
    },
    {
      name: "Next.js",
      logo: "https://img.icons8.com/?size=200&id=gwR0hbBi5JeZ&format=png&color=FFFFFF",
    },
    {
      name: "Redux",
      logo: "https://img.icons8.com/?size=288&id=jD-fJzVguBmw&format=png",
    },
    {
      name: "Tailwind CSS",
      logo: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
    },
    {
      name: "Framer Motion",
      logo: "https://img.icons8.com/?size=200&id=mAq7Hp0eGndB&format=png",
    },
    {
      name: "SASS",
      logo: "https://img.icons8.com/?size=288&id=QBqFNfPPB2Kx&format=png",
    },
    {
      name: "Bootstrap",
      logo: "https://img.icons8.com/?size=288&id=84710&format=png",
    },
  ],
  backend: [
    {
      name: "Node.js",
      logo: "https://img.icons8.com/?size=200&id=hsPbhkOH4FMe&format=png",
    },
    {
      name: "Nest.js",
      logo: "https://img.icons8.com/?size=288&id=9ESZMOeUioJS&format=png",
    },
    {
      name: "Express.js",
      logo: "https://img.icons8.com/?size=200&id=2ZOaTclOqD4q&format=png",
    },
  ],
  database: [
    {
      name: "MySQL",
      logo: "https://img.icons8.com/?size=200&id=QeIg9siFKGgp&format=png",
    },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/?size=288&id=38561&format=png",
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png",
    },
    {
      name: "Supabase",
      logo: "https://img.icons8.com/?size=288&id=grZaE9tjqDyr&format=png",
    },
  ],
  tools: [
    {
      name: "Git",
      logo: "https://img.icons8.com/?size=288&id=20906&format=png",
    },
    {
      name: "Docker",
      logo: "https://img.icons8.com/?size=200&id=cdYUlRaag9G9&format=png",
    },
    {
      name: "AWS",
      logo: "https://img.icons8.com/?size=288&id=33039&format=png",
    },
  ],
};

export const projects = [
  {
    id: "simba-analytics",
    title: "Simba Analytics Dashboard & Seller App",
    description:
      "Interactive analytics dashboard & seller app using Supabase, AWS Textract, and Next.js.",

    fullDescription:
      "Built a scalable analytics platform for Simba Beer. Extracted company data from PDFs & Excel using AWS Textract, managed it with Supabase, and visualized insights via Recharts. Includes a seller mobile app to track targets in real-time.",

    color: "orange",
    gradient:
      "linear-gradient(188.62deg, #4B2500 49.9%, #A0522D 81.7%, #FF8C00 93.88%, #FFD580 113.5%)",
    shadow: "0 0 30px #FF8C00",
    image: "/simba.webp",
    link: "https://simbabeer.com/",
    github: "",

    features: [
      "Data extraction from PDFs & Excel via AWS Textract",
      "Managed securely in Supabase",
      "Dashboard with Donut, Line & Competition charts (Recharts)",
      "Seller mobile app for real-time target tracking",
    ],
    alt: "Simba Analytics Dashboard screenshot",
    technologies: [
      {
        name: "Next.js",
        icon: "https://img.icons8.com/?size=200&id=gwR0hbBi5JeZ&format=png&color=FFFFFF",
      },
      {
        name: "React",
        icon: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
      },
      {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
      },
      {
        name: "Supabase",
        icon: "https://img.icons8.com/?size=288&id=grZaE9tjqDyr&format=png",
      },
      {
        name: "AWS",
        icon: "https://img.icons8.com/?size=288&id=33039&format=png",
      },
      {
        name: "Recharts",
        icon: "https://img.icons8.com/?size=200&id=2dT788URbae8&format=png",
      },
    ],
  },
  {
    id: "getprojects-ai",
    title: "GetProjects.ai - Dynamic Project Platform",
    // Short description ab aur bhi punchy hai
    description:
      "Built a Next.js app with 2,000+ dynamic SEO pages in 7 days, achieving a 92+ Lighthouse score.",

    // fullDescription ab seedha skills aur results pe focus karta hai
    fullDescription:
      "Delivered this full-stack application from concept to deployment in a 7-day sprint. The core architecture generates over 2,000 dynamic, SEO-optimized pages using nested routing. Focused heavily on performance optimization to achieve 92+ Lighthouse scores on mobile and desktop, while also integrating a custom chatbot via API.",

    color: "purple",
    gradient:
      "linear-gradient(188.62deg, #2E1065 49.9%, #4C1D95 81.7%, #7C3AED 93.88%, #A78BFA 113.5%)",
    shadow: "0 0 30px #7C3AED",
    image: "/getProjects.webp",
    link: "https://getproject.ai",
    github: "",

    // Yeh features list bilkul perfect hai, short aur to-the-point
    features: [
      "Generates 2000+ unique, SEO-friendly dynamic pages.",
      "Complex nested dynamic routing for intuitive navigation.",
      "Optimized for performance with 92+ Lighthouse scores.",
      "Rapid 7-day development cycle from scratch to launch.",
      "Integrated chatbot for real-time user interaction.",
    ],
    alt: "GetProjects.ai platform screenshot",
    technologies: [
      {
        name: "Next.js",
        icon: "https://img.icons8.com/?size=288&id=yUdJlcKanVbh&format=png",
      },
      {
        name: "React",
        icon: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
      },
      {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
      },
      {
        name: "Node.js",
        icon: "https://img.icons8.com/?size=200&id=hsPbhkOH4FMe&format=png",
      },
      {
        name: "Vercel",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fvercel.svg&w=48&q=75",
      },
    ],
  },
  {
    id: "neuralhq",
    title: "Corporate  Website",
    description:
      "A sleek and modern website for NeuralHQ, designed for AI-driven solutions.",
    fullDescription:
      "Built the official website for NeuralHQ, showcasing AI-driven technologies and services with an engaging UI and optimized performance.",
    color: "blue",
    gradient:
      "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
    shadow: "0 0 30px #2932CB",
    image: "/neuralhq.png",
    link: "https://www.neuralhq.ai/",
    github: "",
    alt: "NeuralHq Corporate  Website",
    features: [
      "High-performance, modern UI.",
      "SEO-optimized with fast load times.",
      "Built for scalability and responsiveness.",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "https://img.icons8.com/?size=288&id=yUdJlcKanVbh&format=png",
      },
      {
        name: "React",
        icon: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
      },
      {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
      },
    ],
  },
  {
    id: "shule-direct",
    title: "Shule Direct Project",
    description:
      "An education-focused platform designed for students, teachers, and parents with interactive learning and social features.",
    fullDescription:
      "Shule Direct is an all-in-one education platform connecting students, teachers, and parents through a role-based system. It offers features like following and unfollowing teachers, real-time chat similar to Unacademy, teacher ratings, and editable student profiles. Students can engage with top-rated teachers via messaging, while parents can easily track and monitor academic progress. The platform is designed with a strong focus on performance, usability, and a seamless learning experience.",
    color: "emerald",
    gradient:
      "linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
    shadow: "0 0 30px #059669",
    image: "/shule-direct.png",
    link: "https://www.shuledirect.co.tz/",
    github: "",
    features: [
      "Role-based access for students, teachers, and parents.",
      "Follow and unfollow teachers with rating system.",
      "Real-time chat functionality similar to Unacademy.",
      "Student profile editing and personalized experience.",
      "Display of top-rated teachers for better discovery.",
      "Parent access for monitoring student engagement.",
    ],
    alt: "Shule Direct education platform website image",
    technologies: [
      {
        name: "Next.js",
        icon: "https://img.icons8.com/?size=288&id=yUdJlcKanVbh&format=png",
      },
      {
        name: "React",
        icon: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
      },
      {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
      },
      {
        name: "Node.js",
        icon: "https://img.icons8.com/?size=200&id=hsPbhkOH4FMe&format=png",
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png",
      },
    ],
  },

  // {
  //   id: "linkforge",
  //   title: "LinkCut – Secure URL Shortener",
  //   description:
  //     "A full-stack URL shortener with authentication and analytics, built for performance and security.",
  //   fullDescription:
  //     "Developed a robust URL shortening service where users can register, shorten long links, and track analytics. The application is secured using JWT and bcrypt, with a responsive frontend using Next.js and ShadCN UI. Frontend is deployed on Vercel and backend on Render, ensuring scalability and optimal performance.",
  //   color: "indigo",
  //   gradient:
  //     "linear-gradient(188.62deg, #312E81 49.9%, #6366F1 81.7%, #A5B4FC 93.88%, #F9D793 113.5%)",
  //   shadow: "0 0 30px #6366F1",
  //   image: "/urlshortner.png", // replace with your actual image path
  //   link: "https://url-shortner-web.vercel.app/", // replace with actual deployed link
  //   github: "https://github.com/Sahil9214/url-shortner",
  //   features: [
  //     "User authentication with JWT and bcrypt.",
  //     "Shorten long URLs with custom aliases.",
  //     "Track number of visits and link creation date.",
  //     "Secure backend with Express and MongoDB.",
  //     "Responsive UI with Next.js, Tailwind, and ShadCN.",
  //   ],
  //   alt: "LinkCut – Secure URL Shortener website image ",
  //   technologies: [
  //     {
  //       name: "Next.js",
  //       icon: "https://img.icons8.com/?size=288&id=yUdJlcKanVbh&format=png",
  //     },
  //     {
  //       name: "React",
  //       icon: "https://img.icons8.com/?size=200&id=asWSSTBrDlTW&format=png",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       icon: "https://img.icons8.com/?size=288&id=CIAZz2CYc6Kc&format=png",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: "https://img.icons8.com/?size=200&id=nCj4PvnCO0tZ&format=png",
  //     },
  //     {
  //       name: "Node.js",
  //       icon: "https://img.icons8.com/?size=200&id=hsPbhkOH4FMe&format=png",
  //     },
  //     {
  //       name: "Express",
  //       icon: "https://img.icons8.com/?size=200&id=2ZOaTclOqD4q&format=png",
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png",
  //     },
  //     {
  //       name: "JWT",
  //       icon: "https://img.icons8.com/?size=288&id=rHpveptSuwDz&format=png",
  //     },
  //     {
  //       name: "Bcrypt",
  //       icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgElEQVR4Ad2XA7PkUBCFp/aPrG3btm3btm0U1rZt27btiY2z6dV48ZLHryrupM9Fnb7x+cYgVdolzIg0S76+T7PEj4TYKBflpNw+OqGbibF9F+G+5e56wkcnibklPwFpna3OTg4TL0pYc0/FtscqNjxQseC6jN7HRRRax3otIJC43wkRz1gTf8Kygf3PNRTfwHonIOcqBide6/gfvsgWym9m3QvItMyPqx8NEF8VC4tuKWi6l0fe1QyoVzIv96PqNg5037QRwtUPhnsBHQ4JeMKYGH9BQtYVP+5V2sph+mU5InbSRRnhlNnEejsJS21kwak2RN2OeJZvDYNw2h4QvBVw9KUOwq9ECsjoDFc4zfbx3gmovp3DLx74zYjnFbewCEYxbORcyXgnYN19Fb/Y81QD3cu1ikG1bRwqbGFDnhMzr8je+UAGp3sZNTDNpzqTcNApEYaFCEwbjjEpSOulETXZwyOYlvt5zL4qIxofJIvivXXC+dcDyWwbyL3qhw80chINPi2iz3ERF94bgV6wQPe8E3Ax8HHyhagx5TazsBFAM21yQ/cC0i/1QzYCn97ySIsVG1ErVt9T3Qsou5lFEDT2MWNPv9ERzI1PhnsBNOGCGXNOihUbUbSoR1wL6HVMRBBUlqPGpXOG6p1oIZg7X1z0wKEXOnVhyAQk2h+M7u9jz0sIg6pk3AVMuSQjGlQJS2xgqcU0QVFtO0erItg2QqB6UWitSysefEqEP+CAEY5n2YgK67zTYDfvjQ/kWMlg1DmJFibhCSPQnQBaJxZbz8bPorSA06VdjwiYd012/EDFbqcobXaO5P3djwrIs5pJ0cty77dE/zVL9J/TRP89/wYoHplyX4z7pQAAAABJRU5ErkJggg==", // replace with your bcrypt icon or placeholder
  //     },
  //     {
  //       name: "ShadCN UI",
  //       icon: "https://www.shadcnblocks.com/images/block/block-1.svg", // add or replace with valid icon
  //     },
  //     {
  //       name: "Vercel",
  //       icon: "https://img.icons8.com/?size=200&id=2xFS7aynbwiR&format=png",
  //     },
  //     {
  //       name: "Render",
  //       icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwklEQVR4AWJwL/ABtF8HJxCDQBSGT6kh121kWrAFe7ADK0kZtmATW4QVzL6DgSUQSZ4jgeDAd/aPyEAe9a4AjEAC/ZNAhgfsBzfkYQGYDHrB1zQAs4AHvSGa3gCmgN5heQMrKEGsAhwZ4K0CNjLAWQUo6UMEmH196X6EGAHtuv6Kfnik7XQRYWTUtVehuYr3VQkRHEgVIF1Zs5APEgRY6jntAFKBlX7MBgH04RYBmT/cJiDNgBkwA2bAqwIiwc+f014/Ki3k6gX4gg8AAAAASUVORK5CYII=",
  //     },
  //   ],
  // },
];

// PROJECT DATA

export const ContactUsKeyword = [
  "contact",
  "contact you",
  "hire you",
  "get in touch",
  "email you",
  "message you",
  "baat karni hai",
  "I want to contact the user",
  "I want to contact the utkarsh singhal",
];

/* -------------------- VOICE COMMANDS - MULTILINGUAL KEYWORDS -------------------- */

export type VoiceCommandAction = () => void;

export interface VoiceCommand {
  keywords: string[];
  action: VoiceCommandAction;
}

// Voice Commands Keywords in all supported languages
export const VoiceCommandsKeywords = {
  // About Section Keywords
  about: {
    en: [
      "about",
      "about you",
      "about me",
      "about us",
      "who are you",
      "tell me about you",
      "your introduction",
      "introduce yourself",
      "who you are",
      "about yourself",
    ],
    hi: [
      "about",
      "tum kaun ho",
      "bare mein batao",
      "apne bare mein batao",
      "apka parichay",
      "introduction",
      "apke bare mein",
      "tumhare bare mein",
      "aap kaun hain",
      "parichay",
    ],
    de: [
      "über",
      "über dich",
      "über mich",
      "wer bist du",
      "stell dich vor",
      "deine einführung",
      "introduktion",
      "über sich",
    ],
    fr: [
      "à propos",
      "à propos de toi",
      "à propos de moi",
      "qui es-tu",
      "présente-toi",
      "ton introduction",
      "introduction",
      "sur toi",
    ],
    zh: [
      "关于",
      "关于你",
      "关于我",
      "你是谁",
      "介绍自己",
      "你的介绍",
      "介绍",
      "关于你自己",
    ],
    ko: [
      "소개",
      "너에 대해",
      "나에 대해",
      "너는 누구야",
      "자기소개",
      "소개하기",
      "소개",
      "너 자신에 대해",
    ],
    ja: [
      "について",
      "あなたについて",
      "私について",
      "あなたは誰ですか",
      "自己紹介",
      "紹介",
      "あなた自身について",
    ],
  },

  // Projects Section Keywords
  projects: {
    en: [
      "project",
      "projects",
      "your work",
      "my work",
      "portfolio",
      "show projects",
      "what have you built",
      "your projects",
      "show me projects",
      "work portfolio",
      "your portfolio",
    ],
    hi: [
      "project",
      "projects",
      "kaam dikhao",
      "apka kaam",
      "portfolio",
      "projects dikhao",
      "kya banaya hai",
      "apke projects",
      "kaam",
      "portfolio dikhao",
    ],
    de: [
      "projekt",
      "projekte",
      "deine arbeit",
      "meine arbeit",
      "portfolio",
      "zeige projekte",
      "was hast du gebaut",
      "deine projekte",
      "portfolio zeigen",
    ],
    fr: [
      "projet",
      "projets",
      "ton travail",
      "mon travail",
      "portfolio",
      "montre projets",
      "qu'as-tu construit",
      "tes projets",
      "montre portfolio",
    ],
    zh: [
      "项目",
      "项目",
      "你的工作",
      "我的工作",
      "作品集",
      "显示项目",
      "你建造了什么",
      "你的项目",
      "显示作品集",
    ],
    ko: [
      "프로젝트",
      "프로젝트들",
      "너의 작업",
      "내 작업",
      "포트폴리오",
      "프로젝트 보여줘",
      "무엇을 만들었어",
      "너의 프로젝트",
      "포트폴리오 보여줘",
    ],
    ja: [
      "プロジェクト",
      "プロジェクト",
      "あなたの仕事",
      "私の仕事",
      "ポートフォリオ",
      "プロジェクトを見せる",
      "何を作った",
      "あなたのプロジェクト",
      "ポートフォリオを見せる",
    ],
  },

  // Experience Section Keywords (including client work)
  experience: {
    en: [
      "experience",
      "work experience",
      "career",
      "job experience",
      "background",
      "work history",
      "professional experience",
      "worked for clients",
      "client work",
      "worked with clients",
      "for clients",
      "client projects",
      "client experience",
      "worked for",
      "companies worked",
    ],
    hi: [
      "experience",
      "kaam ka anubhav",
      "career",
      "naukri ka anubhav",
      "background",
      "kaam ki history",
      "professional experience",
      "client ke liye kaam kiya",
      "client ka kaam",
      "client ke saath kaam",
      "client ke liye",
      "client projects",
      "client anubhav",
      "kaam kiya",
      "companies mein kaam",
    ],
    de: [
      "erfahrung",
      "berufserfahrung",
      "karriere",
      "arbeitserfahrung",
      "hintergrund",
      "arbeitsgeschichte",
      "berufserfahrung",
      "für kunden gearbeitet",
      "kundenarbeit",
      "mit kunden gearbeitet",
      "für kunden",
      "kundenprojekte",
      "kundenerfahrung",
    ],
    fr: [
      "expérience",
      "expérience de travail",
      "carrière",
      "expérience professionnelle",
      "historique",
      "historique de travail",
      "expérience professionnelle",
      "travaillé pour clients",
      "travail client",
      "travaillé avec clients",
      "pour clients",
      "projets clients",
      "expérience client",
    ],
    zh: [
      "经验",
      "工作经验",
      "职业",
      "工作经历",
      "背景",
      "工作历史",
      "专业经验",
      "为客户工作",
      "客户工作",
      "与客户合作",
      "为客户",
      "客户项目",
      "客户经验",
    ],
    ko: [
      "경험",
      "작업 경험",
      "경력",
      "직업 경험",
      "배경",
      "작업 이력",
      "전문 경험",
      "고객을 위해 일함",
      "고객 작업",
      "고객과 함께 일함",
      "고객을 위해",
      "고객 프로젝트",
      "고객 경험",
    ],
    ja: [
      "経験",
      "仕事の経験",
      "キャリア",
      "職歴",
      "背景",
      "仕事の履歴",
      "専門的な経験",
      "クライアントのために働いた",
      "クライアントの仕事",
      "クライアントと働いた",
      "クライアントのために",
      "クライアントプロジェクト",
      "クライアント経験",
    ],
  },

  // Tech Stack Keywords
  tech: {
    en: [
      "tech",
      "tech stack",
      "skills",
      "technologies",
      "tools",
      "what you know",
      "technology",
      "your skills",
      "technical skills",
      "stack",
      "technologies you use",
      "text stack of the user",
      "stack of the user",
    ],
    hi: [
      "tech",
      "tech stack",
      "skills",
      "technologies",
      "tools",
      "kya aata hai",
      "technology",
      "apke skills",
      "technical skills",
      "stack",
      "kaunsi technologies",
    ],
    de: [
      "tech",
      "tech stack",
      "fähigkeiten",
      "technologien",
      "werkzeuge",
      "was du weißt",
      "technologie",
      "deine fähigkeiten",
      "technische fähigkeiten",
      "stack",
    ],
    fr: [
      "tech",
      "pile technologique",
      "compétences",
      "technologies",
      "outils",
      "ce que tu sais",
      "technologie",
      "tes compétences",
      "compétences techniques",
      "pile",
    ],
    zh: [
      "技术",
      "技术栈",
      "技能",
      "技术",
      "工具",
      "你知道什么",
      "技术",
      "你的技能",
      "技术技能",
      "栈",
    ],
    ko: [
      "기술",
      "기술 스택",
      "기술",
      "기술들",
      "도구",
      "너가 아는 것",
      "기술",
      "너의 기술",
      "기술적 기술",
      "스택",
    ],
    ja: [
      "技術",
      "技術スタック",
      "スキル",
      "技術",
      "ツール",
      "あなたが知っていること",
      "技術",
      "あなたのスキル",
      "技術的スキル",
      "スタック",
    ],
  },

  // Contact Keywords
  contact: {
    en: [
      "contact",
      "contact you",
      "hire you",
      "get in touch",
      "email you",
      "message you",
      "reach out",
      "connect",
      "contact form",
      "get in contact",
    ],
    hi: [
      "contact",
      "baat karni hai",
      "hire karna",
      "sampark karein",
      "email karein",
      "message karein",
      "sampark",
      "connect",
      "contact form",
      "sampark karein",
    ],
    de: [
      "kontakt",
      "kontaktiere dich",
      "dich einstellen",
      "in kontakt treten",
      "dir emailen",
      "dir nachrichten",
      "erreichen",
      "verbinden",
    ],
    fr: [
      "contact",
      "te contacter",
      "t'embaucher",
      "entrer en contact",
      "t'envoyer un email",
      "t'envoyer un message",
      "joindre",
      "se connecter",
    ],
    zh: [
      "联系",
      "联系你",
      "雇用你",
      "取得联系",
      "给你发邮件",
      "给你发消息",
      "联系",
      "连接",
    ],
    ko: [
      "연락",
      "너에게 연락",
      "너를 고용",
      "연락하기",
      "너에게 이메일",
      "너에게 메시지",
      "연락하기",
      "연결",
    ],
    ja: [
      "連絡",
      "あなたに連絡",
      "あなたを雇う",
      "連絡を取る",
      "あなたにメール",
      "あなたにメッセージ",
      "連絡する",
      "接続",
    ],
  },

  // Home/Top Keywords
  home: {
    en: [
      "home",
      "top",
      "start",
      "go to top",
      "homepage",
      "scroll to top",
      "back to top",
      "beginning",
      "start page",
    ],
    hi: [
      "home",
      "top",
      "start",
      "upar jao",
      "homepage",
      "shuru mein jao",
      "pehle jao",
      "beginning",
      "shuru",
    ],
    de: [
      "startseite",
      "oben",
      "anfang",
      "nach oben",
      "homepage",
      "zum anfang",
      "zurück nach oben",
      "beginn",
    ],
    fr: [
      "accueil",
      "haut",
      "début",
      "aller en haut",
      "page d'accueil",
      "retour en haut",
      "commencement",
    ],
    zh: [
      "首页",
      "顶部",
      "开始",
      "回到顶部",
      "主页",
      "滚动到顶部",
      "返回顶部",
      "开始",
    ],
    ko: [
      "홈",
      "상단",
      "시작",
      "맨 위로",
      "홈페이지",
      "맨 위로 스크롤",
      "처음으로",
      "시작",
    ],
    ja: [
      "ホーム",
      "トップ",
      "開始",
      "トップへ",
      "ホームページ",
      "トップにスクロール",
      "最初に戻る",
      "開始",
    ],
  },
};

// Helper function to get all keywords for a section across all languages
export const getAllKeywordsForSection = (
  section: keyof typeof VoiceCommandsKeywords
): string[] => {
  const sectionData = VoiceCommandsKeywords[section];
  return Object.values(sectionData).flat();
};

// Voice Commands Configuration
export const getVoiceCommands = (): VoiceCommand[] => [
  {
    keywords: getAllKeywordsForSection("about"),
    action: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    keywords: getAllKeywordsForSection("projects"),
    action: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    keywords: getAllKeywordsForSection("experience"),
    action: () =>
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    keywords: getAllKeywordsForSection("tech"),
    action: () =>
      document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    keywords: getAllKeywordsForSection("contact"),
    action: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    keywords: getAllKeywordsForSection("home"),
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
  },
  // Project-specific navigation
  {
    keywords: [
      "simba",
      "simba analytics",
      "simba project",
      "simba pe jao",
      "simba pe chalo",
      "simba dikhao",
      "go to simba",
      "show simba",
      "open simba",
      "beer brand",
      "whiskey",
    ],
    action: () => {
      // First scroll to projects section, then to specific project
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const projectElement = document.getElementById(
            "project-simba-analytics"
          );
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      }
    },
  },
  {
    keywords: [
      "getprojects",
      "getprojects ai",
      "getprojects project",
      "getprojects pe jao",
      "getprojects pe chalo",
      "getprojects dikhao",
      "go to getprojects",
      "show getprojects",
      "open getprojects",
      "get projects",
      "get projects ai",
    ],
    action: () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const projectElement = document.getElementById(
            "project-getprojects-ai"
          );
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      }
    },
  },
  {
    keywords: [
      "neuralhq",
      "neural hq",
      "neuralhq project",
      "neuralhq pe jao",
      "neuralhq pe chalo",
      "neuralhq dikhao",
      "go to neuralhq",
      "show neuralhq",
      "open neuralhq",
      "neural hq project",
    ],
    action: () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const projectElement = document.getElementById("project-neuralhq");
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      }
    },
  },
  {
    keywords: [
      "shule",
      "shule direct",
      "shule project",
      "shule pe jao",
      "shule pe chalo",
      "shule dikhao",
      "go to shule",
      "show shule",
      "open shule",
      "shule direct project",
    ],
    action: () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const projectElement = document.getElementById(
            "project-shule-direct"
          );
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      }
    },
  },
];
