export const PROFILE = {
  name: "Gabriel F. Bello",
  handle: "bello",
  role: "DevOps Engineer",
  title: "Cloud Operations Development Specialist",
  employer: "Infios",
  location: "Brazil",
  email: "gfbello.x@gmail.com",
  bio: [
    "I started out learning C++, then built web apps with Node.js and Angular. Working on the infrastructure behind those apps led me to DevOps and platform engineering.",
    "Today, most of my work is about making cloud environments easier to provision, deploy, and observe. I hold a degree in Analysis and Systems Development from UNIPAR (2023).",
  ],
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/B3llo/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-felipe-bello/",
  },
  { label: "Instagram", href: "https://www.instagram.com/gabriel_b3llo/" },
];

export interface TechGroup {
  label: string;
  items: string[];
}

export const TECH_GROUPS: TechGroup[] = [
  { label: "Cloud", items: ["AWS", "Azure", "GCP", "OCI"] },
  { label: "Containers", items: ["Docker", "Kubernetes", "Helm"] },
  { label: "Infrastructure as code", items: ["Terraform", "Ansible"] },
  { label: "CI/CD", items: ["Azure DevOps", "GitHub Actions", "Buildkite"] },
  { label: "Observability", items: ["Datadog", "Dynatrace", "Grafana"] },
  { label: "Languages", items: ["TypeScript", "Python", "Bash"] },
  { label: "AI tools", items: ["Claude Code", "Codex", "AI Agents"] },
  { label: "Web3", items: ["Web3", "Smart Contracts", "Blockchain"] },
];

interface Outcome {
  value: string;
  qualifier?: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  formerName?: string;
  role: string;
  period: string;
  summary: string;
  outcome?: Outcome;
  current?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    id: "infios",
    company: PROFILE.employer,
    formerName: "Körber Supply Chain",
    role: PROFILE.title,
    period: "Mar 2024 — Present",
    summary:
      "Replaced legacy PowerShell provisioning with Terraform and Bash. Built deployment pipelines with Azure DevOps and Helm, and added Dynatrace and Datadog to Kubernetes clusters on OCI.",
    outcome: { value: "−70%", label: "Provisioning setup time" },
    current: true,
  },
  {
    id: "trimble",
    company: "Trimble",
    role: "DevOps Engineer",
    period: "Jan 2023 — Mar 2024",
    summary:
      "Built and maintained infrastructure for large-scale applications, including products for FedEx. Worked across AWS, Azure, Kubernetes, and Terraform.",
    outcome: { value: "300k", qualifier: "up to", label: "Application users" },
  },
  {
    id: "ezops",
    company: "EZOps",
    role: "DevOps Engineer",
    period: "Aug 2022 — Jan 2023",
    summary:
      "Led AWS infrastructure work, handling 40% more traffic while reaching 99.10% uptime.",
    outcome: { value: "−50%", label: "Deployment time" },
  },
  {
    id: "wing-corp",
    company: "Wing Corp",
    role: "Jr. DevOps Engineer",
    period: "Nov 2021 — Aug 2022",
    summary:
      "Managed Kubernetes on AWS and built CI/CD pipelines for more than 30 e-commerce sites using GitHub Actions and Bitbucket Pipelines.",
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
