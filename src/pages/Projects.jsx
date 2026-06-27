import { useMemo, useState } from "react";
import projectData, { TAGS } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const FILTERS = ["All", ...TAGS];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projectData
        : projectData.filter((p) => p.tags?.includes(active)),
    [active]
  );

  return (
    <section className="min-h-screen bg-ink-900 px-6 pt-28 pb-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">// PROJECTS</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Things I've <span className="gradient-text">built</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Embedded systems, digital/VLSI design, edge AI, and analog/RF —
            filter by area below.
          </p>
        </Reveal>

        {/* Filter bar */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active === f
                    ? "bg-accent text-ink-950 shadow-glow"
                    : "border border-white/10 text-gray-300 hover:border-accent/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.06}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-gray-500">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
