import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center section-padding">
      <div className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-block px-8 py-3"
            >
              Go Home
            </Link>
            <br />
            <Link
              to="/cars"
              className="btn-secondary inline-block px-8 py-3"
            >
              Browse Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound