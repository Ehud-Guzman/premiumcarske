import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-nairobi">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default Layout