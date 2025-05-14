import React from 'react';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface CtaMidPageProps {
  title: string;
  subtitle: string;
  features: Feature[];
  buttonText: string;
  bottomText: string;
}

const CtaMidPage: React.FC<CtaMidPageProps> = ({
  title,
  subtitle,
  features,
  buttonText,
  bottomText
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 -z-10"></div>
      
      <div className="absolute top-0 left-0 right-0 h-16 bg-wave-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-wave-pattern opacity-10 transform rotate-180"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center">
                  <Icon className="h-6 w-6 text-blue-200 mr-2" />
                  <span className="text-white">{feature.text}</span>
                </div>
              );
            })}
          </div>
          
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center">
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="text-blue-100 mt-4">{bottomText}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaMidPage;