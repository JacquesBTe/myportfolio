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
        </p>

        {/* 🛠 Focus Areas Section Title */}
        <h2 className="text-2xl font-semibold mb-2">Focus Areas & Tools</h2>

        {/* 🧰 Skills/Tools List */}
        <ul className="list-disc list-inside mb-6 text-base">
          <li>Embedded Systems: STM32/ESP32 development with low-level drivers, real-time firmware, and peripheral integration (UART, I2C, SPI, ADC, PWM, Watchdog)</li>
          <li>VLSI & Digital Hardware Design: Verilog (primarily), VHDL, RTL Design, Vivado, ModelSim, Universal Verification Methodology (UVM), Computer Architecture</li>
          <li>Embedded AI: TensorFlow Lite Micro, MFCC, Edge Inference, C/C++</li>
          <li>Analog Electronics: Transitor Amplifiers, Transimpedance Design, Signal Conditioning</li>
          <li>Communication Systems: CubeSat UHF/LoRa, UART AT Commands, ESP32/Raspberry Pi integration</li>
          <li>Artificial Intelligence: Deep learning model development, dataset preprocessing, model training, and deployment for real-time inference on embedded systems</li>
          <li>Tools: MATLAB, Keil uVision, Git, Altium PCB Designer, Multisim, Oscilloscope, LM Studio</li>
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
            href="/Jacques_Te_Resume.pdf"
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
