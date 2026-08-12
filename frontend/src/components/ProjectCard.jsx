import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-panel border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
      <div className="h-40 bg-gradient-to-br from-green-900/40 to-panel flex items-center justify-center text-gray-600 text-sm">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          "Project preview"
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-bg border border-border rounded-full px-2 py-1 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-primary hover:underline"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
