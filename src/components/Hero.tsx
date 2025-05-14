import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-50 rounded-bl-[100px] -z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg shadow border border-gray-200 transition duration-300 ease-in-out">
                {secondaryButtonText}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-blue-200 rounded-xl transform rotate-3"></div>
              <img 
                src={imageSrc}
                alt={imageAlt}
                className="relative rounded-xl shadow-2xl object-cover w-full h-[400px] transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;