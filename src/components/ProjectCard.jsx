const ProjectCard = ({ title, description, tech, tags, github, featured }) => {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-white/10 bg-ink-850 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow ${
        featured ? "ring-1 ring-accent/20" : ""
      }`}
    >
      {/* Tag row */}
      {tags?.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>

      {/* Tech chips */}
      {tech?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
        >
          View on GitHub
          <span aria-hidden>→</span>
        </a>
      )}
    </article>
  );
};

export default ProjectCard;
