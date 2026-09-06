import {
  Certification,
  Experience,
  StaticProject,
  TechGroup,
} from "../models/portfolio.models";

export const PROJECTS: StaticProject[] = [
  {
    name: "The Filebrowser",
    description:
      "A modern, self-hosted web file manager: browse, manage, and share files on any existing filesystem from anywhere.",
    url: "https://github.com/B3llo/the-filebrowser",
    topics: ["vue", "go", "self-hosted"],
  },
  {
    name: "FinCosts",
    description:
      "A CLI tool to optimize cloud costs by identifying unused resources and providing cost-saving recommendations for popular cloud providers.",
    url: "https://github.com/B3llo/fincosts",
    topics: ["typescript", "node", "angular"],
  },
  {
    name: "CI/CD AWS Pipeline",
    description:
      "CI/CD pipeline templates and automation scripts for AWS deployments",
    url: "https://github.com/B3llo/ci-cd-aws",
    topics: ["aws", "ci-cd", "terraform", "bash"],
  },
  {
    name: "Bitbucket Pipelines",
    description:
      "Reusable Bitbucket Pipelines configurations for containerized apps",
    url: "https://github.com/B3llo/bitbucket-pipelines",
    topics: ["kubernetes", "docker", "ci-cd"],
  },
  {
    name: "Portfolio",
    description: "This portfolio — designed and built with Angular and Tailwind",
    url: "https://github.com/B3llo/portfolio",
    topics: ["angular", "tailwind", "typescript"],
  },
  {
    name: "CKA Training Course",
    description:
      "Study notes, exercises and labs for the Certified Kubernetes Administrator exam",
    url: "https://github.com/B3llo/cka-training-course",
    topics: ["kubernetes", "cka", "devops"],
  },
];

export const TECH_GROUPS: TechGroup[] = [
  {
    label: "Cloud",
    items: ["AWS", "Azure", "GCP", "OCI"],
  },
  {
    label: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm"],
  },
  {
    label: "IaC & Automation",
    items: ["Terraform", "Ansible", "Bash"],
  },
  {
    label: "CI/CD",
    items: ["Azure DevOps", "GitHub Actions", "Buildkite"],
  },
  {
    label: "Observability",
    items: ["Datadog", "Dynatrace", "Grafana"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Bash"],
  },
  {
    label: "AI-Assisted Engineering",
    items: ["Claude Code", "Codex", "AI Agents"],
  },
  {
    label: "Web3 & Crypto",
    items: ["Web3", "Smart Contracts", "Blockchain"],
  },
];

export const EXPERIENCES: Experience[] = [
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

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    short: "CKA",
  },
  {
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    short: "DVA",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    short: "CLF",
  },
];
