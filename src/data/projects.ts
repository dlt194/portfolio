export type ProjectTech = {
  build: string[];
  ship: string[];
  maintain: string[];
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  objectives: string[];
  description?: string;
  screenshots?: ProjectScreenshot[];
  codeSnippets?: ProjectCodeSnippet[];
  tags: string[];
  tech: ProjectTech;
  href?: string;
  github?: string;
  year?: number;
  status?: "Active" | "Maintained" | "Archived" | "WIP" | "Paused";
  featured?: boolean;
};

export type ProjectCodeSnippet = {
  id: string;
  title: string;
  language: string;
  code: string;
  description?: string;
};

export const projects: Project[] = [
  {
    slug: "budgetr",
    title: "Budgetr",
    objectives: [
      "Fast, low-friction transaction capture on mobile",
      "Clear month-by-month reporting and category breakdowns",
      "Secure auth + multi-device sync with minimal ops overhead",
    ],
    description:
      "A budgeting PWA focused on speed and clarity. Built to make day-to-day logging effortless and reporting useful without spreadsheet pain.",
    screenshots: [
      {
        src: "/projects/budgetr/01-dashboard.png",
        alt: "Budgetr dashboard view",
        caption: "Overview dashboard with monthly summaries.",
      },
      {
        src: "/projects/budgetr/02-transactions.png",
        alt: "Budgetr transactions list",
        caption: "Transaction list with filtering and categories.",
      },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Postgres", "PWA"],
    tech: {
      build: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind", "Supabase"],
      ship: ["Vercel (or equivalent)", "Environment-based config"],
      maintain: ["ESLint", "Type-safe patterns", "DB migrations"],
    },
    status: "Paused",
    featured: false,
    github: "https://github.com/dlt194/budgetr",
    year: 2025,
  },

  {
    slug: "ipo-config-audit",
    title: "IPO Config Audit",
    objectives: [
      "Ingest Avaya IP Office config exports reliably",
      "Automate repeatable checks and produce actionable output",
      "Support a desktop distribution for internal use",
    ],
    description:
      "Tooling to ingest IP Office configuration, run a ruleset of checks, and output an audit report suitable for engineering review.",
    screenshots: [
      {
        src: "/projects/ipo-config-audit/01-upload.png",
        alt: "IPO Config Audit upload screen",
        caption: "Upload/import and validation flow.",
      },
      {
        src: "/projects/ipo-config-audit/02-report.png",
        alt: "IPO Config Audit report view",
        caption: "Report output highlighting findings.",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tauri", "Supabase", "Avaya"],
    tech: {
      build: ["Next.js", "TypeScript", "Tauri", "shadcn/ui"],
      ship: ["Tauri bundling", "Desktop release artifacts"],
      maintain: ["Logging", "Ruleset versioning", "Repeatable audit runs"],
    },
    status: "Archived",
    featured: false,
    year: 2024,
  },
  {
    slug: "livehub-integration-layer",
    title: "LiveHub Integration Layer",
    objectives: [
      "Implement middleware to resolve OAUTH authentication between LiveHub AI Platform and Microsoft Dynamics",
      "Allow retrieval of latest ticket updates from Dynamics",
      "Allow raising of new tickets into Dynamics",
    ],
    description:
      "The goal of this project was to resolve an issue where the platform couldn't authenticate directly into Microsoft Dynamics as it did not support OATH2 authentication. It is now live and has been expanded to support Zoom Virtual Agent 2.0. The application also has the ability to score ticket severity based on description give as well as generating an outbound call to convey information for high severity tickets.",
    codeSnippets: [
      {
        id: "ticket-priority",
        title: "Determine Priority",
        language: "python",
        description:
          "Determine ticket priority based on description of the ticket being raised.",
        code: `# ------------------------
# This file classifies the priority of support tickets based on their description text.
# ------------------------

import re
from dataclasses import dataclass

@dataclass
class PriorityDecision:
    label: str          # "P1" | "P2" | "P3" | "P4"
    reason: str         # short human explanation
    matches: list[str]  # which patterns hit

# --- helpers -------------------------------------------------

_WS = r"(?:\b|[^a-z0-9])"

def _hit(text: str, pattern: str) -> bool:
    return re.search(pattern, text, flags=re.IGNORECASE) is not None

def _hits(text: str, patterns: list[str]) -> list[str]:
    return [p for p in patterns if _hit(text, p)]

# --- rules ---------------------------------------------------

# Symptoms
P1_SYMPTOMS = [
    rf"{_WS}(no|cannot|can't)\s+(calls?|calling|receive|make){_WS}",
    rf"{_WS}(phones?|telephony|pbx|voice)\s+(down|offline|out(age)?|unavailable){_WS}",
    rf"{_WS}(system|service)\s+(down|out(age)?|unavailable){_WS}",

    
    rf"{_WS}(system|service)\s+failure{_WS}",
    rf"{_WS}(total|complete|full)\s+(system\s+)?failure{_WS}",

    rf"{_WS}(major|critical)\s+(incident|outage|failure){_WS}",
    rf"{_WS}(complete|total|full)\s+out(age)?{_WS}",
    rf"{_WS}all\s+(calls|phones|users|sites){_WS}",
]
P2_SYMPTOMS = [
    rf"{_WS}(intermittent|degraded|one-way)\s+(audio|calls?|media){_WS}",
    rf"{_WS}(cannot|can't)\s+(transfer|forward|record){_WS}",
    rf"{_WS}(voicemail|vm)\s+(down|fault|issue){_WS}",
    rf"{_WS}(ivr|queue|acd)\s+(issue|fault|slow){_WS}",
]
P4_REQUESTS = [
    rf"{_WS}(extension|ddi|did|number)\s+(change|rename|swap|update){_WS}",
    rf"{_WS}(add|create|enable)\s+(user|mailbox|extension){_WS}",
    rf"{_WS}(password|pin)\s+(reset|change){_WS}",
    rf"{_WS}(macd|move\s*add\s*change\s*delete){_WS}",
    rf"{_WS}(greeting|announcement)\s+(update|upload|change){_WS}",
]

# Impacts
HIGH_IMPACT = [
    rf"{_WS}(all|entire)\s+(company|site|office|users){_WS}",
    rf"{_WS}(multiple|many)\s+(sites|offices|users){_WS}",
]
MEDIUM_IMPACT = [
    rf"{_WS}(department|team|floor){_WS}",
]
LOW_IMPACT = [
    rf"{_WS}(single|one)\s+(user|handset|phone){_WS}",
    rf"{_WS}one\s+user{_WS}",
]

# Contradictions to avoid false P1
NEGATIONS = [
    rf"{_WS}(test|testing|planned|maintenance)\b",
    rf"{_WS}(resolved|restored)\b",
]

# --- classifier ---------------------------------------------

def classify_priority_from_description(description: str) -> PriorityDecision:
    text = (description or "").lower()

    # If clearly a service request, lean to P4 early
    p4 = _hits(text, P4_REQUESTS)

    # Severity/impact signals
    p1s = _hits(text, P1_SYMPTOMS)
    p2s = _hits(text, P2_SYMPTOMS)

    hi  = _hits(text, HIGH_IMPACT)
    mid = _hits(text, MEDIUM_IMPACT)
    lo  = _hits(text, LOW_IMPACT)

    neg = _hits(text, NEGATIONS)

    # Decision tree (simple, transparent)
    # P1: strong outage symptom + high/medium impact and no negation
    if p1s and not neg and (hi or mid or not (p4 or p2s or lo)):
        return PriorityDecision("P1", "Outage keywords with broad impact", p1s + hi + mid)

    # P2: degradation symptoms or outage with low impact
    if p2s or (p1s and lo):
        return PriorityDecision("P2", "Degradation/feature failure or limited outage", p2s + p1s + lo)

    # P4: service request / MACD style
    if p4:
        return PriorityDecision("P4", "Service request / change", p4)

    # Default P3
    return PriorityDecision("P3", "No strong outage/request indicators", [])

# Map your P1–P4 to Dynamics prioritycode.
# Adjust to your org’s option set values if different.
PRIORITY_LABEL_TO_CODE = {
    "P1": 1,  # Critical
    "P2": 2,  # High
    "P3": 3,  # Normal
    "P4": 4,  # Low
}

def pick_priority_code(description: str) -> tuple[int, PriorityDecision]:
    decision = classify_priority_from_description(description)
    code = PRIORITY_LABEL_TO_CODE.get(decision.label, 3)

    print(f"Priority classified as {decision.label} ({code}): {decision.reason}; matches: {', '.join(decision.matches) or 'none'}")
    return code, decision

`,
      },
    ],

    tags: ["LiveHub AI", "Zoom", "Python", "FastAPI"],
    tech: {
      build: ["Python", "FastAPI"],
      ship: ["Docker", "Docker Compose"],
      maintain: [
        "Structured logging",
        "Health check endpoints",
        "OAuth token lifecycle management",
        "Configuration via environment variables",
        "Error handling and retry logic",
        "Container health monitoring",
      ],
    },
    status: "Maintained",
    featured: true,
    github: "",
    year: 2026,
  },
  {
    slug: "zoom-oncall-manager",
    title: "Zoom On-Call Manager",
    objectives: [
      "Provide easy, maintainable way to manage On-Call Engineers in Zoom Contact Centre",
    ],
    description:
      "Quick and simple NextJS application that is embedded in Microsoft Teams using Entra ID for authentication to allow simple management of On Call Engineers for escalations calls from Zoom Contact Centre.",
    screenshots: [
      {
        src: "/projects/zocm/01-zocm.png",
        alt: "Zoom On-Call Manager screen",
        caption: "",
      },
    ],
    tags: ["NextJS", "React", "JavaScript"],
    tech: {
      build: ["NextJS", "ShadCN", "Microsoft Teams Toolkit"],
      ship: ["Docker", "Docker Compose"],
      maintain: [
        "Authentication and authorization management",
        "Role-based access control",
        "Configuration via environment variables",
        "Operational logging",
        "Access auditing",
      ],
    },
    status: "Maintained",
    featured: true,
    year: 2026,
  },
  {
    slug: "thorpe-bowls-club",
    title: "Thorpe Le Soken Bowls Club",
    objectives: [
      "Provide a free website for local club",
      "Easy to update content",
      "Simple to host",
    ],
    description:
      "This is a project I completed for my father in-law. The site was created for the club to easily convey information and attract new members.",
    screenshots: [
      {
        src: "/projects/tbc/01-tbc.png",
        alt: "Thorpe Bowls Club Homepage",
        caption: "Screenshot of the homepage",
      },
      {
        src: "/projects/tbc/02-tbc.png",
        alt: "Thorpe Bowls Club Calendar",
        caption: "Screenshot of the calendar page",
      },
      {
        src: "/projects/tbc/03-tbc.png",
        alt: "Thorpe Bowls Club Open Days page",
        caption: "Screenshot of the open days page",
      },
      {
        src: "/projects/tbc/04-tbc.png",
        alt: "Thorpe Bowls Club Contact page",
        caption: "Screenshot of the contact page",
      },
    ],
    tags: ["Python", "Flask", "HTML", "CSS"],
    tech: {
      build: ["Flask"],
      ship: [
        "Linux VPS hosting",
        "Gunicorn application server",
        "Nginx reverse proxy",
      ],

      maintain: [
        "Content updates and site maintenance",
        "Basic security updates",
        "Server patching",
        "Backup management",
      ],
    },
    status: "Maintained",
    featured: false,
    year: 2024,
    href: "https://thorpelesokenbowlsclub.co.uk/",
  },
  {
    slug: "cert-tools",
    title: "Certificate Tools",
    objectives: [
      "Simplify generation of OpenSSL Configurations for Avaya IP Office systems",
      "Simplify Certificate Signing Requests",
      "Simplify P12 Creation from provided certificates",
    ],
    description:
      "This is the first internal tool I created with the goal to simplify the creation of configurations, Certificate Signing Requests and the creation of P12's.",
    screenshots: [
      {
        src: "/projects/cert-tools/01-cert-tools.png",
        alt: "Certificate Tools CSR Creation",
        caption: "Screenshot of the CSR Creation Page",
      },
      {
        src: "/projects/cert-tools/02-cert-tools.png",
        alt: "Certificate Tools P12 Creation",
        caption: "Screenshot of the P12 Creatoin page",
      },
      {
        src: "/projects/cert-tools/03-cert-tools.png",
        alt: "Certificate Tools OpenSSL Configuration Generator",
        caption: "Screenshot of the OpenSSL Configuration page",
      },
      {
        src: "/projects/cert-tools/04-cert-tools.png",
        alt: "Certificate Tools Site Testing",
        caption: "Screenshot of the Site Testing page",
      },
    ],
    tags: ["Visual Basic", "OpenSSL", "Internal Tooling"],
    tech: {
      build: ["Visual Basic"],
      ship: ["Internal desktop distribution", "Executable packaging"],
      maintain: [
        "Certificate lifecycle updates",
        "OpenSSL compatibility updates",
        "Validation of generated configurations",
        "Bug fixes and usability improvements",
      ],
    },
    status: "Maintained",
    featured: false,
    year: 2023,
  },
  {
    slug: "webrtc-client",
    title: "Avaya IP Office WebRTC Client",
    objectives: [
      "Create a portable WebRTC Client to update/improve existing offerings",
    ],
    description:
      "This is an on-going project where I am building a WebRTC Client for use with Avaya IP Office. It makes use of the available API's documented by Avaya.",
    screenshots: [],
    tags: ["NextJS", "JavaScript"],
    tech: {
      build: ["NextJS"],
      ship: ["Internal desktop distribution", "Web-based distribution"],
      maintain: [
        "Incremental feature development",
        "Compatibility updates with Avaya APIs",
        "WebRTC stability and call quality improvements",
        "Bug fixes and regression handling",
      ],
    },
    status: "Active",
    featured: false,
    year: 2026,
  },
  {
    slug: "cert-tools-v2",
    title: "Certificate Tools V2",
    objectives: [
      "Update the Certificate Tools to be accessible anywhere",
      "Remove the requirement for fixed OpenSSL to be installed on the PC running the tool",
    ],
    description:
      "This is a re-write of the original certificate tool with the aim of making the application more maintainable and remove the OpenSSL dependency. It was re-written with NextJS, hosted on our server with Docker allowing NextJS access to the Docker socket to create containers for generating the CSR & P12.",
    screenshots: [
      {
        src: "/projects/cert-tools-v2/01-cert-tools-v2.png",
        alt: "Certificate Tools Auth Page",
        caption: "Screenshot of the Auth Page",
      },
      {
        src: "/projects/cert-tools-v2/02-cert-tools-v2.png",
        alt: "Certificate Tools OpenSSL Config Page",
        caption: "Screenshot of the OpenSSL Config Page",
      },
      {
        src: "/projects/cert-tools-v2/03-cert-tools-v2.png",
        alt: "Certificate Tools CSR Creation Page",
        caption: "Screenshot of the CSR Creation Page",
      },
      {
        src: "/projects/cert-tools-v2/04-cert-tools-v2.png",
        alt: "Certificate Tools P12 Creation Page",
        caption: "Screenshot of the P12 Creation Page",
      },
      {
        src: "/projects/cert-tools-v2/05-cert-tools-v2.png",
        alt: "Certificate Tools Site Testing Page",
        caption: "Screenshot of the Site Testing Page",
      },
    ],
    tags: ["NextJS", "JavaScript"],
    tech: {
      build: [
        "Next.js",
        "TypeScript",
        "shadcn/ui",
        "Tailwind CSS",
        "Node.js API Routes",
        "Dockerode (Docker socket integration)",
        "OpenSSL runner containers",
      ],
      ship: [
        "Docker image + Docker Compose deployment",
        "Reverse proxy (NGINX / NPM) + HTTPS",
        "Environment-based configuration",
        "Internal hosting (on-prem / VPS)",
      ],
      maintain: [
        "Container image updates",
        "Security patching",
        "Dependency management",
        "Audit logging",
        "Traceability",
      ],
    },
    status: "Active",
    featured: true,
    year: 2026,
  },
  {
    slug: "ipnetix-web-manager",
    title: "IP Netix Web Manager",
    objectives: [
      "API Orchestration",
      "Single management interface for multiple products",
      "Secure auth",
      "Device monitoring",
    ],
    description:
      "An application designed to combine multiple management interfaces into one single web page, allowing efficient management of multiple customers and their devices.",
    screenshots: [
      {
        src: "/projects/ipn-webmanager/01-dashboard.png",
        alt: "IP Netix Web Manager Dashboard",
        caption: "Overview dashboard",
      },
      {
        src: "/projects/ipn-webmanager/02-dashboard.png",
        alt: "IP Netix Web Manager Dashboard",
        caption: "Overview Dashboard (Dark Mode)",
      },
      {
        src: "/projects/ipn-webmanager/03-dashboard.png",
        alt: "System Overview Dashboard",
        caption: "System Overview Dashboard",
      },
      {
        src: "/projects/ipn-webmanager/04-dashboard.png",
        alt: "System Terminal Dashboard",
        caption: "Terminal connection to server for Management",
      },
    ],
    tags: ["Next.js", "TypeScript", "Prisma ORM", "Postgres", "Docker"],
    tech: {
      build: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind"],
      ship: ["Docker", "Environment-based config"],
      maintain: ["ESLint", "Type-safe patterns", "DB migrations"],
    },
    status: "Active",
    featured: false,
    year: 2026,
  },
];
