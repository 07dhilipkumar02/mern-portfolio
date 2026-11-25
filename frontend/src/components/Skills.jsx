import { Code, Monitor, Server, Database, BrainCircuit, Wrench, Folder } from "lucide-react";
import SkillIcon from "./icons.jsx";

// Display order of categories + the icon shown next to each heading.
// Any category not listed here is shown at the end.
const CATEGORY_META = [
  { name: "Frontend", Icon: Monitor },
  { name: "Backend", Icon: Server },
  { name: "Database", Icon: Database },
  { name: "AI & Machine Learning", Icon: BrainCircuit },
  { name: "Tools & DevOps", Icon: Wrench },
];

function groupByCategory(skills) {
  const groups = {};
  skills.forEach((skill) => {
    const cat = skill.category || "Other";
    (groups[cat] ||= []).push(skill);
  });
  Object.values(groups).forEach((list) => list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)));

  const known = CATEGORY_META.filter((c) => groups[c.name]).map((c) => ({
    ...c,
    skills: groups[c.name],
  }));
  const unknown = Object.keys(groups)
    .filter((name) => !CATEGORY_META.some((c) => c.name === name))
    .map((name) => ({ name, Icon: Folder, skills: groups[name] }));

  return [...known, ...unknown];
}

export default function Skills({ skills }) {
  if (!skills?.length) return null;
  const categories = groupByCategory(skills);

  return (
    <section id="skills" className="section-container py-10 md:py-12">
      <div className="flex items-center gap-2 text-primary mb-2 justify-center">
        <Code size={18} /> <span className="text-sm font-medium">My Skills</span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="h-px w-10 bg-border" />
        <h2 className="text-2xl font-bold text-center">Technologies I Work With</h2>
        <span className="h-px w-10 bg-border" />
      </div>

      <div className="space-y-10">
        {categories.map(({ name, Icon, skills: list }) => (
          <div key={name}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-semibold text-primary">{name}</h3>
              <span className="text-xs text-gray-500">({list.length})</span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {list.map((skill) => (
                <div
                  key={skill._id}
                  className="bg-panel border border-border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <SkillIcon iconKey={skill.icon} color={skill.color} size={28} />
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
