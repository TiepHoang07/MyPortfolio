import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import k_kpiverse from '../assets/projects/kpiverse/kpiverse.png';
import k_dashboard from '../assets/projects/kpiverse/dashboard.png';
import k_myKpis from '../assets/projects/kpiverse/myKpis.png';
import k_groups from '../assets/projects/kpiverse/groups.png';
import k_leaderboard from '../assets/projects/kpiverse/leaderboard.png';
import v_vocabplay from '../assets/projects/vocabplay/vocabplay.png';
import v_dashboard from '../assets/projects/vocabplay/dashboard.png';
import v_dictionary from '../assets/projects/vocabplay/dictionary.png';
import v_leaderboard from '../assets/projects/vocabplay/leaderboard.png';
import v_game from '../assets/projects/vocabplay/memoryMatch.png';
import p_portfolio from '../assets/projects/portfolio/portfolio.png';
import p_about from '../assets/projects/portfolio/about.png';
import p_contact from '../assets/projects/portfolio/contact.png';




export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'KPIverse',
      description: 'A full-stack web application for tracking personal and group KPIs (Key Performance Indicators). Built with NestJS, React, and PostgreSQL.',
      longDescription: 'KPIverse allows users to create and track personal KPIs with daily, weekly, or monthly tasks. Form groups to collaborate on shared KPIs. Add friends and view their activity. Visualize progress with interactive charts Compete on group leaderboards',
      color: 'bg-blue-500/20',
      mainImage: k_kpiverse,
      images: [k_dashboard, k_myKpis, k_groups, k_leaderboard],
      skills: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/TiepHoang07/KPIverse',
      link: 'https://kpiverse.onrender.com'
    },
    {
      id: 2,
      title: 'Vocabplay',
      description: 'Vocabplay is an interactive vocabulary learning application built to help users expand their word knowledge through active practice and games.',
      longDescription: 'Easily add and organize words you want to learn and practice them with games like Memory Match, Word Chain, Interactive Flashcards. You can also track your memorization progress. Each games have leaderboard to compete with other people.',
      color: 'bg-green-500/20',
      mainImage: v_vocabplay,
      images: [v_dashboard, v_dictionary, v_leaderboard, v_game],
      skills: ['ExpressJS', 'React', 'TypeScript', 'JWT', 'PostgreSQL', 'Tailwind', 'Vite'],
      github: 'https://github.com/TiepHoang07/VocabPlay',
      link: 'https://vocabplay.onrender.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A portfolio website with a modern design and smooth animations.',
      longDescription: 'This my small portfolio website. It features a responsive layout, a custom theme, and a contact form.',
      color: 'bg-purple-500/20',
      mainImage: p_portfolio,
      images: [p_about, p_contact],
      skills: ['React', 'Tailwind', 'Framer Motion', 'TypeScript', 'Vite'],
      github: 'https://github.com/TiepHoang07/MyPortfolio',
      link: '/'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Take a look at some of my recent work. Each project is built with dedication to quality and user experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className={`relative h-48 ${project.color} flex items-center justify-center`}>
              <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover text-primary/40 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">View Details</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-sm font-bold text-primary flex items-center gap-1">
                Read More <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute cursor-pointer top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full z-10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`h-64 md:h-full ${selectedProject.color} flex items-center justify-center min-h-[300px]`}>
                  <div className='grid grid-rows-2 grid-cols-2 h-full gap-2 w-full p-2'>
                    {selectedProject.images.map((image: string, index: number) => (
                      <img key={index} src={image} alt={selectedProject.title} className="w-full h-full object-cover rounded-lg" />
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.skills.map((skill: string) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 flex items-center justify-center gap-2 text-sm">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

