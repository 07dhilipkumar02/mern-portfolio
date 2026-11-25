import { Briefcase } from "lucide-react";

export default function Experience({ experience }) {
  if (!experience?.length) return null;

  return (
    <section id="experience" className="section-container py-10 md:py-12">
      <div className="flex items-center gap-2 text-primary mb-2">
        <Briefcase size={18} /> <span className="text-sm font-medium">Work Experience</span>
      </div>
      <h2 className="text-3xl font-bold mb-10">Where I've Worked</h2>

      <div className="relative border-l border-border ml-3">
        {experience.map((exp) => (
          <div key={exp._id} className="relative pl-8 pb-10 last:pb-0">
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-primary" />
            <div className="bg-panel border border-border rounded-2xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold">{exp.title}</h3>
                <span className="text-xs text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{exp.organization}</p>
              {exp.description && (
                <p className="text-sm text-gray-400 mb-2">{exp.description}</p>
              )}
              {exp.highlights?.length > 0 && (
                <ul className="space-y-1.5">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
