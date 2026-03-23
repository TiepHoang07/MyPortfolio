import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <footer className="bg-white dark:bg-gray-950 border-t dark:border-gray-800 py-8 mt-auto text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex justify-center items-center md:items-start">
            <p className="text-sm text-nowrap">Building digital experiences with passion.</p>
            <Heart className="w-5 h-5 ml-2 text-primary" />
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/TiepHoang07" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/tiep-hoang-463104377/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <Link to="/contact" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
