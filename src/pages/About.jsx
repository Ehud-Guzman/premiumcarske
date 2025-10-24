import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Users, Target, Award, Clock, MapPin, Phone, Mail } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'David Maina',
      role: 'Founder & CEO',
      experience: '15+ years in automotive industry',
      specialty: 'Vehicle sourcing and quality assurance'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Head of Sales',
      experience: '12+ years in customer relations',
      specialty: 'Client consultation and financing'
    },
    {
      name: 'James Ochieng',
      role: 'Lead Inspector',
      experience: 'Certified automotive engineer',
      specialty: 'Vehicle inspections and certifications'
    },
    {
      name: 'Grace Akinyi',
      role: 'Customer Success',
      experience: '8+ years in client services',
      specialty: 'After-sales support and maintenance'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform car buying in Kenya' },
    { year: '2021', event: '100+ Cars Sold', description: 'Reached our first major milestone with happy customers' },
    { year: '2022', event: 'Nationwide Expansion', description: 'Extended services to major cities across Kenya' },
    { year: '2023', event: '1000+ Happy Customers', description: 'Built trust with thousands of satisfied buyers' },
    { year: '2024', event: 'Premium Platform Launch', description: 'Launched our advanced digital platform' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kenya-700 to-kenya-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Premium Cars Kenya
            </h1>
            <p className="text-xl md:text-2xl text-kenya-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in finding quality vehicles across Kenya. We're revolutionizing 
              car buying with transparency, trust, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-kenya-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To make car buying and selling in Kenya simple, transparent, and trustworthy. 
                      We believe every Kenyan deserves access to reliable vehicles at fair prices 
                      with complete peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-kenya-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become Kenya's most trusted automotive marketplace, setting new standards 
                      for quality, service, and customer satisfaction in the automotive industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-kenya-50 to-kenya-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <p className="text-gray-600 mb-6">
                  We're not just a car marketplace – we're your automotive partner in Kenya.
                </p>
                <Link to="/cars" className="btn-primary inline-flex items-center">
                  Browse Our Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Premium Cars Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-kenya-600" />,
                title: 'Trust & Transparency',
                description: 'Every vehicle is thoroughly inspected and comes with complete history reports. No hidden issues, no surprises.'
              },
              {
                icon: <Users className="w-12 h-12 text-kenya-600" />,
                title: 'Customer First',
                description: 'Your satisfaction is our priority. We provide personalized service and support throughout your car buying journey.'
              },
              {
                icon: <Award className="w-12 h-12 text-kenya-600" />,
                title: 'Quality Excellence',
                description: 'We maintain the highest standards in vehicle selection, service delivery, and customer experience.'
              },
              {
                icon: <Clock className="w-12 h-12 text-kenya-600" />,
                title: 'Reliability',
                description: 'Count on us for consistent, dependable service. We\'re here for you before, during, and after your purchase.'
              },
              {
                icon: <MapPin className="w-12 h-12 text-kenya-600" />,
                title: 'Nationwide Service',
                description: 'Serving customers across Kenya with delivery options and local support in major cities.'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'We build long-term relationships with our customers, helping you with all your automotive needs.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to finding you the perfect vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-kenya-100 to-kenya-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl text-kenya-600">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-kenya-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our mission to transform car buying in Kenya
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-kenya-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="text-kenya-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kenya-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-kenya-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,000+', label: 'Happy Customers' },
              { number: '500+', label: 'Quality Vehicles' },
              { number: '7+', label: 'Cities Covered' },
              { number: '98%', label: 'Customer Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="bg-kenya-600 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-kenya-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Premium Cars Kenya for their automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/cars" className="btn-primary px-8 py-4 text-lg font-semibold">
              Browse Inventory
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-lg font-semibold">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-kenya-600" />
              <a href="tel:+254746527253" className="hover:text-kenya-600">+254 746 527 253</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-kenya-600" />
              <a href="mailto:nyamuehud@gmail.com" className="hover:text-kenya-600">nyamuehud@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About