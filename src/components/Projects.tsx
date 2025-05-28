import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';

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
      title: 'Fitness Tracker App',
      description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Redux', 'Firebase', 'Maps API'],
      category: ['mobile', 'health'],
      link: 'https://example.com/fitness-tracker',
      github: 'https://github.com/johndoe/fitness-tracker',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce mobile application with product discovery, cart management, and secure checkout.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'TypeScript', 'Stripe API', 'Redux'],
      category: ['mobile', 'ecommerce'],
      link: 'https://example.com/ecommerce-app',
      featured: true,
    },
    {
      id: 3,
      title: 'Travel Companion',
      description: 'A travel app that helps users discover destinations, plan itineraries, and book accommodations and activities.',
      image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'GraphQL', 'Expo', 'Maps'],
      category: ['mobile', 'travel'],
      link: 'https://example.com/travel-companion',
      github: 'https://github.com/johndoe/travel-companion',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A sleek and intuitive task management application with calendar integration and reminder notifications.',
      image: 'https://images.pexels.com/photos/6956350/pexels-photo-6956350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Context API', 'Async Storage', 'Notifications'],
      category: ['mobile', 'productivity'],
      link: 'https://example.com/task-manager',
      github: 'https://github.com/johndoe/task-manager',
      featured: true,
    },
    {
      id: 5,
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking, payment processing, and restaurant discovery.',
      image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'Maps API', 'Payment Gateway'],
      category: ['mobile', 'food'],
      link: 'https://example.com/food-delivery',
      featured: false,
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather application with 7-day forecasts, location-based weather data, and customizable alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Weather API', 'Geolocation', 'Charts'],
      category: ['mobile', 'weather'],
      link: 'https://example.com/weather-app',
      github: 'https://github.com/johndoe/weather-app',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'featured', name: 'Featured' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'health', name: 'Health & Fitness' },
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