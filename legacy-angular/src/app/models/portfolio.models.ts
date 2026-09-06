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

export interface TechGroup {
  label: string;
  items: string[];
}
