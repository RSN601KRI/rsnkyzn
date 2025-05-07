export type GithubProject = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
};

export async function fetchGithubProjects(): Promise<GithubProject[]> {
  const res = await fetch('https://api.github.com/users/RSN601KRI/repos?per_page=100');
  if (!res.ok) return [];
  const data = await res.json();
  // Filter out forks and sort by stargazers_count desc
  return data
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .map((repo: any) => ({
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description || '',
      language: repo.language || '',
      stargazers_count: repo.stargazers_count,
      fork: repo.fork,
    }));
} 