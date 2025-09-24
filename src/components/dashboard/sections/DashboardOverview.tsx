import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Power, Bell, Wrench, TrendingUp, Leaf } from 'lucide-react';

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Water Tank Status */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Water Tank Status</h3>
            <Droplets className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current Level</span>
              <span className="font-medium text-foreground">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-hero h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-green-600">Normal Level</p>
          </div>
        </motion.div>

        {/* Pump Control */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Pump Control</h3>
            <Power className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                ON
              </span>
            </div>
            <motion.button
              className="w-full btn-hero"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Turn OFF
            </motion.button>
          </div>
        </motion.div>

        {/* Recent Notifications */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Recent Notifications</h3>
            <Bell className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="font-medium text-foreground">Tank 75% Full</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-foreground">Pump Started</p>
              <p className="text-xs text-muted-foreground">4 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-foreground">Maintenance Due</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lower Row Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maintenance Status */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Maintenance Status</h3>
            <Wrench className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Cleaned</span>
              <span className="font-medium text-foreground">March 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Next Reminder</span>
              <span className="font-medium text-orange-600">March 30, 2024</span>
            </div>
            <div className="pt-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                Maintenance Due Soon
              </span>
            </div>
          </div>
        </motion.div>

        {/* Usage Analytics Preview */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Usage Analytics</h3>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Today's Usage</span>
              <span className="font-medium text-foreground">240L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weekly Average</span>
              <span className="font-medium text-foreground">1,680L</span>
            </div>
            <div className="pt-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                15% Below Average
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Eco Impact */}
      <motion.div
        className="bg-gradient-subtle rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Eco Impact</h3>
          <Leaf className="h-6 w-6 text-green-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,250L</p>
            <p className="text-sm text-muted-foreground">Water Saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">85%</p>
            <p className="text-sm text-muted-foreground">Energy Efficiency</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">95%</p>
            <p className="text-sm text-muted-foreground">Recycled Materials</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;