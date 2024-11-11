import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Check, Search, Database, Award, X } from 'lucide-react';

import hero from "../../public/Business support-rafiki.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LaunchPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [billingPeriod, setBillingPeriod] = useState('monthly');



  const faqs = [
    {
      question: "How does Search Assistant find business listings?",
      answer: "We aggregate listings from thousands of brokers across the US, focusing on businesses with <$2M EBITDA. Our AI-powered system continuously scans and updates our database to ensure you have access to the latest opportunities."
    },
    {
      question: "What is included in the Launch Cohort pricing?",
      answer: "Launch Cohort members receive special pricing that's locked in for life, plus exclusive access to new features, priority support, and regular strategy sessions with our team to optimize your search process."
    },
    {
      question: "How accurate is the AI matching system?",
      answer: "Our AI matching system uses advanced algorithms to analyze multiple data points including industry, location, financials, and specific business attributes. We regularly achieve over 90% matching accuracy based on user feedback."
    },
    {
      question: "Can I change my search criteria later?",
      answer: "Yes! You can modify your search criteria at any time through your user profile. Changes are reflected immediately in your matching algorithm."
    },
    {
      question: "What happens when I find a matching business?",
      answer: "When you find a match, you can request information directly through our platform. We'll automatically handle the initial contact with the broker and help facilitate the NDA process if required."
    }
  ];

  const pages = [
    {
      title: "Your Leg Up in Buying a Small Business",
      description: "Search Assistant helps small business buyers find the best deals by connecting them with matching opportunities from the most comprehensive database of <$2M EBITDA businesses.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Spend Less Time Sourcing",
      description: "We aggregate listings from thousands of brokers so that you can focus your time on what matters rather than searching deal sites.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Comprehensive Coverage",
      description: "We are building a comprehensive database of all US businesses with <$2M in EBITDA with new sources added regularly, so you can be confident that we have all opportunities.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "AI Enrichment and Matching",
      description: "We use AI to summarize and standardize listings, allowing us to better match opportunities and provide concise summaries on the deals that are actually relevant to you.",
      image: "/api/placeholder/400/300"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      monthlyPrice: 99,
      semiAnnualPrice: 89,
      icon: <Search className="w-12 h-12 text-blue-500" />,
      description: "Perfect for first-time business buyers",
      features: [
        "Up to 1 state coverage",
        "Basic AI matching",
        "Weekly updates",
        "Email support",
        "5 active leads"
      ],
      nonFeatures: [
        "Priority matching",
        "Custom industry filters",
        "Advanced analytics"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 199,
      semiAnnualPrice: 179,
      icon: <Database className="w-12 h-12 text-blue-600" />,
      description: "Ideal for serious business buyers",
      features: [
        "Up to 2 states coverage",
        "Advanced AI matching",
        "Daily updates",
        "Priority support",
        "15 active leads",
        "Custom industry filters"
      ],
      nonFeatures: [
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      semiAnnualPrice: 269,
      icon: <Award className="w-12 h-12 text-blue-700" />,
      description: "For professional buyers and firms",
      features: [
        "Up to 3 states coverage",
        "Premium AI matching",
        "Real-time updates",
        "24/7 priority support",
        "Unlimited active leads",
        "Custom industry filters",
        "Advanced analytics"
      ]
    }
  ];



  const handleNext = () => {
    if (currentPage === pages.length - 1) {
      console.log("Navigate to login page");
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Mobile View */}
      <div className="lg:hidden min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <img 
            src={pages[currentPage].image}
            alt={pages[currentPage].title}
            className="w-full max-w-sm rounded-lg shadow-lg mb-8"
          />
          <h1 className="text-2xl font-bold mb-4 text-center">
            {pages[currentPage].title}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {pages[currentPage].description}
          </p>
          
          {/* Navigation dots */}
          <div className="flex gap-2 mb-8">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentPage === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-4 w-full max-w-sm">
            {currentPage > 0 && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handlePrevious}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            <Button 
              className="flex-1"
              onClick={handleNext}
            >
              {currentPage === pages.length - 1 ? 'Get Started' : 'Next'}
              {currentPage !== pages.length - 1 && (
                <ChevronRight className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <div className="flex items-center justify-between mb-16">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-6">
                Your Leg Up in Buying a Small Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Search Assistant helps small business buyers find the best deals by connecting them with matching opportunities.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <img 
              src={hero} 
              alt="Hero"
              className="rounded-lg w-[30rem]"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-8 mb-16">
            {pages.slice(1).map((page, index) => (
              <Card key={index} className="p-6">
                {/* <img
                  src={page.image}
                  alt={page.title}
                  className="w-full rounded-lg mb-4"
                /> */}
                <h3 className="text-xl font-bold mb-4">{page.title}</h3>
                <p className="text-gray-600">{page.description}</p>
              </Card>
            ))}
          </div>

          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Mobile View stays the same as before */}
      {/* ... previous mobile view code ... */}

      {/* Desktop View */}
      <div className="hidden lg:block min-h-screen">
        {/* ... previous hero and features sections ... */}

        {/* Enhanced Pricing Section */}
        <div className=" mx-auto px-8 py-16 bg-white rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Launch Cohort Pricing</h2>
            <p className="text-gray-600 mb-8">
              Join our exclusive launch cohort and lock in special pricing for life
            </p>
            
            {/* Billing Period Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'semiAnnual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-blue-600 ${
                  billingPeriod === 'semiAnnual' ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'semiAnnual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingPeriod === 'semiAnnual' ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Semi-Annual
              </span>
              <span className="ml-2 text-sm text-green-500 font-semibold">
                Save up to 10%
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className={`relative overflow-hidden ${tier.popular ? 'border-blue-500 shadow-xl' : ''}`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {tier.icon}
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <p className="text-gray-600 mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <p className="text-4xl font-bold">
                        ${billingPeriod === 'monthly' ? tier.monthlyPrice : tier.semiAnnualPrice}
                        <span className="text-base font-normal text-gray-600">/mo</span>
                      </p>
                      {billingPeriod === 'semiAnnual' && (
                        <p className="text-sm text-green-500">
                          Save ${(tier.monthlyPrice - tier.semiAnnualPrice) * 6} annually
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {tier.nonFeatures?.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-gray-400">
                          <X className="w-4 h-4" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${tier.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="max-w-3xl mx-auto px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;