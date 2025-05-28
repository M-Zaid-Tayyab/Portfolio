import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Apply background color to body
    document.body.className = 'bg-white dark:bg-gray-900 transition-colors duration-300';
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;