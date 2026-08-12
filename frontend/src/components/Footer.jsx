import { useState } from "react";
import { Code2, Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer({ profile }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          {logoError ? (
            <Code2 className="text-primary" size={22} />
          ) : (
            <img
              src="/logo.png"
              alt={profile?.name || "Portfolio"}
              className="h-20 w-auto object-contain px-1"
              onError={() => setLogoError(true)}
            />
          )}
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {profile?.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: `https://${profile?.contact?.github}` },
            { Icon: Linkedin, href: `https://${profile?.contact?.linkedin}` },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
