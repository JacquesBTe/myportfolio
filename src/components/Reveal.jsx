import { motion } from "framer-motion";

// Fades + slides children in when they scroll into view.
const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
