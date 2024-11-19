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
      title: "Front Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Freelancer",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Jan 2023 – Present",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023 – Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer (Node.js)",
      company_name: "Jan 2023 – Present",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 – Present",
      points: [
        "Developed high-performance backend applications using Node.js, optimizing server response times and handling data-intensive operations with ease.",
        "Designed and deployed RESTful APIs and GraphQL APIs with Node.js, enabling seamless communication between client applications and databases.",
        "Utilized asynchronous programming with Promises and async/await to manage multiple requests efficiently, ensuring smooth user experiences under high load.",
      ],
    },
    {
      title: "Express.js",
      company_name: "Jan 2023 – Present",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 – Present",
      points: [
        "Built scalable and secure RESTful APIs using Express.js, handling diverse client needs such as data management, user authentication, and real-time interactions.",
        "Designed and implemented middleware for request validation, error handling, and logging, ensuring high application reliability and maintainability.",
        "Integrated JWT (JSON Web Tokens) for user authentication and session management, providing secure login and access control across applications.",
      ],
    },
    {
      title: "Database Developer (MongoDB)",
      company_name: "Jan 2023 – Present",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Designed and optimized scalable databases using MongoDB, ensuring efficient data storage and retrieval for web applications handling large volumes of data.",
        "Utilized Mongoose to define schemas, validate data, and manage complex relationships, creating robust models that align with application requirements.",
        "Improved database performance through indexing and aggregation pipelines, allowing for fast query responses and efficient data analysis.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Shubham proved me wrong.",
      name: "Gurlen caur",
      designation: "MD",
      company: "Heart Cafe",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Ritik",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Exceptional work on our landing page! They crafted a beautiful, responsive design that aligns perfectly with our brand and vision..",
      name: "Rahul Sirola",
      designation: "CTO",
      company: "Sirola Enterprises",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
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
      name: "Job IT",
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
  
  export { services, technologies, experiences, testimonials, projects };