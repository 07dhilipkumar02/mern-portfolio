import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Profile from "../models/Profile.js";
import Skill from "../models/Skill.js";
import Project from "../models/Project.js";
import Experience from "../models/Experience.js";
import fs from "fs";

// Cloudinary URLs written by `npm run upload:images` (falls back to local paths).
const cloudinaryImages = JSON.parse(
  fs.readFileSync(new URL("./cloudinary-images.json", import.meta.url), "utf8")
);
const img = (localPath) => cloudinaryImages[localPath] || localPath;

dotenv.config();

const profileData = {
  name: "Dhilipkumar",
  role: "Full Stack Developer | MERN Stack | AI Integration",
  tagline:
    "Full Stack Developer specializing in MERN stack development, building responsive web applications, REST APIs, and scalable backend solutions. Currently expanding my expertise in AI, LLMs, RAG, and Agentic AI to develop intelligent applications.",
  about:
    "I'm a Full Stack Developer with hands-on experience building modern web applications using the MERN stack. My expertise includes React.js, Node.js, Express.js, MongoDB, REST APIs, and responsive UI development.I enjoy solving real-world problems through clean, scalable, and user-friendly software. Alongside full-stack development, I'm expanding my knowledge in Artificial Intelligence, Machine Learning, Large Language Models, Retrieval-Augmented Generation (RAG), and AI-powered applications.I'm passionate about continuous learning, building innovative projects, and developing solutions that combine modern web technologies with AI.",
  avatarUrl: img("/dk.jpeg"),
  resumeUrl: "https://drive.google.com/uc?export=download&id=1igoVwwTba79woxFRtAGWIM27iCMsttsl",
  education: {
    degree: "BE EEE",
    institution: "Anna University",
  },
  experienceStatus: "Full Stack Development",
  experienceNote: "Professional Experience",
  focusArea: "Full Stack & AI Development",
  focusNote: "Scalable Applications",
  stats: {
    projectsCompleted: 10,
    githubStars: 40,
    technologies: 12,
    dedication: "100%",
  },
  contact: {
    email: "vlakshmidhilip@gmail.com",
    phone: "+91 8148727707",
    location: "Hosur, Tamil Nadu, India",
    github: "https://github.com/07dhilipkumar02",
    linkedin: "https://www.linkedin.com/in/dhilip-kumar-07dk02",
    
  },
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5", color: "#e34f26", order: 1 },
      { name: "CSS3", icon: "css3", color: "#1572b6", order: 2 },
      { name: "JavaScript", icon: "javascript", color: "#f7df1e", order: 3 },
      { name: "React.js", icon: "react", color: "#61dafb", order: 4 },
      { name: "Responsive Design", icon: "responsive", color: "#38bdf8", order: 5 },
      { name: "TypeScript", icon: "typescript", color: "#3178c6", order: 6 },
      { name: "Next.js", icon: "nextjs", color: "#ffffff", order: 7 },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8", order: 8 },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#3c873a", order: 1 },
      { name: "Express.js", icon: "express", color: "#ffffff", order: 2 },
      { name: "REST APIs", icon: "api", color: "#00a884", order: 3 },
      { name: "JWT Authentication", icon: "jwt", color: "#fb015b", order: 4 },
      { name: "GraphQL", icon: "graphql", color: "#e10098", order: 5 },
    ],
  },

  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", color: "#47a248", order: 1 },
      { name: "Redis", icon: "redis", color: "#dc382d", order: 2 },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169e1", order: 3 },
    ],
  },

  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Python", icon: "python", color: "#3776ab", order: 1 },
      { name: "Machine Learning", icon: "aiml", color: "#a855f7", order: 2 },
      { name: "LLMs", icon: "llm", color: "#10a37f", order: 3 },
      { name: "Prompt Engineering", icon: "prompt", color: "#f59e0b", order: 4 },
      { name: "RAG", icon: "rag", color: "#8b5cf6", order: 5 },
      { name: "Embeddings", icon: "embeddings", color: "#06b6d4", order: 6 },
      { name: "Vector Databases", icon: "vectordb", color: "#ec4899", order: 7 },
      { name: "AI Agents", icon: "agents", color: "#14b8a6", order: 8 },
    ],
  },

  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git", color: "#f05032", order: 1 },
      { name: "GitHub", icon: "github", color: "#ffffff", order: 2 },
      { name: "Docker", icon: "docker", color: "#2496ed", order: 3 },
      { name: "Postman", icon: "postman", color: "#ff6c37", order: 4 },
      { name: "VS Code", icon: "vscode", color: "#007acc", order: 5 },
      { name: "AWS", icon: "aws", color: "#ff9900", order: 6 },
    ],
  },
];

const projectsData = [
  {
    title: "AI Resume Analyzer",
    category: "AI & Full Stack",
    description:
      "Developed an AI-powered resume analysis application that evaluates resumes, extracts relevant skills, analyzes ATS compatibility, and provides personalized feedback to help candidates improve their resumes.",
    imageUrl: img("/projects/ai-resume-analyzer.jpg"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "NLP", "Machine Learning", "AI"],
    liveUrl: "https://ai-resume-analyzer1-n77d-8lahtmu56-dhilip5.vercel.app/",
    githubUrl: "https://github.com/07dhilipkumar02/AI-RESUME-ANALYZER",
    featured: true,
    order: 1,
  },
  {
    title: "AI Chatbot & RAG Application",
    category: "Generative AI",
    description:
      "Built an intelligent AI chatbot using Large Language Models and Retrieval-Augmented Generation (RAG) to retrieve relevant contextual information, generate accurate responses, and provide interactive conversational experiences.",
    imageUrl: img("/projects/ai-chatbot.jpg"),
    tags: ["Python", "LLM", "RAG", "Embeddings", "Vector Database", "AI"],
    liveUrl: "https://ai-chat-bot-wl8w.vercel.app/",
    githubUrl: "https://github.com/07dhilipkumar02/AI-CHAT-BOT",
    featured: true,
    order: 2,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio using the MERN stack to showcase professional experience, technical skills, projects, and career achievements with a modern user interface.",
    imageUrl: img("/projects/mern-portfolio.png"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    order: 3,
  },
  {
    title: "Food Delivery Application",
    description:
      "Developed a full-stack food ordering application featuring restaurant listings, interactive menus, cart management, order processing, and a responsive user interface for seamless food ordering.",
    imageUrl: img("/projects/food-app.jpg"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    liveUrl: "https://food-app-frontend-dhilip5.vercel.app/",
    githubUrl: "https://github.com/07dhilipkumar02/Food-app",
    featured: false,
    order: 4,
  },
  {
    title: "Face Recognition & DeepFace System",
    description:
      "Developed a facial recognition application leveraging computer vision and deep learning to detect and recognize faces from images and provide face analysis functionality.",
    imageUrl: img("/projects/face-recognition.jpg"),
    tags: ["Python", "OpenCV", "DeepFace", "Machine Learning", "React.js"],
    liveUrl: "https://face-recogonition-one.vercel.app/",
    githubUrl: "https://github.com/07dhilipkumar02/face_recogonition",
    featured: false,
    order: 5,
  },
  {
    title: "E-Commerce Web Application",
    description:
      "Built a full-stack e-commerce application with product listings, shopping cart functionality, user authentication, and product management features, providing a responsive shopping experience.",
    imageUrl: img("/projects/ecommerce.jpg"),
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    // liveUrl: "#",
    // githubUrl: "#",
    featured: false,
    order: 6,
  },
  {
    title: "Stock Flow Inventory",
    description:
      "An inventory management application for tracking products, stock movement, inventory levels, and operational data.",
    imageUrl: img("/projects/stock-flow.jpg"),
    tags: ["MERN Stack", "MongoDB", "REST API"],
    // liveUrl: "#",
    // githubUrl: "#",
    featured: false,
    order: 7,
  },
];

const experienceData = [
  {
    title: "Full Stack Developer",
    organization: "TechB Software Solutions",
    period: "Present",
    highlights: [
      "Develop and maintain responsive web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Build reusable frontend components and user-friendly interfaces using modern JavaScript.",
      "Develop and integrate RESTful APIs for frontend and backend communication.",
      "Implement database schemas, CRUD operations, and MongoDB queries.",
      "Debug application issues and improve performance, functionality, and user experience.",
      "Collaborate with team members to develop and maintain software applications.",
    ],
    order: 1,
  },
  {
    title: "Full Stack Developer",
    organization: "Sukibhavan Properties",
    period: "Previous",
    highlights: [
      "Developed responsive web applications using React.js, JavaScript, HTML, and CSS.",
      "Built backend services and REST APIs using Node.js and Express.js.",
      "Integrated frontend applications with backend APIs and MongoDB.",
      "Implemented CRUD functionality and database management.",
      "Improved UI responsiveness, application performance, and user experience.",
      "Troubleshot and resolved frontend and backend application issues.",
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
  // await Skill.insertMany(skillsData);
  const formattedSkills = skillsData.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.category,
  }))
);

await Skill.insertMany(formattedSkills);
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
