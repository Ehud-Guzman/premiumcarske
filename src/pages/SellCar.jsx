import React, { useState } from 'react'

const SellCar = () => {
  const [formData, setFormData] = useState({
    // Vehicle Details
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    transmission: '',
    fuelType: '',
    color: '',
    bodyType: '',
    
    // Contact Details
    name: '',
    email: '',
    phone: '',
    location: '',
    
    // Additional Info
    description: '',
    features: [],
    images: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Car listing submitted:', formData)
    alert('Thank you for your car listing! We will contact you shortly.')
    // Reset form
    setFormData({
      brand: '', model: '', year: '', price: '', mileage: '', 
      transmission: '', fuelType: '', color: '', bodyType: '',
      name: '', email: '', phone: '', location: '',
      description: '', features: [], images: []
    })
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Car</h1>
          <p className="text-xl text-gray-600">
            List your car with us and reach thousands of potential buyers across Kenya
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Vehicle Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vehicle Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand *
                  </label>
                  <select
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                  >
                    <option value="">Select Brand</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Subaru">Subaru</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="BMW">BMW</option>
                    <option value="Honda">Honda</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Isuzu">Isuzu</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Volkswagen">Volkswagen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="e.g., Premio, Forester, X-Trail"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    name="year"
                    required
                    min="1990"
                    max="2024"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="e.g., 2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (KES) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="e.g., 1850000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mileage (km) *
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    required
                    value={formData.mileage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="e.g., 45000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transmission *
                  </label>
                  <select
                    name="transmission"
                    required
                    value={formData.transmission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                  >
                    <option value="">Select Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Type *
                  </label>
                  <select
                    name="fuelType"
                    required
                    value={formData.fuelType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Type *
                  </label>
                  <select
                    name="bodyType"
                    required
                    value={formData.bodyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                  >
                    <option value="">Select Body Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Station Wagon">Station Wagon</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color *
                  </label>
                  <input
                    type="text"
                    name="color"
                    required
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="e.g., White, Black, Silver"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="+254 700 123 456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <select
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                  >
                    <option value="">Select Location</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Eldoret">Eldoret</option>
                    <option value="Thika">Thika</option>
                    <option value="Machakos">Machakos</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="Describe your car's condition, service history, special features, and any other relevant information..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Features
                  </label>
                  <textarea
                    name="features"
                    rows={3}
                    value={formData.features.join(', ')}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      features: e.target.value.split(', ').filter(f => f)
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    placeholder="Air Conditioning, Power Steering, Alloy Wheels, Navigation, etc. (separate with commas)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Photos
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-2">Drag and drop car photos here, or click to browse</p>
                    <p className="text-sm text-gray-500">Recommended: 4-8 clear photos showing exterior, interior, and engine</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="car-photos"
                    />
                    <label
                      htmlFor="car-photos"
                      className="btn-secondary inline-block mt-4 cursor-pointer"
                    >
                      Choose Photos
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-12 py-4 text-lg font-semibold"
              >
                List My Car
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                By listing your car, you agree to our terms of service. Our team will contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SellCar