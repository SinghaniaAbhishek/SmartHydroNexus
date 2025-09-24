import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Power, Clock, Settings, Activity } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const PumpControlSection: React.FC = () => {
  const [pumpStatus, setPumpStatus] = useState(true);
  const [autoMode, setAutoMode] = useState(true);

  return (
    <div className="space-y-6">
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-foreground mb-6">Pump Control Center</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Control */}
          <div className="space-y-6">
            <div className="text-center">
              <motion.div
                className={`
                  w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4
                  ${pumpStatus ? 'bg-gradient-hero shadow-glow' : 'bg-gray-200'}
                `}
                animate={{ scale: pumpStatus ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: pumpStatus ? Infinity : 0 }}
              >
                <Power className={`h-16 w-16 ${pumpStatus ? 'text-white' : 'text-gray-500'}`} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pump Status: {pumpStatus ? 'ON' : 'OFF'}
              </h3>
              
              <motion.button
                onClick={() => setPumpStatus(!pumpStatus)}
                className={`
                  px-8 py-3 rounded-xl font-semibold transition-all duration-300
                  ${pumpStatus 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'btn-hero'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Turn {pumpStatus ? 'OFF' : 'ON'}
              </motion.button>
            </div>

            {/* Mode Toggle */}
            <div className="bg-gradient-subtle rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Auto Mode</h4>
                  <p className="text-sm text-muted-foreground">Automatically control pump based on water levels</p>
                </div>
                <Switch checked={autoMode} onCheckedChange={setAutoMode} />
              </div>
            </div>
          </div>

          {/* Status Information */}
          <div className="space-y-4">
            <div className="bg-gradient-subtle rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Activity className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Current Status</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Flow Rate</span>
                  <span className="font-medium text-foreground">15 L/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pressure</span>
                  <span className="font-medium text-foreground">2.5 bar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Power Consumption</span>
                  <span className="font-medium text-foreground">750W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Running Time</span>
                  <span className="font-medium text-foreground">2h 45m</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-subtle rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Schedule</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Auto Start</span>
                  <span className="font-medium text-foreground">06:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auto Stop at</span>
                  <span className="font-medium text-foreground">Tank Full</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-subtle rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Settings className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Settings</h4>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left text-sm text-primary hover:text-primary-hover transition-colors">
                  Configure Auto Schedule
                </button>
                <button className="w-full text-left text-sm text-primary hover:text-primary-hover transition-colors">
                  Set Water Level Thresholds
                </button>
                <button className="w-full text-left text-sm text-primary hover:text-primary-hover transition-colors">
                  Emergency Stop Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PumpControlSection;