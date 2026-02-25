// src/content/platform.ts
// Platform page content — pedagogue.co/platform
// All text in one place for easy editing. No architecture details, no partner names.

export const platform = {
  meta: {
    title: "Platform — Pedagogue Systems",
    description:
      "An integrated workforce management platform designed for the staffing industry — from data foundation to AI-powered operations.",
  },

  hero: {
    heading: "The Pedagogue Platform",
    subheading:
      "An integrated workforce management platform designed for the staffing industry — from data foundation to AI-powered operations.",
  },

  problem: {
    heading: "The problem",
    body: "Staffing companies run on fragmented technology. The typical mid-market firm operates across 5–12 disconnected systems — separate tools for recruiting, compliance, timekeeping, payroll, and client management — with no shared data foundation. This fragmentation drives margin leakage, blocks AI adoption, and makes every acquisition an integration nightmare.",
  },

  approach: {
    heading: "Our approach",
    body: "Pedagogue Systems is building a platform where data governance, compliance, and operational workflows share a single foundation — designed from inception for AI reasoning, multi-entity operations, and the regulatory realities of placing people in work.",
    principle:
      "AI executes, humans govern.",
    principleDetail:
      "Every decision is explainable, every action is auditable, and every consequential outcome can be overridden by a person with the context to make a better call.",
  },

  components: {
    heading: "Platform components",
    items: [
      {
        name: "Cassion",
        subtitle: "Data Foundation",
        description:
          "The system of record for the staffing lifecycle. Cassion manages clients, workers, job orders, assignments, credentials, and financial transactions within a governed, auditable data layer. It is the foundation that every other component depends on.",
        status: "In production",
      },
      {
        name: "Pedagogue Console",
        subtitle: "Operator Governance",
        description:
          "The operating interface where human operators — Pedagogues — monitor the system, review exceptions, approve decisions, and maintain oversight of autonomous operations. If the AI is the pilot, the Console is the control tower.",
        status: "In active development",
      },
      {
        name: "Maimonides",
        subtitle: "Matching & Intelligence",
        description:
          "Explainable AI matching that goes beyond keyword search to understand capability, trajectory, and fit. Every recommendation includes reason codes. Every outcome is overridable. The matching engine operates within the same governed environment as everything else on the platform.",
        status: "In design",
      },
      {
        name: "Almanak",
        subtitle: "Worker Experience",
        description:
          "The worker-facing layer — where people see their credentials, find assignments, track pay, and manage their careers. Named after Benjamin Franklin's almanac: practical knowledge that helps people navigate their own path.",
        status: "Conceptual stage",
      },
    ],
  },

  audience: {
    heading: "Who it's for",
    primary:
      "Built for the full spectrum of staffing operations — from a single-office specialty firm to multi-brand enterprises running thousands of assignments daily. The platform treats traditional placements and shift-based marketplace transactions as equals within the same governed system. The architecture scales horizontally; the go-to-market starts where the need is most acute.",
    beachhead:
      "Starting with the underserved middle — mid-market firms and PE-backed platforms that need enterprise-grade technology without enterprise-grade complexity.",
  },

  whyNow: {
    heading: "Why now",
    forces: [
      {
        title: "Shift-based work is outpacing legacy platforms",
        body: "The dominant staffing systems were built for recruiter-candidate-client workflows, not real-time shift marketplaces. Companies running both models need a platform that treats them as equals.",
      },
      {
        title: "AI has moved from experiment to expectation — but the data isn't ready",
        body: "Two-thirds of staffing firms are adopting AI. A third cite data limitations as the primary barrier to getting value from it.",
      },
      {
        title: "PE consolidation needs technology that supports integration",
        body: "Over 105 staffing deals per year, and every acquisition brings a different ATS, different payroll, different compliance approach.",
      },
      {
        title: "Credentialing complexity is increasing",
        body: "Healthcare, skilled trades, and regulated verticals demand multi-level credential evaluation that current platforms handle poorly.",
      },
      {
        title: "Regulatory pressure is tightening around AI in hiring",
        body: "The companies that built for explainability and audit trails before the regulations arrived will have an advantage over those retrofitting after.",
      },
    ],
  },

  credibility: {
    heading: "Built by operators, not observers",
    body: "The platform is built by a team with direct operating experience inside the staffing companies this technology serves — not by technologists guessing at industry workflows from the outside.",
    highlights: [
      "Scaled a staffing company from $300M to $3B over a decade",
      "Integrated a $2B acquisition in 18 months",
      "Led a 35-project digital transformation at a public workforce solutions company",
      "Consolidated 9+ acquisitions onto unified technology platforms",
    ],
    association:
      "Pedagogue Systems is a member of the American Staffing Association and sits on the ASA Staffing Technology Taskforce.",
  },

  status: {
    heading: "Where we are",
    body: "Cassion — the data foundation — is built and running in production. The Pedagogue Console is in active development. The company is in early conversations with potential partners and advisors.",
    closing:
      "We are selective about who we work with and deliberate about how we grow.",
  },

  cta: {
    label: "Let's talk",
    href: "/#contact",
  },
} as const;
