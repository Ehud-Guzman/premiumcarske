import React, { useState, useMemo } from 'react'
import { useTheme } from '../theme/ThemeContext'
import CarCard from '../components/CarCard'
import FilterSidebar from '../components/FilterSidebar'
import { Filter, Grid, List, SortAsc, X } from 'lucide-react'
import carsData from '../../config/cars.json'

const Cars = () => {
  const { filters, searchQuery, updateFilters, resetFilters } = useTheme()
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')

  const allCars = [...carsData.featuredCars, ...carsData.allCars]

  const filteredCars = useMemo(() => {
    let results = allCars.filter(car => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const carText = `${car.brand} ${car.model} ${car.color} ${car.location}`.toLowerCase()
        if (!carText.includes(query)) return false
      }

      // Brand filter
      if (filters.brand && car.brand !== filters.brand) return false

      // Body type filter
      if (filters.bodyType && car.bodyType !== filters.bodyType) return false

      // Location filter
      if (filters.location && car.location !== filters.location) return false

      // Transmission filter
      if (filters.transmission && car.transmission !== filters.transmission) return false

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (car.price < min || car.price > max) return false
      }

      return true
    })

    // Sort results
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        results.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      case 'oldest':
        results.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
        break
      case 'featured':
      default:
        results.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
    }

    return results
  }, [allCars, filters, searchQuery, sortBy])

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Car Inventory</h1>
              <p className="text-gray-600 mt-2">
                Browse our extensive collection of quality vehicles in Kenya
              </p>
            </div>
            
            {/* Results Count */}
            <div className="mt-4 lg:mt-0">
              <p className="text-lg font-semibold text-kenya-700">
                {filteredCars.length} {filteredCars.length === 1 ? 'Vehicle' : 'Vehicles'} Found
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
            {showFilters && (
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
            <FilterSidebar 
              onClose={() => setShowFilters(false)}
              carsData={carsData}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Left Controls */}
                <div className="flex items-center space-x-4">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden btn-primary flex items-center px-4 py-2"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 bg-white text-kenya-600 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </button>

                  {/* View Mode Toggle */}
                  <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-white text-kenya-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      title="Grid View"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-white text-kenya-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center space-x-4">
                  {/* Sort By */}
                  <div className="flex items-center space-x-2">
                    <SortAsc className="w-4 h-4 text-gray-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-kenya-500"
                    >
                      <option value="featured">Featured First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                  </div>

                  {/* Reset Filters */}
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={resetFilters}
                      className="text-sm text-kenya-600 hover:text-kenya-700 font-medium"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(filters).map(([key, value]) => 
                      value && (
                        <span 
                          key={key}
                          className="bg-kenya-100 text-kenya-700 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                        >
                          {key}: {value}
                          <button
                            onClick={() => updateFilters({ [key]: '' })}
                            className="ml-2 text-kenya-500 hover:text-kenya-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cars Grid/List */}
            {filteredCars.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <div className="text-gray-400 text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any vehicles matching your criteria. Try adjusting your filters or search terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetFilters}
                    className="btn-primary px-6 py-3"
                  >
                    Reset All Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(true)}
                    className="btn-secondary px-6 py-3"
                  >
                    Adjust Filters
                  </button>
                </div>
              </div>
            )}

            {/* Load More (Pagination Placeholder) */}
            {filteredCars.length > 0 && (
              <div className="mt-12 text-center">
                <button className="btn-secondary px-8 py-3">
                  Load More Vehicles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars