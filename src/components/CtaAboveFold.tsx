import React from 'react';
import { Check } from 'lucide-react';

interface CtaAboveFoldProps {
  title: string;
  subtitle: string;
  buttonText: string;
  noCardText: string;
}

const CtaAboveFold: React.FC<CtaAboveFoldProps> = ({
  title,
  subtitle,
  buttonText,
  noCardText
}) => {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-blue-100 text-lg max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 mb-4 sm:mb-0 sm:mr-4 min-w-[180px]">
              {buttonText}
            </button>
            <div className="text-blue-100 flex items-center">
              <Check className="h-5 w-5 mr-2 text-blue-200" />
              <span>{noCardText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaAboveFold;