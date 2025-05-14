import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface SolutionSectionProps {
  title: string;
  subtitle: string;
  solutions: Solution[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title,
  subtitle,
  solutions
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-gray-50 rounded-lg p-2 lg:mr-8">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 mb-2 rounded-lg transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{solution.title}</span>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${activeTab === index ? 'transform rotate-90' : ''}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solutions[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {solutions[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-blue-500" />
                        </div>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={solutions[activeTab].image} 
                    alt={solutions[activeTab].title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;