// Editorial notes for known repos. New entries still come straight from GitHub.
interface ProjectNote {
  title: string;
  description: string;
  topics?: string[];
}

const notesByRepo = {
  m3m: {
    title: "m3m",
    description: "A local Markdown memory that coding agents can share, without relying on a hosted service or vector database.",
  },
  "the-filebrowser": {
    title: "The File Browser",
    description: "Manage, preview, and share files from your browser. It runs on your own server and works with the folders you already have.",
  },
  fincosts: {
    title: "FinCosts",
    description: "A CLI that finds unused resources across AWS, Azure, and Google Cloud and suggests where to cut costs.",
  },
  "ci-cd-aws": {
    title: "CI/CD on AWS",
    description: "A GitHub Actions pipeline that builds Docker images, pushes them to ECR, and deploys them on EKS.",
  },
  "bitbucket-pipelines": {
    title: "Bitbucket to EKS",
    description: "A Bitbucket Pipelines example that takes a commit through Docker build, image publishing to ECR, and deployment on EKS.",
  },
  portfolio: {
    title: "This portfolio",
    description: "A static Astro site that pulls this repository list from GitHub at build time.",
    topics: ["Astro", "Tailwind CSS", "TypeScript"],
  },
  "cka-training-course": {
    title: "CKA training course",
    description: "A fork of a hands-on practice course for the Certified Kubernetes Administrator exam.",
  },
} satisfies Record<string, ProjectNote>;

export function getProjectNote(repo: string): ProjectNote | undefined {
  return Object.hasOwn(notesByRepo, repo) ? notesByRepo[repo as keyof typeof notesByRepo] : undefined;
}
