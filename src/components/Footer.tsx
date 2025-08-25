import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                RehabAI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Making rehabilitation accessible and affordable for everyone through technology and community support.
            </p>
            <div className="text-sm text-gray-500">
              <p className="font-semibold text-red-400 mb-2">Crisis Support Available 24/7</p>
              <p>Call 988 or text HOME to 741741</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Treatment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Groups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Educational Content</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Progress Tracking</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crisis Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-REHAB-AI</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@rehabai.org</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Available nationwide<br />Virtual and in-person support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RehabAI. All rights reserved. | Not a substitute for professional medical advice.
            </div>
            <div className="text-sm">
              <span className="text-red-400 font-semibold">Emergency? Call 911</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-blue-400">Crisis Line: 988</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}