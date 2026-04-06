import { motion } from 'framer-motion';
import { X, Mail, Github, Globe, MapPin, ExternalLink, Calendar, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Resume = ({ isOpen, onClose }: ResumeProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header/Actions */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
          </button>
        </div>

        {/* CV Content */}
        <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
          {/* Header */}
          <header className="mb-10 text-center md:text-left border-b border-gray-100 dark:border-gray-800 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Hoang Van Tiep</h1>
            <div className="flex flex-wrap justify-center md:jsutify-start gap-4 text-gray-600 dark:text-gray-400">
              <a href="mailto:tieppx0712@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> tieppx0712@gmail.com
              </a>
              <a href="https://github.com/TiepHoang07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://hoang-tiep-portfolio.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="w-4 h-4" /> Portfolio
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Praha 3, Czech Republic
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Intro & Experience/Projects */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Introduction</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  I am Hoang Van Tiep, a third-year high school student passionate about building responsive, modern web applications using React, TypeScript,
                  and Node.js. Experienced in developing personal projects, designing robust backend architectures with PostgreSQL and JWT-based
                  authentication, implementing scalable RESTful APIs, and maintaining high code quality through Git version control.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Projects</h2>
                </div>
                
                <div className="space-y-8">
                  {/* KPIverse */}
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        KPIverse (KPIs Tracker)
                        <a href="https://github.com/TiepHoang07/KPIverse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </h3>
                      <span className="text-sm font-medium text-primary px-3 py-1 mt-2 bg-primary/10 rounded-full">
                        11/2025 - 02/2026
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-3 ml-1">Personal Project</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 text-[15px]">
                      <li>KPIs tracker web platform using React, NestJS, and PostgreSQL.</li>
                      <li>Developed KPI chart using Chart.js to provide real-time visual insights into daily, weekly, and monthly performance.</li>
                      <li>Architected social features, including group leaderboards and activity feeds.</li>
                      <li>Secured platform infrastructure by implementing JWT authentication and optimized data persistence with Prisma ORM.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Tailwind CSS', 'React.js', 'Typescript', 'Chart.js', 'NestJS', 'Prisma', 'PostgreSQL'].map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 dark:text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VocabPlay */}
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        VocabPlay (Vocabulary Learning)
                        <a href="https://github.com/TiepHoang07/VocabPlay" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </h3>
                      <span className="text-sm font-medium text-primary px-3 py-1 mt-2 bg-primary/10 rounded-full">
                        02/2026 - Present
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-3 ml-1">Personal Project</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 text-[15px]">
                      <li>English vocabulary platform using React and TypeScript with a responsive Tailwind CSS interface.</li>
                      <li>Architected a robust ExpressJS and PostgreSQL backend with Prisma ORM and JWT authentication.</li>
                      <li>Integrated Merriam-Webster Dictionary API for seamless translation and learning.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Tailwind CSS', 'React.js', 'Typescript', 'ExpressJS', 'Prisma', 'PostgreSQL', 'API Integration'].map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 dark:text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Education, Skills, Certs */}
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white leading-tight">Secondary School of Electrical Engineering, Multimedia and Informatics</h3>
                    <p className="text-sm text-gray-500 mt-1">Praha 9, Novovysočanská 280/48</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold mt-2">
                       <Calendar className="w-3 h-3" /> 2023 - Present
                    </div>
                    <p className="text-[15px] mt-2 text-gray-600 dark:text-gray-400">
                      Field: <span className="font-semibold text-gray-800 dark:text-gray-200">Information Technology</span>
                      <br/>
                      <span className="text-sm italic opacity-80">(expected graduate 2027)</span>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Skills</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map(s => (
                        <span key={s} className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-md text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'NestJS', 'Express.js', 'Node.js', 'Tailwind'].map(s => (
                        <span key={s} className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-md text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tools & DB</p>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'MySQL', 'Prisma', 'Git', 'Docker', 'Postman'].map(s => (
                        <span key={s} className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-md text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Certifications</h2>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-[15px]">Harvard CS50X</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Jan 2026</p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Introduction to Computer Science</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
