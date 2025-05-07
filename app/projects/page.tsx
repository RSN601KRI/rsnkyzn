"use client";
import { useState, useEffect } from "react";
import { fetchGithubProjects, GithubProject } from "app/lib/fetchGithubProjects";

export default function Projects() {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Proof of Work</h1>
      <div>
        {loading && <div className="text-neutral-500">Loading projects...</div>}
        {!loading && projects.length === 0 && (
          <div className="text-neutral-500">No projects found. Please check back later!</div>
        )}
        {projects.slice(0, visibleCount).map((project, index) => (
          <a
            key={project.html_url + index}
            href={project.html_url}
            className="block mb-7 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:bg-neutral-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
              <h2 className="text-lg font-semibold text-green-200 mb-1 sm:mb-0">{project.name}</h2>
              <span className="text-xs text-neutral-400 ml-2 flex items-center gap-2">
                {project.language && <span>{project.language}</span>}
                {project.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1">★ {project.stargazers_count}</span>
                )}
              </span>
            </div>
            <p className="text-neutral-300 text-sm mt-1 line-clamp-3">{project.description}</p>
          </a>
        ))}
        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount((c) => c + 8)}
            className="mx-auto block mt-6 px-6 py-2 rounded-lg bg-green-700/20 border border-green-400 text-green-200 font-medium hover:bg-green-700/40 hover:text-white transition-all"
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
}
