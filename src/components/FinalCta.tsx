import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Plan {
  title: string;
  features: string[];
  buttonText: string;
  isPrimary?: boolean;
  popularLabel?: string;
}

interface FinalCtaProps {
  title: string;
  subtitle: string;
  plans: Plan[];
  demoText: string;
  demoButtonText: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({
  title,
  subtitle,
  plans,
  demoText,
  demoButtonText
}) => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative ${plan.isPrimary ? 'bg-blue-50 rounded-xl p-8 border-2 border-blue-200' : ''}`}>
                  {plan.popularLabel && (
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                      {plan.popularLabel}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {plan.title}
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-blue-500" />
                        </div>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${
                    plan.isPrimary 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  } font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out`}>
                    {plan.buttonText}
                    {plan.isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-blue-100 mb-4">{demoText}</p>
            <button className="bg-transparent hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg border border-white transition duration-300 ease-in-out">
              {demoButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;