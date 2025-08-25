import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'type',
      title: 'What type of support are you seeking?',
      type: 'multiple',
      options: [
        'Substance abuse recovery',
        'Mental health support',
        'Physical rehabilitation',
        'Addiction counseling',
        'Trauma recovery',
        'Behavioral therapy',
        'Other'
      ]
    },
    {
      id: 'urgency',
      title: 'How urgently do you need support?',
      type: 'single',
      options: [
        'Immediate - Crisis situation',
        'Within this week',
        'Within this month',
        'Planning for the future'
      ]
    },
    {
      id: 'budget',
      title: 'What is your budget range for treatment?',
      type: 'single',
      options: [
        'Free/No cost options only',
        'Under $50/month',
        'Under $200/month',
        'Under $500/month',
        'Higher budget available'
      ]
    },
    {
      id: 'location',
      title: 'What type of treatment do you prefer?',
      type: 'single',
      options: [
        'In-person only',
        'Online/Virtual only',
        'Hybrid (both options)',
        'No preference'
      ]
    },
    {
      id: 'support',
      title: 'Do you have family/friend support?',
      type: 'single',
      options: [
        'Strong support system',
        'Some support available',
        'Limited support',
        'No support system'
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    if (answers.urgency === 'Immediate - Crisis situation') {
      recommendations.push({
        type: 'urgent',
        title: 'Immediate Crisis Support',
        description: 'Based on your response, please consider contacting crisis support immediately.',
        actions: ['Contact Crisis Hotline', 'Visit Emergency Room', 'Call 988 Suicide & Crisis Lifeline']
      });
    }

    if (answers.budget === 'Free/No cost options only' || answers.budget === 'Under $50/month') {
      recommendations.push({
        type: 'budget',
        title: 'Budget-Friendly Options',
        description: 'We found several low-cost and free resources for you.',
        actions: ['Community Health Centers', 'Support Groups', 'Online Resources', 'Sliding Scale Therapy']
      });
    }

    if (answers.type?.includes('Substance abuse recovery')) {
      recommendations.push({
        type: 'substance',
        title: 'Substance Abuse Resources',
        description: 'Specialized resources for substance abuse recovery.',
        actions: ['AA/NA Meetings', 'SAMHSA Treatment Locator', 'Outpatient Programs', 'Detox Centers']
      });
    }

    if (answers.type?.includes('Mental health support')) {
      recommendations.push({
        type: 'mental',
        title: 'Mental Health Support',
        description: 'Mental health resources tailored to your needs.',
        actions: ['Therapy Sessions', 'Support Groups', 'Mental Health Apps', 'Counseling Centers']
      });
    }

    return recommendations;
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Recommendations</h1>
            <p className="text-gray-600">Based on your responses, here are the resources we recommend:</p>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div key={index} className={`border-2 rounded-xl p-6 ${
                rec.type === 'urgent' ? 'border-red-200 bg-red-50' :
                rec.type === 'budget' ? 'border-green-200 bg-green-50' :
                'border-blue-200 bg-blue-50'
              }`}>
                <div className="flex items-start gap-4">
                  {rec.type === 'urgent' && <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />}
                  {rec.type !== 'urgent' && <Info className="h-6 w-6 text-blue-600 mt-1" />}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.title}</h3>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.actions.map((action, actionIndex) => (
                        <span key={actionIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${
                          rec.type === 'urgent' ? 'bg-red-100 text-red-700' :
                          rec.type === 'budget' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setAnswers({});
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Take Assessment Again
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Find Resources Near Me
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8">
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">
              Question {currentStep + 1} of {questions.length}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.title}</h2>
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all">
                <input
                  type={currentQuestion.type === 'single' ? 'radio' : 'checkbox'}
                  name={currentQuestion.id}
                  value={option}
                  checked={
                    currentQuestion.type === 'single' 
                      ? answers[currentQuestion.id] === option
                      : answers[currentQuestion.id]?.includes(option) || false
                  }
                  onChange={(e) => {
                    if (currentQuestion.type === 'single') {
                      handleAnswer(currentQuestion.id, option);
                    } else {
                      const current = answers[currentQuestion.id] || [];
                      if (e.target.checked) {
                        handleAnswer(currentQuestion.id, [...current, option]);
                      } else {
                        handleAnswer(currentQuestion.id, current.filter((item: string) => item !== option));
                      }
                    }
                  }}
                  className="mr-4"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}