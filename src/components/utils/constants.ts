const SVGREPO_CDN_BASE_URL = "https://cdn.svgrepo.com/show";

export const NAV = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Learning",
  "Education",
  "Contact",
];

export const TICKER_ITEMS = [
  "React.js",
  "TypeScript",
  "Core Web Vitals",
  "Web Accessibility",
  "GraphQL",
  "Jest",
  "Micro-frontend",
  "Design Systems",
  "Tailwind CSS",
];

export const CONTACT_ITEMS = [
  // {
  //   label: "Email",
  //   value: "bsendrayaperumal@gmail.com",
  //   href: "mailto:bsendrayaperumal@gmail.com",
  //   logoUrl: `${SVGREPO_CDN_BASE_URL}/452213/gmail.svg`,
  //   arrow: true,
  // },
  // {
  //   label: "Phone",
  //   value: "+91 90723 09455",
  //   href: "tel:+919072309455",
  //   logoUrl: `${SVGREPO_CDN_BASE_URL}/474937/phone.svg`,
  //   arrow: true,
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sendrayaperumal-balathandayutham-2b108282/",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/475661/linkedin-color.svg`,
  },
  {
    label: "GitHub",
    href: "https://github.com/sendray",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/475654/github-color.svg`,
  },
  // { label: "Location", value: "India", href: undefined, arrow: false },
];

export const SKILLS = [
  {
    cat: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Micro-frontend",
      "Design System",
      "Alpine.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  // {
  //   cat: "AEM",
  //   items: [
  //     "HTL / Sightly",
  //     "AEM Sites",
  //     "AEM Forms",
  //     "ClientLibs",
  //     "CIF Components",
  //     "Experience Fragments",
  //     "Content Fragments",
  //     "SPA Editor",
  //   ],
  // },
  {
    cat: "Performance",
    items: [
      "Core Web Vitals",
      "Lazy Loading",
      "Code Splitting",
      "Lighthouse",
      "Image Optimization",
      "React Profiler",
      "React Hooks",
    ],
  },
  {
    cat: "Tools & Integration",
    items: [
      "Jest",
      "React Testing Library",
      "AXE",
      "NVDA",
      "Wave",
      "GraphQL",
      "REST API",
      "Webpack",
      "Parcel",
      "Vercel",
      "GIT",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Technical Lead — Software Engineer",
    company: "Tech Mahindra Private Limited",
    period: "Aug 2025 – Present",
    location: "Bengaluru, India",
    accent: false,
    bullets: [
      "Senior Frontend Developer contributing to the Beam Design System to ensure enterprise UI consistency.",
      "Worked for accessibility and performance audits with WCAG standards.",
    ],
  },
  {
    title: "Senior Lead Software Engineer",
    company: "Pattem Digital Technologies (Adobe)",
    period: "Jul 2023 – May 2025",
    location: "Bengaluru, India",
    accent: false,
    bullets: [
      "Extensive experience working with React with AEM for Adobe projects.",
      "Expertise in designing user interfaces that are cross-browser and device compatible, guaranteeing a unified platform experience.",
      "Proficiency utilizing Jest to create unit tests for components.",
      "Profundity with AXE, Wave, and NVDA accessibility tools.",
      "Integrated GraphQL/REST APIs in various projects.",
      "Experience in using HTL, AEM sites, CIF components in AEM front-end development.",
    ],
  },
  {
    title: "Senior UI Engineer",
    company: "Prevalent AI India Private Limited",
    period: "Nov 2021 – Jul 2023",
    location: "Kochi, India",
    accent: false,
    bullets: [
      "Built and published reusable web components using Lit to private npm registry.",
      "Experience using third-party and customized CSS frameworks (Material UI, Bootstrap, Tailwind CSS) to create responsive web design.",
      "Developed and kept up-to-date release notes, usage documentation, and developer guides for UI Library components.",
      "Participates in writing technical documentation and peer code reviews.",
    ],
  },
  {
    title: "Assistant Consultant",
    company: "Tata Consultancy Services",
    period: "Nov 2015 – Nov 2021",
    location: "Kochi, India",
    accent: false,
    bullets: [
      "Developed web applications in React and Angular projects together with clients in the Middle East and Europe.",
      "Made widgets and specialized parts for banking and life insurance portfolios and extensively used Duet Design System with Angular.",
      "Improved Lighthouse scores and web accessibility across projects.",
      "Experience in using Node.js and Joi validations.",
      "Experience in using Postman to perform API contract testing.",
      "Enhanced Lighthouse Audit performance and web accessibility across several projects.",
    ],
  },
  {
    title: "Senior Software Developer & UX Designer",
    company: "OneModo Technologies Pvt Ltd",
    period: "Nov 2013 – Oct 2015",
    location: "Chennai, India",
    accent: false,
    bullets: [],
  },
  {
    title: "PHP Developer",
    company: "BigSpire Software Private Limited",
    period: "Nov 2012 – Oct 2013",
    location: "Chennai, India",
    accent: false,
    bullets: [],
  },
];

export const LEARNING = [
  {
    title: "Namaste AI",
    by: "Akshay Saini",
    status: "progress" as const,
    progress: 28,
    desc: "Understading the fundamentals of AI and how to leverage it for building AI-driven applications.",
    tags: [
      "Artificial Intelligence",
      "LLMs",
      "RAG",
      "Gen AI",
      "Agentic AI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Namaste React",
    by: "Akshay Saini",
    status: "progress" as const,
    progress: 68,
    desc: "Understading why React is the way it is, and how to use it effectively for building scalable applications.",
    tags: ["React", "Hooks", "Redux", "Performance", "Lazy Loading"],
  },
  {
    title: "Namaste JavaScript",
    by: "Akshay Saini",
    status: "completed" as const,
    progress: 100,
    desc: "Deep dive into internals and how JavaScript works under the hood.",
    tags: [
      "Event loop",
      "Closures",
      "Hoisting",
      "Promises",
      "Async/Await",
      "Functional Programming",
    ],
  },
];
