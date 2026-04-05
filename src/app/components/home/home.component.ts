import { Component, OnInit } from "@angular/core";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  short: string;
}

export interface StaticProject {
  name: string;
  description: string;
  url: string;
  topics: string[];
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public showNavbarBorder: boolean = false;
  public isDarkTheme: boolean = false;
  public projects: StaticProject[] = [
    {
      name: "FinCosts",
      description: "A CLI tool to optimize cloud costs by identifying unused resources and providing cost-saving recommendations for popular cloud providers.",
      url: "https://github.com/B3llo/fincosts",
      topics: ["typescript", "node", "angular"],
    },
    {
      name: "CI/CD AWS Pipeline",
      description: "CI/CD pipeline templates and automation scripts for AWS deployments",
      url: "https://github.com/B3llo/ci-cd-aws",
      topics: ["aws", "ci-cd", "terraform", "bash"],
    },
    {
      name: "Bitbucket Pipelines",
      description: "Reusable Bitbucket Pipelines configurations for containerized apps",
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
      description: "Study notes, exercises and labs for the Certified Kubernetes Administrator exam",
      url: "https://github.com/B3llo/cka-training-course",
      topics: ["kubernetes", "cka", "devops"],
    },
  ];

  public faGithub = faGithub;
  public faLinkedIn = faLinkedinIn;
  public faInstagram = faInstagram;
  public faEnvelope = faEnvelope;

  public techGroups = [
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
  ];

  public experiences: Experience[] = [
    {
      company: "Körber Supply Chain",
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

  public certifications: Certification[] = [
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

  constructor() {}

  ngOnInit(): void {
    const stored = localStorage.getItem("isDarkTheme");
    this.isDarkTheme = stored === "true";
    if (stored === null) localStorage.setItem("isDarkTheme", "false");
    this.applyDarkToRoot(this.isDarkTheme);

    this.isScrolling();
    this.initScrollAnimations();
  }

  public isScrolling(): void {
    let scrolled = false;
    window.onscroll = () => {
      scrolled = window.scrollY > 30;
      this.showNavbarBorder = scrolled;
    };
  }

  public initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll(".fade-in-section").forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }

  public toArray(obj: any): any[] {
    return Object.keys(obj).map((key) => obj[key]);
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem("isDarkTheme", this.isDarkTheme.toString());
    this.applyDarkToRoot(this.isDarkTheme);
  }

  private applyDarkToRoot(dark: boolean): void {
    document.documentElement.classList.toggle("dark", dark);
  }

}
