import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Mamatha Lingam</h2>
            <p className="mb-4">
              A passionate software developer dedicated to creating exceptional digital experiences.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Scroll to top"
            >
              Back to Top <ArrowUp size={14} className="ml-1" />
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Montgomery, Alabama</p>
              <p className="mb-2">
                <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                  mlingam@aum.edu
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Mamatha Lingam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;