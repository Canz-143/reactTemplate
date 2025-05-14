import React, { useEffect } from 'react';
import { AlertCircle, Award, Calendar, Clock, DollarSign, Facebook, Instagram, Linkedin, ShieldCheck, Twitter, Users, Zap } from 'lucide-react';
import Hero from './components/Hero';
import CtaAboveFold from './components/CtaAboveFold';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CtaMidPage from './components/CtaMidPage';
import SocialProofSection from './components/SocialProofSection';
import FaqSection from './components/FaqSection';
import CalendlySection from './components/CalendlySection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechGrowth Inc",
    content: "Implementing this solution was the best business decision we've made this year. Our efficiency increased by 45% and our team is happier than ever.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Robinson",
    position: "Operations Director",
    company: "Global Services",
    content: "The results exceeded our expectations. We've seen a 30% increase in revenue and significant improvements across all our key metrics.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emily Zhang",
    position: "Marketing Manager",
    company: "Brand Elevate",
    content: "This platform has revolutionized how we handle our client relationships. The automation features saved us countless hours each week.",
    rating: 4,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Our onboarding process is designed to get you up and running as quickly as possible. Most customers are fully operational within 24-48 hours of signing up, with our team providing support every step of the way."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team ensures you get the help you need, when you need it."
  },
  {
    question: "Can your solution integrate with my existing tools?",
    answer: "Absolutely! Our platform integrates seamlessly with most popular business tools and software, including CRM systems, marketing platforms, accounting software, and more. We also provide API access for custom integrations."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, we believe in the value of our service without locking you in. You can choose monthly or annual billing (with a discount for annual plans), and you can cancel at any time without penalties."
  },
  {
    question: "How secure is your platform?",
    answer: "Security is our top priority. We use bank-level encryption, regular security audits, and comply with industry standards. Your data is always protected with state-of-the-art security measures."
  },
  {
    question: "What kind of results can I expect?",
    answer: "While results vary by business type and size, our customers typically see significant improvements in efficiency, productivity, and revenue. On average, our customers report a 30% increase in productivity and a 25% growth in revenue within the first six months."
  }
];

function App() {
  useEffect(() => {
    document.title = "Transform Your Business | Our Solution";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Transform Your Business with Our Solution"
        subtitle="Streamline your operations, increase revenue, and scale your business with our proven system."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        imageSrc="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Business professionals collaborating"
      />
      <CtaAboveFold 
        title="Ready to take the next step?"
        subtitle="Join thousands of satisfied customers who have transformed their business."
        buttonText="Start Free Trial"
        noCardText="No credit card required"
      />
      <ProblemSection 
        title="Challenges Facing Businesses Today"
        subtitle="Many businesses struggle with these common problems that prevent growth and reduce profitability."
        problems={[
          {
            icon: Clock,
            title: "Time-Consuming Processes",
            description: "Manual workflows and outdated systems waste valuable time and resources, preventing your team from focusing on growth."
          },
          {
            icon: DollarSign,
            title: "Unpredictable Revenue",
            description: "Inconsistent sales performance and customer churn create financial uncertainty and make planning difficult."
          },
          {
            icon: AlertCircle,
            title: "Scaling Difficulties",
            description: "Reaching the next level of growth seems impossible when systems break down as your business expands."
          }
        ]}
      />
      <SolutionSection 
        title="Our Comprehensive Solution"
        subtitle="We've built the perfect system to overcome these challenges and transform your business."
        solutions={[
          {
            title: "Streamlined Processes",
            description: "Our platform automates your core business processes, reducing manual work by up to 80%.",
            features: [
              "Intelligent workflow automation",
              "Customizable process templates",
              "Real-time performance analytics"
            ],
            image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            title: "Revenue Optimization",
            description: "Increase your predictable revenue streams and maximize customer lifetime value.",
            features: [
              "Customer journey optimization",
              "Subscription management tools",
              "Churn prediction and prevention"
            ],
            image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          },
          {
            title: "Scalable Infrastructure",
            description: "Our cloud-based platform grows with your business, handling increased volume seamlessly.",
            features: [
              "Enterprise-grade reliability",
              "Unlimited user accounts",
              "Dedicated success manager"
            ],
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        ]}
      />
      <CtaMidPage 
        title="Experience the difference today"
        subtitle="Join thousands of businesses that have transformed their operations and increased their revenue with our solution."
        features={[
          { icon: ShieldCheck, text: "Secure & Reliable" },
          { icon: Zap, text: "Quick Setup" },
          { icon: Award, text: "Award-winning Support" }
        ]}
        buttonText="Start Your 14-Day Free Trial"
        bottomText="No credit card required. Cancel anytime."
      />
      <SocialProofSection 
        title="What Our Customers Say"
        subtitle="Discover how our solution has helped businesses just like yours transform their operations."
        testimonials={testimonials}
        trustedText="Trusted by leading companies:"
        companyLogos={['Company A', 'Company B', 'Company C', 'Company D', 'Company E']}
      />
      <FinalCta 
        title="Ready to Transform Your Business?"
        subtitle="Join thousands of successful businesses that have already made the switch."
        plans={[
          {
            title: "Start with our free plan",
            features: [
              "Core platform features",
              "Up to 5 user accounts",
              "Basic analytics",
              "Email support"
            ],
            buttonText: "Sign Up Free"
          },
          {
            title: "Pro plan for growing businesses",
            features: [
              "All free features plus:",
              "Unlimited user accounts",
              "Advanced analytics and reporting",
              "Priority 24/7 support",
              "Custom integrations",
              "Strategy consulting"
            ],
            buttonText: "Start 14-Day Free Trial",
            isPrimary: true,
            popularLabel: "Most Popular"
          }
        ]}
        demoText="Not ready to commit? Schedule a demo instead."
        demoButtonText="Book a Demo"
      />
      <FaqSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our platform and services."
        faqs={faqs}
        contactText="Still have questions?"
        contactButtonText="Contact our support team"
      />
      <CalendlySection 
        title="Schedule a Free Consultation"
        description="Speak with one of our product specialists to see how our solution can work specifically for your business. We'll customize a demo based on your needs."
        features={[
          {
            icon: Users,
            title: "Expert Consultation",
            description: "Our product specialists will walk you through every feature and answer your questions."
          },
          {
            icon: Calendar,
            title: "30-Minute Session",
            description: "A focused session to understand your business needs and demonstrate relevant solutions."
          }
        ]}
        disclaimerText="By scheduling a demo, you agree to our privacy policy and terms of service."
        bookingTitle="Book Your Meeting"
        bookingSubtitle="Select a date and time that works best for your schedule."
        buttonText="View Available Times"
        placeholderText="This is where the Calendly embed would appear. In a real implementation, you would include the Calendly embed code here."
      />
      <Footer 
        companyName="Company Name"
        description="Transforming businesses with innovative solutions since 2015."
        socialLinks={[
          { icon: Facebook, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Instagram, href: "#" },
          { icon: Linkedin, href: "#" }
        ]}
        linkSections={[
          {
            title: "Solutions",
            links: ['For Small Business', 'For Enterprise', 'For E-commerce', 'For Healthcare', 'For Finance']
          },
          {
            title: "Company",
            links: ['About Us', 'Careers', 'Partners', 'Blog', 'Press', 'Contact']
          },
          {
            title: "Resources",
            links: ['Help Center', 'Documentation', 'Tutorials', 'Webinars', 'API', 'Status']
          }
        ]}
        copyrightText={`© ${new Date().getFullYear()} Company Name. All rights reserved.`}
        legalLinks={['Privacy Policy', 'Terms of Service', 'Cookies']}
      />
    </div>
  );
}

export default App;

export default App