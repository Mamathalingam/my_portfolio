import React from 'react';
import SectionTitle from './shared/SectionTitle';
import {  
  Database, 
  Settings,  
  Layout,
  Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      icon: <Layout className="h-6 w-6 text-blue-500" />,
      items: ['React.js', 'JavaScript/TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      name: 'Database',
      icon: <Database className="h-6 w-6 text-green-500" />,
      items: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      name: 'Mobile Development',
      icon: <Cpu className="h-6 w-6 text-red-500" />,
      items: ['React Native', 'Android']
    },
    {
      name: 'Tools & Others',
      icon: <Settings className="h-6 w-6 text-gray-500" />,
      items: ['Git', 'GitHub/GitLab', 'Jira', 'Agile/Scrum', 'Testing']
    },
  ];

  const programmingLanguages = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'TypeScript', proficiency: 85 },
    { name: 'Python', proficiency: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="ml-3 text-xl font-bold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmingLanguages.map((language, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-blue-600 dark:text-blue-400">{language.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;