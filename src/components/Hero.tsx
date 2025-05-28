import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="h-1 w-16 bg-accent-500 mr-3"></div>
              <span className="text-accent-600 dark:text-accent-400 font-medium">React Native Developer</span>
            </div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Creating beautiful
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                mobile experiences
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              With 3+ years of experience crafting high-quality React Native applications, 
              I help businesses transform their ideas into stunning, cross-platform mobile solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 mb-2">
                  <Smartphone className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">15+ Mobile Apps</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-50 dark:bg-accent-900/30 mb-2">
                  <Code className="text-accent-600 dark:text-accent-400" size={24} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">25K+ Lines of Code</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success-50 dark:bg-success-900/30 mb-2">
                  <Globe className="text-success-600 dark:text-success-400" size={24} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">10+ Countries</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-xl p-1">
                <img 
                  src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer coding on laptop" 
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;