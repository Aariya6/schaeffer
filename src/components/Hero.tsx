import React from 'react';
import { ArrowRight, Shield, Users, BookOpen, TrendingUp, Phone, DollarSign } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const features = [
    {
      icon: Shield,
      title: 'Free Assessment',
      description: 'Get personalized recommendations based on your needs',
      action: () => onNavigate('assessment'),
    },
    {
      icon: DollarSign,
      title: 'Budget-Friendly Resources',
      description: 'Find affordable rehabilitation options in your area',
      action: () => onNavigate('resources'),
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your recovery journey with our tools',
      action: () => onNavigate('progress'),
    },
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Learn about different rehabilitation approaches',
      action: () => onNavigate('education'),
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar journeys',
      action: () => onNavigate('support'),
    },
    {
      icon: Phone,
      title: '24/7 Crisis Support',
      description: 'Immediate help when you need it most',
      action: () => onNavigate('crisis'),
      urgent: true,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Path to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Recovery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accessible, budget-friendly rehabilitation support powered by technology.
            We're here to help you find the resources and support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('assessment')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              Start Free Assessment
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('crisis')}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              Need Help Now?
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 ${
                  feature.urgent ? 'border-red-200 hover:border-red-300' : 'border-transparent hover:border-blue-200'
                }`}
                onClick={feature.action}
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  feature.urgent ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <IconComponent className={`h-6 w-6 ${
                    feature.urgent ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Making Recovery Accessible</h2>
            <p className="text-gray-600">Supporting individuals on their journey to wellness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">Resources Listed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}