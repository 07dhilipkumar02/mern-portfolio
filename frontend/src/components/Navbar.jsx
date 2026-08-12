import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Code2, Download, Menu, X } from "lucide-react";

const LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ name, resumeUrl }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // When we land on "/" with a hash (e.g. coming from /projects), scroll to it.
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        setActive(id.charAt(0).toUpperCase() + id.slice(1));
      }
    }
  }, [location]);

  const handleClick = (link) => {
    const id = link.toLowerCase();
    setActive(link);
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <nav className="section-container flex items-center justify-between min-h-20 py-2">
        <Link to="/" className="flex items-center">
          {logoError ? (
            <Code2 className="text-primary" size={26} />
          ) : (
            <img
              src="/logo.png"
              alt={name || "Portfolio"}
              className="h-24 w-auto object-contain px-1"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className={`pb-1 border-b-2 transition-colors ${
                  active === link
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-white"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={resumeUrl || "#"}
          download={!!resumeUrl}
          target={resumeUrl ? "_blank" : undefined}
          rel={resumeUrl ? "noreferrer" : undefined}
          className="hidden md:inline-flex items-center gap-2 border border-primary text-primary rounded-md px-4 py-2 text-sm hover:bg-primary hover:text-black transition-colors"
        >
          <Download size={16} /> Download CV
        </a>

        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border px-6 pb-4 flex flex-col gap-3">
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className="text-left text-gray-300 py-1"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
