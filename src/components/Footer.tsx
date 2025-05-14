import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, DivideIcon as LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

interface LinkSection {
  title: string;
  links: string[];
}

interface FooterProps {
  companyName: string;
  description: string;
  socialLinks: SocialLink[];
  linkSections: LinkSection[];
  copyrightText: string;
  legalLinks: string[];
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  description,
  socialLinks,
  linkSections,
  copyrightText,
  legalLinks
}) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-4">
              {description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {copyrightText}
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;