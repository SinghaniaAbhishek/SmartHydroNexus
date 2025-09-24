import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertTriangle, CheckCircle, Info, Clock } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Tank Level Low',
    message: 'Water tank level has dropped to 25%. Consider starting the pump.',
    time: '2 hours ago',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 2,
    type: 'success',
    title: 'Pump Started Successfully',
    message: 'Water pump has been automatically started due to low tank level.',
    time: '3 hours ago',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    type: 'info',
    title: 'Maintenance Reminder',
    message: 'Scheduled maintenance is due in 5 days. Please plan accordingly.',
    time: '1 day ago',
    icon: Info,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 4,
    type: 'success',
    title: 'Tank Full',
    message: 'Water tank has reached 100% capacity. Pump automatically stopped.',
    time: '1 day ago',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 5,
    type: 'warning',
    title: 'High Power Consumption',
    message: 'Pump power consumption is 15% higher than normal. Check for blockages.',
    time: '2 days ago',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 6,
    type: 'info',
    title: 'System Update Available',
    message: 'A new system update is available with improved efficiency features.',
    time: '3 days ago',
    icon: Info,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }
];

const NotificationsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
          </div>
          <button className="text-sm text-primary hover:text-primary-hover transition-colors">
            Mark all as read
          </button>
        </div>

        {/* Notification Filter */}
        <div className="flex space-x-2 mb-6">
          <button className="px-4 py-2 rounded-lg bg-gradient-hero text-white text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm">
            Warnings
          </button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm">
            Info
          </button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all text-sm">
            Success
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            
            return (
              <motion.div
                key={notification.id}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-subtle border border-primary/5 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className={`p-2 rounded-full ${notification.bgColor}`}>
                  <Icon className={`h-5 w-5 ${notification.color}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <motion.button
            className="px-6 py-2 text-primary hover:text-primary-hover transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Notifications
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotificationsSection;