import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Profile from "../models/Profile.js";
import Skill from "../models/Skill.js";
import Project from "../models/Project.js";
import Experience from "../models/Experience.js";

dotenv.config();

const profileData = {
  name: "Dhilipkumar",
  role: "Full Stack Developer",
  tagline:
    "I build responsive, user-friendly web applications with the MERN stack and love turning ideas into real-world solutions.",
  about:
    "I am an aspiring Full Stack Developer with hands-on experience in the MERN Stack, including MongoDB, Express.js, React.js, and Node.js. I have completed training in Artificial Intelligence and Machine Learning and enjoy building modern, responsive, and user-friendly web applications. I am passionate about learning new technologies, solving real-world problems, and developing scalable web solutions. Currently, I am looking for opportunities to enhance my skills and grow as a professional software developer.",
  avatarUrl: "/dk.jpeg",
  resumeUrl: "/Dhilip_kumar_MERN_Developer_Resume.pdf",
  education: {
    degree: "BE EEE",
    institution: "Anna University",
  },
  experienceStatus: "3+ Years",
  experienceNote: "Full Stack Development",
  focusArea: "Web Development",
  focusNote: "Clean & Scalable Code",
  stats: {
    projectsCompleted: 10,
    githubStars: 40,
    technologies: 12,
    dedication: "100%",
  },
  contact: {
    email: "dhilipkumar@example.com",
    phone: "+91 98765 43210",
    location: "Hosur, Tamil Nadu, India",
    github: "https://github.com/07dhilipkumar02",
    linkedin: "https://www.linkedin.com/in/dhilip-kumar-07dk02",
    twitter: "",
    portfolio: "https://www.dhilipkumar.dev",
  },
};

const skillsData = [
  { name: "HTML5", icon: "html5", color: "#e34f26", order: 1 },
  { name: "CSS3", icon: "css3", color: "#1572b6", order: 2 },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e", order: 3 },
  { name: "React.js", icon: "react", color: "#61dafb", order: 4 },
  { name: "Node.js", icon: "nodejs", color: "#3c873a", order: 5 },
  { name: "Express.js", icon: "express", color: "#ffffff", order: 6 },
  { name: "MongoDB", icon: "mongodb", color: "#47a248", order: 7 },
  { name: "Git & GitHub", icon: "git", color: "#f05032", order: 8 },
  { name: "AI & ML", icon: "aiml", color: "#a855f7", order: 9 },
  { name: "Redux", icon: "redux", color: "#764abc", order: 10 },
  { name: "JWT", icon: "jwt", color: "#fb015b", order: 11 },
  { name: "Docker", icon: "docker", color: "#2496ed", order: 12 },
  { name: "Postman", icon: "postman", color: "#ff6c37", order: 13 },
];

const projectsData = [
  {
    title: "Mern Portfolio Website",
    description:
      "A personal portfolio website built with the MERN stack, showcasing my skills, projects, and experience with a clean, responsive UI.",
    imageUrl: "/projects/mern-portfolio.png",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 1,
  },
  {
    title: "Food Delivery App",
    description:
      "A full stack food delivery application with cart, order tracking and payment.",
    imageUrl: "/projects/food-app.jpg",
    tags: ["MERN Stack", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 2,
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that uses machine learning and deep learning to hold natural conversations and answer user queries in real time.",
    imageUrl: "/projects/ai-chatbot.jpg",
    tags: ["Python", "ML", "DL", "OpenCv"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3,
  },
  {
    title: "AI Resume Analyzer",
    description: "A web application that uses AI to analyze resumes and provide feedback.",
    imageUrl: "/projects/ai-resume-analyzer.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "AI/ML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3,
  },
  {
    title: "Face Recognition + Deepface System",
    description: "A web application that uses AI to recognize faces and provide detailed analysis.",
    imageUrl: "/projects/face-recognition.jpg",
    tags: ["React", "Node.js", "Python", "Express.js", "AI/ML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3,
  },
  {
    title: "E-Commerce Web Application",
    description: "A web application for buying and selling products online.",
    imageUrl: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "JWT",],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3,
  },
];

const experienceData = [
  {
    title: "Full Stack Developer",
    organization: "TechB Software Solutions",
    period: "Present",
    highlights: [
      "Develop and maintain scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Build responsive and user-friendly frontend interfaces using React.js, JavaScript, HTML, and CSS.",
      "Develop and integrate RESTful APIs to connect frontend applications with backend services.",
      "Work with MongoDB for database design, data management, and query optimization.",
      "Debug, troubleshoot, and maintain applications to improve performance, reliability, and user experience.",
      "Collaborate with team members to implement new features and enhance existing applications.",
    ],
    order: 1,
  },
  {
    title: "Full Stack Developer",
    organization: "Sukibhavan Properties",
    period: "Previous",
    highlights: [
      "Developed responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      "Integrated frontend and backend workflows using REST APIs and server-side services.",
      "Designed and managed MongoDB data structures and optimized database queries for better application performance.",
      "Implemented application features, fixed bugs, and performed troubleshooting across frontend and backend components.",
      "Assisted with application deployment, maintenance, and production issue resolution.",
      "Improved application responsiveness, usability, and overall performance through code and database optimization.",
    ],
    order: 2,
  },
];

const run = async () => {
  await connectDB();

  await Promise.all([
    Profile.deleteMany({}),
    Skill.deleteMany({}),
    Project.deleteMany({}),
    Experience.deleteMany({}),
  ]);

  await Profile.create(profileData);
  await Skill.insertMany(skillsData);
  await Project.insertMany(projectsData);
  await Experience.insertMany(experienceData);

  console.log("Database seeded successfully");
  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
