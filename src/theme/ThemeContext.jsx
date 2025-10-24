import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    bodyType: '',
    location: '',
    year: '',
    transmission: ''
  })

  const [searchQuery, setSearchQuery] = useState('')

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const resetFilters = () => {
    setFilters({
      brand: '',
      priceRange: '',
      bodyType: '',
      location: '',
      year: '',
      transmission: ''
    })
    setSearchQuery('')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0
    }).format(price)
  }

  const value = {
    filters,
    searchQuery,
    updateFilters,
    setSearchQuery,
    resetFilters,
    formatPrice
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}