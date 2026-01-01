import type { ExperimentSchema, OpenSourceContributionSchema, OpenSourceLibrarySchema } from "./schemas";
import { z } from "zod";

type Experiment = z.infer<typeof ExperimentSchema>;
type OpenSourceContribution = z.infer<typeof OpenSourceContributionSchema>;
type OpenSourceLibrary = z.infer<typeof OpenSourceLibrarySchema>;

export const openSource: {
  contributions: OpenSourceContribution[];
  libraries: OpenSourceLibrary[];
} = {
  contributions: [
    {
      project: "Techtonic Tribe",
      description: "Founded and led a university tech club. Organized bootcamps and mentored students to build real software.",
      link: "#",
      status: "Founder",
    },
    {
      project: "jazz.tools",
      description: "Implemented CRDT sync integration for local-first apps.",
      link: "https://jazz.tools",
      status: "Used In Prod",
    },
  ],
  libraries: [
    {
      name: "TeleTV Player",
      description: "Custom video player with adaptive bitrate and DRM.",
      stats: "Proprietary",
      link: "#",
    },
    {
      name: "Local-First Store",
      description: "Storage manager for optimistic UI and offline sync.",
      stats: "Internal",
      link: "#",
    },
  ],
};

export const experiments: Experiment[] = [
  {
    name: "In-Browser AI",
    description: "Running LLM inference purely locally in the browser for privacy.",
    link: "#",
    tags: ["WASM", "WebGPU", "AI"],
  },
  {
    name: "CRDT Sync",
    description: "Real-time multi-device synchronization research.",
    link: "#",
    tags: ["Distributed Systems", "Local-First"],
  },
];
