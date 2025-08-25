import React, { useState } from 'react';
import { MapPin, Phone, Globe, DollarSign, Clock, Star, Filter } from 'lucide-react';

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'substance', label: 'Substance Abuse' },
    { id: 'mental', label: 'Mental Health' },
    { id: 'physical', label: 'Physical Rehab' },
    { id: 'addiction', label: 'Addiction Counseling' },
    { id: 'trauma', label: 'Trauma Recovery' },
  ];

  const budgetFilters = [
    { id: 'all', label: 'All Budgets' },
    { id: 'free', label: 'Free' },
    { id: 'low', label: 'Under $50/month' },
    { id: 'medium', label: 'Under $200/month' },
    { id: 'high', label: 'Above $200/month' },
  ];

  const resources = [
    {
      id: 1,
      name: 'Community Recovery Center',
      category: 'substance',
      type: 'In-person',
      budget: 'free',
      rating: 4.8,
      address: '123 Main St, Your City',
      phone: '(555) 123-4567',
      website: 'www.communityrecovery.org',
      hours: 'Mon-Fri 8AM-6PM',
      description: 'Free substance abuse recovery programs including group therapy, counseling, and support groups.',
      services: ['Group Therapy', 'Individual Counseling', 'Family Support', 'Aftercare Programs']
    },
    {
      id: 2,
      name: 'Mental Wellness Online',
      category: 'mental',
      type: 'Online',
      budget: 'low',
      rating: 4.5,
      phone: '(555) 987-6543',
      website: 'www.mentalwellnessonline.com',
      hours: '24/7 Online Access',
      description: 'Affordable online mental health therapy starting at $40/month with licensed therapists.',
      services: ['Video Therapy', 'Chat Support', 'Self-Help Resources', 'Crisis Support']
    },
    {
      id: 3,
      name: 'Hope Physical Rehabilitation',
      category: 'physical',
      type: 'In-person',
      budget: 'medium',
      rating: 4.7,
      address: '456 Oak Ave, Your City',
      phone: '(555) 456-7890',
      website: 'www.hopephysicalrehab.com',
      hours: 'Mon-Fri 7AM-7PM, Sat 9AM-3PM',
      description: 'Comprehensive physical rehabilitation with sliding scale pricing based on income.',
      services: ['Physical Therapy', 'Occupational Therapy', 'Pain Management', 'Equipment Training']
    },
    {
      id: 4,
      name: 'Addiction Support Hotline',
      category: 'addiction',
      type: 'Phone/Online',
      budget: 'free',
      rating: 4.9,
      phone: '1-800-HELP-NOW',
      website: 'www.addictionsupport.org',
      hours: '24/7 Crisis Support',
      description: 'Free 24/7 addiction support hotline with trained counselors and resource referrals.',
      services: ['Crisis Intervention', 'Resource Referrals', 'Peer Support', 'Family Counseling']
    },
    {
      id: 5,
      name: 'Trauma Recovery Group',
      category: 'trauma',
      type: 'Hybrid',
      budget: 'low',
      rating: 4.6,
      address: '789 Pine St, Your City',
      phone: '(555) 321-0987',
      website: 'www.traumarecoverygroup.org',
      hours: 'Various Group Times Available',
      description: 'Trauma-informed care with both in-person and virtual support groups.',
      services: ['EMDR Therapy', 'Support Groups', 'Art Therapy', 'Mindfulness Training']
    },
    {
      id: 6,
      name: 'Unity Mental Health Center',
      category: 'mental',
      type: 'In-person',
      budget: 'free',
      rating: 4.4,
      address: '321 Elm St, Your City',
      phone: '(555) 654-3210',
      website: 'www.unitymhc.org',
      hours: 'Mon-Fri 9AM-5PM',
      description: 'Federally qualified health center providing free mental health services to uninsured individuals.',
      services: ['Psychiatric Services', 'Counseling', 'Case Management', 'Medication Assistance']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const budgetMatch = selectedBudget === 'all' || resource.budget === selectedBudget;
    return categoryMatch && budgetMatch;
  });

  const getBudgetLabel = (budget: string) => {
    switch (budget) {
      case 'free': return 'Free';
      case 'low': return 'Under $50/month';
      case 'medium': return 'Under $200/month';
      case 'high': return 'Above $200/month';
      default: return 'Contact for pricing';
    }
  };

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case 'free': return 'bg-green-100 text-green-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Resources Near You</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover budget-friendly rehabilitation resources in your area. All options are vetted for quality and affordability.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filter Resources</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {budgetFilters.map(budget => (
                <option key={budget.id} value={budget.id}>{budget.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredResources.length} resources
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
          {selectedBudget !== 'all' && ` with ${budgetFilters.find(b => b.id === selectedBudget)?.label} pricing`}
        </p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{resource.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{resource.type}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBudgetColor(resource.budget)}`}>
                {getBudgetLabel(resource.budget)}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{resource.description}</p>

            {/* Services */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
              <div className="flex flex-wrap gap-2">
                {resource.services.map((service, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              {resource.address && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{resource.address}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{resource.phone}</span>
              </div>
              {resource.website && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="h-4 w-4" />
                  <a href={`https://${resource.website}`} className="text-blue-600 hover:underline">
                    {resource.website}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{resource.hours}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Contact Now
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters or contact us for personalized help.</p>
        </div>
      )}
    </div>
  );
}