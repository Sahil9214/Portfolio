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
      logo: "https://img.icons8.com/?size=288&id=yUdJlcKanVbh&format=png",
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
      logo: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fframer-motion.png&w=48&q=75",
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
      logo: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnode.png&w=48&q=75",
    },
    { name: "Nest.js", logo: "https://img.icons8.com/?size=288&id=9ESZMOeUioJS&format=png" },
    {
      name: "Express.js",
      logo: "https://img.icons8.com/?size=200&id=2ZOaTclOqD4q&format=png",
    },
  ],
  database: [
    { name: "MySQL", logo: "https://img.icons8.com/?size=200&id=QeIg9siFKGgp&format=png" },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/?size=288&id=38561&format=png",
    },
    { name: "MongoDB", logo: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png" },
    { name: "Supabase", logo: "https://img.icons8.com/?size=288&id=grZaE9tjqDyr&format=png" }
  ],
  tools: [
    {
      name: "Git",
      logo: "https://img.icons8.com/?size=288&id=20906&format=png",
    },
    { name: "Docker", logo: "https://img.icons8.com/?size=200&id=cdYUlRaag9G9&format=png" },
    {
      name: "AWS",
      logo: "https://img.icons8.com/?size=288&id=33039&format=png",
    },
  ],
};

export const projects = [
  {
    id: "getprojects-ai",
    title: "GetProjects.ai - Dynamic Project Platform",
    // Short description ab aur bhi punchy hai
    description: "Built a Next.js app with 2,000+ dynamic SEO pages in 7 days, achieving a 92+ Lighthouse score.",

    // fullDescription ab seedha skills aur results pe focus karta hai
    fullDescription: "Delivered this full-stack application from concept to deployment in a 7-day sprint. The core architecture generates over 2,000 dynamic, SEO-optimized pages using nested routing. Focused heavily on performance optimization to achieve 92+ Lighthouse scores on mobile and desktop, while also integrating a custom chatbot via API.",

    color: "purple",
    gradient: "linear-gradient(188.62deg, #2E1065 49.9%, #4C1D95 81.7%, #7C3AED 93.88%, #A78BFA 113.5%)",
    shadow: "0 0 30px #7C3AED",
    image: "/getProjects.png",
    link: "https://getproject.ai",
    github: "",

    // Yeh features list bilkul perfect hai, short aur to-the-point
    features: [
      "Generates 2000+ unique, SEO-friendly dynamic pages.",
      "Complex nested dynamic routing for intuitive navigation.",
      "Optimized for performance with 92+ Lighthouse scores.",
      "Rapid 7-day development cycle from scratch to launch.",
      "Integrated chatbot for real-time user interaction."
    ],
    alt: "GetProjects.ai platform screenshot",
    technologies: [
      {
        name: "Next.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=48&q=75"
      },
      {
        name: "React",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=48&q=75"
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=48&q=75"
      },
      {
        name: "TypeScript",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=48&q=75"
      },
      {
        name: "Node.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnode.png&w=48&q=75"
      },
      {
        name: "Vercel",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fvercel.svg&w=48&q=75"
      }
    ]
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
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=48&q=75",
      },
      {
        name: "React",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=48&q=75",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=48&q=75",
      },
      {
        name: "TypeScript",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=48&q=75",
      },
    ],
  },
  // {
  //   id: "google-translator-2",
  //   title: "Google Translator 2.0",
  //   description:
  //     "AI-powered translation tool with Gemini AI, supporting text-to-speech, speech-to-text, and multi-language selection.",
  //   fullDescription:
  //     "Developed an advanced translation tool using Gemini AI, allowing users to convert any language into another. Features include text-to-speech, speech-to-text, and real-time AI-powered translation with enhanced accuracy.",
  //   color: "red",
  //   gradient:
  //     "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
  //   shadow: "0 0 30px #DB2777",
  //   image: "/googleTranslator.png",
  //   link: "https://translator-google.vercel.app/",
  //   github: "https://github.com/your-github/google-translator-2.0",
  //   features: [
  //     "Powered by Gemini AI for accurate translations.",
  //     "Supports text-to-speech and speech-to-text.",
  //     "User-friendly UI with seamless multi-language selection.",
  //   ],
  //   alt: "Google Translator 2.0 image",
  //   technologies: [
  //     {
  //       name: "Next.js",
  //       icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=48&q=75",
  //     },
  //     {
  //       name: "React",
  //       icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=48&q=75",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=48&q=75",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=48&q=75",
  //     },
  //     {
  //       name: "Gemini AI",
  //       icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC7ElEQVRYhcWWPWsUURSGn3PvxMnXJBFM4QcksVAxXfAniAZ/gaWFFhZqEhTUJCRGUDRq1kILwSZiayFEEBT/gJZ+VBoQFNQiqLNZs3PvsZjd7KqJye5o9sKyd5a973l4z5lzLmRYc7d929xtvzWLhslyuKh0FZWuxgF42elUehsHoOxLlIHGAXgOJZ7BLBpBlsPfYX+kWRQyOHAh50/kUfLAbE5PbTjAN2U6rxADBbi+oQBHZtxkHsIYKLlg7+T0aj1aUuuBwRnX2wbvIqAdoR2IBCKEVth7dEhe16JXmwPnlVj1TZ7U+nINxAoxSgFePshp+H8Abn5n1xb3KYYwD6wCIR/h08MZ3fRvAW4Ue7pcWMhDdxosDVqBYBkij3Z8EBZnc7r7nwB0XU7G25zMLyphTFXgXyD0F4gYNQV4cy+nl9bSX7UIt0+4o0XLzcRqa2IhsYq30EZacO1QKsCqffl3SQu0A2gWlgJh5PBJubUiQN+o3wx0Ar3AAHAAOJgYcFYpB08sFK2C+S3YbxDtCFEVRJRC0GQgEJ42GX0cCC+aDPMCC+VWLKTpCIAQIPCACCqKIijpd4ISm/TPyx9VRKT0rBgEo2Ak3YsCHsQQWiVQqaR+1RT0jfohhSvOsqlYcqDsSNEogYFoBdujKidKPUI7kbPHh2TFRrVmI+oZ81PO6nhi+CMdoVQAUtur9kAHcu36sDnzN/11dcKeMd+XWH2dWMIyQAqktKwMoRH03x+2a3bFdbfiYyhzk/6zM2xZhig5Uv1mRPC1RaT72bBdWo9uTbNgHOXupC8sO2Eqr2dpNmgL0vJqxP5Yr2ZNs+AigvXsCRxYJ1gP1gvi0yb0De2vJXjNAADvp+y8US4EHgIvBB4CJ3jP9JeRppomIdQxjstrx4QrJIawVAdu4VxQ1/Wu7huR9XImTQEETk7Xq5Np9Yx53TbpMl1LM92KjfIkcNLcMADgkfW0NhLgOWnXbRjAW6CjkQALgM8i8BOvpjwT7G/2qQAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       name: "Speech Recognition API",
  //       icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEUVFBoAAAAAAAsAAAXGxsfc3Nxramzi4uOEhIUJBxA2NTn////l5eWxsLKbm5yXl5ljY2U8PD/Q0NFbWl3y8vK4uLkaGR9GRUihoaIAAAhxcXO+vr99fX8nJyv7+/uQkJHW1td4h7FUAAAAsElEQVR4Ac3RBQKDMBAEQBZNurg7/P+VzdV7LwDiE4933Q8AJPcBBNrCKIzgLE7CyPyrvTGNCOnEjDn+EAXzJ5IlNUasEod+ybrR6LGFIDKaUiEMuye27GONNWNBOzCBRpAQxMhR4zQzfGLKSiMWroHgxha+xp2TJ3gw0+g3PCGIk42vEBmPJ3KHp7HlZgVjLhrd4VJXQ8qF86RwWqNDcKnDE65v8/dkE/D73BZiV/zuQNAJugNKvQoAAAAASUVORK5CYII=",
  //     },
  //   ],
  // },

  {
    id: "booking-clone",
    title: "Booking.com Clone",
    description:
      "A feature-rich booking platform built collaboratively with a team of four.",
    fullDescription:
      "Developed a functional clone of Booking.com with real-time booking features, interactive UI, and a smooth user experience.",
    color: "emerald",
    gradient:
      "linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
    shadow: "0 0 30px #059669",
    image: "/booking.png",
    link: "https://mbooking-beta.vercel.app/",
    github: "https://github.com/Subham0629/Booking.com",
    features: [
      "Collaborated in a team of four developers.",
      "Implemented real-time search and booking.",
      "Optimized for performance and usability.",
    ],
    alt: "Booking.com Clone website image",
    technologies: [
      {
        name: "Next.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=48&q=75",
      },
      {
        name: "React",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=48&q=75",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=48&q=75",
      },
      {
        name: "TypeScript",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=48&q=75",
      },
      {
        name: "Node.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnode.png&w=48&q=75",
      },
      {
        name: "MongoDB",
        icon: "https://www.me.toinfinite.dev/logo/mongodb.svg",
      },
    ],
  },
  {
    id: "linkforge",
    title: "LinkCut – Secure URL Shortener",
    description:
      "A full-stack URL shortener with authentication and analytics, built for performance and security.",
    fullDescription:
      "Developed a robust URL shortening service where users can register, shorten long links, and track analytics. The application is secured using JWT and bcrypt, with a responsive frontend using Next.js and ShadCN UI. Frontend is deployed on Vercel and backend on Render, ensuring scalability and optimal performance.",
    color: "indigo",
    gradient:
      "linear-gradient(188.62deg, #312E81 49.9%, #6366F1 81.7%, #A5B4FC 93.88%, #F9D793 113.5%)",
    shadow: "0 0 30px #6366F1",
    image: "/urlshortner.png", // replace with your actual image path
    link: "https://url-shortner-web.vercel.app/", // replace with actual deployed link
    github: "https://github.com/Sahil9214/url-shortner",
    features: [
      "User authentication with JWT and bcrypt.",
      "Shorten long URLs with custom aliases.",
      "Track number of visits and link creation date.",
      "Secure backend with Express and MongoDB.",
      "Responsive UI with Next.js, Tailwind, and ShadCN.",
    ],
    alt: "LinkCut – Secure URL Shortener website image ",
    technologies: [
      {
        name: "Next.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnext.png&w=48&q=75",
      },
      {
        name: "React",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Freact.png&w=48&q=75",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Ftailwind.png&w=48&q=75",
      },
      {
        name: "TypeScript",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fts.png&w=48&q=75",
      },
      {
        name: "Node.js",
        icon: "https://www.me.toinfinite.dev/_next/image?url=%2Flogo%2Fnode.png&w=48&q=75",
      },
      {
        name: "Express",
        icon: "https://www.me.toinfinite.dev/logo/express.svg",
      },
      {
        name: "MongoDB",
        icon: "https://www.me.toinfinite.dev/logo/mongodb.svg",
      },
      {
        name: "JWT",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEwZGRkZGRkZGRkYGBgZGRkDAwMuLi6NjY3Q0NDy8vL///97e3tnZ2fi4uJKSkqqqqqgNU5tAAAABnRSTlMAJq/y/2Eq/t9kAAAAx0lEQVR4AX3T4RKFEBQEYOFuOND7P+3N7HA0VftLfbMDyRizWedvcXYzZ37+Jb+z51+zGTuGmBlvrHEU7CEmyVlSDDvoztBKlZ5SpKdmKrEJs+/CNEWwIAlIHBXcMADhDSvOYX3GxA2kJ4wgIl7Rt3o0Wtd21OYV9Vz0SZsSw2AgRLk0+3oKdHFYMXKJw+JE3WgfcpsTtXoAxywSmfVs+UYRTb9Kw4I6bSmcUHHp5szeQKfqawjVqzlesMkgMfbzan5e6s/f4Q+W3BLBzhB6zgAAAABJRU5ErkJggg==", // replace with your JWT icon or placeholder
      },
      {
        name: "Bcrypt",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgElEQVR4Ad2XA7PkUBCFp/aPrG3btm3btm0U1rZt27btiY2z6dV48ZLHryrupM9Fnb7x+cYgVdolzIg0S76+T7PEj4TYKBflpNw+OqGbibF9F+G+5e56wkcnibklPwFpna3OTg4TL0pYc0/FtscqNjxQseC6jN7HRRRax3otIJC43wkRz1gTf8Kygf3PNRTfwHonIOcqBide6/gfvsgWym9m3QvItMyPqx8NEF8VC4tuKWi6l0fe1QyoVzIv96PqNg5037QRwtUPhnsBHQ4JeMKYGH9BQtYVP+5V2sph+mU5InbSRRnhlNnEejsJS21kwak2RN2OeJZvDYNw2h4QvBVw9KUOwq9ECsjoDFc4zfbx3gmovp3DLx74zYjnFbewCEYxbORcyXgnYN19Fb/Y81QD3cu1ikG1bRwqbGFDnhMzr8je+UAGp3sZNTDNpzqTcNApEYaFCEwbjjEpSOulETXZwyOYlvt5zL4qIxofJIvivXXC+dcDyWwbyL3qhw80chINPi2iz3ERF94bgV6wQPe8E3Ax8HHyhagx5TazsBFAM21yQ/cC0i/1QzYCn97ySIsVG1ErVt9T3Qsou5lFEDT2MWNPv9ERzI1PhnsBNOGCGXNOihUbUbSoR1wL6HVMRBBUlqPGpXOG6p1oIZg7X1z0wKEXOnVhyAQk2h+M7u9jz0sIg6pk3AVMuSQjGlQJS2xgqcU0QVFtO0erItg2QqB6UWitSysefEqEP+CAEY5n2YgK67zTYDfvjQ/kWMlg1DmJFibhCSPQnQBaJxZbz8bPorSA06VdjwiYd012/EDFbqcobXaO5P3djwrIs5pJ0cty77dE/zVL9J/TRP89/wYoHplyX4z7pQAAAABJRU5ErkJggg==", // replace with your bcrypt icon or placeholder
      },
      {
        name: "ShadCN UI",
        icon: "https://www.shadcnblocks.com/images/block/block-1.svg", // add or replace with valid icon
      },
      {
        name: "Vercel",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAeklEQVR4Ae3KsQnAIBQE0FtJcBh3cRJbITvYOIRLuILl5WMVCAmqQgj4qv/vDtv2jaPCWqywUAiBlRxYQmvNC6UU5qWUeCEvJhljeCMhZuSceSMhhllr+UAqjCml8IFUGOCc4ysZoBcboEuMkQ1khnbee9dAZti2vzoBA1oc6SnKeswAAAAASUVORK5CYII=",
      },
      {
        name: "Render",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwklEQVR4AWJwL/ABtF8HJxCDQBSGT6kh121kWrAFe7ADK0kZtmATW4QVzL6DgSUQSZ4jgeDAd/aPyEAe9a4AjEAC/ZNAhgfsBzfkYQGYDHrB1zQAs4AHvSGa3gCmgN5heQMrKEGsAhwZ4K0CNjLAWQUo6UMEmH196X6EGAHtuv6Kfnik7XQRYWTUtVehuYr3VQkRHEgVIF1Zs5APEgRY6jntAFKBlX7MBgH04RYBmT/cJiDNgBkwA2bAqwIiwc+f014/Ki3k6gX4gg8AAAAASUVORK5CYII=",
      },
    ],
  },
];

// PROJECT DATA
