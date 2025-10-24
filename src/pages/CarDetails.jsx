import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'
import { MapPin, Calendar, Gauge, Fuel, Shield, ArrowLeft } from 'lucide-react'
import carsData from '../../config/cars.json'

const CarDetails = () => {
  const { id } = useParams()
  const { formatPrice } = useTheme()
  
  const allCars = [...carsData.featuredCars, ...carsData.allCars]
  const car = allCars.find(c => c.id === id)

  if (!car) {
    return (
      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h1>
          <Link to="/cars" className="btn-primary inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/cars" 
          className="inline-flex items-center text-kenya-600 hover:text-kenya-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cars
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Images */}
            <div>
              <div className="bg-gray-200 rounded-lg h-80 mb-4 flex items-center justify-center">
                <img
                  src={car.images[0] || '/cars/placeholder.jpg'}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {car.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="bg-gray-200 rounded h-20 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${car.brand} ${car.model} ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {car.brand} {car.model}
                  </h1>
                  <p className="text-gray-600 text-lg">{car.year} • {car.bodyType}</p>
                </div>
                {car.isVerified && (
                  <Shield className="w-8 h-8 text-green-500" />
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="price text-4xl">{formatPrice(car.price)}</div>
                {car.originalPrice && car.originalPrice > car.price && (
                  <div className="old-price">{formatPrice(car.originalPrice)}</div>
                )}
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-kenya-500" />
                  <div>
                    <div className="text-sm text-gray-600">Mileage</div>
                    <div className="font-semibold">{car.mileage.toLocaleString()} km</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="w-5 h-5 text-kenya-500" />
                  <div>
                    <div className="text-sm text-gray-600">Fuel Type</div>
                    <div className="font-semibold">{car.fuelType}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-kenya-500" />
                  <div>
                    <div className="text-sm text-gray-600">Year</div>
                    <div className="font-semibold">{car.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-kenya-500" />
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">{car.location}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-kenya-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <button className="w-full whatsapp-btn py-3 rounded-lg font-semibold text-lg">
                  💬 Chat on WhatsApp
                </button>
                <button className="w-full btn-primary py-3 text-lg">
                  📞 Call {car.contact}
                </button>
                <div className="text-center text-gray-600 text-sm">
                  Dealer: {car.dealer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails