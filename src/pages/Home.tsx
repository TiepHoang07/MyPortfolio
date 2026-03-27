import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import avatarImg from '../assets/avatar.png';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
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
              I'm 18 years old high school student and i'm passionate about building beautiful web applications with React, Node.js and modern technologies.
              I want to contribute to real-world projects and learn new things.
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative items-center justify-center md:justify-end"
        >
          <div className="relative w-72 h-100 md:w-96 md:h-110 mx-auto">
            <div className="absolute top-0 -right-10 bottom-0 md:right-0 w-90 md:w-full border-2 border-primary/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute top-0 -right-10 bottom-0 md:right-0 w-90 md:w-full border-2 border-primary/30 rounded-full -z-10 animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <div className="w-full h-full rounded-2xl bg-primary/10 border-4 border-primary shadow-2xl rotate-3 flex items-center justify-center overflow-hidden">
              <div className="-rotate-3 h-full w-full">
                <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover rotate-3" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Badges Section */}
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
          <p className="text-3xl font-bold text-primary">5+</p>
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
