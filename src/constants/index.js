import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  iziway,
  fsligroup,
  webverseagency,
  campusconnect,
  skilltestapp,
  threejs,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "GTA Consulting / IZIWAY Cameroon, Douala",
    icon: iziway,
    iconBg: "#383E56",
    date: "June 2022 - August 2025",
    points: [
      "Developed a drag-and-drop page builder (React + Vite + .NET API) enabling the commercial team to visually edit and deploy landing pages on the marketplace without developer intervention.",
      "Delivered and maintained customer-facing and seller portal features using C#/.NET and PHP (Laravel), aligning releases with business goals.",
      "Led frontend and backend optimizations that increased user engagement by 20% through performance and UI improvements.",
      "Implemented A/B testing for UX changes, analyzed results, and prioritized improvements for conversion optimization.",
      "Enhanced Seller Center modules to simplify vendor product management and reduce onboarding time.",
      "Maintained high code quality via automated testing, peer code reviews, and adherence to Agile sprint cycles.",
    ],
  },
  {
    title: "Mobile & Web Developer",
    company_name: "FSLI Group, Douala",
    icon: fsligroup,
    iconBg: "#E6DEDD",
    date: "September 2025 - Present",
    points: [
      "Led the migration of a large-scale React Native app from version 0.72.4 to 0.81.1, resolving dependency conflicts and improving build stability across Android and iOS.",
      "Designed and implemented a tournament management flow for a sports app — from UI/UX prototyping to API integration.",
      "Built modules for a multi-tenant ERP system, including invoice management compliant with EU Factur-X standards.",
      "Automated hybrid PDF + XML invoice generation and ensured data accuracy through end-to-end testing.",
      "Developed and optimized the ERP landing page using React and motion design, delivering a dynamic and interactive user interface.",
      "Collaborated in Agile sprints, participating in reviews, issue triage, and cross-team testing to ensure release quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dave proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dave does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Dave optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Webverse Digital Agency",
    description:
      "A digital agency website offering app development, web design, and graphic design, with client testimonials and project examples.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webverseagency,
    source_code_link: "https://github.com/Roland-Siyapze/WebVerse-Digital",
  },
  {
    name: "SkillTest App",
    description:
      "Innovative coding assessment platform with AI-driven analysis, offering students and companies a more accurate evaluation of programming skills.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skilltestapp,
    source_code_link: "https://github.com/Roland-Siyapze/SKILLTEST_APP",
  },
  {
    name: "Campus Connect",
    description:
      "Web app for a comprehensive digital campus experience with networking, event calendar, chat, and campus store.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: campusconnect,
    source_code_link:
      "https://github.com/Roland-Siyapze/campus-connectivity-nexus",
  },
];

export { services, technologies, experiences, testimonials, projects };
