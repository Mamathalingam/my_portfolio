import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900 z-0"></div>
      
      {/* Abstract background elements */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block">Hello, I'm</span>
          <span className="block mt-2 text-blue-600 dark:text-blue-400">Mamatha Lingam</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          A passionate software developer specialized in building exceptional digital experiences.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;