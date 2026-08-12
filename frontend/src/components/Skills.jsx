import { Code } from "lucide-react";
import SkillIcon from "./icons.jsx";

export default function Skills({ skills }) {
  if (!skills?.length) return null;

  return (
    <section id="skills" className="section-container py-16">
      <div className="flex items-center gap-2 text-primary mb-2 justify-center">
        <Code size={18} /> <span className="text-sm font-medium">My Skills</span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="h-px w-10 bg-border" />
        <h2 className="text-2xl font-bold text-center">Technologies I Work With</h2>
        <span className="h-px w-10 bg-border" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="bg-panel border border-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-1 transition-all"
          >
            <SkillIcon iconKey={skill.icon} size={32} />
            <span className="text-sm text-gray-300 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
