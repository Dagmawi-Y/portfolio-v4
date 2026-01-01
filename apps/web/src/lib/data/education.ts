import type { CertificateSchema, EducationSchema } from "./schemas";
import { z } from "zod";

type Education = z.infer<typeof EducationSchema>;
type Certificate = z.infer<typeof CertificateSchema>;

export const education: Education[] = [
  {
    degree: "Software Engineering",
    school: "Holberton School",
    year: "2023 - 2025",
    logo: "/holbterton-logo.png",
    link: "https://www.holbertonschool.com/",
    description: [
      "Intensive project-based software engineering program.",
      "Focused on full-stack development, Low-level programming, and System engineering."
    ],
  },
  {
    degree: "BSc in Computer Software Engineering",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "/dbu-logo.png",
    link: "#",
    description: [
      "Major in Software Engineering with focus on system architecture.",
      "Studied distributed systems and software quality assurance."
    ],
  },
  {
    degree: "Certified Data Scientist",
    school: "ExploreAI Academy",
    year: "2023 - 2024",
    logo: "/exploreai-logo.png",
    link: "#",
    description: [
      "Specialization in machine learning and data engineering.",
      "Hands-on experience with statistical analysis and data visualization."
    ],
  },
  {
    degree: "BA in Business Administration",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "/dbu-logo.png",
    link: "#",
    description: [
      "Concurrent degree focusing on organizational leadership.",
      "Studied startup management and business strategy."
    ],
  }
];

export const certificates: Certificate[] = [
  {
    name: "Android Developer Fundamentals",
    issuer: "Google / Udacity",
    year: "2023",
    link: "#",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Android&backgroundColor=3ddc84",
  },
  {
    name: "Founder Academy",
    issuer: "Alx / Holberton",
    year: "2023",
    link: "#",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Founder&backgroundColor=000000",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
    link: "#",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Web&backgroundColor=2196f3",
  },
];
