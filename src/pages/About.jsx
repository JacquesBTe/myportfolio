import { asset } from "../lib/asset";
import Reveal from "../components/Reveal";

const skillGroups = [
  {
    title: "Programming & Firmware",
    items: ["Python", "C / C++", "Verilog", "MATLAB / Simulink", "RoboDK", "KUKA Robot Language"],
  },
  {
    title: "Digital & VLSI Design",
    items: ["RTL Design", "FPGA (Vivado, Basys 3)", "STM32", "ModelSim", "Timing Analysis", "UVM (intro)"],
  },
  {
    title: "Embedded & Protocols",
    items: ["RTOS Firmware", "UART / I²C / SPI", "ADC / PWM / DMA", "Watchdog", "ESP32", "Jetson Orin Nano"],
  },
  {
    title: "Edge AI & Machine Learning",
    items: ["TensorFlow Lite", "Edge Impulse", "TinyML", "MFCC Features", "Quantization", "OpenCV"],
  },
  {
    title: "Analog, RF & Mixed-Signal",
    items: ["Amplifier Design", "Active Filters", "Signal Conditioning", "Transmission Lines", "Impedance Matching", "Keysight ADS"],
  },
  {
    title: "Tools & EDA",
    items: ["Multisim", "KiCad", "NI Ultiboard", "Altium", "AutoCAD", "SolidWorks", "Keil µVision", "Git"],
  },
];

const affiliations = [
  "IEEE",
  "ASME",
  "SASE",
  "Tau Beta Pi (Honor Society)",
  "USD Torero Space Program",
  "FUSO",
];

const About = () => {
  return (
    <section className="min-h-screen bg-ink-900 px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Reveal>
          <p className="eyebrow">// ABOUT</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About <span className="gradient-text">me</span>
          </h1>
        </Reveal>

        {/* Bio */}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-300">
          <Reveal>
            <p>
              I'm Jacques Te, an Electrical Engineer genuinely fascinated by
              technology, not just what it does, but how it works. The fact that
              the phone in your pocket contains billions of transistors, each a
              few nanometers wide, etched into silicon with atomic precision,
              that kind of thing never stops being incredible to me. Every chip,
              every PCB, every line of firmware is a small miracle of human
              ingenuity, and I want to be part of building them.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Moving from the Philippines to the U.S. to pursue engineering
              taught me to figure things out from scratch. I don't shy away from
              unfamiliar territory. I go back to first principles, break the
              problem down, and push until it's solved. That relentlessness is
              how I operate.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Right now I'm most excited about the intersection of analog and
              digital: mixed-signal PCBA design, embedded systems, and VLSI. I'm
              drawn to compute silicon: CPUs, GPUs, TPUs, NPUs, and the ASICs
              that power infrastructure like 5G and 6G baseband processing.
              Whether it's designing a signal chain, writing RTL for
              communication hardware, or thinking through how a compute
              architecture is laid out in silicon, I want to work on the hardware
              that everything else depends on.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              My dream is to meaningfully contribute to the frontier of
              technology through hardware and mixed-signal design, to be part of
              the teams and breakthroughs that define what comes next.
            </p>
          </Reveal>
        </div>

        {/* Skills */}
        <Reveal>
          <h2 className="mt-16 text-2xl font-bold text-white">Focus Areas & Tools</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink-850 p-5">
                <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interests */}
        <Reveal>
          <h2 className="mt-16 text-2xl font-bold text-white">Other Interests</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Outside engineering, I prioritize a healthy, active lifestyle. I
            train at the gym regularly, eat clean, enjoy cooking, and play
            basketball whenever I get the chance. I'm the kind of person who
            can't stop following technology at every scale, from low earth orbit
            satellites redefining global connectivity to the latest consumer
            wearables and devices. I'm constantly reading about it, watching it
            evolve, and more often than not, getting my hands on it. I love to
            travel, having visited over 20 countries and gained a broad
            appreciation for different cultures. Aside from that, I also study
            the financial markets and economics, applying my analytical and math
            background to technical analysis and actively managing my own
            investing portfolio. This allows me to have a stream of income which
            keeps financial pressure off my engineering side so I can focus on
            innovating.
          </p>
        </Reveal>

        {/* Affiliations */}
        <Reveal>
          <h2 className="mt-16 text-2xl font-bold text-white">Affiliations</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {affiliations.map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-gray-300"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Resume CTA */}
        <Reveal>
          <div className="mt-14 text-center">
            <a
              href={asset("Jacques_Te_Resume.pdf")}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:shadow-glow"
            >
              ↓ Download My Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
