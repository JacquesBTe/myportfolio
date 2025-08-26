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
  }
];


export default projectData;
