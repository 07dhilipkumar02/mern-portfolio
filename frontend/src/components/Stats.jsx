import { Rocket, Github, Code2, GraduationCap } from "lucide-react";

// Set this to your real GitHub contribution count (e.g. 250) to show "250+".
// Leave it as null to show "Active" instead of a number.
const GITHUB_CONTRIBUTIONS = null;

export default function Stats({ profile }) {
  const projects = profile?.stats?.projectsCompleted || 10;

  const items = [
    { Icon: Rocket, value: `${projects}+`, label: "Projects Built" },
    {
      Icon: Github,
      value: GITHUB_CONTRIBUTIONS ? `${GITHUB_CONTRIBUTIONS}+` : "Active",
      label: "GitHub Contributions",
    },
    { Icon: Code2, value: "MERN + AI", label: "Technologies" },
    { Icon: GraduationCap, value: "Continuous", label: "Learning" },
  ];

  return (
    <section className="section-container py-6">
      <div className="bg-panel border border-border rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {items.map(({ Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 p-6 justify-center">
            <Icon className="text-primary shrink-0" size={26} />
            <div>
              <p className="text-xl font-bold">{value}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
