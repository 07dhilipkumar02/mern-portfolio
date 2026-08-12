import { Rocket, Star, Code2, Trophy } from "lucide-react";

export default function Stats({ profile }) {
  if (!profile) return null;
  const { stats } = profile;

  const items = [
    { Icon: Rocket, value: `${stats?.projectsCompleted}+`, label: "Projects Completed" },
    { Icon: Star, value: `${stats?.githubStars}+`, label: "GitHub Stars" },
    { Icon: Code2, value: `${stats?.technologies}+`, label: "Technologies" },
    { Icon: Trophy, value: stats?.dedication, label: "Dedication" },
  ];

  return (
    <section className="section-container py-8">
      <div className="bg-panel border border-border rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {items.map(({ Icon, value, label }, i) => (
          <div key={i} className="flex items-center gap-3 p-6 justify-center">
            <Icon className="text-primary" size={26} />
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
