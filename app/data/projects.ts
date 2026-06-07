import type {StaticImageData} from "next/image";
import nalvar from "@/public/nalvar-display.png";
import citro from "@/public/citro-home.png";
import financeTracker from "@/public/finance-tracker.png";
import eleganceHub from "@/public/elegancehub-landing.png";
import wildOasis from "@/public/wild_oasis_webiste.png";
import styleSenseAI from "@/public/styleSenseAI.png";
import runaxPlatform from "@/public/runaxai-platform.png";
import optionsStrategy from "@/public/options-strategy.png";

export type ProjectVisual = {kind: "image"; src: StaticImageData};

export type ProjectTier = "flagship" | "headline" | "supporting";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "source" | "live";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status?: string;
  tier: ProjectTier;
  tech: string[];
  highlights?: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    slug: "runaxai",
    title: "RunaxAI",
    tagline: "Self-hosted AI management and RAG platform",
    description:
      "A production AI platform for managing providers, agents, and retrieval. Runs on a personal k3s cluster, deploys itself through a self-hosted runner, and ships with a full observability stack.",
    year: "2025",
    status: "Live",
    tier: "flagship",
    tech: [
      "FastAPI",
      "Next.js",
      "Postgres",
      "Redis",
      "MinIO",
      "Pinecone",
      "ARQ",
      "Helm",
      "k3s",
      "Cloudflare Tunnel",
      "Prometheus",
      "Loki",
      "Tempo",
      "Grafana",
      "RAG",
      "AI Agents",
    ],
    highlights: [
      "Hybrid RAG: HyDE query expansion, dense and sparse retrieval fusion, cross-encoder reranking.",
      "Self-hosted on a k3s cluster (Mac mini via OrbStack), with TLS and ingress through Cloudflare Tunnel.",
      "CI/CD runs in a self-hosted runner pod that executes Helm and kubectl directly against the cluster.",
      "Full observability: Prometheus, Loki, Tempo, and Grafana, with ARQ background workers.",
      "Provider-agnostic LLM layer with semantic memory, agents, tools, and prompt management.",
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Pragadeesh122/RunaxAI",
        kind: "source",
      },
      {label: "runaxai.com", href: "https://runaxai.com", kind: "live"},
    ],
    visual: {kind: "image", src: runaxPlatform},
  },
  {
    slug: "options-strategy-reference",
    title: "Options Strategy Reference",
    tagline: "Payoff visualizer with tested options math",
    description:
      "An options strategy reference and payoff visualizer: a data-driven catalog, Black-Scholes pricing, Greeks and probability overlays, worked examples, and builder and share flows, all backed by invariant-tested payoff math.",
    year: "2025",
    tier: "headline",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Vitest",
      "fast-check",
      "Black-Scholes",
      "Greeks",
      "Payoff Engine",
      "Financial Engineering",
    ],
    highlights: [
      "Leg-array payoff engine: single and multi-leg strategies share one code path, with no per-strategy branching.",
      "Zero-dependency Black-Scholes-Merton pricing, validated against QuantLib and Haug fixtures and put-call parity.",
      "Greeks, probability, and time-decay overlays on interactive payoff diagrams.",
      "Eight catalog strategies, a strategy builder, and a share codec, all invariant-tested with Vitest and fast-check.",
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Pragadeesh122/Options_Strategy_Reference/tree/main/options-strategy-reference",
        kind: "source",
      },
      {label: "financetracker.live", href: "https://financetracker.live", kind: "live"},
    ],
    visual: {kind: "image", src: optionsStrategy},
  },
  {
    slug: "nalvar",
    title: "Nalvar",
    tagline: "Consulting site with a RAG chatbot",
    description:
      "A site for Nalvar, a tech consulting business, showcasing services and case studies, with a RAG-powered chatbot for intelligent question answering.",
    year: "2024",
    tier: "supporting",
    tech: ["Next.js", "FastAPI", "LangChain", "RAG", "TypeScript"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/nalvar", kind: "source"},
      {label: "nalvar.com", href: "https://nalvar.com", kind: "live"},
    ],
    visual: {kind: "image", src: nalvar},
  },
  {
    slug: "citro",
    title: "Citro Essential Oil",
    tagline: "Bespoke e-commerce storefront",
    description:
      "A bespoke storefront for an essential oils client, with product showcases, motion, and responsive layouts.",
    year: "2024",
    tier: "supporting",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/citro", kind: "source"},
      {label: "citroessentialoil.com", href: "https://citroessentialoil.com", kind: "live"},
    ],
    visual: {kind: "image", src: citro},
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    tagline: "Investment planning calculators",
    description:
      "An investment planning app with CAGR computation, return projections, goal and retirement planning, step-up SIP calculations, and mutual fund tracking.",
    year: "2024",
    tier: "supporting",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/finance_tracker", kind: "source"},
      {label: "financetracker.one", href: "https://www.financetracker.one/", kind: "live"},
    ],
    visual: {kind: "image", src: financeTracker},
  },
  {
    slug: "elegancehub",
    title: "EleganceHub",
    tagline: "Full-featured e-commerce platform",
    description:
      "An e-commerce platform with authentication, product filtering, cart management, payment processing, and order tracking.",
    year: "2024",
    tier: "supporting",
    tech: ["Next.js", "Tailwind CSS", "NextAuth", "shadcn/ui", "Supabase"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/e-commerce", kind: "source"},
      {label: "elegancehub.vercel.app", href: "https://elegancehub.vercel.app", kind: "live"},
    ],
    visual: {kind: "image", src: eleganceHub},
  },
  {
    slug: "wild-oasis",
    title: "Wild Oasis",
    tagline: "Cabin booking platform",
    description:
      "A hotel booking platform for guests to explore cabins, make reservations, and manage bookings.",
    year: "2024",
    tier: "supporting",
    tech: ["Next.js", "Tailwind CSS", "NextAuth", "Supabase"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/the-wild-oasis-website", kind: "source"},
      {label: "Live site", href: "https://the-wild-oasis-website-iota.vercel.app/", kind: "live"},
    ],
    visual: {kind: "image", src: wildOasis},
  },
  {
    slug: "stylesense-ai",
    title: "StyleSense AI",
    tagline: "AI wardrobe assistant (mobile)",
    description:
      "An AI wardrobe management mobile app with personalized outfit recommendations from Gemini, calendar scheduling, and analytics.",
    year: "2024",
    status: "In progress",
    tier: "supporting",
    tech: ["React Native", "Expo", "Tamagui", "Gemini", "Firebase", "Node.js"],
    links: [
      {label: "Source", href: "https://github.com/Pragadeesh122/VirtualWardrobe", kind: "source"},
    ],
    visual: {kind: "image", src: styleSenseAI},
  },
];

export const flagshipProjects = projects.filter((p) => p.tier !== "supporting");
export const supportingProjects = projects.filter((p) => p.tier === "supporting");
