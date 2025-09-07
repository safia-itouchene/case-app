import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about our products, 
            need assistance, or just want to share feedback — our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-gray-50 p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <ul className="space-y-8">
              <li className="flex items-start">
                <Mail className="w-6 h-6 text-accent-hotpink mr-4 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">support@yourstore.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 text-accent-hotpink mr-4 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-accent-hotpink mr-4 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                    123 Luxe Street, New York, NY 10001
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-hotpink focus:ring-2 focus:ring-accent-hotpink outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-hotpink focus:ring-2 focus:ring-accent-hotpink outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-hotpink focus:ring-2 focus:ring-accent-hotpink outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-hotpink text-white py-3 px-6 rounded-xl font-medium shadow hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
