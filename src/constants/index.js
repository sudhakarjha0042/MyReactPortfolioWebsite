import {
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  harward,
  google,
  microsoft,
  carrent,
  jobit,
  tripguide,
  threejs,
  react
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
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Django Developer",
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
  {
    name: "React JS",
    icon: reactjs,
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
  title: "CS50W Course",
  company_name: "Harvard University",
  icon: harward,   
  iconBg: "#5D5C61", 
  date: "June 2021 - August 2021",   
  points: [      
    "Completed CS50W course, which covers web development using Python, Django, HTML, CSS, JavaScript, and SQL.",  
    "Implemented various web applications and learned about important web development concepts such as MVC architecture, RESTful API, and user authentication.",  
    "Worked on a final project, which involved developing a social network website similar to Twitter, where users can post tweets, follow other users, like tweets, and send direct messages.",  
   ],
   certificate: "https://certificates.cs50.io/146e1211-e893-4411-befb-5ec2bee626a5.pdf?size=letter",
  },
  {
    title: "Google IT Support Professional Certificate",
    company_name: "Google",
    icon: google,
    iconBg: "#FFFFFF",
    date: "September 2021 - November 2021",
    points: [
      "Completed the Google IT Support Professional Certificate, which covers foundational skills for IT support, including troubleshooting, customer service, networking, operating systems, system administration, and security.",
      "Learned how to troubleshoot basic computer issues, set up and maintain computer networks, configure operating systems, manage user accounts, and implement security measures.",
      "Completed a capstone project, which involved troubleshooting and fixing various IT issues in a simulated business environment.",
    ],
    certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/PJH6LLM9JTDQ",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "January 2022 - February 2022",
    points: [
      "Completed the Microsoft Azure AI Fundamentals course, which covers the fundamentals of artificial intelligence and machine learning.",
      "Learned about important AI concepts such as machine learning models, data analysis, computer vision, natural language processing, and speech recognition.",
      "Developed practical skills by working on hands-on labs and projects, including training machine learning models and building intelligent applications using Azure services.",
    ],
    certificate: "https://www.credly.com/badges/652bfdaf-310c-4c9a-97cb-6777ef426ef5/public_url",
  },
  {
    title: "Advanced React Course",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2022 - April 2022",
    points: [
      "Completed an advanced React course, which covers advanced topics in React development such as performance optimization, code splitting, server-side rendering, and testing.",
      "Learned about important React libraries and tools such as Redux, React Router, Webpack, Babel, and Jest.",
      "Developed practical skills by working on a final project, which involved building a scalable e-commerce website using React, Redux, and other related technologies.",
    ],
    certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/2ZQZQZQZQZQZ",
  },
];


const projects = [
  {
    name: "My Portfolio",
    live_demo_link:"#",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "NewsJunction",
    live_demo_link:"https://newsjunction.sudhakarjha.live/",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    live_demo_link:"#Hi",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
