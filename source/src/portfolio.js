/* Reza Nadimi — rezaxr14.github.io — portfolio content (all data from the official resume) */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Reza Nadimi",
  title: "Hi all, I'm Reza Nadimi",
  subTitle: emoji(
    "AI/ML engineer (M.S. Mechatronics, University of Tehran) building agentic and vision-language systems end to end: RL fine-tuning (SFT → GRPO), tool-using agents, agent memory and calibrated evaluation, delivered through production full-stack, DevOps and mobile work. Hands-on background in embedded systems (STM32, PLC) and robotics control."
  ),
  resumeLink: "Reza_Nadimi_Resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rezaxr14",
  linkedin: "https://linkedin.com/in/reza-nadimi-kojabad",
  gmail: "rezaxr14@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI / ML ENGINEER · VISION-LANGUAGE MODELS · RL · AGENTIC AI · EMBEDDED & ROBOTICS · FULL-STACK",
  skills: [
    emoji(
      "⚡ Agentic AI & LLM systems: tool calling, agent memory, harness engineering, calibrated evaluation"
    ),
    emoji("⚡ RL fine-tuning: SFT → GRPO with QLoRA, reward design, LLM-as-judge"),
    emoji(
      "⚡ Production delivery: full-stack, DevOps (Docker, Kubernetes, Argo CD), mobile (React Native / Expo)"
    )
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "VLMs", fontAwesomeClassname: "fas fa-eye"},
    {skillName: "Agentic AI", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-server"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Embedded", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "Android", fontAwesomeClassname: "fab fa-android"}
  ],

  /* Technical Skills groups — verbatim from the resume */
  skillGroups: [
    {
      title: "AI / ML",
      items: [
        "PyTorch", "Hugging Face (Hub, Transformers)", "TRL", "QLoRA", "LangChain", "LangGraph",
        "LLM agents & tool calling", "harness engineering", "agent memory", "retrieval (BM25, dense, hybrid RRF)",
        "SFT", "GRPO", "reinforcement learning (DQN, Dueling Double DQN, SAC)", "reward design", "distillation",
        "vision-language & multimodal models", "YOLOv8", "Faster R-CNN", "ONNX Runtime", "Stable-Baselines3",
        "Gymnasium", "MuJoCo", "NumPy", "Jupyter", "LLM-as-judge",
        "evaluation (bootstrap CIs, ECE calibration, uncertainty analysis)", "Gemini & OpenRouter APIs", "LM Studio"
      ]
    },
    {
      title: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "Java", "MATLAB", "Bash"]
    },
    {
      title: "Backend & Data",
      items: [
        "Django", "DRF", "FastAPI", "Celery", "RabbitMQ", "Redis", "PostgreSQL (RLS, pgTAP)", "SQLite",
        "Elasticsearch", "SQLAlchemy", "Alembic", "Drizzle ORM", "Better Auth",
        "Supabase (Auth, Storage, Edge Functions)", "Deno", "gunicorn", "WhiteNoise", "REST APIs", "SSE",
        "transactional outbox", "multi-tenancy", "RBAC", "rate limiting", "Telegram Bot API"
      ]
    },
    {
      title: "Frontend & Mobile",
      items: [
        "React", "Next.js (App Router)", "React Native", "Expo", "TanStack Query", "Redux", "Context API",
        "React Router", "Tailwind CSS", "Vite", "React Three Fiber", "Canvas2D", "Web Workers",
        "PWA & service workers", "i18n with RTL", "Android (Java)"
      ]
    },
    {
      title: "Linux & DevOps",
      items: [
        "Linux", "Bash & shell scripting", "SSH", "Git", "GitHub", "Docker", "Docker Compose", "Kubernetes",
        "Kustomize", "Argo CD (GitOps)", "nginx", "GitHub Actions", "GitHub Pages", "Vercel", "Cloudflare R2",
        "Prometheus", "CI/CD"
      ]
    },
    {
      title: "Testing",
      items: [
        "Playwright", "Vitest", "pytest", "pgTAP", "Deno test", "k6", "axe accessibility testing",
        "Django test framework", "golden-file parity tests"
      ]
    },
    {
      title: "Networking",
      items: [
        "Wireshark", "nmap", "TLS", "DNS-over-HTTPS", "SOCKS5", "WebSocket", "gRPC", "CIDR scanning",
        "Xray-core (VLESS, Trojan, VMess, Shadowsocks)", "DPI-evasion techniques", "Clash / Sing-box formats"
      ]
    },
    {
      title: "Cybersecurity",
      items: [
        "secure-by-design practices", "threat modeling", "least privilege", "RBAC & row-level security",
        "secrets management", "rate limiting", "CSP", "input validation",
        "supply-chain security (Trivy, pip-audit, cosign, Dependabot, digest pinning)"
      ]
    },
    {
      title: "Embedded & Control",
      items: [
        "STM32F103 (HAL, CubeMX)", "ARM Cortex-M", "Keil MDK-ARM", "Proteus", "Arduino", "ESP32", "GPIO",
        "EXTI interrupts", "UART/USART", "SPI", "I2C", "ADC", "timers", "PWM", "DMA", "Siemens S7 PLC",
        "STEP 7", "PLCSIM", "sensor fusion"
      ]
    },
    {
      title: "Robotics & Simulation",
      items: [
        "MATLAB", "Simulink", "Simscape Multibody", "inverse kinematics", "PID", "MPC", "state feedback",
        "observers", "RRT"
      ]
    },
    {
      title: "CAD/CAE, Thermo & CNC",
      items: [
        "SolidWorks", "CATIA", "Abaqus", "fluid simulation", "EES", "thermodynamics (exergy)", "CNC programming"
      ]
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Tehran",
      subHeader: "M.S. in Mechatronics Engineering (GPA 19.27/20, 4.0/4.0)",
      duration: "2025 – Present",
      desc: "College of Interdisciplinary Sciences & Technologies — ranked 1st (top student) in the 2025–26 master's cohort."
    },
    {
      schoolName: "University of Tabriz",
      subHeader: "B.S. in Mechanical Engineering (GPA 18.25/20, 3.91/4.0)",
      duration: "2021 – 2025",
      desc: "Tabriz, Iran."
    }
  ]
};

// Proficiency bars (disabled — no invented percentages)

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Researcher",
      company: "AIA CodeHive (University Research Lab)",
      companylogo: require("./assets/images/exp_aia.png"),
      date: "2025 – Present",
      desc: "Research on vision-language and multimodal LLMs.",
      descBullets: [
        "Conduct research on vision-language and multimodal LLMs, focusing on RL-based fine-tuning for performance and alignment.",
        "Authored two preprint papers on agentic AI and harness engineering.",
        "Preparing two further papers: AI in thermodynamics and AI in robotics."
      ]
    },
    {
      role: "Automation, AI & Web Developer (Part-Time)",
      company: "ArjKhazaer",
      companylogo: require("./assets/images/exp_ak.png"),
      date: "2021 – 2025",
      desc: "AI fault-detection tooling for industrial equipment.",
      descBullets: [
        "Engineered AI fault-detection tools, including a voice/noise-to-model pipeline that converts machine noise into diagnoses.",
        "Shipped one diagnostic experience across web, Android and Windows desktop."
      ]
    },
    {
      role: "Intern, CNC Programming & Technology Department",
      company: "Iran Tractor Manufacturing Company (ITMCO)",
      companylogo: require("./assets/images/exp_itmco.png"),
      date: "Summer 2024 (3 months)",
      desc: "Tabriz, Iran.",
      descBullets: [
        "Worked in the CNC programming and technology department of the largest engine-components manufacturer, gaining hands-on experience in automated machining."
      ]
    }
  ]
};

/* GitHub profile card disabled — static content only */

const openSource = {
  showGithubProfile: "false",
  display: false
};

/* Projects — 15 repositories + 2 papers in preparation */

const projectSection = {
  title: "Projects",
  display: true,
  projects: [
    {
      name: "Dental-Agent",
      subtitle: "Agentic VLM for Panoramic Radiographs",
      stack: ["Qwen3.5", "PyTorch", "QLoRA", "LangGraph", "YOLOv8", "GRPO", "Hugging Face"],
      image: require("./assets/projects/VLM-DENTAL.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/VLM-DENTAL"}]
    },
    {
      name: "RECAP",
      subtitle: "Memory & Recovery Engine for Tool-Using Agents",
      stack: ["Python 3.12", "FastAPI", "PostgreSQL", "Elasticsearch", "SQLAlchemy/Alembic", "Docker", "GitHub Actions"],
      image: require("./assets/projects/Recap.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/Recap"}]
    },
    {
      name: "DentalForge",
      subtitle: "Multi-Tenant Observability & Annotation Platform",
      stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth", "Redis", "SSE", "ONNX Runtime Web"],
      image: require("./assets/projects/DentalForge.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/DentalForge"}]
    },
    {
      name: "WhatToCook Smart Kitchen OS",
      subtitle: "Full-Stack AI Platform + GitOps",
      stack: ["Django 5.2/DRF", "React 18", "TypeScript", "Celery", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Argo CD"],
      image: require("./assets/projects/WhatToCook_Smart_Kitchen_OS.webp"),
      links: [
        {name: "GitHub", url: "https://github.com/rezaxr14/WhatToCook_Smart_Kitchen_OS"},
        {name: "Demo", url: "https://rezaxr14.github.io/WhatToCook_mobile_serverless/"}
      ]
    },
    {
      name: "WhatToCook Serverless",
      subtitle: "Android + Web on Supabase",
      stack: ["React Native (Expo)", "React PWA", "TypeScript", "Supabase", "Deno", "pnpm"],
      image: require("./assets/projects/WhatToCook_mobile_serverless.webp"),
      links: [
        {name: "GitHub", url: "https://github.com/rezaxr14/WhatToCook_mobile_serverless"},
        {name: "Demo", url: "https://rezaxr14.github.io/WhatToCook_mobile_serverless/"}
      ]
    },
    {
      name: "Xray Forge",
      subtitle: "DPI-Resistant Proxy-Config Toolkit + PWA",
      stack: ["Python", "Xray-core", "TLS", "DNS-over-HTTPS", "SOCKS5", "Clash / Sing-box"],
      image: require("./assets/projects/Xray_Forge.webp"),
      links: [
        {name: "GitHub", url: "https://github.com/rezaxr14/Xray_Forge"},
        {name: "Demo", url: "https://rezaxr14.github.io/Xray_Forge/"}
      ]
    },
    {
      name: "Embedded Control",
      subtitle: "STM32 & Siemens PLC (STEP 7)",
      stack: ["STM32F103", "C", "HAL/CubeMX", "Keil MDK-ARM", "Proteus", "STEP 7", "PLCSIM"],
      image: require("./assets/projects/STM32_PLC_MECH2_embedded.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/STM32_PLC_MECH2_embedded"}]
    },
    {
      name: "Autonomous Firefighting Robot",
      subtitle: "Arduino robot that navigates, detects and extinguishes small-scale fires with a three-sensor infrared flame array",
      stack: ["Arduino", "IR sensors", "servo motors", "DC motors"],
      image: require("./assets/projects/Autonomous-Firefighting-Robot.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/Autonomous-Firefighting-Robot"}]
    },
    {
      name: "Robotic Arm Control",
      subtitle: "Analytical IK vs. Reinforcement Learning",
      stack: ["Python", "PyTorch", "NumPy", "Gymnasium", "Stable-Baselines3", "MuJoCo"],
      image: require("./assets/projects/3D-Robot-Control-RL-Analytical.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/3D-Robot-Control-RL-Analytical"}]
    },
    {
      name: "Cart-Pole Control",
      subtitle: "Modern Control Design & Validation",
      stack: ["MATLAB", "Simulink", "Simscape Multibody"],
      image: require("./assets/projects/cart-pole-modern-control.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/cart-pole-modern-control"}]
    },
    {
      name: "Solar Panel Cleaning Robot",
      subtitle: "Requirements-driven design and multibody simulation",
      stack: ["SolidWorks", "Simscape Multibody", "MATLAB/Simulink", "ESP32"],
      image: require("./assets/projects/solar-panel-cleaning-robot.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/solar-panel-cleaning-robot"}]
    },
    {
      name: "CHP Plant with ORC Waste-Heat Recovery",
      subtitle: "Gas-turbine cogeneration (CHP) plant with an Organic Rankine Cycle (ORC) waste-heat recovery loop — energy and exergy analysis",
      stack: ["EES", "Thermodynamics"],
      image: require("./assets/projects/gas-turbine-cogeneration-orc-waste-heat-recovery.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/gas-turbine-cogeneration-orc-waste-heat-recovery"}]
    },
    {
      name: "Solar–Biomass Polygeneration Plant",
      subtitle: "Coupled plant modeled with hand-written fixed-point/Newton–Raphson solvers and validated against the published reference design",
      stack: ["MATLAB", "EES"],
      image: require("./assets/projects/PowerPlant_Supercritical_CO2_KALINA.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/PowerPlant_Supercritical_CO2_KALINA"}]
    },
    {
      name: "Finite Element Analysis of a Dental Implant",
      subtitle: "Multi-component implant assembly under multiple occlusal load configurations, stress/strain evaluation for different materials",
      stack: ["Abaqus", "SolidWorks"],
      image: require("./assets/projects/FEM-dental-implant.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/FEM-dental-implant"}]
    },
    {
      name: "Abaqus Structural Analysis",
      subtitle: "Four FEA studies, each validated against closed-form analytical solutions with parametric sweeps and mesh-convergence checks",
      stack: ["Abaqus", "Python", "MATLAB"],
      image: require("./assets/projects/abaqus-structural-analysis.webp"),
      links: [{name: "GitHub", url: "https://github.com/rezaxr14/abaqus-structural-analysis"}]
    },
    {
      name: "Agentic AI for Thermodynamics",
      subtitle: "Paper and repository in preparation.",
      stack: [],
      inPreparation: true,
      links: []
    },
    {
      name: "Multi-Agent Robotic Systems",
      subtitle: "Paper and repository in preparation.",
      stack: [],
      inPreparation: true,
      links: []
    }
  ]
};

/* Big / startup projects — not applicable, disabled */

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [],
  display: false
};

// Achievement Section — Honors & Certifications (all from the resume)

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Honors, rankings and certifications.",

  achievementsCards: [
    {
      title: "Ranked 1st — M.S. Cohort",
      subtitle:
        "Ranked 1st (top student) in the 2025–26 master's cohort, University of Tehran College of Interdisciplinary Sciences & Technologies.",
      image: require("./assets/images/ach_rank1.png"),
      imageAlt: "Ranked 1st in the master's cohort",
      footerLink: []
    },
    {
      title: "Rank 35 — National Master's Entrance Exam",
      subtitle:
        "Rank 35 (99th+ percentile), Iranian National Master's Entrance Examination in Mechanical Engineering.",
      image: require("./assets/images/ach_rank35.png"),
      imageAlt: "Rank 35 in the national entrance exam",
      footerLink: []
    },
    {
      title: "Esteddad-e Derakhshan & National Elite Foundation",
      subtitle:
        "Esteddad-e Derakhshan (national program for exceptionally talented students); National Elite Foundation (Bonyad Nokhbegan) Vezvaii Reward.",
      image: require("./assets/images/ach_elite.png"),
      imageAlt: "Elite programs",
      footerLink: []
    },
    {
      title: "Harvard CS50 (edX)",
      subtitle: "CS50x, CS50 AI, CS50 Python, CS50 Web, CS50 Cybersecurity.",
      image: require("./assets/images/ach_cs50.png"),
      imageAlt: "Harvard CS50 certificates",
      footerLink: [
        {name: "CS50x", url: "https://cs50.harvard.edu/certificates/d40d1757-4ad5-4080-a4ab-1171f9fde7f8"},
        {name: "AI", url: "https://cs50.harvard.edu/certificates/754d9bb9-25c4-4dfd-ad04-09a27b9599aa"},
        {name: "Python", url: "https://cs50.harvard.edu/certificates/31678fd9-51a0-4e27-867d-a33de9f575dc"},
        {name: "Web", url: "https://cs50.harvard.edu/certificates/ca173fde-b1ca-49bb-ab12-2f75407794f0"},
        {name: "Cybersecurity", url: "https://cs50.harvard.edu/certificates/56013fcf-f8bc-48e5-863d-b571cbc439f2"}
      ]
    },
    {
      title: "Faradars",
      subtitle: "Deep Learning, MATLAB, JavaScript, ReactJS, Java.",
      image: require("./assets/images/ach_fd.png"),
      imageAlt: "Faradars certificates",
      footerLink: [
        {name: "Deep Learning", url: "https://faradars.org/verify/79C67267?lang=en"},
        {name: "MATLAB", url: "https://faradars.org/verify/C44809FF?lang=en"},
        {name: "JavaScript", url: "https://faradars.org/verify/8631ED4F?lang=en"},
        {name: "ReactJS", url: "https://faradars.org/verify/F64F09D7?lang=en"},
        {name: "Java", url: "https://faradars.org/verify/024FC772?lang=en"}
      ]
    }
  ],
  display: true
};

// Blogs / Talks / Podcast / Twitter — not applicable, disabled

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out.",
  number: "+98 990 845 4035",
  email_address: "rezaxr14@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projectSection,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
