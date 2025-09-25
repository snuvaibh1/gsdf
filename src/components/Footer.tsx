import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black/90 backdrop-blur-sm border-t border-yellow-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <span className="text-black font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                FitGold
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              <span className="text-gray-100 font-medium">
                Transform your life with our premium fitness programs. Join thousands of success stories 
                and start your journey to a healthier, stronger you.
              </span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-100 hover:text-yellow-400 transition-colors font-medium">Programs</a></li>
              <li><a href="#courses" className="text-gray-100 hover:text-yellow-400 transition-colors font-medium">Courses</a></li>
              <li><a href="#" className="text-gray-100 hover:text-yellow-400 transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-100 hover:text-yellow-400 transition-colors font-medium">Success Stories</a></li>
              <li><a href="#" className="text-gray-100 hover:text-yellow-400 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-100 font-medium">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                support@fitgold.com
              </li>
              <li className="flex items-center text-gray-100 font-medium">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                +91 98765 43210
              </li>
              <li className="flex items-center text-gray-100 font-medium">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 mb-4 md:mb-0 font-medium">
              © 2025 FitGold. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;