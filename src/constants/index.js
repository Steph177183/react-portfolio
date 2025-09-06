import myportfolio from "../assets/projects/portfolio.png";
import hotel from "../assets/projects/hotel.png";
import library from "../assets/projects/library.png";
import atm_screen from "../assets/projects/atm_screen.png";

export const HERO_CONTENT = [
  `Aspiring web developer with internship experience in building modern and user-friendly applications. Skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) as well as Laravel, MySQL, and Inertia.js, with exposure to both front-end and back-end development.`,
  `Practical exposure to Agile teamwork, collaborative development on GitHub, and full-stack project workflows, with a focus on strengthening technical expertise and delivering value-driven applications.`,
];

export const ABOUT_TEXT = [
  "Aspiring full-stack web developer with a solid foundation built through hands-on internship experience and personal projects. Skilled in creating efficient and user-friendly applications using the MERN stack (MongoDB, Express.js, React, Node.js), as well as Laravel, MySQL, and Inertia.js",
  "Experienced in Agile teamwork and GitHub collaboration, with exposure to both front-end and back-end development. Continuously learning and improving, with a focus on adapting to challenges and contributing value to every project.",
];

export const EXPERIENCES = [
  {
    year: "March 2025 - April 2025",
    role: "Computer Programming Specialist",
    company: "Stronghold Insurance Company Inc.",
    description: `Developed a training project using Laravel, React (TypeScript), MySQL, and Inertia.js, applying full-cycle software development practices from planning to deployment, with feedback from senior developers to improve design and code efficiency.`,
    technologies: ["Laravel", "React Typescript", "MySQL", "Inertia.js"],
  },
  {
    year: "August 2024 - September 2024",
    role: "Junior Programmer",
    company: "Mista Solutions Inc.",
    description: `Gained hands-on experience with the MERN stack and API testing using Postman while collaborating on an internal project. Practiced Agile teamwork, GitHub-based workflows, and improved communication by presenting project updates to both technical and non-technical stakeholders.`,
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: myportfolio,
    description:
      "Built with React.js and Tailwind CSS to showcase skills, experience, and projects in a clean, user-friendly design.",
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Library Management System",
    image: library,
    description:
      "Created with Laravel, React (TypeScript), MySQL, and Inertia.js, featuring full CRUD operations for managing books and members.",
    technologies: [
      "Laravel",
      "Inertia.js",
      "Tailwind CSS",
      "MySQL",
      "React.ts",
    ],
  },
  {
    title: "ATM Simulator",
    image: atm_screen,
    description:
      "Developed in Java with MySQL integration to simulate core ATM functions like deposits, withdrawals, and balance inquiry.",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "Hotel Booking System",
    image: hotel,
    description:
      "A C++ project for managing hotel reservations, customer records, and room availability with a focus on data handling.",
    technologies: ["C++"],
  },
];

export const CONTACT = {
  address: "P. Pajarillo St., Bry. Rizal (Pob.) Macalelon, Quezon 4309 ",
  phoneNo: "+63 956 169 1092 ",
  email: "stephanielucer0177@gmail.com",
};
