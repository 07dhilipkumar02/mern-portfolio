import { img } from "../utils/img";
import {
  Code,
  Rocket,
  Code2,
  Briefcase,
  BrainCircuit,
  Star,
  Laptop,
  Layers,
  Cpu,
  BookOpen,
  CheckCircle2,
  Award,
} from "lucide-react";

// ✏️ Edit these to change the numbers at the top
const HIGHLIGHTS = [
  { Icon: Rocket, value: "10+", label: "Projects Built", color: "#22c55e" },
  { Icon: Code2, value: "15+", label: "Technologies Learned", color: "#22d3ee" },
  { Icon: Briefcase, value: "3+ Years", label: "Development Experience", color: "#a855f7" },
  { Icon: BrainCircuit, value: "MERN + AI", label: "Technical Expertise", color: "#f97316" },
];

// ✏️ Edit these to change the "Key Achievements" list
const ACHIEVEMENTS = [
  {
    Icon: Laptop,
    title: "10+ Real-World Projects",
    text: "Developed web applications using MERN stack, Python and AI.",
    color: "#22c55e",
  },
  {
    Icon: Layers,
    title: "MERN Stack Development",
    text: "Built scalable and responsive applications with React.js, Node.js, Express.js.",
    color: "#38bdf8",
  },
  {
    Icon: Cpu,
    title: "AI & Machine Learning Projects",
    text: "Implemented AI solutions including RAG, LLMs and NLP applications.",
    color: "#a855f7",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    text: "Exploring advanced technologies like Docker, Redis, and System Design.",
    color: "#f97316",
  },
];

// ✏️ Edit these to change the "Certifications" cards
const CERTIFICATIONS = [
  { title: "MERN Stack", issuer: "Entri Elevate (NSDC)", year: "2025", color: "#22c55e" },
  { title: "MERN Stack", issuer: "Illinois Tech", year: "2025", color: "#38bdf8" },
  { title: "Yuva AI for All", issuer: "AI & Machine Learning", year: "2025", color: "#a855f7" },
  { title: "JavaScript & Python", issuer: "GUVI", year: "2023", color: "#f97316" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container py-10 md:py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="hidden sm:block h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="flex items-center gap-2 text-primary text-sm font-medium">
            <Code size={18} /> My Achievements
          </span>
          <span className="hidden sm:block h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Milestones &amp; <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-gray-400">A journey of learning, building and growing in technology</p>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {HIGHLIGHTS.map(({ Icon, value, label, color }) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-2xl border bg-panel p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            style={{
              borderColor: `${color}40`,
              backgroundImage: `linear-gradient(135deg, ${color}14, transparent 60%)`,
            }}
          >
            <span
              className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center border"
              style={{ backgroundColor: `${color}1a`, borderColor: `${color}40` }}
            >
              <Icon size={28} color={color} />
            </span>
            <div>
              <p className="text-2xl font-bold leading-tight">{value}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
            {/* glowing bottom line */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-2/3 rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, boxShadow: `0 0 12px ${color}` }}
            />
          </div>
        ))}
      </div>

      {/* Trophy + Key achievements */}
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 items-center">
        <div className="flex flex-col items-center text-center">
          <img
            src={img("/trophy.jpg")}
            alt="Achievements trophy"
            className="w-full max-w-sm"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 75%)",
              maskImage: "radial-gradient(ellipse at center, black 55%, transparent 75%)",
            }}
          />
          <p className="text-xl font-semibold -mt-2">Keep Building...</p>
          <p className="text-2xl font-bold text-primary">Keep Innovating...</p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-5 md:p-6">
          <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
            <Star size={24} className="text-primary fill-current" /> Key Achievements
          </h3>
          <div className="space-y-3">
            {ACHIEVEMENTS.map(({ Icon, title, text, color }) => (
              <div
                key={title}
                className="flex items-center gap-4 bg-bg/60 border border-border rounded-xl p-3 hover:border-primary/40 transition-colors"
              >
                <span
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}1f` }}
                >
                  <Icon size={24} color={color} />
                </span>
                <div className="flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">{text}</p>
                </div>
                <CheckCircle2 size={22} className="text-primary shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-10">
        <h3 className="flex items-center gap-3 text-xl font-semibold mb-5">
          <Award size={24} className="text-primary" /> Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map(({ title, issuer, year, color }) => (
            <div
              key={title + issuer}
              className="relative overflow-hidden bg-panel border border-border rounded-2xl p-5 hover:-translate-y-1 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: `${color}1a`, borderColor: `${color}40` }}
                >
                  <Award size={24} color={color} />
                </span>
                <span
                  className="text-xs font-medium rounded-full px-2.5 py-1 border"
                  style={{ color, borderColor: `${color}40`, backgroundColor: `${color}14` }}
                >
                  {year}
                </span>
              </div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-400">{issuer}</p>
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-2/3 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
