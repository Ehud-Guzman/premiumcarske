import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Sell Your Car', href: '/sell' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-kenya-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span>🏁 Best Car Deals in Kenya</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+254700123456" className="flex items-center hover:text-kenya-200">
                <Phone className="w-4 h-4 mr-1" />
                <span>+254 746 527 253</span>
              </a>
              <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-kenya-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚗</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Premium Cars Kenya</h1>
              <p className="text-sm text-gray-600">Quality • Trust • Value</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-kenya-600 border-b-2 border-kenya-600'
                    : 'text-gray-700 hover:text-kenya-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/sell"
              className="btn-primary"
            >
              Sell Your Car
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-kenya-50 text-kenya-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/sell"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Sell Your Car
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header