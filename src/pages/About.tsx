import { motion } from 'framer-motion';
import { Code2, Target, User, Heart, Database, MessageSquare, Smile } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: '75%' },
    { name: 'JavaScript/TypeScript', level: '50%' },
    { name: 'React', level: '55%' },
    { name: 'Tailwind CSS', level: '65%' },
    { name: 'Express', level: '40%' },
    { name: 'NestJS', level: '45%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-primary">
            <User className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm currently third-year high school student and i'm a passionate developer about website development and just started learning application development. I love creating smooth, interactive, and efficient web applications. I'm always learning new technologies and improving my skills. My goal is to become a full-stack developer and bring useful products to the community.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex items-center gap-4 border border-gray-100 dark:border-gray-800">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Target className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">My Goal</p>
                <p className="font-semibold">Become a software engineer</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex items-center gap-4 border border-gray-100 dark:border-gray-800">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Heart className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Interests</p>
                <p className="font-semibold">Creative Coding</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex items-center gap-4 border border-gray-100 dark:border-gray-800">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><MessageSquare className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Languages</p>
                <p className="font-semibold">Vietnamese, Czech, English</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex items-center gap-4 border border-gray-100 dark:border-gray-800">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Smile className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Hobbies</p>
                <p className="font-semibold">Chess, Coding, Digital Art</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-primary">
            <Code2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills Confidence</h2>
          </div>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-primary h-2 rounded-full shadow-2xl shadow-primary/50"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extra Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center"
        >
          <Code2 className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Frontend</h3>
          <p className="text-gray-500 text-sm">React, Javascript/TypeScript, Tailwind CSS</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center"
        >
          <Code2 className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Backend</h3>
          <p className="text-gray-500 text-sm">Node.js, Express, Nestjs</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center"
        >
          <Database className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Database</h3>
          <p className="text-gray-500 text-sm">MySQL, PostgreSQL</p>
        </motion.div>
      </div>
    </div>
  );
};
