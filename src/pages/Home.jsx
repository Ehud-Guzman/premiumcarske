import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, TrendingUp, Users, Star, CheckCircle } from 'lucide-react'
import CarCard from '../components/CarCard'
import carsData from '../../config/cars.json'

const Home = () => {
  const featuredCars = carsData.featuredCars
  const allCars = [...carsData.featuredCars, ...carsData.allCars]

  return (
    <div className="min-h-screen">
      {/* Hero Section - More Professional */}
      <section className="bg-gradient-to-br from-kenya-700 via-kenya-600 to-kenya-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality Cars in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-kenya-100 max-w-3xl mx-auto leading-relaxed">
              Find your perfect vehicle from our extensive collection of verified used and new cars
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Make (Toyota, Subaru...)"
                  className="px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kenya-500"
                />
                <input
                  type="text"
                  placeholder="Model"
                  className="px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kenya-500"
                />
                <select className="px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kenya-500">
                  <option value="">Price Range</option>
                  <option value="0-500000">Under 500K</option>
                  <option value="500000-1000000">500K - 1M</option>
                  <option value="1000000-2000000">1M - 2M</option>
                  <option value="2000000-5000000">2M - 5M</option>
                  <option value="5000000-10000000">Over 5M</option>
                </select>
                <button className="btn-primary px-8 py-3 rounded-lg font-semibold text-lg">
                  <Search className="w-5 h-5 mr-2 inline" />
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats - More Prominent */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                { icon: <TrendingUp className="w-8 h-8" />, label: 'Cars Available', value: '500+' },
                { icon: <Shield className="w-8 h-8" />, label: 'Verified Vehicles', value: '300+' },
                { icon: <Users className="w-8 h-8" />, label: 'Happy Customers', value: '1,000+' },
                { icon: <Star className="w-8 h-8" />, label: 'Cities Covered', value: '7+' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex justify-center mb-3 text-kenya-200">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-kenya-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars - Professional Grid Layout */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully selected cars offering the best value and quality
            </p>
          </div>

          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cars" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
              View All Vehicles
              <TrendingUp className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - More Professional */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Premium Cars Kenya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best car buying experience in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-kenya-600" />,
                title: 'Verified Vehicles',
                description: 'Every car undergoes thorough inspection and comes with a comprehensive vehicle history report.'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-kenya-600" />,
                title: 'Best Price Guarantee',
                description: 'We offer competitive pricing and ensure you get the best value for your money in the Kenyan market.'
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-kenya-600" />,
                title: 'Quality Assurance',
                description: 'All our vehicles are carefully selected and maintained to the highest standards.'
              },
              {
                icon: '🚗',
                title: 'Wide Selection',
                description: 'From economy cars to luxury vehicles, we have options for every budget and preference.'
              },
              {
                icon: '📍',
                title: 'Nationwide Service',
                description: 'We serve customers across Kenya with delivery options available to major cities.'
              },
              {
                icon: '💬',
                title: 'Expert Support',
                description: 'Our knowledgeable team is available to help you make the right choice for your needs.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Brands Section */}
<section className="section-padding bg-gray-100">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Popular Brands
      </h2>
      <p className="text-xl text-gray-600">
        Browse cars from trusted manufacturers
      </p>
    </div>

    {/* Brand Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {[
        { name: 'Toyota', logo: '/cars/toyota/toyota-logo-png.png' },
        { name: 'Subaru', logo: '/cars/toyota/subaru-logo.jpg' },
        { name: 'Nissan', logo: '/brands/nissan-logo.webp' },
        { name: 'Mercedes', logo: '/brands/Mercedes-Benz-Logo.png' },
        { name: 'BMW', logo: '/cars/toyota/bmw-logo.png' },
        { name: 'Honda', logo: '/brands/Honda-Logo.png' },
      ].map((brand) => (
        <div
          key={brand.name}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-all hover:-translate-y-1 duration-300"
        >
          <div className="flex justify-center mb-3">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="w-20 h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          <h3 className="font-semibold text-gray-900">{brand.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section - More Professional */}
      <section className="section-padding bg-kenya-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-kenya-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars" className="btn-secondary bg-white text-kenya-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Browse Inventory
            </Link>
            <Link to="/sell" className="btn-primary bg-kenya-500 hover:bg-kenya-400 px-8 py-4 text-lg font-semibold">
              Sell Your Car
            </Link>
          </div>
          <div className="mt-8 text-kenya-200">
            <p>📞 Call us: <a href="tel:+254700123456" className="text-white font-semibold">+254 700 123 456</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home