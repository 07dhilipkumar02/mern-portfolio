import {
  Code2,
  Palette,
  Braces,
  Atom,
  Hexagon,
  Server,
  Leaf,
  GitBranch,
  BrainCircuit,
  Send,
  Container,
  KeyRound,
  Layers,
} from "lucide-react";

// Maps a skill's `icon` key (stored in MongoDB) to a lucide-react icon + brand color.
const ICON_MAP = {
  html5: { Icon: Code2, color: "#e34f26" },
  css3: { Icon: Palette, color: "#1572b6" },
  javascript: { Icon: Braces, color: "#f7df1e" },
  react: { Icon: Atom, color: "#61dafb" },
  nodejs: { Icon: Hexagon, color: "#3c873a" },
  express: { Icon: Server, color: "#e5e7eb" },
  mongodb: { Icon: Leaf, color: "#47a248" },
  git: { Icon: GitBranch, color: "#f05032" },
  aiml: { Icon: BrainCircuit, color: "#a855f7" },
  postman: { Icon: Send, color: "#ff6c37" },
  docker: { Icon: Container, color: "#2496ed" },
  jwt: { Icon: KeyRound, color: "#fb015b" },
  redux: { Icon: Layers, color: "#764abc" },
};

export default function SkillIcon({ iconKey, size = 28 }) {
  const entry = ICON_MAP[iconKey] || { Icon: Code2, color: "#22c55e" };
  const { Icon, color } = entry;
  return <Icon size={size} color={color} strokeWidth={1.75} />;
}
