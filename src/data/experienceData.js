// Work experience timeline (most recent first), rendered on the Home page.

const experienceData = [
  {
    company: "Pacira BioSciences",
    role: "Electrical Engineering Intern",
    type: "Internship",
    location: "San Diego, CA",
    start: "Jun 2026",
    end: "Present",
    current: true,
    summary:
      "Supporting next-generation product development for the iovera° cryoneurolysis platform across embedded firmware, analog front-end design, and automated hardware test systems.",
    highlights: [
      "Took ownership of end-to-end design and implementation of an STM32-based automated solenoid valve test bed for reliability cycle testing — integrating pressure sensing, solenoid drive, and data logging into a unified embedded system.",
      "Designing a mixed-signal PCBA in Altium Designer for the analog front end, incorporating instrumentation-amplifier signal conditioning, linear power regulation, and inductive load-protection circuitry.",
    ],
    tech: ["STM32", "Altium Designer", "Embedded Firmware", "Analog Front-End", "Mixed-Signal PCB"],
  },
  {
    company: "Innomountain",
    role: "Hardware Engineering Intern — 5G/6G System R&D",
    type: "Volunteer",
    location: "",
    start: "Feb 2026",
    end: "Jun 2026",
    current: false,
    summary:
      "Contributed to RTL design of an MMSE-based signal detection module for a 5G NR massive-MIMO beamforming system, focusing on fixed-point datapath design and algorithm-to-hardware mapping.",
    highlights: [
      "Designed parameterized Neumann Series MMSE detectors (N=8/32/64, M=1–64 MACs) with a systolic-array variant in synthesizable Verilog, achieving 100% pass rate across all configurations at 300 MHz.",
      "Achieved 8.1× lower detection latency vs. the previous model; the dual-port BRAM systolic array delivered an additional 1.63× speedup with no added memory footprint.",
      "Scaled banked RAMB36E2 memory to N=64 within 21% BRAM / 19% DSP of the ZCU106 budget, verifying 5G NR throughput and latency requirements via architecture trade-off analysis.",
    ],
    tech: ["Verilog", "RTL Design", "Xilinx ZCU106", "Fixed-Point DSP", "5G NR"],
  },
];

export default experienceData;
