import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { getProfile, getProjects } from "../api.js";

export default function ProjectsPage() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getProfile(), getProjects()])
      .then(([profileData, projectsData]) => {
        setProfile(profileData);
        setProjects(projectsData);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Could not reach the API. Make sure the backend is running and the database is seeded."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar name={profile?.name} resumeUrl={profile?.resumeUrl} />

      <section className="section-container py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="flex items-center gap-2 text-primary mb-2">
          <FolderGit2 size={18} /> <span className="text-sm font-medium">My Projects</span>
        </div>
        <h1 className="text-3xl font-bold mb-10">All Projects</h1>

        {loading && <p className="text-gray-400">Loading projects...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </section>

      <Footer profile={profile} />
    </div>
  );
}
