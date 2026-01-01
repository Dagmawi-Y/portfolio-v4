import type { Project } from "./schemas";

export const projects: Project[] = [
  {
    title: "Vella.ai",
    description: "Local-first web email client featuring in-browser AI inference and CRDT-based real-time sync.",
    tags: ["Local-First", "AI", "CRDT", "React"],
    category: "Full Stack",
    type: "Work",
    link: "#", // Add link if known
    image: "https://images.unsplash.com/photo-1557200130-4b2745a699eb?auto=format&fit=crop&q=80&w=1200", 
    stats: "In-Browser AI",
    size: "wide"
  },
  {
    title: "TeleTV",
    description: "Entertainment super-app player reaching 10M+ users. Implemented adaptive bitrate streaming and DRM.",
    tags: ["Mobile", "Streaming", "DRM", "React Native"],
    category: "Mobile",
    type: "Work",
    link: "#",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200",
    stats: "10M+ Users",
    size: "large"
  },
  {
    title: "Kidopia",
    description: "AI-powered gamified learning platform for kids in Africa. Currently founding and leading development.",
    tags: ["Founder", "EdTech", "AI", "Mobile"],
    category: "Full Stack",
    type: "Live",
    link: "#",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    stats: "Founder",
    size: "wide"
  },
   {
    title: "CashGO",
    description: "Foreign remittance app driving over $1M daily volume into Ethiopia's economy.",
    tags: ["FinTech", "Mobile", "Security"],
    category: "Mobile",
    type: "Work",
    link: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
    stats: "$1M+ Daily",
    size: "large"
  },
  {
    title: "Dashen Super App",
    description: "Developed the merchant segment of a major banking super-app using pixel-perfect design.",
    tags: ["FinTech", "React Native", "Android/iOS"],
    category: "Mobile",
    type: "Work",
    link: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
    stats: "Banking",
    size: "normal"
  },
  {
    title: "IdeaSpring",
    description: "Startups-to-investors linkage platform. Designed and engineered the entire full-stack system.",
    tags: ["Full Stack", "Platform", "Web"],
    category: "Full Stack",
    type: "Work",
    link: "#",
    image: "https://images.unsplash.com/photo-1559136555-930d72f18615?auto=format&fit=crop&q=80&w=1200",
    stats: "Venture",
    size: "normal"
  },
  {
    title: "EthioFit",
    description: "Locally tuned fitness management solution with workout planner and graphical analytics.",
    tags: ["Flutter", "Health", "Analytics"],
    category: "Mobile",
    type: "Personal",
    link: "#",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    stats: "Flutter",
    size: "normal"
  }
];
