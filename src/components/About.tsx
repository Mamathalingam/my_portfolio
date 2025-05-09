import React from 'react';
import SectionTitle from './shared/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/5686105/pexels-photo-5686105.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Software Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-blue-100 dark:bg-blue-900/30 -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Software Developer with a passion for creating elegant solutions</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I am a dedicated and enthusiastic software developer with a strong background in building impactful applications. My expertise lies in full-stack development, with a particular focus on creating intuitive and responsive user interfaces.
              </p>
              <p>
                Throughout my career, I've worked with various technologies including React, Node.js, and TypeScript. I approach each project with a problem-solving mindset and a commitment to writing clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or engaging with the developer community through meetups and conferences.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Technologies Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;