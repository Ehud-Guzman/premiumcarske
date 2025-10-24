import React, { useState, useMemo } from 'react'
import { useTheme } from '../theme/ThemeContext'
import CarCard from '../components/CarCard'
import FilterSidebar from '../components/FilterSidebar'
import { Filter, Grid, List, SortAsc, X, Search, SlidersHorizontal, ChevronDown, Sparkles } from 'lucide-react'
import carsData from '../../config/cars.json'

const Cars = () => {
  const { filters, searchQuery, updateFilters, resetFilters } = useTheme()
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [showSortOptions, setShowSortOptions] = useState(false)

  const allCars = [...carsData.featuredCars, ...carsData.allCars]

  const filteredCars = useMemo(() => {
    let results = allCars.filter(car => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const carText = `${car.brand} ${car.model} ${car.color} ${car.location} ${car.bodyType}`.toLowerCase()
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

      // Fuel type filter
      if (filters.fuelType && car.fuelType !== filters.fuelType) return false

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (car.price < min || car.price > max) return false
      }

      // Year range filter
      if (filters.yearRange) {
        const [minYear, maxYear] = filters.yearRange.split('-').map(Number)
        if (car.year < minYear || car.year > maxYear) return false
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
        results.sort((a, b) => b.year - a.year)
        break
      case 'oldest':
        results.sort((a, b) => a.year - b.year)
        break
      case 'mileage-low':
        results.sort((a, b) => a.mileage - b.mileage)
        break
      case 'featured':
      default:
        results.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
    }

    return results
  }, [allCars, filters, searchQuery, sortBy])

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  const sortOptions = [
    { value: 'featured', label: 'Featured First', icon: <Sparkles className="w-4 h-4" /> },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'mileage-low', label: 'Mileage: Low to High' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-kenya-700 via-kenya-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-kenya-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="text-sm font-semibold">Premium Vehicle Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your <span className="text-kenya-300">Dream Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover {allCars.length}+ quality vehicles with verified history and comprehensive inspections
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              {[
                { number: allCars.length, label: 'Total Cars' },
                { number: carsData.featuredCars.length, label: 'Featured' },
                { number: Math.min(...allCars.map(car => car.price)), label: 'From Price' },
                { number: Math.max(...allCars.map(car => car.year)), label: 'Latest Model' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}{index === 2 ? ' KES' : ''}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filter Sidebar */}
          <div className={`lg:w-80 transition-all duration-300 ${
            showFilters 
              ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:static lg:bg-transparent lg:p-0 lg:overflow-visible' 
              : 'hidden lg:block'
          }`}>
            {showFilters && (
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <SlidersHorizontal className="w-6 h-6" />
                  <span>Filters & Search</span>
                </h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
            
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <FilterSidebar 
                onClose={() => setShowFilters(false)}
                carsData={carsData}
              />
            </div>

            {/* Overlay for mobile */}
            {showFilters && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setShowFilters(false)}
              />
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Enhanced Controls Bar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Left Controls */}
                <div className="flex items-center space-x-4">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden bg-kenya-500 hover:bg-kenya-600 text-white flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 bg-white text-kenya-600 rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                        {activeFiltersCount}
                      </span>
                    )}
                  </button>

                  {/* Results Count */}
                  <div className="hidden sm:block">
                    <p className="text-lg font-semibold text-kenya-700">
                      <span className="text-2xl font-bold">{filteredCars.length}</span> {filteredCars.length === 1 ? 'Vehicle' : 'Vehicles'} Found
                    </p>
                  </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center justify-between lg:justify-end space-x-4">
                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-white text-kenya-600 shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      title="Grid View"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-white text-kenya-600 shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sort By Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSortOptions(!showSortOptions)}
                      className="flex items-center space-x-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium hover:border-kenya-500 transition-colors duration-200"
                    >
                      <SortAsc className="w-4 h-4 text-gray-400" />
                      <span>
                        {sortOptions.find(opt => opt.value === sortBy)?.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSortOptions ? 'rotate-180' : ''}`} />
                    </button>

                    {showSortOptions && (
                      <>
                        <div 
                          className="fixed inset-0 z-10"
                          onClick={() => setShowSortOptions(false)}
                        />
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 z-20 py-2">
                          {sortOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                setSortBy(option.value)
                                setShowSortOptions(false)
                              }}
                              className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-all duration-200 ${
                                sortBy === option.value
                                  ? 'bg-kenya-50 text-kenya-700 font-semibold'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              {option.icon && <span className="text-kenya-500">{option.icon}</span>}
                              <span>{option.label}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Reset Filters */}
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={resetFilters}
                      className="text-kenya-600 hover:text-kenya-700 font-semibold text-sm bg-kenya-50 hover:bg-kenya-100 px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-sm font-semibold text-gray-700">Active Filters:</span>
                    <span className="text-sm text-gray-500">({activeFiltersCount})</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(filters).map(([key, value]) => 
                      value && (
                        <span 
                          key={key}
                          className="bg-gradient-to-r from-kenya-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg"
                        >
                          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {value}</span>
                          <button
                            onClick={() => updateFilters({ [key]: '' })}
                            className="ml-1 text-white hover:text-gray-200 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Cars Grid/List */}
            {filteredCars.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                  : 'space-y-6'
              }>
                {filteredCars.map((car, index) => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    viewMode={viewMode}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="text-gray-300 text-8xl mb-6">🚗</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">No vehicles found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  We couldn't find any vehicles matching your search criteria. Try adjusting your filters or search terms to see more options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetFilters}
                    className="bg-kenya-500 hover:bg-kenya-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Reset All Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(true)}
                    className="bg-white border border-gray-300 hover:border-kenya-500 text-gray-700 hover:text-kenya-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Adjust Filters
                  </button>
                </div>
              </div>
            )}

            {/* Enhanced Load More */}
            {filteredCars.length > 0 && (
              <div className="mt-16 text-center">
                <button className="bg-gradient-to-r from-kenya-500 to-blue-500 hover:from-kenya-600 hover:to-blue-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Load More Vehicles
                </button>
                <p className="text-gray-500 mt-4 text-sm">
                  Showing {filteredCars.length} of {allCars.length} vehicles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Action Footer */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-kenya-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-kenya-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can't Find Your Car?</h4>
              <p className="text-gray-600">Contact us for personalized vehicle search assistance</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Need Help Filtering?</h4>
              <p className="text-gray-600">Our experts can help you find the perfect match</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Selection</h4>
              <p className="text-gray-600">All vehicles undergo 200-point inspection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars