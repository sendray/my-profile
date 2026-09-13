const SVGREPO_CDN_BASE_URL = "https://cdn.svgrepo.com/show";

export const NAV_LINKS = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Resume",
  "Contact",
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
    skill: "React",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/493719/react-javascript-js-framework-facebook.svg`,
  },
  {
    skill: "JavaScript",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/349419/javascript.svg`,
  },
  {
    skill: "TypeScript",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/349540/typescript.svg`,
  },
  {
    skill: "Tailwind",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/374118/tailwind.svg`,
  },
  {
    skill: "Material UI",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/354048/material-ui.svg`,
  },
  {
    skill: "Bootstrap",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/353498/bootstrap.svg`,
  },
  {
    skill: "HTML5",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/349402/html5.svg`,
  },
  {
    skill: "CSS3",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/452185/css-3.svg`,
  },
  {
    skill: "Vite",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/374167/vite.svg`,
  },
  {
    skill: "Parcel",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/354161/parcel-icon.svg`,
  },
  {
    skill: "Webpack",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/354552/webpack.svg`,
  },
  {
    skill: "AXE",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/331301/axe.svg`,
  },
  {
    skill: "NVDA",
    logoUrl:
      "https://s.yimg.com/zb/imgv1/20b3e978-d47d-3f6c-8b9e-7cac2b928c3a/t_500x300",
  },
  {
    skill: "GraphQL",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/373644/graphql.svg`,
  },
  {
    skill: "Postman",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/354202/postman-icon.svg`,
  },
  {
    skill: "Jira",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/353935/jira.svg`,
  },
  {
    skill: "Git",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/452210/git.svg`,
  },
  {
    skill: "Jest",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/353930/jest.svg`,
  },
  {
    skill: "Lighthouse",
    logoUrl: `${SVGREPO_CDN_BASE_URL}/353997/lighthouse.svg`,
  },
  {
    skill: "RTL",
    logoUrl: "https://testing-library.com/img/octopus-64x64.png",
  },
];

// export const SKILLS = [
//   {
//     category: "Frontend",
//     items: [
//       "React.js",
//       "TypeScript",
//       "JavaScript",
//       "Micro-frontend",
//       "Alpine.js",
//       "Tailwind CSS",
//       "Bootstrap",
//       "Material UI",
//       "HTML5",
//       "CSS3",
//     ],
//   },
//   {
//     category: "AEM",
//     items: [
//       "HTL",
//       "AEM Sites",
//       "ClientLibs",
//       "CIF Components",
//       "Component Development",
//       "Experience Fragments",
//     ],
//   },
//   {
//     category: "Performance & Tools",
//     items: [
//       "Vite",
//       "Webpack",
//       "Parcel",
//       "AXE",
//       "NVDA",
//       "Lighthouse Audits",
//       "Jest",
//       "React Testing Library",
//       "Core Web Vitals",
//     ],
//   },
//   {
//     category: "Collaboration",
//     items: [
//       "REST API",
//       "GraphQL",
//       "Agile / Scrum",
//       "JIRA"
//     ],
//   },
// ];

export const EXPERIENCE = [
  {
    title: "Technical Lead – Software Engineer",
    company: "Tech Mahindra Private Limited",
    period: "08/2025 – Present",
    location: "Bengaluru, India",
    bullets: [
      "Senior Frontend Developer contributing to the Beam Design System to ensure enterprise UI consistency.",
      "Worked for accessibility and performance audits with WCAG standards.",
    ],
  },
  {
    title: "Senior Lead Software Engineer",
    company: "Pattem Digital Technologies (Adobe)",
    period: "07/2023 – 05/2025",
    location: "Bengaluru, India",
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
    period: "11/2021 – 07/2023",
    location: "Kochi, India",
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
    period: "11/2015 – 11/2021",
    location: "Kochi, India",
    bullets: [
      "Developed web applications in React and Angular projects together with clients in the Middle East and Europe.",
      "Made widgets and specialized parts for banking and life insurance portfolios and extensively used Duet Design System with Angular.",
      "Improved Lighthouse scores and web accessibility across projects",
      "Experience in using Node.js and Joi validations.",
      "Experience in using Postman to perform API contract testing.",
      "Enhanced Lighthouse Audit performance and web accessibility across several projects.",
    ],
  },
  {
    title: "Senior Software Developer & UX Designer",
    company: "OneModo Technologies Pvt Ltd",
    period: "11/2013 – 10/2015",
    location: "Chennai, India",
    bullets: [],
  },
  {
    title: "PHP Developer",
    company: "BigSpire Software Private Limited",
    period: "11/2012 – 10/2013",
    location: "Chennai, India",
    bullets: [],
  },
];
