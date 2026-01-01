import type { NavItemSchema, SocialsSchema } from "./schemas";
import { z } from "zod";

type NavItem = z.infer<typeof NavItemSchema>;
type Socials = z.infer<typeof SocialsSchema>;

export const siteIdentity = {
  name: "Dagmawi Yohannes",
  title: "Building AI-Driven Experiences",
  description: "Full-stack engineer and founder. Building local-first, AI-powered mobile and web apps that scale to millions.",
  email: "daggyohannes@gmail.com",
};

export const socials: Socials = {
  github: "https://github.com/dagmawi-y-hailu",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/in/dagmawi-y-hailu",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Career", href: "#career" },
  { label: "Notes", href: "/blog" },
];
