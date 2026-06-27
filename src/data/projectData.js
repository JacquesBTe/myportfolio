// Project catalog.
// - tags: used by the filter UI on the Projects page (keep them from the TAGS list below)
// - tech: tools/skills shown as chips
// - featured: surfaced first / highlighted
// - image: path under /public (resolved via asset()); null for now — slot a photo in later
// - github: repo link (optional)

export const TAGS = [
  "Edge AI",
  "Embedded",
  "FPGA/VLSI",
  "Analog",
  "Communications",
  "Robotics",
  "IoT",
];

const projectData = [
  {
    title: "CORDIC Trigonometric Processor — 130nm ASIC Tapeout",
    description:
      "Designed and taped out an 8-bit iterative CORDIC core in synthesizable Verilog computing sin/cos over a full 360° in Q2.6 fixed-point via shift-add rotations and an 8-entry arctan LUT. Added quadrant folding with sign reconstruction and 1/K gain compensation, verified across all 256 input angles against a MATLAB golden reference. Completed full RTL-to-GDS signoff via LibreLane — timing closed at 50MHz in a single 160×225µm tile with zero DRC/LVS errors.",
    tech: ["Verilog", "SystemVerilog", "SKY130 PDK", "TinyTapeout", "LibreLane", "RTL-to-GDS", "MATLAB"],
    tags: ["FPGA/VLSI"],
    featured: true,
    image: null,
    github: "https://github.com/JacquesBTe/tt_um_jte_cordic",
  },
  {
    title: "Wake Word Detection on STM32",
    description:
      "Real-time wake word detection on an STM32 Nucleo-L476RG, achieving >92% accuracy under varied noise. Trained a TensorFlow Lite model with MFCC features (35% fewer false activations) and deployed it within <80KB memory at sub-150ms latency.",
    tech: ["TensorFlow Lite Micro", "STM32", "MFCC", "Embedded AI", "C/C++"],
    tags: ["Edge AI", "Embedded"],
    featured: true,
    image: null,
    github: "https://github.com/JacquesBTe/Wake_Word_Detection_STM32",
  },
  {
    title: "CubeSat Communication System",
    description:
      "Led a 5-member team designing the 1U CubeSat communications subsystem, achieving >95% reliable two-way telemetry between satellite and ground station. Integrated LoRa (RYLR896) with ESP32/Raspberry Pi firmware, tuning frequency, addressing, and power for long-range, interference-free links.",
    tech: ["Leadership", "ESP32", "LoRa", "UART", "Embedded C", "Satellite Systems"],
    tags: ["Communications", "Embedded"],
    featured: true,
    image: null,
    github: "https://github.com/JacquesBTe/cubesat-comms",
  },
  {
    title: "Configurable FPGA Matrix Multiplication Accelerator",
    description:
      "Parameterizable N×N matrix-multiply accelerator on a Basys 3 (Artix-7) FPGA with pipelined MAC units, a 6-state FSM, and triple-port memory. UART data loading with Python-driven real-time verification; achieved 100MHz operation performing 512 MACs per cycle while maintaining timing closure.",
    tech: ["Verilog HDL", "Xilinx Vivado", "FPGA", "UART", "Python", "Basys 3", "DSP"],
    tags: ["FPGA/VLSI", "Embedded"],
    featured: true,
    image: null,
    github: "https://github.com/JacquesBTe/matrix_multiplier_basys3",
  },
  {
    title: "DOFBOT Face Tracking Robot",
    description:
      "Real-time 3D face tracking on an NVIDIA Jetson Orin Nano driving a 6-DOF arm at 30 FPS via OpenCV Haar Cascades and I2C servo control. Migrated legacy Yahboom tooling to ROS Noetic in Docker, added custom servo calibration and a multi-phase search with temporal smoothing — <100ms latency, ±2° accuracy.",
    tech: ["Python", "OpenCV", "Docker", "ROS Noetic", "Jetson Orin Nano", "I2C", "Computer Vision"],
    tags: ["Robotics", "Edge AI"],
    featured: true,
    image: null,
    github: "https://github.com/JacquesBTe/dofbot-face-tracking",
  },
  {
    title: "ML-Powered Finger Timer",
    description:
      "Gesture-controlled countdown timer on an ESP32 with a 5MP camera and an Edge Impulse TinyML model, recognizing 1–5 finger gestures in real time at >95% accuracy. Integrated OLED rendering, countdown logic, and interrupt-driven alerts, all within the ESP32's 520KB SRAM constraints.",
    tech: ["ESP32", "PlatformIO", "Edge Impulse", "TinyML", "Embedded CV", "OLED"],
    tags: ["Edge AI", "Embedded"],
    featured: false,
    image: null,
    github: "https://github.com/JacquesBTe/Finger_Timer_Cam",
  },
  {
    title: "Fiber Optic Preamplifier Design",
    description:
      "Two-stage BJT preamplifier (common-emitter + common-collector) for photodiode-based fiber-optic detection. Achieved −12.5kΩ transresistance (25% above target) with <1% distortion to a 50Ω load, extending −3dB bandwidth to 11.2MHz and cutting output impedance ~1kΩ → ~100Ω.",
    tech: ["Analog Design", "Transimpedance Amplifier", "Multisim", "Noise Analysis"],
    tags: ["Analog"],
    featured: false,
    image: null,
    github: "https://github.com/JacquesBTe/Fiber_Optic_Preamp_Design",
  },
  {
    title: "TradingView ESP32 Alert Notifier",
    description:
      "IoT alert system bridging TradingView signals to an ESP32 via Make.com webhooks. Displays BUY/SELL/LONG/SHORT alerts on a 0.96″ OLED with piezo audio cues and button controls, stores the last 20 alerts on-device, and achieves sub-second cloud-to-device latency over WiFi.",
    tech: ["ESP32", "PlatformIO", "Make.com Webhooks", "IoT", "SSD1306 OLED", "WiFi"],
    tags: ["IoT", "Embedded"],
    featured: false,
    image: null,
    github: "https://github.com/JacquesBTe/tradingview_alert_notifier_esp32",
  },
  {
    title: "AM Signal Generation & Demodulation",
    description:
      "Complete AM transmitter–receiver using an op-amp summing amplifier, diode nonlinear modulation, and Sallen–Key band-pass filtering. Demonstrated clean AM at 40kHz and accurate envelope recovery of an ~82Hz baseband at a 0.66 modulation index with minimal distortion.",
    tech: ["Analog Design", "Multisim", "Op-Amp Design", "Band-Pass Filter", "Comms"],
    tags: ["Analog", "Communications"],
    featured: false,
    image: null,
    github: "https://github.com/JacquesBTe/AM_signal_generation_demodulation_design",
  },
  {
    title: "FM Demodulation via Differentiator Detector",
    description:
      "Differentiator-based FM demodulator converting frequency variation to amplitude via op-amp differentiation, envelope detection, and low-pass filtering. Built in Multisim and hardware to recover an 80Hz message from a 40kHz carrier with near-perfect demodulation at high modulation index (β ≈ 50).",
    tech: ["Analog Comms", "Op-Amp Differentiator", "Envelope Detector", "Multisim"],
    tags: ["Analog", "Communications"],
    featured: false,
    image: null,
    github: "https://github.com/JacquesBTe/FM_Demodulation_Differentiator_Design",
  },
];

export default projectData;
