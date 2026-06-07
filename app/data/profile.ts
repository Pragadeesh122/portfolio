// Single source of truth for identity + positioning copy.
// Mirror meaningful changes into portfolio_backend (Pinecone must be reindexed
// separately; frontend and vector store do not share state).

export const profile = {
  name: "Pragadeesh VS",
  role: "AI Systems & Full-Stack Engineer",
  // One-line read, no buzzwords.
  summary:
    "I build production-grade AI agents, RAG platforms, LLM observability, and cloud-native apps.",
  // Slightly longer intro for the hero body.
  intro:
    "I design and run AI infrastructure end to end: hybrid retrieval and agents, the evaluation and observability around them, and the k3s clusters they ship on.",
  location: "Austin, TX",
  timezone: "CST",
  availability: "Open to AI systems and full-stack roles",
  resumePath: "/resume.pdf",
  email: "pragadeeshsv@gmail.com",
} as const;

export const socials = [
  {label: "GitHub", href: "https://github.com/Pragadeesh122"},
  {label: "LinkedIn", href: "https://www.linkedin.com/in/pragadeeshvs"},
  {label: "Twitter", href: "https://x.com/Pragadeesh1221"},
] as const;

export interface CapabilityCluster {
  id: string;
  title: string;
  // What this cluster means in one concrete sentence.
  summary: string;
  // Concrete tools / techniques, rendered as monospace tags.
  tags: string[];
}

// Capability clusters replace the old percentage skill bars.
export const capabilityClusters: CapabilityCluster[] = [
  {
    id: "ai-agents-rag",
    title: "AI Agents & RAG",
    summary:
      "Production retrieval and agent systems: hybrid dense/sparse fusion, HyDE query expansion, cross-encoder reranking, and semantic memory.",
    tags: [
      "LangChain",
      "RAG",
      "AI Agents",
      "HyDE",
      "Reranking",
      "Pinecone",
      "OpenAI Embeddings",
      "Semantic Memory",
    ],
  },
  {
    id: "llm-observability",
    title: "LLM Observability & Evals",
    summary:
      "Instrumentation, tracing, and evaluation around model calls so behavior is measurable, not anecdotal.",
    tags: [
      "Prometheus",
      "Loki",
      "Tempo",
      "Grafana",
      "Evals",
      "Tracing",
      "Structured Logging",
    ],
  },
  {
    id: "cloud-native",
    title: "Cloud-Native Deployment",
    summary:
      "Self-hosted, containerized platforms with real CI/CD: k3s, Helm releases, and runners that deploy straight into the cluster.",
    tags: [
      "k3s",
      "Helm",
      "Docker",
      "Kubernetes",
      "Cloudflare Tunnel",
      "GitHub Actions",
      "GCP",
      "AWS",
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Product Engineering",
    summary:
      "FastAPI and Next.js platforms shipped end to end, from data model and APIs to typed, accessible interfaces.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Node.js",
      "Postgres",
      "Redis",
    ],
  },
  {
    id: "data-ml-fin",
    title: "Data, ML & Financial Engineering",
    summary:
      "Pipelines, model work, and quantitative engineering: orchestrated data flows and invariant-tested numerical code.",
    tags: [
      "Apache Airflow",
      "BigQuery",
      "PyTorch",
      "Black-Scholes",
      "Greeks",
      "ARQ",
      "Go",
    ],
  },
];
