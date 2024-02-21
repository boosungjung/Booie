import {
  web,
  ios,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  monash,
  freelance,
  tutor,
  github,
  email,
  instagram,
  linkedin,
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
    title: "iOS Development",
    icon: ios,
  },
  {
    title: "Web Development",
    icon: web,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Associate",
    company_name: "Monash University (Clayton, VIC)",
    icon: monash,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      // "Contributed in weekly meetings to discuss and enact improvements to the course.",
      // "Achieved 9/10 teaching satisfaction score at end of semester review.",
      // "Presented new and complex concepts clearly every week to class of 50+ students.",
      // "Oversaw and taught in large units with 500+ students, consistently meeting marking deadlines and proactive in communicating.",
      // "Conducted 20+ exam invigilations, ensuring academic integrity and adherence to regulations.",
    ],
  },
  {
    title: "Freelance Backend Developer",
    company_name: "LBank (South Korea, Seoul)",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      // "Revitalised legacy code with poor documentation.",
      // "Thoroughly debugged code and provided detailed explanations to reviewers.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // "Assembled customised functions utilising SHA256 encryption for each API.",
      // "Completed a month-long project within a week, meeting all requirements and deadlines.",
    ],
  },
  {
    title: "Highschool Tutor",
    company_name: "Self-employed maths, physics, and chemistry tutor",
    icon: tutor,
    iconBg: "#383E56",
    date: "Jan 2019 - Present",
    points: [
      // "Assembled lesson plans tailored to each individual.",
      // "Elevated multiple student grades from D to A.",
      // "Guided a student to achieve 2nd place in their year for Chemistry.",
      // "Conducted in exam review and created personalised assessments.",
      // "Presented foreign concepts clearly to students visually using Adobe Illustrator.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Flashcard App",
    description:
      "iOS App that allows users to search, create, and share flashcards, providing an enjoyable and free way of learning.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/boosungjung/Quickstack",
  },
  {
    name: "Sorting Visualiser",
    description:
      "Web application that enables users to visually see how sorting algorithms work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://github.com/boosungjung/Sorting-Visualizer",
  },
  {
    name: "Timetable Allocator",
    description:
      "A python application to automatically allocate up to N number of people depending on constraints using network flow algorithm. Please request for code as it is confidential.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/boosungjung",
  },
];

const contacts = [
  // {
  //   title: "Email",
  //   value: "jungboosung23@gmail.com",
  //   icon: email,
  // },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/boosung-jung",
    icon: linkedin,
  },
  {
    title: "Github",
    url: "https://github.com/boosungjung",
    icon: github,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/booosung/",
    icon: instagram,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
