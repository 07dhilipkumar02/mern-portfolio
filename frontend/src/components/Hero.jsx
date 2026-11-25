import { Github, Linkedin, Mail, ArrowRight, Send } from "lucide-react";
import SkillIcon from "./icons.jsx";

export default function Hero({ profile, skills }) {
  if (!profile) return null;

  const orbitSkills = skills.slice(0, 5);

  return (
    <section id="home" className="section-container py-10 md:py-14 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" /> {profile.role}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Hi, I'm <br />
          <span className="text-primary">{profile.name}</span> 👋
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">{profile.tagline}</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-black font-medium rounded-md px-5 py-3 hover:bg-primaryDark transition-colors"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border rounded-md px-5 py-3 hover:border-primary transition-colors"
          >
            <Send size={16} /> Contact Me
          </a>
        </div>

        <div className="flex gap-4">
          {[
            { Icon: Github, href: `https://${profile.contact?.github}` },
            { Icon: Linkedin, href: `https://${profile.contact?.linkedin}` },
            { Icon: Mail, href: `mailto:${profile.contact?.email}` },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center h-80 md:h-96">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden bg-panel">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-6xl font-bold text-primary">
              {profile.name?.charAt(0)}
            </span>
          )}
        </div>

        {orbitSkills.map((skill, i) => {
          const positions = [
            "top-0 left-4",
            "top-4 right-0",
            "bottom-8 left-0",
            "bottom-8 right-4",
            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-32",
          ];
          return (
            <div
              key={skill._id || i}
              className={`absolute ${positions[i % positions.length]} bg-panel border border-border rounded-xl px-3 py-2 flex flex-col items-center gap-1 shadow-lg`}
            >
              <SkillIcon iconKey={skill.icon} size={22} />
              <span className="text-xs text-gray-300">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
