import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Code2, Github, Linkedin, ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react";

const QUICK_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Achievements", "Contact"];
const SERVICES = [
  "Full Stack Web Development",
  "MERN Stack Applications",
  "REST API Development",
  "AI & LLM Integration",
  "Responsive UI Design",
];

// Accepts "github.com/x" or "https://github.com/x" and always returns a working URL
const toUrl = (v) => (!v ? null : v.startsWith("http") ? v : `https://${v}`);

export default function Footer({ profile }) {
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const c = profile?.contact || {};

  const goTo = (link) => {
    const id = link.toLowerCase();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { Icon: Github, href: toUrl(c.github), label: "GitHub" },
    { Icon: Linkedin, href: toUrl(c.linkedin), label: "LinkedIn" },
    { Icon: Mail, href: c.email ? `mailto:${c.email}` : null, label: "Email" },
  ].filter((s) => s.href);

  return (
    <footer className="relative mt-16 bg-[#0c1116]">
      {/* Curved top edge (replaces the straight border line) */}
      <svg
        className="absolute bottom-full left-0 w-full h-16 md:h-24 block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="footerWaveStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,70 C240,120 480,20 720,60 C960,100 1200,10 1440,50 L1440,120 L0,120 Z"
          fill="#0c1116"
        />
        <path
          d="M0,70 C240,120 480,20 720,60 C960,100 1200,10 1440,50"
          fill="none"
          stroke="url(#footerWaveStroke)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="section-container py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        {/* Brand */}
        <div>
          <button onClick={() => goTo("Home")} aria-label="Go to home" className="mb-4 block">
            {logoError ? (
              <Code2 className="text-primary" size={28} />
            ) : (
              <img
                src="/logo.png"
                alt={profile?.name || "Portfolio"}
                className="h-20 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            )}
          </button>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Full Stack Developer building modern web applications with the MERN stack and
            intelligent AI-powered solutions.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-gray-300 hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => goTo(link)}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">What I Do</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s} className="text-sm text-gray-400 flex gap-2">
                <span className="text-primary">•</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            {c.email && (
              <li>
                <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors break-all">
                  <Mail size={16} className="text-primary shrink-0" /> {c.email}
                </a>
              </li>
            )}
            {c.phone && (
              <li>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary shrink-0" /> {c.phone}
                </a>
              </li>
            )}
            {c.location && (
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-primary shrink-0" /> {c.location}
              </li>
            )}
          </ul>
          <span className="inline-flex items-center gap-2 mt-5 text-xs text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Open to opportunities
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {profile?.name || "Dhilipkumar"}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            Built with <Heart size={14} className="text-primary fill-current" /> using the MERN Stack
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-gray-300 hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
