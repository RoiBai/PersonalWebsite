import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-ember"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
