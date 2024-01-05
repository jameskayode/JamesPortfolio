import html from "../assets/langues/HTML.png";
// import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
// import django from "../assets/langues/django.png";
// import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import node from "../assets/langues/node.png";
import agile from "../assets/langues/agile.png";
import quiz from "../assets/quiz1.png"
import mb2 from "../assets/mb2.png"
import bible from "../assets/bible.png"
import mb1 from "../assets/mb1.png"
import Eco1 from  "../assets/Eco1.png"
// Array of work objects
export const works = [
  {
    title: "Javascript Quiz Web App",
    imgSrc:quiz,
    tech: ["Html", "Css", "Javascript"],
    workUrl: "https://jjkquizapp.netlify.app/",
    duration: "400",
  },

  {
    title: "EC80_A CALCULATOR AI",
    imgSrc: mb2,
    tech: ["HTML", "CSS", "Bootstrap"],
    workUrl: "https://ineccalculator.netlify.app/",
    duration: "500",
  },
  {
    title: "Bible Web Application",
    imgSrc: bible,
    tech: ["Html", "CSS", "JavaScript"],
    workUrl: "https://github.com/jameskayode/Awesome-Bible",
    duration: "600",
  },
  {
    title: "Motivational Quotes App",
    imgSrc: mb1,
    tech: ["Reactjs", "Figma"],
    workUrl:
      "https://motivationalquotesgen.netlify.app/",
    duration: "700",
  },
  {
    title: "Ecommerce Web App",
    imgSrc:
     Eco1,
    tech: ["Figma", "Reactjs", "JavaScript"],
    workUrl:
      "https://github.com/jameskayode/BTN_Training/tree/main/Ecommerce",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "February 2023 - November 2023",
    company: "Bandage",
    position: "Frontend Developer",
    description:
      "I successfully developed a comprehensive ecommerce website for a clothing retailer, catering to both the business owners and customers. This involved extensive market research, designing a user-friendly interface.",
  },
  {
    date: "April 2023 - February 2024",
    company: "Beleievers Tech Network",
    position: "Internship",
    description:
      "I developed expertise in creating visually captivating and user-friendly software applications. I also gained skills in managing automated tests to ensure optimal functionality and performance. This experience has equipped me with valuable practical skills and a professional approach to software development.",
  },
  {
    date: "March 2024 - Present",
    company: "Self employed",
    position: "Freelancer",
    description:
      "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
  },
];

// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: node,
    title: "Nodejs",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: agile,
    title: "Agile",
    style: "shadow-emerald-700",
  },
  // {
  //   id: 9,
  //   src: symfony,
  //   title: "Symfony",
  //   style: "shadow-black",
  // },
  // {
  //   id: 10,
  //   src: spring,
  //   title: "Spring boot",
  //   style: "shadow-green-600",
  // },
  // {
  //   id: 11,
  //   src: bootstrap,
  //   title: "Bootstrap",
  //   style: "shadow-violet-500",
  // },
  // {
  //   id: 12,
  //   src: flutter,
  //   title: "Flutter",
  //   style: "shadow-cyan-400",
  // },
  // {
  //   id: 13,
  //   src: py,
  //   title: "Python",
  //   style: "shadow-yellow-400",
  // },

  // {
  //   id: 14,
  //   src: php,
  //   title: "Php",
  //   style: "shadow-violet-400",
  // },
  // {
  //   id: 15,
  //   src: c,
  //   title: "C",
  //   style: "shadow-blue-400",
  // },
  // {
  //   id: 16,
  //   src: java,
  //   title: "Java",
  //   style: "shadow-orange-500",
  // },
];
