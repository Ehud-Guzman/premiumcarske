import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'
import CarsManagement from './pages/CarsManagement'
import SalesTracking from './pages/SalesTracking'
import UsersManagement from './pages/UsersManagement'
import Settings from './pages/Settings'

function AdminApp() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cars" element={<CarsManagement />} />
        <Route path="/sales" element={<SalesTracking />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminApp