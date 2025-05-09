import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center relative z-10">
        {children}
      </h2>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-blue-600 dark:bg-blue-400 mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;