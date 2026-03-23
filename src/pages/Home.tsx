import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-8">
            <p className="text-5xl text-primary font-extrabold leading-tight">
              Hi, I'm Hoang Van Tiep
            </p>
            <p className="text-5xl font-bold leading-tight">Web Developer</p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              I'm passionate about building high-performance, beautiful web applications with React, Node.js and modern technologies.
              I want to contribute to open source real-world projects and learn new things.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary flex items-center gap-2 group">
              Learn About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-outline">
              View My Work
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>

            {/* Image Container Placeholder */}
            <div className="w-full h-full rounded-2xl bg-primary/10 border-4 border-primary shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
              <div className="text-primary opacity-20 transform -rotate-3 group-hover:rotate-0 transition-transform">
                <User className="w-32 h-32" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats/Badges Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t dark:border-gray-800 pt-12"
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-primary">2+</p>
          <p className="text-sm text-gray-500">Years Experience Of Coding</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary">7+</p>
          <p className="text-sm text-gray-500">Projects Completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary">100%</p>
          <p className="text-sm text-gray-500">Dedication</p>
        </div>
      </motion.div>
    </div>
  );
};
