import html from '../assets/langues/HTML.png'
import reactLangue from '../assets/langues/react.png'
import css from '../assets/langues/css.png'
import github from '../assets/langues/github.png'
import tailwind from '../assets/langues/tailwind.png'
import js from '../assets/langues/js.png'
import node from '../assets/langues/node.png'
import agile from '../assets/langues/agile.png'
import grosvenorImage from '../assets/gros.jpeg'
import smartPeopleImage from '../assets/spg.jpeg'
import almendraImage from '../assets/alm.jpeg'

export const featuredProjects = [
  {
    id: 1,
    title: 'Almendra Fabrics',
    type: 'Premium Tailoring POS SaaS',
    imgSrc: almendraImage,
    projectUrl: 'https://almendrafabrics.com',
    problem:
      'Tailoring teams needed a single platform to manage customers, orders, QA, and payments without operational gaps.',
    solution:
      'Built a premium SaaS workflow with role-based access, offline-first behavior, and structured order-to-delivery tracking.',
    impact:
      'Enabled streamlined operations for multi-role teams with stronger process consistency and quality control.',
    technologies: [
      'React',
      'Node.js',
      'Tailwind CSS',
      'Offline Sync',
      'Role-Based Access',
    ],
  },
  {
    id: 2,
    title: 'Smart People Global',
    type: 'Corporate Growth Platform',
    imgSrc: smartPeopleImage,
    projectUrl: 'https://smartpeopleglobal.com/',
    problem:
      'A fast-growing business needed a clear digital experience to communicate value proposition and support member acquisition.',
    solution:
      'Delivered a responsive corporate platform with structured content flow, conversion-focused sections, and improved performance.',
    impact:
      'Strengthened online credibility, simplified onboarding messaging, and improved access to incentive and support information.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Responsive UI',
      'Performance Optimization',
    ],
  },
  {
    id: 3,
    title: 'Grosvenor Global Services Limited',
    type: 'Enterprise Corporate Platform',
    imgSrc: grosvenorImage,
    projectUrl: 'https://grosvenorgsl.com/',
    problem:
      'A multi-service enterprise required a clean web presence to communicate operational capabilities across complex industries.',
    solution:
      'Implemented a structured enterprise website architecture with clear service segmentation and premium visual presentation.',
    impact:
      'Improved discoverability of core services and created a more professional digital touchpoint for business stakeholders.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Content Architecture',
      'UI Engineering',
    ],
  },
]

export const experiences = [
  {
    date: '2024 - Present',
    company: 'Smart People Global',
    position: 'Full Stack Developer',
    description:
      'Building and maintaining scalable web systems, optimizing performance, and shipping product experiences that support business growth.',
  },
  {
    date: '2023 - 2024',
    company: 'Freelance / Product Engineering',
    position: 'Full Stack Developer',
    description:
      'Delivered SaaS and corporate products end-to-end, from interface design to backend architecture and deployment.',
  },
  {
    date: '2022 - 2023',
    company: 'Believers Tech Network',
    position: 'Software Engineering Intern',
    description:
      'Strengthened engineering fundamentals through hands-on product delivery, teamwork, and practical frontend and backend implementation.',
  },
]

export const skillGroups = [
  {
    title: 'Product Engineering',
    items: [
      'SaaS Development',
      'System Design',
      'API Architecture',
      'Automation Workflows',
    ],
  },
  {
    title: 'Backend & Scalability',
    items: [
      'Node.js',
      'Express',
      'Database Design',
      'Performance Optimization',
    ],
  },
  {
    title: 'Frontend & Experience',
    items: ['React', 'Tailwind CSS', 'Responsive UI', 'Micro-Interactions'],
  },
  {
    title: 'AI Integration',
    items: [
      'Prompt Workflows',
      'AI-Enhanced Features',
      'Tooling Integration',
      'Process Automation',
    ],
  },
]

export const techStack = [
  {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: js,
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: reactLangue,
    title: 'React',
    style: 'shadow-sky-500',
  },
  {
    id: 5,
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-400',
  },
  {
    id: 6,
    src: tailwind,
    title: 'Tailwind',
    style: 'shadow-teal-600',
  },
  {
    id: 7,
    src: node,
    title: 'Nodejs',
    style: 'shadow-rose-500',
  },
  {
    id: 8,
    src: agile,
    title: 'Agile',
    style: 'shadow-emerald-700',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Product Lead, SaaS Client',
    text: 'James translated a complex workflow into a polished product experience that users adopted quickly.',
  },
  {
    id: 2,
    name: 'Operations Manager, Corporate Client',
    text: 'He combines strong backend thinking with thoughtful UI decisions, which made delivery smoother across teams.',
  },
  {
    id: 3,
    name: 'Startup Founder',
    text: 'The automation-first mindset saved us execution time and gave us confidence in scale readiness.',
  },
]
