import type { InterestItemSchema } from "./schemas";
import { z } from "zod";

type InterestItem = z.infer<typeof InterestItemSchema>;

export const interests: {
  reading: InterestItem[];
  listening: InterestItem[];
  speaking: InterestItem[];
} = {
  reading: [
    {
      title: "A Philosophy of Software Design",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      take: "Changed how I think about complexity",
      featured: true,
    },
    {
      title: "Clean Code",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      take: "A must-read classic",
    },
    {
      title: "Refactoring UI",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      take: "Made me a better designer",
    },
    {
      title: "The Pragmatic Programmer",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop",
      take: "Timeless wisdom",
    },
    {
      title: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop",
      take: "Simple but effective",
    },
  ],
  listening: [
    {
      track: "Time",
      artist: "Hans Zimmer",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
      take: "Gets me in the zone every time",
      featured: true,
    },
    {
      track: "Digital Love",
      artist: "Daft Punk",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      take: "Pure nostalgia",
    },
    {
      track: "Reckoner",
      artist: "Radiohead",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      take: "Hauntingly beautiful",
    },
    {
      track: "Midnight City",
      artist: "M83",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      take: "Late night coding vibes",
    },
  ],
  speaking: [
    {
      title: "The Future of Simplicity",
      event: "Svelte Summit",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      take: "My favorite talk to give",
      featured: true,
    },
    {
      title: "Local-First Matters",
      event: "DevConf",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      take: "The future of apps",
    },
    {
      title: "Building for Scale",
      event: "React Conf",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      take: "Lessons from failures",
    },
  ]
};
