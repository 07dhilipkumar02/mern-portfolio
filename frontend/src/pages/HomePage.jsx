import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { getProfile, getSkills, getProjects, getExperience } from "../api.js";

export default function HomePage() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getProfile(), getSkills(), getProjects(), getExperience()])
      .then(([profileData, skillsData, projectsData, experienceData]) => {
        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
        setExperience(experienceData);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Could not reach the API. Make sure the backend is running and the database is seeded."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-gray-400">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-red-400 px-6 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navbar name={profile?.name} resumeUrl={profile?.resumeUrl} />
      <Hero profile={profile} skills={skills} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Stats profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
