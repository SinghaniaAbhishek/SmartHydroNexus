import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const weeklyData = [
  { day: 'Mon', usage: 180 },
  { day: 'Tue', usage: 220 },
  { day: 'Wed', usage: 190 },
  { day: 'Thu', usage: 250 },
  { day: 'Fri', usage: 210 },
  { day: 'Sat', usage: 280 },
  { day: 'Sun', usage: 240 }
];

const monthlyData = [
  { month: 'Jan', usage: 6800 },
  { month: 'Feb', usage: 7200 },
  { month: 'Mar', usage: 6900 },
  { month: 'Apr', usage: 7500 },
  { month: 'May', usage: 7100 },
  { month: 'Jun', usage: 7800 }
];

const usageDistribution = [
  { name: 'Kitchen', value: 35, color: '#00BFFF' },
  { name: 'Bathroom', value: 40, color: '#32CD32' },
  { name: 'Laundry', value: 15, color: '#FAF3E0' },
  { name: 'Garden', value: 10, color: '#FF6B6B' }
];

const AnalyticsSection: React.FC = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Usage Analytics</h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeframe('weekly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === 'weekly' 
                  ? 'bg-gradient-hero text-white' 
                  : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === 'monthly' 
                  ? 'bg-gradient-hero text-white' 
                  : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <motion.button
              className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" />
              <span className="text-sm">Export</span>
            </motion.button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Usage</span>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-foreground">1,580L</p>
            <p className="text-xs text-green-600">↑ 5% from last week</p>
          </div>
          
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Daily Average</span>
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">226L</p>
            <p className="text-xs text-muted-foreground">Per day</p>
          </div>
          
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Peak Usage</span>
              <BarChart3 className="h-4 w-4 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-foreground">280L</p>
            <p className="text-xs text-muted-foreground">Saturday</p>
          </div>
          
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Efficiency</span>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-foreground">92%</p>
            <p className="text-xs text-green-600">↑ 3% optimized</p>
          </div>
        </div>

        {/* Usage Chart */}
        <div className="bg-gradient-subtle p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {timeframe === 'weekly' ? 'Weekly' : 'Monthly'} Water Usage
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            {timeframe === 'weekly' ? (
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Bar dataKey="usage" fill="url(#gradientBar)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00BFFF" />
                    <stop offset="100%" stopColor="#32CD32" />
                  </linearGradient>
                </defs>
              </BarChart>
            ) : (
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#00BFFF" 
                  strokeWidth={3}
                  dot={{ fill: '#00BFFF', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Usage Distribution */}
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-6">Usage Distribution by Area</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={usageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {usageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-4">
            {usageDistribution.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center justify-between p-3 bg-white rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium text-foreground">{item.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Insights */}
      <motion.div
        className="bg-gradient-subtle rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Smart Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-semibold text-green-600 mb-2">Water Saved</h4>
            <p className="text-sm text-muted-foreground">Your efficient usage has saved 15% water compared to average household consumption.</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-semibold text-blue-600 mb-2">Peak Hours</h4>
            <p className="text-sm text-muted-foreground">Highest usage occurs between 6-8 AM and 7-9 PM. Consider scheduling maintenance during off-peak hours.</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="font-semibold text-orange-600 mb-2">Optimization</h4>
            <p className="text-sm text-muted-foreground">Bathroom usage is 40% of total. Consider installing water-efficient fixtures for additional savings.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsSection;