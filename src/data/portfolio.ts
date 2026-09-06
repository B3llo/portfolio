export const PROFILE = {
  name: "Gabriel F. Bello",
  handle: "bello",
  role: "DevOps Engineer",
  title: "Cloud Operations Development Specialist",
  employer: "Infios",
  formerEmployer: "Körber Supply Chain",
  location: "Brazil",
  email: "gfbello.x@gmail.com",
  bio: [
    "Hello! I'm Gabriel and I build infrastructure for the web.",
    "I graduated in Analysis and Systems Development at UNIPAR (2023) and have been working in tech since 2021. My journey started with curiosity about C++, moved through web development with Node and Angular, and evolved into a deep passion for cloud infrastructure and platform engineering.",
    "Nowadays I focus on cloud platforms, Kubernetes orchestration, Infrastructure as Code and CI/CD — building things that actually work, with AI tools like Claude Code and Codex woven into the process.",
  ],
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/B3llo/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-felipe-bello/",
  },
  { label: "Instagram", href: "https://www.instagram.com/gabriel_b3llo/" },
  { label: "Email", href: "mailto:gfbello.x@gmail.com" },
];

export interface TechGroup {
  label: string;
  items: string[];
}

export const TECH_GROUPS: TechGroup[] = [
  { label: "cloud", items: ["AWS", "Azure", "GCP", "OCI"] },
  { label: "containers", items: ["Docker", "Kubernetes", "Helm"] },
  { label: "iac", items: ["Terraform", "Ansible", "Bash"] },
  { label: "ci/cd", items: ["Azure DevOps", "GitHub Actions", "Buildkite"] },
  { label: "observability", items: ["Datadog", "Dynatrace", "Grafana"] },
  { label: "languages", items: ["TypeScript", "Python", "Bash"] },
  { label: "ai-assisted", items: ["Claude Code", "Codex", "AI Agents"] },
  { label: "web3", items: ["Web3", "Smart Contracts", "Blockchain"] },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  current?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Infios (formerly Körber Supply Chain)",
    role: "Cloud Operations Development Specialist",
    period: "Mar 2024 — Present",
    summary:
      "Migrated legacy provisioning from PowerShell to Terraform/Bash (70% reduction in setup time). Engineered CI/CD pipelines with Azure DevOps and Helm. Integrated Dynatrace and Datadog observability on OCI Kubernetes clusters.",
    current: true,
  },
  {
    company: "Trimble",
    role: "DevOps Engineer",
    period: "Jan 2023 — Mar 2024",
    summary:
      "Maintained and created infrastructure for large-scale applications serving up to 300k users, including products for FedEx. Stack: AWS, Azure, Kubernetes, Serverless, Terraform, Buildkite, DataDog.",
  },
  {
    company: "EZOps",
    role: "DevOps Engineer",
    period: "Aug 2022 — Jan 2023",
    summary:
      "Led cloud infrastructure on AWS, Docker, Kubernetes, Terraform and Grafana. Achieved 99.10% uptime, scaled to handle 40% traffic increase, and cut deployment time by 50%.",
  },
  {
    company: "Wing Corp",
    role: "Jr. DevOps Engineer",
    period: "Nov 2021 — Aug 2022",
    summary:
      "CI/CD pipelines, Kubernetes administration, and AWS EKS/ECR for 30+ high-demand e-commerces via GitHub Actions and Bitbucket Pipelines.",
  },
];

export interface Certification {
  short: string;
  name: string;
  issuer: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    short: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
  },
  {
    short: "DVA",
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
  },
  {
    short: "CLF",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
];

export interface Project {
  name: string;
  description: string;
  url: string;
  topics: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "the-filebrowser",
    description:
      "A modern, self-hosted web file manager: browse, manage, and share files on any existing filesystem from anywhere.",
    url: "https://github.com/B3llo/the-filebrowser",
    topics: ["vue", "go", "self-hosted"],
  },
  {
    name: "fincosts",
    description:
      "A CLI tool to optimize cloud costs by identifying unused resources and providing cost-saving recommendations for popular cloud providers.",
    url: "https://github.com/B3llo/fincosts",
    topics: ["typescript", "node", "angular"],
  },
  {
    name: "ci-cd-aws",
    description:
      "CI/CD pipeline templates and automation scripts for AWS deployments.",
    url: "https://github.com/B3llo/ci-cd-aws",
    topics: ["aws", "ci-cd", "terraform", "bash"],
  },
  {
    name: "bitbucket-pipelines",
    description:
      "Reusable Bitbucket Pipelines configurations for containerized apps.",
    url: "https://github.com/B3llo/bitbucket-pipelines",
    topics: ["kubernetes", "docker", "ci-cd"],
  },
  {
    name: "portfolio",
    description: "This portfolio — designed and built with Astro and Tailwind.",
    url: "https://github.com/B3llo/portfolio",
    topics: ["astro", "tailwind", "typescript"],
  },
  {
    name: "cka-training-course",
    description:
      "Study notes, exercises and labs for the Certified Kubernetes Administrator exam.",
    url: "https://github.com/B3llo/cka-training-course",
    topics: ["kubernetes", "cka", "devops"],
  },
];
