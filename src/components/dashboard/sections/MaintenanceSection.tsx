import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Calendar, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const maintenanceTasks = [
  {
    id: 1,
    task: 'Filter Cleaning',
    dueDate: 'March 30, 2024',
    status: 'due',
    priority: 'high',
    description: 'Clean water intake filters to maintain optimal flow'
  },
  {
    id: 2,
    task: 'Pump Inspection',
    dueDate: 'April 5, 2024',
    status: 'upcoming',
    priority: 'medium',
    description: 'Visual inspection of pump components and connections'
  },
  {
    id: 3,
    task: 'Sensor Calibration',
    dueDate: 'April 15, 2024',
    status: 'upcoming',
    priority: 'low',
    description: 'Calibrate water level and flow sensors for accuracy'
  },
  {
    id: 4,
    task: 'Tank Cleaning',
    dueDate: 'March 15, 2024',
    status: 'completed',
    priority: 'high',
    description: 'Deep cleaning of water storage tank'
  }
];

const MaintenanceSection: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'due':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'due':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-orange-100 text-orange-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Maintenance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Tasks Due</h3>
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-red-600">1</p>
          <p className="text-sm text-muted-foreground">Requires immediate attention</p>
        </motion.div>

        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Upcoming</h3>
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-3xl font-bold text-orange-600">2</p>
          <p className="text-sm text-muted-foreground">Scheduled for next 30 days</p>
        </motion.div>

        <motion.div
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Completed</h3>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">1</p>
          <p className="text-sm text-muted-foreground">This month</p>
        </motion.div>
      </div>

      {/* Maintenance Tasks */}
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Maintenance Schedule</h2>
          </div>
          <motion.button
            className="btn-hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add New Task
          </motion.button>
        </div>

        <div className="space-y-4">
          {maintenanceTasks.map((task, index) => (
            <motion.div
              key={task.id}
              className="p-4 rounded-xl bg-gradient-subtle border border-primary/5 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(task.status)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-foreground">{task.task}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Due: {task.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {task.status !== 'completed' && (
                    <motion.button
                      className="px-3 py-1 text-xs bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Mark Done
                    </motion.button>
                  )}
                  <motion.button
                    className="px-3 py-1 text-xs text-primary hover:text-primary-hover transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Edit
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 p-4 bg-gradient-subtle rounded-xl">
          <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <motion.button
              className="p-3 text-left bg-white rounded-lg hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h5 className="font-medium text-foreground">Schedule Cleaning</h5>
              <p className="text-xs text-muted-foreground">Set up regular tank cleaning</p>
            </motion.button>
            <motion.button
              className="p-3 text-left bg-white rounded-lg hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h5 className="font-medium text-foreground">Service Request</h5>
              <p className="text-xs text-muted-foreground">Request professional service</p>
            </motion.button>
            <motion.button
              className="p-3 text-left bg-white rounded-lg hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h5 className="font-medium text-foreground">View History</h5>
              <p className="text-xs text-muted-foreground">Check maintenance records</p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MaintenanceSection;