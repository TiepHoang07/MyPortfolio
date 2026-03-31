import { motion } from 'framer-motion';

export const Intro = () => {
  const text = "Hi, I'm Hoang Tiep";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-gray-950 px-4"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden text-4xl md:text-6xl font-playfair"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            variants={child}
            key={index}
            className={letter === " " ? "mr-4" : ""}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute sm:bottom-[40%] bottom-[45%] h-1 bg-primary rounded-full"
      ></motion.div>
    </motion.div>
  );
};
