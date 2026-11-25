import { User, GraduationCap, Briefcase, Code2, Target } from "lucide-react";

export default function About({ profile }) {
  if (!profile) return null;

  const cards = [
    {
      Icon: GraduationCap,
      iconBg: "bg-green-500/20 text-green-400",
      label: "Education",
      title: profile.education?.degree,
      sub: profile.education?.institution,
    },
    {
      Icon: Briefcase,
      iconBg: "bg-purple-500/20 text-purple-400",
      label: "Experience",
      title: profile.experienceStatus,
      sub: profile.experienceNote,
    },
    {
      Icon: Code2,
      iconBg: "bg-orange-500/20 text-orange-400",
      label: "Projects",
      title: `${profile.stats?.projectsCompleted}+`,
      sub: "Completed",
    },
    {
      Icon: Target,
      iconBg: "bg-yellow-500/20 text-yellow-400",
      label: "Focus",
      title: profile.focusArea,
      sub: profile.focusNote,
    },
  ];

  return (
    <section id="about" className="section-container py-10 md:py-12">
      <div className="flex items-center gap-2 text-primary mb-2">
        <User size={18} /> <span className="text-sm font-medium">About Me</span>
      </div>
      <h2 className="text-3xl font-bold mb-8">Who I Am</h2>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 bg-panel border border-border rounded-2xl p-8">
        <div>
          <p className="text-gray-400 leading-relaxed">{profile.about}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="bg-bg border border-border rounded-xl p-4">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${card.iconBg}`}
              >
                <card.Icon size={18} />
              </div>
              <p className="text-xs text-gray-500 mb-1">{card.label}</p>
              <p className="font-semibold">{card.title}</p>
              <p className="text-sm text-gray-400">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
