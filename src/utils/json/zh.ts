export const zh = {
  // Hero Section
  hero: {
    title: "全栈",
    subtitle: "开发人员",
    intro:
      "你好！我是{{name}}。一位富有创造力的全栈Web开发人员，拥有1.5年以上的经验，专注于构建高性能、可扩展和响应式的Web解决方案。",
    resumeButton: "下载简历",
    stats: {
      years: "工作经验",
      projects: "已完成项目",
      hours: "工作时间",
    },
  },

  // About Section
  about: {
    title: "关于*我*更多*",
    description:
      "我通过战略性全栈开发连接用户需求和业务目标，创建直观的数字解决方案，推动参与度并提供可衡量的投资回报率。",
    thisIsMe: "这就是我。",
    greeting: "你好，我是{{name}}。",
    paragraph1:
      "我是一名全栈Web开发人员，致力于将想法转化为创意解决方案。我专注于创建无缝且直观的用户体验。",
    paragraph2:
      "我的方法专注于创建可扩展、高性能的解决方案，既满足用户需求，又符合业务目标。通过优先考虑性能、可访问性和响应性，我努力提供不仅吸引用户而且产生切实成果的体验。",
  },

  // Tech Stack Section
  techStack: {
    title: "我的技术栈",
    categories: {
      frontend: "前端",
      backend: "后端",
      database: "数据库",
      tools: "工具",
    },
  },

  // Experience Section
  experience: {
    current: {
      title: "2025 - 现在",
      description:
        "目前正在从事高影响力、大规模的项目，这些项目推动了SEO、可扩展性和现代前端架构的边界。",
      items: {
        item1:
          "<strong>GetProjects.ai</strong> — 架构并构建了一个完全动态的、<strong>SEO友好的</strong>平台，拥有2000多个独特页面**，通过<strong>Next.js的</strong>动态路由和元数据系统呈现。针对Google的快速爬取和索引进行了优化。",
        item2:
          "集成了高级结构化数据和网站地图，以提高自然可见性。整个网站通过动态页面生成和强大的SEO策略可爬取和可索引。",
        item3:
          "为<strong>Engineerbabu.com</strong>网站改进做出了贡献，专注于UX/UI性能、模块化架构和清晰的组件化。",
        item4:
          "构建了一个<strong>Simba Beer品牌内部仪表板</strong>，利用<strong>Supabase</strong>、<strong>Next.js API路由</strong>、用于OCR的<strong>AWS Textract</strong>以及用于优雅管理界面的<strong>shadcn/ui</strong>。",
        item5:
          "使用Supabase实现了<strong>用户身份验证、数据管理和安全文件处理</strong>。使用服务器组件和现代React模式构建的可扩展、基于角色的访问系统。",
      },
    },
    neuralhq: {
      title: "2024 - 2025",
      description:
        "在<strong>NeuralHQ</strong>开发并推出了多个产品，包括：",
      role: "角色：<strong>全栈开发人员</strong>",
      items: {
        item1: "设计并构建了公司网站",
        item2: "开发了一个AI驱动的客户支持平台",
        item3: "创建了AI驱动的目录构建器",
        item4: "为卡纳塔克邦政府KDMS构建了移动应用程序",
      },
    },
    masai: {
      title: "2023年初",
      description1:
        "加入了Masai School的全栈Web开发计划，在那里我磨练了MERN（MongoDB、Express、React、Node.js）技术栈的技能。",
      description2:
        "在构建可扩展的Web应用程序、RESTful API和交互式UI方面获得了实践经验。通过数据结构和算法加强了解决问题的能力。",
      description3:
        "以下是我在学习过程中构建的一些项目和UI组件的示例。",
    },
  },

  // Projects Section
  projects: {
    title: "我的精选作品（项目）",
    seeMore: "查看更多项目",
    buttons: {
      sourceCode: "源代码",
      website: "网站",
    },
    list: {
      "simba-analytics": {
        title: "Simba分析仪表板和卖家应用",
        description:
          "使用Supabase、AWS Textract和Next.js的交互式分析仪表板和卖家应用。",
        fullDescription:
          "为Simba Beer构建了一个可扩展的分析平台。使用AWS Textract从PDF和Excel中提取公司数据，使用Supabase进行管理，并通过Recharts可视化洞察。包括一个用于实时跟踪目标的卖家移动应用。",
        features: [
          "通过AWS Textract从PDF和Excel中提取数据",
          "在Supabase中安全管理",
          "带有甜甜圈、折线和竞争图表的仪表板（Recharts）",
          "用于实时目标跟踪的卖家移动应用",
        ],
      },
      "getprojects-ai": {
        title: "GetProjects.ai - 动态项目平台",
        description:
          "在7天内构建了一个包含2000多个动态SEO页面的Next.js应用，获得了92+的Lighthouse分数。",
        fullDescription:
          "在7天的冲刺中，从概念到部署交付了这个全栈应用程序。核心架构使用嵌套路由生成超过2000个动态、SEO优化的页面。专注于性能优化，在移动和桌面设备上实现92+的Lighthouse分数，同时还通过API集成了自定义聊天机器人。",
        features: [
          "生成2000多个独特的、SEO友好的动态页面。",
          "用于直观导航的复杂嵌套动态路由。",
          "针对性能进行了优化，Lighthouse分数超过92。",
          "从零到发布的快速7天开发周期。",
          "集成的聊天机器人用于实时用户交互。",
        ],
      },
      neuralhq: {
        title: "企业网站",
        description:
          "为NeuralHQ设计的时尚现代网站，专为AI驱动的解决方案而设计。",
        fullDescription:
          "为NeuralHQ构建了官方网站，展示了AI驱动的技术和服务，具有引人入胜的UI和优化的性能。",
        features: [
          "高性能、现代化的UI。",
          "SEO优化，加载时间快。",
          "为可扩展性和响应性而构建。",
        ],
      },
      "shule-direct": {
        title: "Shule Direct项目",
        description:
          "一个面向教育的平台，专为学生、教师和家长设计，具有交互式学习和社会功能。",
        fullDescription:
          "Shule Direct是一个一体化教育平台，通过基于角色的系统连接学生、教师和家长。它提供关注和取消关注教师、类似Unacademy的实时聊天、教师评分和可编辑的学生档案等功能。学生可以通过消息与顶级教师互动，而家长可以轻松跟踪和监控学业进度。该平台在设计时非常注重性能、可用性和无缝的学习体验。",
        features: [
          "为学生、教师和家长提供基于角色的访问。",
          "通过评分系统关注和取消关注教师。",
          "类似Unacademy的实时聊天功能。",
          "学生档案编辑和个性化体验。",
          "显示顶级教师以便更好地发现。",
          "家长访问以监控学生参与度。",
        ],
      },
    },
  },

  // Contact Form
  contact: {
    title: "取得联系",
    subtitle: "填写下面的表单向我发送消息",
    form: {
      name: "输入您的姓名",
      namePlaceholder: "您的姓名",
      email: "输入您的电子邮件",
      emailPlaceholder: "您的电子邮件",
      message: "输入您的消息",
      messagePlaceholder: "您的消息",
      submit: "发送消息",
      sending: "发送中...",
    },
    thanks: {
      title: "感谢访问",
      subtitle: "我的网站",
      description:
        "我总是很高兴与新朋友联系并讨论潜在的机会。如有任何问题或想法，请随时联系我！",
    },
  },

  // Footer
  footer: {
    haveProject: "有项目想法吗？",
    copyright: "版权所有 © {{year}} Utkarsh",
  },

  // Navigation Menu
  menu: {
    social: "社交",
    menu: "菜单",
    home: "首页",
    about: "关于",
    projects: "项目",
    contact: "联系",
  },
};
