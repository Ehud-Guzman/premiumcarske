import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Users, Target, Award, Clock, MapPin, Phone, Mail, Star, TrendingUp, Heart, Car } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'David Maina',
      role: 'Founder & CEO',
      experience: '15+ years in automotive industry',
      specialty: 'Vehicle sourcing and quality assurance',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Head of Sales',
      experience: '12+ years in customer relations',
      specialty: 'Client consultation and financing',
      avatar: '👩‍💼'
    },
    {
      name: 'James Ochieng',
      role: 'Lead Inspector',
      experience: 'Certified automotive engineer',
      specialty: 'Vehicle inspections and certifications',
      avatar: '👨‍🔧'
    },
    {
      name: 'Grace Akinyi',
      role: 'Customer Success',
      experience: '8+ years in client services',
      specialty: 'After-sales support and maintenance',
      avatar: '👩‍🔧'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform car buying in Kenya' },
    { year: '2021', event: '100+ Cars Sold', description: 'Reached our first major milestone with happy customers' },
    { year: '2022', event: 'Nationwide Expansion', description: 'Extended services to major cities across Kenya' },
    { year: '2023', event: '1000+ Happy Customers', description: 'Built trust with thousands of satisfied buyers' },
    { year: '2024', event: 'Premium Platform Launch', description: 'Launched our advanced digital platform' }
  ]

  const stats = [
    { number: '1,000+', label: 'Happy Customers', icon: <Heart className="w-8 h-8" /> },
    { number: '500+', label: 'Quality Vehicles', icon: <Car className="w-8 h-8" /> },
    { number: '7+', label: 'Cities Covered', icon: <MapPin className="w-8 h-8" /> },
    { number: '98%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-kenya-800 to-blue-700 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-kenya-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="text-sm font-semibold">Kenya's Most Trusted Car Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Driving <span className="text-kenya-300">Excellence</span> in Automotive
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Your trusted partner in finding quality vehicles across Kenya. We're revolutionizing 
              car buying with transparency, trust, and exceptional service since 2020.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/cars" 
                className="bg-kenya-500 hover:bg-kenya-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Car className="w-5 h-5" />
                <span>Browse Inventory</span>
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Mission & <span className="text-kenya-600">Vision</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We're on a mission to transform how Kenyans buy and sell cars, 
                  making the process seamless, transparent, and trustworthy.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-kenya-50 to-blue-50 rounded-2xl border border-kenya-100">
                  <div className="flex-shrink-0 w-14 h-14 bg-kenya-500 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To make car buying and selling in Kenya simple, transparent, and trustworthy. 
                      We believe every Kenyan deserves access to reliable vehicles at fair prices 
                      with complete peace of mind through comprehensive inspections and verified history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50 to-kenya-50 rounded-2xl border border-blue-100">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become Kenya's most trusted automotive marketplace, setting new standards 
                      for quality, service, and customer satisfaction while expanding our reach 
                      to serve every corner of the nation with innovative digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-kenya-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M0 0h40v40H0V0zm20 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>

                <div className="text-center relative z-10">
                  <div className="text-6xl mb-6">🚗✨</div>
                  <h3 className="text-3xl font-bold mb-4">Why Choose Premium Cars Kenya?</h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    We're not just a car marketplace – we're your automotive partner in Kenya, 
                    committed to your satisfaction at every step of the journey.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {['✓ 200-Point Vehicle Inspection', '✓ Verified Ownership History', '✓ Nationwide Delivery', '✓ 7-Day Money Back Guarantee'].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-left">
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/about" className="bg-white text-kenya-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2">
                    <span>Learn Our Story</span>
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-6 shadow-sm border border-gray-200">
              <Star className="w-5 h-5 text-kenya-600" fill="currentColor" />
              <span className="text-sm font-semibold text-gray-700">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-kenya-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do at Premium Cars Kenya and define 
              our commitment to exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Trust & Transparency',
                description: 'Every vehicle undergoes thorough inspection with complete history reports. No hidden issues, no surprises for our customers.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Customer First',
                description: 'Your satisfaction guides our every decision. We provide personalized service and support throughout your automotive journey.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Quality Excellence',
                description: 'We maintain the highest standards in vehicle selection, service delivery, and overall customer experience.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Reliability',
                description: 'Count on us for consistent, dependable service. We\'re here for you before, during, and long after your purchase.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Nationwide Service',
                description: 'Serving customers across Kenya with flexible delivery options and local support in all major cities and towns.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Community Partnership',
                description: 'We build long-term relationships with our customers, helping you with all your automotive needs for years to come.',
                color: 'from-pink-500 to-pink-600'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-kenya-600">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced professionals dedicated to finding you the perfect vehicle and 
              ensuring your complete satisfaction throughout the process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-kenya-100 to-blue-100 rounded-full flex items-center justify-center group-hover:from-kenya-200 group-hover:to-blue-200 transition-all duration-300 shadow-lg">
                    <span className="text-4xl">{member.avatar}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-kenya-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-kenya-600 font-medium mb-3 bg-kenya-50 rounded-full py-1 px-4 inline-block">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2 font-medium">{member.experience}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.specialty}</p>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 bg-gradient-to-r from-kenya-500 to-blue-600 rounded-3xl p-8 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-kenya-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in our mission to transform car buying and selling in Kenya
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-kenya-300 to-blue-300 h-full hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-0`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="text-kenya-600 font-bold text-2xl mb-3">{milestone.year}</div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot - Hidden on mobile, shown on desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-kenya-500 rounded-full border-4 border-white shadow-xl hidden md:block"></div>
                  
                  {/* Year Marker for Mobile */}
                  <div className="md:hidden w-full text-center">
                    <div className="w-4 h-4 bg-kenya-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                    <div className="text-kenya-600 font-bold text-lg">{milestone.year}</div>
                  </div>
                  
                  {/* Empty space for desktop alignment */}
                  <div className="w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-br from-kenya-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Find Your <span className="text-kenya-300">Dream Car</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Premium Cars Kenya for their automotive needs. 
            Experience the difference of working with Kenya's most reliable car marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/cars" 
              className="bg-white text-kenya-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
            >
              <Car className="w-6 h-6" />
              <span>Browse Our Inventory</span>
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kenya-600 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Phone className="w-6 h-6" />
              <span>Get In Touch</span>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-blue-100">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
              <Phone className="w-5 h-5 text-kenya-300" />
              <a href="tel:+254746527253" className="hover:text-white font-medium transition-colors">+254 746 527 253</a>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
              <Mail className="w-5 h-5 text-kenya-300" />
              <a href="mailto:nyamuehud@gmail.com" className="hover:text-white font-medium transition-colors">nyamuehud@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About