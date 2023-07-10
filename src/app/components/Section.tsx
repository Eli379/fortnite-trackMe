import React from 'react';

interface SectionProps {
  name: string;
}

const Section: React.FC<SectionProps> = ({ name, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <div className="flex overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Section;
