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
