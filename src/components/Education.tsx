import React, { useState } from 'react';
import { BookOpen, Play, FileText, Download, Search } from 'lucide-react';

export function Education() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'substance', label: 'Substance Abuse' },
    { id: 'mental', label: 'Mental Health' },
    { id: 'physical', label: 'Physical Rehab' },
    { id: 'trauma', label: 'Trauma Recovery' },
    { id: 'general', label: 'General Wellness' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Addiction: A Comprehensive Guide',
      category: 'substance',
      type: 'Article',
      duration: '15 min read',
      description: 'Learn about the science behind addiction, common triggers, and evidence-based treatment approaches.',
      tags: ['addiction', 'recovery', 'science'],
      content: 'Detailed article content about addiction...'
    },
    {
      id: 2,
      title: 'Mindfulness Meditation for Recovery',
      category: 'mental',
      type: 'Video',
      duration: '12 minutes',
      description: 'Guided meditation session designed specifically for people in recovery.',
      tags: ['meditation', 'mindfulness', 'anxiety'],
      videoUrl: 'https://example.com/video'
    },
    {
      id: 3,
      title: 'Physical Therapy Exercises at Home',
      category: 'physical',
      type: 'PDF Guide',
      duration: 'Download',
      description: 'Step-by-step exercises you can do at home to support physical rehabilitation.',
      tags: ['exercises', 'physical therapy', 'home care'],
      downloadUrl: 'https://example.com/exercises.pdf'
    },
    {
      id: 4,
      title: 'Coping with Trauma: Healing Strategies',
      category: 'trauma',
      type: 'Article',
      duration: '20 min read',
      description: 'Evidence-based strategies for coping with trauma and building resilience.',
      tags: ['trauma', 'coping', 'healing'],
      content: 'Detailed article content about trauma recovery...'
    },
    {
      id: 5,
      title: 'Building Healthy Relationships in Recovery',
      category: 'general',
      type: 'Video Series',
      duration: '5 episodes',
      description: 'Learn how to build and maintain healthy relationships during your recovery journey.',
      tags: ['relationships', 'communication', 'social skills'],
      videoUrl: 'https://example.com/relationships'
    },
    {
      id: 6,
      title: 'Nutrition for Mental Health',
      category: 'mental',
      type: 'PDF Guide',
      duration: 'Download',
      description: 'How proper nutrition can support mental health and recovery.',
      tags: ['nutrition', 'mental health', 'wellness'],
      downloadUrl: 'https://example.com/nutrition.pdf'
    },
    {
      id: 7,
      title: 'The Science of Habit Formation',
      category: 'general',
      type: 'Article',
      duration: '18 min read',
      description: 'Understanding how habits form and how to build positive ones while breaking negative patterns.',
      tags: ['habits', 'behavior', 'psychology'],
      content: 'Detailed article content about habits...'
    },
    {
      id: 8,
      title: 'Managing Chronic Pain Naturally',
      category: 'physical',
      type: 'Video',
      duration: '25 minutes',
      description: 'Natural pain management techniques and lifestyle modifications.',
      tags: ['pain management', 'natural remedies', 'lifestyle'],
      videoUrl: 'https://example.com/pain-management'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video':
      case 'Video Series':
        return <Play className="h-5 w-5 text-red-500" />;
      case 'PDF Guide':
        return <Download className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Video':
      case 'Video Series':
        return 'bg-red-100 text-red-700';
      case 'PDF Guide':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access free educational content to support your recovery journey. Learn from experts and evidence-based resources.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
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
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredResources.length} resources
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getTypeIcon(resource.type)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{resource.duration}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {resource.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {resource.type === 'PDF Guide' ? (
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                ) : resource.type.includes('Video') ? (
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <Play className="h-4 w-4" />
                    Watch
                  </button>
                ) : (
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Read
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search terms or category filter.</p>
        </div>
      )}

      {/* Featured Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our educational resources are just the beginning. Connect with our support team for personalized recommendations based on your specific needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Personalized Help
          </button>
        </div>
      </div>
    </div>
  );
}