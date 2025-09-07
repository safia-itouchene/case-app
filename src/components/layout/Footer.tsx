import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gray-900 font-accent">
              Miss Luna
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Transform your everyday tech essentials into fashionable lifestyle statements. 
              Premium accessories for modern women.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-hotpink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-hotpink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-hotpink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/collections/phone-cases" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Phone Cases</Link></li>
              <li><Link to="/collections/tech-accessories" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Tech Accessories</Link></li>
              <li><Link to="/collections/drinkware" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Drinkware</Link></li>
              <li><Link to="/collections/lifestyle" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Lifestyle</Link></li>
              <li><Link to="/collections/new-arrivals" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/best-sellers" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Size Guide</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">hello@luxetech.com</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">1-800-LUXE-TECH</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:ring-2 focus:ring-accent-hotpink focus:border-accent-hotpink"
                />
                <button className="px-4 py-2 bg-accent-hotpink text-white text-sm font-medium rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-pink-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-gray-600">
              © 2025 Miss Luna. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
