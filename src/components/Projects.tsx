import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';
import QuizGPT from '../assets/QuizGPT.png';
import LoadItUp from '../assets/LoadItUp.jpeg';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  link: string;
  github?: string;
  featured: boolean;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'QuizGPT',
      description: 'QuizGPT uses artificial intelligence to generate quizzes based on topics selected by the user. Whether for exam preparation, learning new subjects, or self-assessment, the app dynamically creates relevant questions tailored to the user\'s chosen areas.',
      image: QuizGPT,
      tags: ['React Native', 'Expo', 'Firebase', 'OpenAI', 'Node.js', 'Express', 'MongoDB'],
      category: ['Mobile', 'Education', 'AI'],
      link: 'https://quizgpt.vercel.app/',
      github: 'https://github.com/quizgpt',
      featured: true,
    },
    {
      id: 2,
      title: 'Load It Up - Pass',
      description: 'Converted a live web app into a fast, reliable mobile app using React Native to help retain mobile users. The project included Cloudflare authentication, multilingual support (German & English), light/dark themes, and QR code generation + scanning. The original dev team struggled with mobile, so I stepped in and delivered a production-ready app in half the expected time. Ideal for businesses looking to go mobile without compromising on quality or speed.',
      image: LoadItUp,
      tags: ['React Native', 'TypeScript', 'Redux', 'Cloudflare', 'QR Code', 'Multilingual'],
      category: ['mobile', 'Logistics'],
      link: 'https://loaditup.app/',
      github: 'https://github.com/loaditup-app',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'education', name: 'Education' },
    { id: 'ai', name: 'Logistics' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of the apps and projects I've built throughout my career as a React Native developer
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <Star size={12} className="mr-1" /> Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
            >
              Interested in working together?
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;