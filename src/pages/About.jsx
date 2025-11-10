const About = () => {
  return (
    <section className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto text-gray-800">

        {/* ✨ Header */}
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

        {/* 🧾 Intro Paragraph 1 – who you are */}
        <p className="mb-6 text-lg leading-relaxed">
            I'm Jacques Benzly Te, an Electrical Engineer passionate about building intelligent and efficient hardware systems across a wide range of domains — from embedded software and digital design to analog circuits and edge AI. 
            My dream is to be involved in designing compute systems (CPU, GPU, ASICs) and smart devices (wearables, robots, gadgets, appliances) that significantly improve human life.
        </p>
        
        <p className="mb-6 text-lg leading-relaxed">
            As someone who moved from the Philippines to the U.S. to pursue engineering, I’ve learned to adapt quickly and thrive in new environments. 
            I bring that same tenacity and versatility into my technical work — like a Swiss army knife, I'm a fast learner who embraces unfamiliar technologies, pushes through complex challenges, and gets things done.
        </p>

        {/* 🧠 Intro Paragraph 2 – what excites you / project themes */}
        <p className="mb-6 text-lg leading-relaxed">
          I enjoy working on hands-on engineering projects that bring together low-level firmware, signal processing, and applied machine learning — especially on resource-constrained microcontrollers like STM32 and ESP32. 
          Whether it's deploying real-time wake word models or developing CubeSat communication subsystems, I’m always exploring how embedded intelligence and efficient hardware design can drive real-world innovation.
          I also recently bought a Jetson Orin Nano Super Developer Kit. I am transitioning from resource constraint devices into more powerful embedded systems devices specifically designed for Edge AI. 
        </p>

        {/* 🛠 Focus Areas Section Title */}
        <h2 className="text-2xl font-semibold mb-2">Focus Areas & Tools</h2>

        {/* 🧰 Skills/Tools List */}
        <ul className="list-disc list-inside mb-6 text-base">
          <li>Embedded Systems: Jetson Orin Nano, STM32, and ESP32 development — low-level driver programming, RTOS-based firmware, and peripheral integration (UART, I²C, SPI, ADC, PWM, Watchdog, DMA)</li>

          <li>Digital & VLSI Design: Verilog (primary), VHDL, RTL design, FPGA prototyping (Basys 3 – Artix-7), Vivado, ModelSim, timing analysis, and introductory UVM for functional verification</li>

          <li>Embedded AI & Edge ML: TensorFlow Lite Micro, MFCC feature extraction, TinyML model optimization, Edge Impulse deployment, and C/C++ inference integration for low-power devices</li>

          <li>Analog & Mixed-Signal Electronics: Transistor amplifiers, transimpedance preamps, active filters, and sensor signal conditioning for photodiodes and analog front-end design</li>

          <li>Applied Electromagnetics & RF Design: Transmission line analysis, S-parameter simulation, Smith chart impedance matching, antenna design, and circuit optimization using Keysight ADS</li>

          <li>Communication Systems: CubeSat UHF/LoRa telemetry, UART AT command interfacing, ESP32–Raspberry Pi integration, digital modulation (AM/FM/ASK/FSK), and spectrum analysis</li>

          <li>Industrial & Robotic Automation: KUKA KR 10 R900-2 (KR C4 Compact) programming and simulation in RoboDK, WorkVisual I/O configuration, and integration of external control systems (ESP32, pneumatic pick-and-place, gluing, UV curing)</li>

          <li>Artificial Intelligence: Deep learning model development, dataset preprocessing, quantization, and deployment for real-time embedded inference on edge hardware</li>

          <li>Tools & Platforms: MATLAB, Keysight ADS, Keil uVision, Vivado, ModelSim, RoboDK, Git/GitHub, Altium Designer, Multisim, Oscilloscope, and LM Studio</li>
        </ul>

        {/* 🌱 NEW Interests Section */}
        <h2 className="text-2xl font-semibold mb-2">Other Interests</h2>
            <p className="mb-6 text-base leading-relaxed">
            {/* 🏋️ Health & Fitness */}
            Outside of engineering, I’m passionate about maintaining a healthy and active lifestyle — I enjoy going to the gym regularly, staying physically fit, and prioritizing overall wellness.

            {/* 🧠 Tech Curiosity */}
            <span> I have a deep interest in emerging technologies, especially innovative consumer gadgets like augmented reality glasses, cutting-edge laptops, and computers.</span>

            {/* 🌍 Travel & Culture */}
            <span> I also love to travel and explore new environments — having visited over 20 countries, I’ve gained a broad perspective and appreciation for diverse cultures around the world.</span> 

            {/* 📈 Finance & Analysis */}
            <span> Additionally, I actively study financial markets and investing, applying my analytical mindset and math background to conduct quantitative and technical analysis on price movements and trading patterns to actively manage my own investing portfolio. 
              It is also my belief that having this removes any financial pressure on the engineering side of me so I can purely focus on innovating.</span>
            </p>


        {/* 📄 Resume Button */}
        <div className="text-center mt-8">
          <a
            href={`${process.env.PUBLIC_URL}/Jacques_Te_Resume.pdf`}
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            📄 Download My Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
