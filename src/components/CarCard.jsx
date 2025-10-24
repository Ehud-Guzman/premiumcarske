import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'
import { Fuel, Gauge, Calendar, MapPin, Shield, Star } from 'lucide-react'

const CarCard = ({ car, viewMode = 'grid' }) => {
  const { formatPrice } = useTheme()

  const getBodyTypeBadge = (bodyType) => {
    const badges = {
      'Sedan': 'badge-sedan',
      'SUV': 'badge-suv',
      'Pickup': 'badge-pickup',
      'Luxury': 'badge-luxury'
    }
    return badges[bodyType] || 'badge-sedan'
  }

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in the ${car.brand} ${car.model} for ${formatPrice(car.price)}. Can you provide more details?`;
    const phone = car.whatsapp || car.contact;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/3 lg:w-1/4 relative">
            <div className="aspect-w-16 aspect-h-9 h-48 md:h-full bg-gray-100">
              <img
                src={car.images[0] || '/cars/placeholder.jpg'}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/cars/placeholder.jpg';
                }}
              />
            </div>
            {car.isFeatured && (
              <div className="absolute top-3 left-3">
                <span className="bg-kenya-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {car.year} • {car.transmission} • {car.fuelType}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-4 ${getBodyTypeBadge(car.bodyType)}`}>
                    {car.bodyType}
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-kenya-500 flex-shrink-0" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-4 h-4 text-kenya-500 flex-shrink-0" />
                    <span>{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-kenya-500 flex-shrink-0" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-kenya-500 flex-shrink-0" />
                    <span>{car.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 4 && (
                    <span className="bg-kenya-100 text-kenya-700 px-3 py-1 rounded text-xs font-medium">
                      +{car.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="lg:text-right lg:pl-6">
                <div className="mb-4">
                  <div className="price text-2xl font-bold text-kenya-700">{formatPrice(car.price)}</div>
                  {car.originalPrice && car.originalPrice > car.price && (
                    <div className="old-price text-lg text-gray-500 line-through">
                      {formatPrice(car.originalPrice)}
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  <Link
                    to={`/cars/${car.id}`}
                    className="btn-secondary text-center py-2 px-6 text-sm font-semibold"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="whatsapp-btn py-2 px-6 rounded-lg text-sm font-semibold"
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid View (Default)
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-w-16 aspect-h-10 bg-gray-100">
        <img
          src={car.images[0] || '/cars/placeholder.jpg'}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = '/cars/placeholder.jpg';
          }}
        />
        {car.isFeatured && (
          <div className="absolute top-3 left-3">
            <span className="bg-kenya-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          </div>
        )}
        {car.isVerified && (
          <div className="absolute top-3 right-3">
            <Shield className="w-5 h-5 text-green-500" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{car.year} • {car.transmission}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ml-2 flex-shrink-0 ${getBodyTypeBadge(car.bodyType)}`}>
            {car.bodyType}
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="price text-xl font-bold text-kenya-700">{formatPrice(car.price)}</div>
          {car.originalPrice && car.originalPrice > car.price && (
            <div className="old-price text-sm text-gray-500 line-through">
              {formatPrice(car.originalPrice)}
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <Gauge className="w-4 h-4 text-kenya-500 flex-shrink-0" />
            <span className="truncate">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-kenya-500 flex-shrink-0" />
            <span className="truncate">{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-kenya-500 flex-shrink-0" />
            <span className="truncate">{car.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-kenya-500 flex-shrink-0" />
            <span className="truncate">{car.year}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4 flex-1">
          {car.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
            >
              {feature}
            </span>
          ))}
          {car.features.length > 3 && (
            <span className="bg-kenya-100 text-kenya-700 px-2 py-1 rounded text-xs font-medium">
              +{car.features.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-3 border-t border-gray-200">
          <Link
            to={`/cars/${car.id}`}
            className="flex-1 btn-secondary text-center py-2 text-sm font-semibold"
          >
            View Details
          </Link>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsapp-btn px-3 py-2 rounded-lg text-sm font-semibold"
            title="Chat on WhatsApp"
          >
            💬
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarCard