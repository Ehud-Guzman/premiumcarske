import React from 'react'
import { Car, Users, TrendingUp, DollarSign } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      icon: Car,
      value: '156',
      label: 'Total Cars',
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: Users,
      value: '89',
      label: 'Active Dealers',
      change: '+5%',
      changeType: 'positive'
    },
    {
      icon: TrendingUp,
      value: '42',
      label: 'Cars Sold This Month',
      change: '+23%',
      changeType: 'positive'
    },
    {
      icon: DollarSign,
      value: 'KES 78.4M',
      label: 'Total Revenue',
      change: '+18%',
      changeType: 'positive'
    }
  ]

  const recentActivities = [
    { id: 1, action: 'Car Sold', description: 'Toyota Premio 2020', time: '2 hours ago', type: 'sale' },
    { id: 2, action: 'New Car Listed', description: 'Subaru Forester 2019', time: '5 hours ago', type: 'listing' },
    { id: 3, action: 'Dealer Registered', description: 'Coast Motors', time: '1 day ago', type: 'user' },
    { id: 4, action: 'Car Verified', description: 'Nissan X-Trail 2018', time: '2 days ago', type: 'verification' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-600">Last updated: Today, 10:30 AM</div>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="stat-card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className={`p-3 rounded-lg ${stat.changeType === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className={`text-xs mt-2 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last month
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activities */}
      <div className="admin-card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'sale' ? 'bg-green-500' :
                activity.type === 'listing' ? 'bg-blue-500' :
                activity.type === 'user' ? 'bg-purple-500' : 'bg-yellow-500'
              }`}></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{activity.action}</div>
                <div className="text-sm text-gray-600">{activity.description}</div>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="admin-card text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Add New Car</h3>
          <p className="text-sm text-gray-600 mb-4">List a new vehicle for sale</p>
          <button className="btn-primary w-full">Add Car</button>
        </div>
        
        <div className="admin-card text-center">
          <h3 className="font-semibold text-gray-900 mb-2">View Reports</h3>
          <p className="text-sm text-gray-600 mb-4">Generate sales and performance reports</p>
          <button className="btn-secondary w-full">View Reports</button>
        </div>
        
        <div className="admin-card text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Manage Users</h3>
          <p className="text-sm text-gray-600 mb-4">View and manage dealer accounts</p>
          <button className="btn-secondary w-full">Manage Users</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard