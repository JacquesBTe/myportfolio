const projectData = [
  {
    title: "Wake Word Detection on STM32",
    description: "Trained and deployed a real-time wake word model using MFCC features and TensorFlow Lite Micro.",
    tech: "TensorFlow Lite Micro, STM32, Embedded AI, C/C++",
    github: "https://github.com/JacquesBTe/Wake_Word_Detection_STM32"
  },
  {
  title: "CubeSat Communication System",
  description: "Led a team of 5 engineers in designing and implementing the communication subsystem for a CubeSat, using LoRa and UART for ground-to-space communication.",
  tech: "Leadership, ESP32, LoRa, UART, Embedded C, Satellite Systems",
  github: "https://github.com/JacquesBTe/cubesat-comms"
  },
  {
  title: "Fiber Optic Preamplifier Design",
  description: "Designed and simulated a low-noise transimpedance amplifier for optical signals using discrete analog components, focusing on signal integrity and bandwidth optimization.",
  tech: "Analog Design, Transimpedance Amplifier, MultiSim, Circuit Simulation, Noise Analysis",
  github: "https://github.com/JacquesBTe/Fiber_Optic_Preamp_Design"
  },
  {
  title: "Configurable FPGA Matrix Multiplication Hardware Accelerator",
  description: "Designed and implemented a parameterizable N×N matrix multiplication hardware accelerator on Xilinx Artix-7 FPGA, featuring pipelined MAC units, UART data interface, and real-time monitoring. Achieved 100MHz operation with 512 MAC operations per computation cycle.",
  tech: "Verilog HDL, FPGA Design, Xilinx Vivado, UART Protocol, Python, Basys 3, Digital Signal Processing",
  github: "https://github.com/JacquesBTe/matrix_multiplier_basys3"
  },
  {
  title: "ML-Powered Finger Timer",
  description: "Developed a gesture-controlled countdown timer on ESP32 using a 5MP camera and a TinyML model trained with Edge Impulse. The system recognizes 1–5 finger gestures in real time to set timer duration, achieving >95% classification accuracy across varied lighting conditions and hand orientations. Integrated OLED display rendering, countdown logic, and interrupt-driven alerts for seamless hands-free operation. Optimized TinyML inference and memory usage to run within ESP32’s 520KB SRAM and compute constraints, enabling reliable on-device execution without external compute resources.",
  tech: "ESP32, Arduino Framework, PlatformIO, Edge Impulse, TinyML, Embedded Computer Vision, OLED Display, Real-Time Systems",
  github: "https://github.com/JacquesBTe/Finger_Timer_Cam"
  },
  {
  title: "TradingView ESP32 Alert Notifier",
  description: "Implemented a real-time IoT alert system bridging TradingView signals to an ESP32 device via Make.com webhooks. Designed to display alerts on a 0.96″ OLED screen with audio differentiation through a piezo buzzer and user interaction via button controls. Supported multiple alert types (BUY/SELL/LONG/SHORT) with on-device history storage for the last 20 alerts. Achieved sub-second (<1s) cloud-to-device latency over WiFi, enabling immediate trading awareness and decision-making. Integrated auto-display sleep mode and alert review interface for efficient, user-friendly operation.",
  tech: "ESP32, PlatformIO, Make.com Webhooks, Arduino Framework, IoT Systems, OLED Display (SSD1306), Embedded WiFi Networking, Real-Time Notification Systems",
  github: "https://github.com/JacquesBTe/tradingview_alert_notifier_esp32"
  },
  {
  title: "AM Signal Generation and Demodulation System",
  description: "Designed and implemented a complete AM transmitter–receiver system using op-amp summing amplifier, diode-based nonlinear modulation, and Sallen–Key band-pass filtering. Demonstrated clean AM generation at 40 kHz and accurate envelope detection recovery of the baseband signal (~82 Hz). Verified operation through Multisim simulations and oscilloscope measurements, achieving a modulation index of 0.66 with minimal distortion.",
  tech: "Analog Circuit Design, Multisim, Op-Amp Design, Band-Pass Filter, Communication Systems, Signal Processing",
  github: "https://github.com/JacquesBTe/AM_signal_generation_demodulation_design"
  },
  {
  title: "FM Demodulation Using Differentiator-Based Detector",
  description: "Designed and implemented a differentiator-based FM demodulator that converts frequency variations into amplitude variations using op-amp differentiation, envelope detection, and low-pass filtering. Simulated and constructed the circuit in Multisim and hardware to recover an 80 Hz message signal from a 40 kHz carrier, achieving near-perfect demodulation at high modulation index (β ≈ 50).",
  tech: "Analog Communication Systems, Op-Amp Differentiator, Envelope Detector, Low-Pass Filter, Multisim Simulation, FM Demodulation",
  github: "https://github.com/JacquesBTe/FM_Demodulation_Differentiator_Design"
  },
  {
  title: "DOFBOT Face Tracking Robot",
  description: "Developed real-time 3D face tracking system on NVIDIA Jetson Orin Nano controlling a 6-DOF robot arm at 30 FPS using OpenCV Haar Cascades and I2C servo communication. Resolved hardware compatibility between legacy Yahboom software (Ubuntu 18.04/Jetson Nano) and modern Jetson Orin Nano by migrating I2C bus configuration (bus 1→7) and deploying ROS Noetic Docker environment. Implemented custom servo calibration framework with offset/inversion compensation and intelligent multi-phase search algorithm (local→expanded→wide sweep) with 3-frame temporal smoothing to maintain stable tracking through occlusions, achieving <100ms latency and ±2° positioning accuracy.",
  tech: "Python, OpenCV, Docker, ROS Noetic, NVIDIA Jetson Orin Nano, I2C Protocol, Computer Vision, Haar Cascades, Real-Time Systems, Servo Control",
  github: "https://github.com/JacquesBTe/dofbot-face-tracking"
  },
];


export default projectData;
