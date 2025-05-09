import React from 'react';
import SectionTitle from './shared/SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    
    {
      id: 1,
      company: "WebDev Startup",
      role: "Frontend Developer",
      period: "Jun 2017 - Feb 2019",
      location: "Austin, TX",
      description: "Contributed to the development of a marketing analytics dashboard used by Fortune 500 companies.",
      responsibilities: [
        "Created interactive data visualizations using D3.js",
        "Implemented complex UI components with React",
        "Worked with backend developers to design and consume APIs",
        "Optimized application for cross-browser compatibility",
        "Participated in user testing and feature refinement"
      ]
    },
    {
      id: 2,
      company: "CodeWorks Agency",
      role: "Junior Web Developer",
      period: "Aug 2015 - May 2017",
      location: "Chicago, IL",
      description: "Assisted in the development of websites and web applications for various clients across industries.",
      responsibilities: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Created WordPress themes and plugins for content management",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Performed cross-browser testing and bug fixes",
        "Participated in client meetings and requirement gathering"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Work Experience</SectionTitle>
        
        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10 md:mt-6"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-10">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{experience.role}</h3>
                      <h4 className="text-lg font-semibold mt-1">{experience.company}</h4>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 dark:text-gray-300 text-sm">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600 dark:text-gray-300">{experience.description}</p>
                      
                      <h5 className="mt-4 font-medium">Key Responsibilities:</h5>
                      <ul className="mt-2 space-y-1">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex text-gray-600 dark:text-gray-300">
                            <span className="mr-2">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;