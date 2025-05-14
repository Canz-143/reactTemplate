import React from 'react';
import { Calendar, Users, DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CalendlySectionProps {
  title: string;
  description: string;
  features: Feature[];
  disclaimerText: string;
  bookingTitle: string;
  bookingSubtitle: string;
  buttonText: string;
  placeholderText: string;
}

const CalendlySection: React.FC<CalendlySectionProps> = ({
  title,
  description,
  features,
  disclaimerText,
  bookingTitle,
  bookingSubtitle,
  buttonText,
  placeholderText
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-6">
                  <Calendar className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {description}
                </p>
                <div className="space-y-6 mb-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Icon className="h-6 w-6 text-blue-500 mt-1" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-sm text-gray-500">
                  {disclaimerText}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 md:p-12 bg-gray-50">
                <div className="h-full flex items-center justify-center">
                  <div className="w-full h-[450px] border border-gray-200 rounded-lg bg-white p-4 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{bookingTitle}</h3>
                    <p className="text-gray-600 text-center mb-6">{bookingSubtitle}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out mb-4">
                      {buttonText}
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                      {placeholderText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;