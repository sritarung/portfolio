import {
  mobile,
  backend,
  creator,
  web,
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
  tiqc,
  speakhire,
  iqspatial,
  gamerank,
  textanalysis,
  bookingapp,
  alumni
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
    title: "Frontned Developer",
    icon: web,
  },
  {
    title: "React & Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Engineer",
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
    title: "Full Stack Developer",
    company_name: "Alumni Association of City College of New York",
    icon: alumni,
    iconBg: "#383E56",
    date: "Sep. 2024 - Present",
    points: [
      "Refined an online payment system that drove 80+ paid alumni sign-ups per month, contributing to a 2% revenue lift. Integrated a donation-matching feature (Double the Donation), increasing individual contributions by 10% and streamlining data imports to enhance operational efficiency.",
      "Designed alumni group sections that boosted engagement among 5,000+ alumni, leading to a 40% rise in active participation. Built a scalable AWS–MongoDB infrastructure to handle 1TB+ of data and deployed a CI/CD pipeline via GitHub, cutting deployment time by 50% for faster updates."
    ],
  },
  {
    title: "Software Engineer - ML",
    company_name: "IQSpatial",
    icon: iqspatial,
    iconBg: "#E6DEDD",
    date: "May 2024 - Dec. 2024",
    points: [
      "Spearheaded the development of ML models in Colab, including a Solar Panel detection model using YOLOv10 with 500 images from the NAIP dataset annotated via roboflow, boosting prediction accuracy from 30% to 75%.",
      "Collaborated on RAG creation with Gemini LLM to enable users to query uploaded PDFs, reducing LLM costs by 2.79%. Built a Firebase and Python backend for authentication & API calls, maintaining 0 additional costs."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SPEAKHIRE",
    icon: speakhire,
    iconBg: "#383E56",
    date: "Jul. 2023 - Aug. 2023",
    points: [
      "Led a team of four in developing the frontend for SPEAKHIRE, a non-profit empowering immigrants’ college readiness. Utilized HTML, CSS, JavaScript, React, MUI, and Redux, achieving a 70% increase in website traffic.",
      "Implemented effective UI features for the company’s web application in collaboration with the UI Designer and the team, resulting in a 50% increase in applicants for SPEAKHIRE’s leadership courses."
    ],
  }
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
    name: "GameRank",
    description:
      "GameRank is a web application designed to build a community among gamers and those that aspire to be so. The app serves as a space for users to share their ideas on games they have played and view the ideas shared by others. With over 500,000 games available to rate, we are hoping GameRank encourages more discussion when it comes to gaming experiences.",
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
        name: "node js",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: gamerank,
    source_code_link: "https://github.com/tahbee03/gamerank",
  },
  {
    name: "Text Classifier",
    description:
      "This project implements text classification techniques to analyze unstructured text data using machine learning models like Naive Bayes and Logistic Regression. It explores deep learning methods, such as Recurrent Neural Networks (RNNs), to capture language context and dependencies. The project demonstrates these techniques with the Sentiment140 dataset, containing 1.6 million tweets, to showcase effective sentiment analysis. Key preprocessing steps include vectorization, stemming, and lemmatization to improve feature extraction and model accuracy.",
    tags: [
      {
        name: "ml",
        color: "blue-text-gradient",
      },
      {
        name: "naive bayes",
        color: "green-text-gradient",
      },
      {
        name: "logistic regression",
        color: "pink-text-gradient",
      },
      {
        name: "decision trees",
        color: "blue-text-gradient",
      },
      {
        name: "neural network",
        color: "green-text-gradient",
      },
    ],
    image: textanalysis,
    source_code_link: "https://github.com/sritarung/text-analysis",
  },
  {
    name: "Booking App",
    description:
      "Booking App is a global online marketplace that connects people looking to rent out their homes with those seeking accommodations. The platform allows hosts to list their properties, which can range from single rooms to entire houses, and guests can search for and book these accommodations based on various criteria such as location, price, and amenities. Booking App facilitates the booking process, and provides a secure payment system to ensure a smooth experience for both hosts and guests.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "digital ocean",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: bookingapp,
    source_code_link: "https://github.com/deepankarck2/Booking-app/tree/master",
  },
];

export { services, technologies, experiences, testimonials, projects };
