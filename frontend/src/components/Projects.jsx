import { Link } from "react-router-dom";
import { FolderGit2, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ projects }) {
  if (!projects?.length) return null;

  const preview = projects.slice(0, 3);

  return (
    <section id="projects" className="section-container py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <FolderGit2 size={18} /> <span className="text-sm font-medium">My Projects</span>
          </div>
        </div>
        <Link
          to="/projects"
          className="hidden md:inline-flex items-center gap-1 text-primary text-sm hover:underline"
        >
          View All Projects <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {preview.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
