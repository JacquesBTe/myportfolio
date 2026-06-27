import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { asset } from "../lib/asset";
import experienceData from "../data/experienceData";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 px-6">
        {/* circuit-grid backdrop + accent glow */}
        <div className="pointer-events-none absolute inset-0 bg-grid [background-size:42px_42px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 py-28 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                Hi, I'm <span className="gradient-text">Jacques Te</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-gray-400">
                Electrical Engineer working at the intersection of{" "}
                <span className="text-gray-200">analog and digital</span>:{" "}
                <span className="text-gray-200">mixed-signal PCBA design</span>,{" "}
                <span className="text-gray-200">embedded systems</span>, and{" "}
                <span className="text-gray-200">VLSI</span>, drawn to the compute
                silicon behind 5G/6G and AI.
              </p>

            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  to="/projects"
                  className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-ink-950 transition hover:shadow-glow"
                >
                  View Projects
                </Link>
                <a
                  href={asset("Jacques_Te_Resume.pdf")}
                  download
                  className="rounded-lg border border-white/15 px-5 py-2.5 font-medium text-gray-200 transition hover:border-accent/40 hover:text-white"
                >
                  Download Resume
                </a>
                <HashLink
                  smooth
                  to="/#contact"
                  className="rounded-lg border border-white/15 px-5 py-2.5 font-medium text-gray-200 transition hover:border-accent/40 hover:text-white"
                >
                  Contact
                </HashLink>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex justify-center gap-5 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/jacques-te/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/JacquesBTe"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="mailto:jacquezte@gmail.com"
                  className="text-sm text-gray-400 transition hover:text-accent"
                >
                  Email
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative shrink-0">
              <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-tr from-accent/40 to-accent-soft/40 blur-xl" />
              <img
                src={asset("Jacques.jpg")}
                alt="Jacques Te"
                className="relative h-80 w-80 rounded-full object-cover ring-2 ring-white/10 sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem] lg:h-[34rem] lg:w-[34rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section className="bg-ink-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow">// EXPERIENCE</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Where I've worked
            </h2>
          </Reveal>

          <div className="mt-12 space-y-10">
            {experienceData.map((job, i) => (
              <Reveal key={job.company + job.role} delay={i * 0.05}>
                <div className="relative rounded-2xl border border-white/10 bg-ink-850 p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-accent">
                        {job.company}
                        {job.location && (
                          <span className="text-gray-500"> · {job.location}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-2">
                        {job.current && (
                          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                            Current
                          </span>
                        )}
                        {job.type && (
                          <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gray-400">
                            {job.type}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        {job.start} — {job.end}
                      </span>
                    </div>
                  </div>

                  {job.summary && (
                    <p className="mt-4 text-sm leading-relaxed text-gray-300">
                      {job.summary}
                    </p>
                  )}

                  {job.highlights?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2.5 text-sm leading-relaxed text-gray-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.tech?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-24 bg-ink-900 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">// CONTACT</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              I'm open to opportunities and collaborations in embedded systems,
              hardware, and edge AI.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:jacquezte@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-accent/40 hover:text-white"
              >
                ✉ jacquezte@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jacques-te/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-accent/40 hover:text-white"
              >
                in LinkedIn
              </a>
              <a
                href="tel:+16196487766"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-accent/40 hover:text-white"
              >
                ☎ +1 (619) 648‑7766
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
