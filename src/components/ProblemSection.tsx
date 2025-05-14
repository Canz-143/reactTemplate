import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProblemSectionProps {
  title: string;
  subtitle: string;
  problems: Problem[];
}

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border-t-4 border-blue-500">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProblemSection: React.FC<ProblemSectionProps> = ({ title, subtitle, problems }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;