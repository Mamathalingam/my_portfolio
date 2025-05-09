import React from 'react';
import SectionTitle from './shared/SectionTitle';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Auburn University at Montgomery",
      period: "2024 - 2025",
      description: "Specialized in Software Engineering and Artificial Intelligence with a thesis on optimizing machine learning algorithms for real-time applications.",
      achievements: [
        "Graduated with distinction - GPA 3.9/4.0",
        "Published research paper in IEEE conference",
        "Received merit scholarship for academic excellence",
        "Teaching assistant for Introduction to Programming course"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Malla Reddy Engineering for Women's",
      period: "2016 - 2020",
      description: "Comprehensive program covering computer architecture, software development, and electrical engineering fundamentals.",
      achievements: [
        "Dean's List all semesters",
        "Senior project: Developed an IoT home automation system",
        "Vice President of Computer Science Club",
        "Participated in ACM programming competition"
      ]
    }
  ];

  
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
              Academic Education
            </h3>
            
            <div className="space-y-8">
              {educationData.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.degree}</h4>
                  <h5 className="text-lg font-medium mt-1">{item.institution}</h5>
                  
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {item.period}
                  </div>
                  
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                  
                  {item.achievements && (
                    <>
                      <h6 className="mt-4 font-medium">Key Achievements:</h6>
                      <ul className="mt-2 space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex text-gray-600 dark:text-gray-300">
                            <span className="mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Education;