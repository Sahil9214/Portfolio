import { Project } from "@/context/projectContext";
export const projectsData: Project[] = [
  {
    id: "nebula-os",
    title: "Nebula OS",
    tagline: "Next-gen operating system for cloud computing",
    shortDescription:
      "A revolutionary cloud-native operating system built for the future of distributed computing.",
    fullDescription:
      "Nebula OS redefines what an operating system can be in the cloud era. Built from the ground up with distributed computing in mind, it provides seamless integration between local and cloud resources, intelligent workload distribution, and unparalleled security features. The system's neural architecture adapts to usage patterns, optimizing performance where you need it most while conserving resources elsewhere.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/nebula/os",
      live: "https://nebula-os.vercel.app",
    },
    features: [
      "Distributed kernel architecture",
      "Neural resource allocation",
      "Quantum-resistant encryption",
      "Zero-trust security model",
      "Adaptive user interfaces",
    ],
    techStack: ["Rust", "WebAssembly", "TensorFlow", "Kubernetes", "QUIC"],
    gradient:
      "linear-gradient(135deg, rgba(42, 27, 64, 0.9) 0%, rgba(24, 31, 68, 0.9) 100%)",
    shadowColor: "rgba(88, 28, 135, 0.3)",
  },
  {
    id: "quantum-forge",
    title: "Quantum Forge",
    tagline: "AI-powered development environment",
    shortDescription:
      "An intelligent IDE that understands your code at a semantic level and helps you build better software faster.",
    fullDescription:
      "Quantum Forge revolutionizes software development by deeply understanding code context and developer intent. Using advanced AI models trained on billions of lines of code, it provides intelligent code completion, refactoring suggestions, and bug detection that goes beyond syntax to understand semantic meaning. The environment adapts to your coding style and preferences, becoming a true pair programming partner that enhances your capabilities without getting in your way.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/quantum/forge",
      live: "https://quantum-forge.vercel.app",
    },
    features: [
      "Semantic code understanding",
      "Adaptive code completion",
      "Intelligent refactoring",
      "Integrated debugging with time-travel",
      "Natural language code generation",
    ],
    techStack: ["TypeScript", "Rust", "PyTorch", "WebGPU", "WASM"],
    gradient:
      "linear-gradient(135deg, rgba(25, 33, 52, 0.9) 0%, rgba(22, 84, 120, 0.9) 100%)",
    shadowColor: "rgba(14, 165, 233, 0.3)",
  },
  {
    id: "aurora-analytics",
    title: "Aurora Analytics",
    tagline: "Real-time data visualization platform",
    shortDescription:
      "A powerful analytics platform that transforms complex data into intuitive visual insights in real-time.",
    fullDescription:
      "Aurora Analytics makes data visualization an immersive experience. The platform ingests data from virtually any source and transforms it into interactive, real-time visualizations that reveal patterns and insights impossible to see in raw numbers. Using advanced GPU acceleration and innovative visualization techniques, Aurora handles billions of data points with smooth performance. The platform's AI assistant helps users explore their data through natural language queries, making advanced analytics accessible to everyone.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/aurora/analytics",
      live: "https://aurora-analytics.vercel.app",
    },
    features: [
      "Real-time data processing",
      "GPU-accelerated visualizations",
      "Natural language query interface",
      "Predictive analytics",
      "Collaborative dashboards",
    ],
    techStack: ["React", "D3.js", "WebGL", "TensorFlow.js", "Apache Kafka"],
    gradient:
      "linear-gradient(135deg, rgba(25, 33, 52, 0.9) 0%, rgba(98, 38, 145, 0.9) 100%)",
    shadowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    id: "nexus-mesh",
    title: "Nexus Mesh",
    tagline: "Decentralized communication network",
    shortDescription:
      "A peer-to-peer communication platform that operates without central servers, ensuring privacy and resilience.",
    fullDescription:
      "Nexus Mesh reimagines how we communicate online. This fully decentralized platform creates resilient mesh networks that operate without central servers or infrastructure. Messages and data flow directly between users through encrypted channels, making the network highly resistant to censorship and outages. The platform's innovative consensus protocol ensures reliable message delivery while maintaining strong privacy guarantees. With built-in support for voice, video, and data sharing, Nexus Mesh provides a complete communication solution that puts users in control.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/nexus/mesh",
      live: "https://nexus-mesh.vercel.app",
    },
    features: [
      "Serverless mesh architecture",
      "End-to-end encryption",
      "Censorship-resistant design",
      "Offline-first functionality",
      "Multi-modal communication",
    ],
    techStack: ["Rust", "WebRTC", "libp2p", "IPFS", "Noise Protocol"],
    gradient:
      "linear-gradient(135deg, rgba(30, 40, 58, 0.9) 0%, rgba(15, 69, 90, 0.9) 100%)",
    shadowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: "chronos-suite",
    title: "Chronos Suite",
    tagline: "Time management reimagined",
    shortDescription:
      "An intelligent productivity system that adapts to your work style and optimizes your schedule.",
    fullDescription:
      "Chronos Suite transforms time management from a chore into a superpower. This intelligent system learns your work patterns, energy levels, and priorities to create optimized schedules that maximize productivity while preventing burnout. The suite integrates deeply with your existing tools and calendar, providing a unified view of your commitments and automatically suggesting the best times for focused work, meetings, and breaks. With its AI coach, Chronos provides personalized insights and recommendations to help you continuously improve your relationship with time.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/chronos/suite",
      live: "https://chronos-suite.vercel.app",
    },
    features: [
      "Adaptive scheduling",
      "Energy-aware time blocking",
      "Deep work optimization",
      "Integrated time tracking",
      "AI productivity coaching",
    ],
    techStack: [
      "React",
      "Node.js",
      "TensorFlow.js",
      "Google Calendar API",
      "MongoDB",
    ],
    gradient:
      "linear-gradient(135deg, rgba(27, 34, 49, 0.9) 0%, rgba(65, 75, 91, 0.9) 100%)",
    shadowColor: "rgba(156, 163, 175, 0.3)",
  },
  {
    id: "terra-form",
    title: "Terra Form",
    tagline: "Procedural world generation engine",
    shortDescription:
      "A powerful engine for creating realistic, interactive virtual environments for games and simulations.",
    fullDescription:
      "Terra Form pushes the boundaries of procedural generation to create vast, detailed virtual worlds that feel alive and authentic. The engine uses advanced algorithms inspired by natural processes to generate terrain, ecosystems, weather patterns, and even civilizations that evolve over time. With its modular architecture, developers can customize every aspect of the generation process or let the AI handle the details. The resulting environments are not just visually stunning but also physically accurate, with realistic water flow, erosion, climate systems, and ecological interactions.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/terra/form",
      live: "https://terra-form.vercel.app",
    },
    features: [
      "Realistic terrain generation",
      "Dynamic ecosystem simulation",
      "Climate and weather systems",
      "Procedural architecture",
      "Time-based evolution",
    ],
    techStack: ["C++", "Vulkan", "CUDA", "OpenSimplex", "Unreal Engine"],
    gradient:
      "linear-gradient(135deg, rgba(16, 88, 69, 0.9) 0%, rgba(16, 105, 80, 0.9) 100%)",
    shadowColor: "rgba(5, 150, 105, 0.3)",
  },
  {
    id: "pulse-network",
    title: "Pulse Network",
    tagline: "Next-gen social platform",
    shortDescription:
      "A social network designed around meaningful connections and thoughtful discourse rather than engagement metrics.",
    fullDescription:
      "Pulse Network reimagines what social media can be when designed for human wellbeing rather than engagement maximization. The platform uses innovative algorithms that prioritize meaningful interactions, diverse perspectives, and thoughtful discourse over content that triggers outrage or anxiety. With its unique conversation mechanics, Pulse encourages users to slow down, reflect, and engage more deeply with fewer, higher-quality connections. The platform's transparent content curation gives users full control over what they see and why, creating a more intentional and fulfilling social experience.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/pulse/network",
      live: "https://pulse-network.vercel.app",
    },
    features: [
      "Wellbeing-centered design",
      "Transparent content curation",
      "Conversation-focused interactions",
      "Digital wellbeing tools",
      "Community governance",
    ],
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "TensorFlow"],
    gradient:
      "linear-gradient(135deg, rgba(134, 68, 247, 0.9) 0%, rgba(149, 102, 256, 0.9) 100%)",
    shadowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    id: "echo-studio",
    title: "Echo Studio",
    tagline: "AI-powered audio production suite",
    shortDescription:
      "A comprehensive audio production environment with AI-assisted mixing, mastering, and sound design.",
    fullDescription:
      "Echo Studio brings the power of AI to audio production, making professional-quality results accessible to creators of all skill levels. The suite features intelligent tools for recording, editing, mixing, and mastering that adapt to your project and style. Its revolutionary AI assistant can generate custom sound effects, suggest mix improvements, and even compose accompanying tracks based on your existing audio. With its intuitive interface and real-time collaboration features, Echo Studio streamlines the production workflow while expanding creative possibilities for musicians, podcasters, sound designers, and audio engineers.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/echo/studio",
      live: "https://echo-studio.vercel.app",
    },
    features: [
      "AI-assisted mixing and mastering",
      "Generative sound design",
      "Adaptive noise reduction",
      "Spatial audio editing",
      "Real-time collaboration",
    ],
    techStack: [
      "Web Audio API",
      "TensorFlow.js",
      "WebAssembly",
      "React",
      "FFmpeg",
    ],
    gradient:
      "linear-gradient(135deg, rgba(40, 51, 69, 0.9) 0%, rgba(81, 95, 115, 0.9) 100%)",
    shadowColor: "rgba(148, 163, 184, 0.3)",
  },
  {
    id: "fusion-lab",
    title: "Fusion Lab",
    tagline: "Collaborative research platform",
    shortDescription:
      "A virtual laboratory environment for collaborative scientific research and experimentation.",
    fullDescription:
      "Fusion Lab breaks down the barriers to collaborative scientific research with a comprehensive virtual laboratory environment. The platform provides powerful tools for data analysis, simulation, visualization, and knowledge management that adapt to the specific needs of different scientific disciplines. Its innovative collaboration features allow researchers around the world to work together in real-time, sharing data, models, and insights seamlessly. With integrated publishing tools and open science principles at its core, Fusion Lab accelerates the research cycle from hypothesis to publication, making scientific collaboration more efficient, transparent, and accessible.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/fusion/lab",
      live: "https://fusion-lab.vercel.app",
    },
    features: [
      "Virtual experiment environments",
      "Real-time collaborative analysis",
      "Reproducible research workflows",
      "Integrated publishing tools",
      "Cross-disciplinary data visualization",
    ],
    techStack: ["Python", "Julia", "WebGL", "Docker", "Jupyter"],
    gradient:
      "linear-gradient(135deg, rgba(40, 68, 148, 0.9) 0%, rgba(39, 88, 226, 0.9) 100%)",
    shadowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    id: "prism-design",
    title: "Prism Design",
    tagline: "Generative design system",
    shortDescription:
      "An AI-powered design system that generates consistent, accessible, and beautiful user interfaces.",
    fullDescription:
      "Prism Design revolutionizes UI creation with a generative approach to design systems. Rather than providing fixed components, Prism uses AI to generate custom design elements that maintain perfect consistency while adapting to your brand identity and user needs. The system automatically ensures accessibility, responsive behavior, and performance optimization across all generated components. With its intuitive natural language interface, designers and developers can quickly iterate on ideas, exploring design possibilities and refining the system's output until it perfectly matches their vision.",
    image: "/placeholder.svg?height=600&width=800",
    links: {
      github: "https://github.com/prism/design",
      live: "https://prism-design.vercel.app",
    },
    features: [
      "AI-generated component library",
      "Adaptive design system",
      "Automatic accessibility compliance",
      "Natural language design interface",
      "Cross-platform consistency",
    ],
    techStack: ["React", "TypeScript", "TensorFlow.js", "WebGL", "SVG"],
    gradient:
      "linear-gradient(135deg, rgba(167, 33, 87, 0.9) 0%, rgba(229, 49, 129, 0.9) 100%)",
    shadowColor: "rgba(236, 72, 153, 0.3)",
  },
];
