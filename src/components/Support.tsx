import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Heart, Plus, Send } from 'lucide-react';

export function Support() {
  const [activeTab, setActiveTab] = useState('community');
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Sarah M.',
      time: '2 hours ago',
      message: 'Just completed my first week in therapy. Feeling hopeful for the first time in months. Thank you all for the encouragement!',
      replies: 12,
      likes: 24
    },
    {
      id: 2,
      user: 'Mike R.',
      time: '5 hours ago',
      message: 'Having a tough day today. The cravings are strong. Any advice on getting through these moments?',
      replies: 8,
      likes: 15
    },
    {
      id: 3,
      user: 'Amanda K.',
      time: '1 day ago',
      message: 'Six months sober today! I never thought I would make it this far. This community has been incredible.',
      replies: 25,
      likes: 47
    }
  ]);

  const supportGroups = [
    {
      id: 1,
      name: 'Addiction Recovery Circle',
      members: 245,
      nextMeeting: 'Today, 7:00 PM',
      type: 'Virtual',
      description: 'A safe space for individuals recovering from substance abuse to share experiences and support each other.'
    },
    {
      id: 2,
      name: 'Mental Health Warriors',
      members: 189,
      nextMeeting: 'Tomorrow, 6:30 PM',
      type: 'Hybrid',
      description: 'Supporting those dealing with depression, anxiety, and other mental health challenges.'
    },
    {
      id: 3,
      name: 'Trauma Survivors Unite',
      members: 156,
      nextMeeting: 'Thursday, 7:30 PM',
      type: 'In-person',
      description: 'A trauma-informed support group for survivors working on healing and recovery.'
    },
    {
      id: 4,
      name: 'Family & Friends Support',
      members: 98,
      nextMeeting: 'Saturday, 10:00 AM',
      type: 'Virtual',
      description: 'Support for family members and friends of those in recovery.'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Wellness Workshop: Mindful Recovery',
      date: 'March 15, 2024',
      time: '2:00 PM - 4:00 PM',
      type: 'Virtual',
      spots: 15
    },
    {
      id: 2,
      title: 'Recovery Stories: Panel Discussion',
      date: 'March 20, 2024',
      time: '6:00 PM - 8:00 PM',
      type: 'In-person',
      spots: 8
    },
    {
      id: 3,
      title: 'Art Therapy Session',
      date: 'March 22, 2024',
      time: '3:00 PM - 5:00 PM',
      type: 'Hybrid',
      spots: 12
    }
  ];

  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        {
          id: Date.now(),
          user: 'You',
          time: 'Just now',
          message: newMessage,
          replies: 0,
          likes: 0
        },
        ...messages
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Support</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with others on similar journeys. Share experiences, find support, and build meaningful relationships.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'community'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageCircle className="h-5 w-5 inline mr-2" />
              Community Feed
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'groups'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="h-5 w-5 inline mr-2" />
              Support Groups
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'events'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Events
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'community' && (
            <div>
              {/* Post New Message */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <textarea
                  placeholder="Share your thoughts, ask for support, or celebrate a milestone..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-gray-500">
                    Remember: This is a safe space. Be kind and supportive.
                  </p>
                  <button
                    onClick={addMessage}
                    disabled={!newMessage.trim()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Post
                  </button>
                </div>
              </div>

              {/* Messages Feed */}
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {message.user.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{message.user}</span>
                        <span className="text-gray-500 text-sm">{message.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{message.message}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        {message.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        {message.replies} replies
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'groups' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {supportGroups.map((group) => (
                <div key={group.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {group.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{group.members} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Next meeting: {group.nextMeeting}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Join Group
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{event.time}</span>
                      </div>
                      <div className="text-sm text-emerald-600 font-medium">
                        {event.spots} spots available
                      </div>
                    </div>
                    
                    <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                      Register
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Be Respectful</h3>
            <p className="text-gray-600">Treat all members with kindness and respect, regardless of their stage in recovery.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Maintain Privacy</h3>
            <p className="text-gray-600">Keep personal information shared in groups confidential and within the community.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Share Supportively</h3>
            <p className="text-gray-600">Share experiences to help others, but avoid giving specific medical advice.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Stay Safe</h3>
            <p className="text-gray-600">If you're in crisis, contact emergency services or our crisis support immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
}