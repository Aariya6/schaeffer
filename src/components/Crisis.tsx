import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, AlertTriangle, Heart } from 'lucide-react';

export function Crisis() {
  const crisisResources = [
    {
      id: 1,
      name: '988 Suicide & Crisis Lifeline',
      phone: '988',
      description: '24/7 free and confidential support for people in distress, prevention and crisis resources.',
      available: '24/7',
      type: 'National Hotline'
    },
    {
      id: 2,
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      description: 'Free crisis counseling via text message available 24/7.',
      available: '24/7',
      type: 'Text Support'
    },
    {
      id: 3,
      name: 'SAMHSA National Helpline',
      phone: '1-800-662-4357',
      description: 'Treatment referral and information service for mental health and substance abuse.',
      available: '24/7',
      type: 'Treatment Referral'
    },
    {
      id: 4,
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      description: 'Support for those experiencing domestic violence and abuse.',
      available: '24/7',
      type: 'Domestic Violence'
    },
    {
      id: 5,
      name: 'Veterans Crisis Line',
      phone: '1-800-273-8255',
      description: 'Specialized support for veterans and their families.',
      available: '24/7',
      type: 'Veterans Support'
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: 'Call Emergency Services',
      description: 'If you or someone else is in immediate danger, call 911 right away.',
      action: 'Call 911'
    },
    {
      step: 2,
      title: 'Contact Crisis Support',
      description: 'Reach out to a crisis hotline for immediate emotional support.',
      action: 'Call 988'
    },
    {
      step: 3,
      title: 'Go to Emergency Room',
      description: 'Visit the nearest emergency room for immediate medical attention.',
      action: 'Find ER Near Me'
    },
    {
      step: 4,
      title: 'Reach Out to Someone',
      description: 'Contact a trusted friend, family member, or healthcare provider.',
      action: 'Call Someone'
    }
  ];

  const safetyTips = [
    'Remove any means of harm from your immediate environment',
    'Stay with someone you trust or ask someone to stay with you',
    'Avoid alcohol and drugs during a crisis',
    'Focus on your breathing - take slow, deep breaths',
    'Use grounding techniques to stay present',
    'Remember that this feeling will pass'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Emergency Alert */}
      <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div className="flex items-center">
          <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
          <div>
            <h2 className="text-xl font-bold text-red-800">
              If you are in immediate danger, call 911 now
            </h2>
            <p className="text-red-700 mt-1">
              This page is for support resources. In a medical emergency, contact emergency services immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Crisis Support</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You are not alone. Help is available 24/7. Reach out to any of these resources for immediate support.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a
          href="tel:988"
          className="bg-red-600 text-white p-6 rounded-xl hover:bg-red-700 transition-colors block text-center group"
        >
          <Phone className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Call 988</h3>
          <p>Suicide & Crisis Lifeline</p>
        </a>
        
        <div className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer text-center group">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Text HOME</h3>
          <p>to 741741 for Crisis Text Line</p>
        </div>
      </div>

      {/* Emergency Steps */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">In a Crisis? Follow These Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencySteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{step.description}</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                {step.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis Resources */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">24/7 Crisis Resources</h2>
        
        <div className="space-y-4">
          {crisisResources.map((resource) => (
            <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{resource.name}</h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Available {resource.available}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={resource.phone.startsWith('1-') ? `tel:${resource.phone}` : resource.phone.includes('Text') ? 'sms:741741' : `tel:${resource.phone}`}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
                  >
                    {resource.phone.includes('Text') ? <MessageCircle className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                    {resource.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">Immediate Safety Tips</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
              <div className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Remember: You matter, your life has value, and there are people who want to help you.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:988"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Get Help Now
            </a>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Find Local Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}