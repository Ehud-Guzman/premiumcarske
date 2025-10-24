import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-kenya-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🚗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Premium Cars Kenya</h3>
                <p className="text-gray-400">Your trusted car dealer in Kenya</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Find the best quality used and new cars in Kenya. We offer competitive prices, 
              verified vehicles, and excellent customer service across Nairobi, Mombasa, and Kisumu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/cars" className="block text-gray-400 hover:text-white transition-colors">Browse Cars</Link>
              <Link to="/sell" className="block text-gray-400 hover:text-white transition-colors">Sell Your Car</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-kenya-400" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+254700123456" className="hover:text-kenya-400 transition-colors">+254 746 527 253</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-kenya-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:nyamuehud@gmail.com" className="hover:text-kenya-400 transition-colors">nyamuehud@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-kenya-400" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Premium Cars Kenya. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Credits Section */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm">
            <span>Created by</span>
            <a 
              href="https://glimmerink.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-kenya-400 hover:text-kenya-300 transition-colors font-semibold"
            >
              GlimmerInk Creations
            </a>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:0746527253" 
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Phone className="w-3 h-3" />
                <span>0746527253</span>
              </a>
              <a 
                href="mailto:nyamuehud@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Mail className="w-3 h-3" />
                <span>nyamuehud@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer