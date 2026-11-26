import { PROJECTS, type Project } from "./portfolio";

interface GitHubProject extends Project {
  stars: number;
}

function parseProject(value: unknown): GitHubProject | null {
  if (typeof value !== "object" || value === null) return null;
  const repo = value as Record<string, unknown>;
  if (typeof repo.name !== "string" || !repo.name.trim() || typeof repo.html_url !== "string") return null;
  if (!repo.html_url.startsWith("https://github.com/")) return null;

  const topics = Array.isArray(repo.topics)
    ? repo.topics.filter((topic): topic is string => typeof topic === "string" && topic.trim().length > 0)
    : [];
  return {
    name: repo.name,
    url: repo.html_url,
    description: typeof repo.description === "string" ? repo.description.trim() : "",
    topics: topics.length ? topics.slice(0, 4) : typeof repo.language === "string" ? [repo.language] : [],
    stars: typeof repo.stargazers_count === "number" ? repo.stargazers_count : 0,
  };
}

export async function getProjects(): Promise<{ projects: (Project | GitHubProject)[]; source: "github" | "fallback" }> {
  try {
    const response = await fetch(
      "https://api.github.com/users/B3llo/repos?type=public&sort=created&direction=desc&per_page=6",
      {
        headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
        signal: AbortSignal.timeout(4000),
      },
    );
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) throw new Error("Unexpected GitHub response");
    const projects = payload.map(parseProject).filter((repo): repo is GitHubProject => repo !== null);
    if (!projects.length) throw new Error("No public projects returned");
    return { projects, source: "github" };
  } catch (error) {
    console.warn("[portfolio] Using local project list:", error instanceof Error ? error.message : error);
    return { projects: PROJECTS, source: "fallback" };
  }
}
