import React from 'react'
import { useTheme } from '../theme/ThemeContext'
import { X } from 'lucide-react'

const FilterSidebar = ({ onClose, carsData }) => {
  const { filters, updateFilters, resetFilters } = useTheme()

  const handleFilterChange = (key, value) => {
    updateFilters({ [key]: value })
  }

  const priceRanges = [
    { min: 0, max: 500000, label: 'Under KES 500K' },
    { min: 500000, max: 1000000, label: 'KES 500K - 1M' },
    { min: 1000000, max: 2000000, label: 'KES 1M - 2M' },
    { min: 2000000, max: 4000000, label: 'KES 2M - 4M' },
    { min: 4000000, max: 10000000, label: 'Over KES 4M' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:sticky lg:top-24 h-fit">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button 
          onClick={onClose}
          className="lg:hidden text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Search Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Search by brand, model..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand
          </label>
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">All Brands</option>
            {carsData.brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">Any Price</option>
            {priceRanges.map(range => (
              <option key={range.label} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Body Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type
          </label>
          <select
            value={filters.bodyType}
            onChange={(e) => handleFilterChange('bodyType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Pickup">Pickup</option>
            <option value="Luxury">Luxury</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Station Wagon">Station Wagon</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">All Locations</option>
            {carsData.locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transmission
          </label>
          <select
            value={filters.transmission}
            onChange={(e) => handleFilterChange('transmission', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">Any Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type
          </label>
          <select
            value={filters.fuelType}
            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kenya-500"
          >
            <option value="">Any Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={resetFilters}
            className="flex-1 btn-secondary py-2 text-sm font-semibold"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="lg:hidden flex-1 btn-primary py-2 text-sm font-semibold"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar