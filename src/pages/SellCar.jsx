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

  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedImages, setUploadedImages] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }))
    setUploadedImages(prev => [...prev, ...newImages])
  }

  const removeImage = (index) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Car listing submitted:', { ...formData, images: uploadedImages })
    alert('Thank you for your car listing! We will contact you shortly.')
    // Reset form
    setFormData({
      brand: '', model: '', year: '', price: '', mileage: '', 
      transmission: '', fuelType: '', color: '', bodyType: '',
      name: '', email: '', phone: '', location: '',
      description: '', features: [], images: []
    })
    setUploadedImages([])
    setCurrentStep(1)
  }

  // Progress steps
  const steps = [
    { number: 1, title: 'Vehicle Details' },
    { number: 2, title: 'Contact Info' },
    { number: 3, title: 'Photos & Description' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Sell Your Car Fast & Easy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            List your car with Kenya's fastest-growing automotive marketplace. Reach thousands of serious buyers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
              🚀 Sell in 24 Hours
            </div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
              👥 50,000+ Buyers
            </div>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
              💰 Best Price Guaranteed
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">List Your Vehicle</h2>
            
            <div className="flex items-center space-x-4 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300 text-gray-500'
                  } font-semibold`}>
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  <span className={`ml-2 hidden sm:block ${
                    currentStep >= step.number ? 'text-green-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                    } hidden md:block`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="section-padding bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10">
              
              {/* Step 1: Vehicle Details */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Vehicle Information</h3>
                    <p className="text-gray-600">Tell us about your car</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Brand *', name: 'brand', type: 'select', options: ['Toyota', 'Subaru', 'Nissan', 'Mercedes-Benz', 'BMW', 'Honda', 'Mitsubishi', 'Isuzu', 'Mazda', 'Volkswagen'] },
                      { label: 'Model *', name: 'model', type: 'text', placeholder: 'Premio, Forester, X-Trail' },
                      { label: 'Year *', name: 'year', type: 'number', placeholder: '2020' },
                      { label: 'Price (KES) *', name: 'price', type: 'number', placeholder: '1,850,000' },
                      { label: 'Mileage (km) *', name: 'mileage', type: 'number', placeholder: '45,000' },
                      { label: 'Transmission *', name: 'transmission', type: 'select', options: ['Automatic', 'Manual'] },
                      { label: 'Fuel Type *', name: 'fuelType', type: 'select', options: ['Petrol', 'Diesel', 'Hybrid', 'Electric'] },
                      { label: 'Body Type *', name: 'bodyType', type: 'select', options: ['Sedan', 'SUV', 'Pickup', 'Hatchback', 'Station Wagon', 'Luxury'] },
                      { label: 'Color *', name: 'color', type: 'text', placeholder: 'White, Black, Silver' },
                    ].map((field, index) => (
                      <div key={field.name} className={`${field.type === 'select' ? '' : ''}`}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            required={field.label.includes('*')}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select {field.label.replace(' *', '')}</option>
                            {field.options.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.label.includes('*')}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Continue to Contact Info →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Contact Information</h3>
                    <p className="text-gray-600">How can buyers reach you?</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your.email@example.com' },
                      { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+254 700 123 456' },
                      { label: 'Location *', name: 'location', type: 'select', options: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Machakos'] },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            required
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select Location</option>
                            {field.options.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Continue to Photos & Description →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Photos & Description</h3>
                    <p className="text-gray-600">Make your listing stand out</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Upload Photos *
                      </label>
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-all duration-200 cursor-pointer"
                        onClick={() => document.getElementById('car-photos').click()}
                      >
                        <div className="text-4xl mb-4">📸</div>
                        <p className="text-gray-600 mb-2 font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500 mb-4">Recommended: 4-8 clear photos showing exterior, interior, and engine</p>
                        
                        {/* Preview uploaded images */}
                        {uploadedImages.length > 0 && (
                          <div className="mt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {uploadedImages.map((image, index) => (
                                <div key={index} className="relative group">
                                  <img 
                                    src={image.preview} 
                                    alt={`Upload ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      removeImage(index)
                                    }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                            <p className="text-sm text-green-600 mt-4">
                              {uploadedImages.length} photo(s) uploaded
                            </p>
                          </div>
                        )}
                        
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          id="car-photos"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Describe your car's condition, service history, special features, maintenance records, and any other relevant information that would help buyers make a decision..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Air Conditioning, Power Steering, Alloy Wheels, Navigation System, Sunroof, Leather Seats, Backup Camera, etc. (separate with commas)"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      🚀 List My Car
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              By listing your car, you agree to our terms of service. Our team will contact you within 24 hours to verify your listing.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast Selling</h3>
              <p className="text-gray-600">Average selling time of 3-7 days with our premium platform</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">Get competitive offers from verified buyers across Kenya</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Secure Transaction</h3>
              <p className="text-gray-600">Safe and secure payment process with buyer verification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCar