import type { CertificateSchema, EducationSchema } from "./schemas";
import { z } from "zod";

type Education = z.infer<typeof EducationSchema>;
type Certificate = z.infer<typeof CertificateSchema>;

export const education: Education[] = [
  {
    degree: "Software Engineering",
    school: "Holberton School",
    year: "2023 - 2025",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Holberton&backgroundColor=e63946",
    link: "https://www.holbertonschool.com/",
    description: "Intensive project-based software engineering program focusing on full-stack development.",
  },
  {
    degree: "BSc in Computer Software Engineering",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=DBU&backgroundColor=457b9d",
    link: "#",
    description: "Major in Software Engineering with focus on system architecture and distributed systems.",
  },
  {
    degree: "Certified Data Scientist",
    school: "ExploreAI Academy",
    year: "2023 - 2024",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ExploreAI&backgroundColor=1d3557",
    link: "#",
    description: "Specialization in machine learning, data engineering, and statistical analysis.",
  },
  {
    degree: "BA in Business Administration",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=DBUBus&backgroundColor=a8dadc",
    link: "#",
    description: "Concurrent degree focusing on organizational leadership and startup management.",
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
