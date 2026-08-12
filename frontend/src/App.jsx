import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
