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
  tailwind,
  nodejs,
  mongodb,
  git,
  sql,
  python,
  basketball,
  guitar,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Guitarist",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Programmer",
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
    name: "git",
    icon: git,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "basketball",
    icon: basketball,
  },
  {
    name: "guitar",
    icon: guitar,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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

import sentiment from "../assets/sentiment.png";
import nowcasting from "../assets/nowcasting.png";
import devnagari from "../assets/devnagari.png";

const projects = [
  {
    name: "Sentiment Analysis using NLP",
    description: "A machine learning project focused on analyzing sentiments in tweets using Natural Language Processing (NLP). It classifies text into positive, negative, or neutral categories. The project uses real-world Twitter data and showcases how social media content can be mined to understand public emotions and trends.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: sentiment,  // 👈 here you use the variable name
    source_code_link: "https://github.com/Tejas-Indrale/NLP-Sentiment-Analysis",
  },
  {
    name: "Precipitation Nowcasting and Downscalling",
    description: "Developed a deep learning-based rainfall nowcasting system using ConvLSTM and Vision Transformers. Trained on 13 years of radar and satellite data from the Indian Meteorological Department (IMD) and IITM, the model accurately predicts short-term precipitation across Indian regions.",

    tags: [
      { name: "convlstm", color: "blue-text-gradient" },
      { name: "transformer", color: "green-text-gradient" },
    ],
    image: nowcasting,
    source_code_link: "https://github.com/Tejas-Indrale/Precipitation-Nowcasting-and-Downscalling",
  },
  {
    name: "Devanagari OCR",
    description: "Built a CNN model that classifies handwritten Devanagari script characters with high accuracy. The project demonstrates deep learning and image classification using TensorFlow and OpenCV.",
    tags: [
      { name: "cnn", color: "blue-text-gradient" },
      { name: "deeplearning", color: "pink-text-gradient" },
    ],
    image: devnagari,
    source_code_link: "https://github.com/Tejas-Indrale/devanagari-character-recognition",
  },
];



export { services, technologies, experiences, testimonials, projects };
