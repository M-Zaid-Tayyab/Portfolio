import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Coffee, Clock, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { icon: <Award size={24} />, value: '3+', label: 'Years Experience' },
    { icon: <Briefcase size={24} />, value: '15+', label: 'Projects Completed' },
    { icon: <Clock size={24} />, value: '1000+', label: 'Hours of Coding' },
    { icon: <Coffee size={24} />, value: '500+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate React Native Developer with 3+ years of experience in building exceptional mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a React Native Developer with a strong focus on creating scalable and performant applications. 
                My journey began over 3 years ago, and I've been crafting exceptional digital experiences ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in building mobile applications using modern technologies like React Native, Node.js, and various cloud services.
                I've worked with startups and established businesses to bring their digital visions to life, always focusing on creating 
                products that users love.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education & Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary-500 pl-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">2024 - 2025</div>
                  <div className="font-medium text-gray-900 dark:text-white">React Native Developer</div>
                  <div className="text-gray-600 dark:text-gray-300">TechXpert</div>
                </div>
                <div className="border-l-2 border-primary-500 pl-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">2022 - 2024</div>
                  <div className="font-medium text-gray-900 dark:text-white">React Native Developer</div>
                  <div className="text-gray-600 dark:text-gray-300">LuxoSoft Technologies</div>
                </div>
                <div className="border-l-2 border-accent-500 pl-4">
                  <div className="font-medium text-gray-900 dark:text-white">BS in Software Engineering</div>
                  <div className="text-gray-600 dark:text-gray-300">University of Management and Technology</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;