import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-white">
                Muhammad<span className="text-accent-400"> Zaid</span>
              </div>
              <p className="text-gray-400 mt-2 max-w-xs">
                Creating exceptional mobile experiences with React Native.
              </p>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <div>
                <h3 className="text-base font-medium mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Get in Touch</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:zaidtayyab1@gmail.com"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                    >
                      <Mail size={16} className="mr-2" />
                      zaidtayyab1@gmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+15551234567"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      +92 346 6218378
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Muhammad Zaid. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://github.com/M-Zaid-Tayyab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/muhammad-zaid-0a897b218/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;