import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Zap, Recycle, Award, TrendingUp } from 'lucide-react';

const impactMetrics = [
  {
    title: 'Water Saved',
    value: '1,250L',
    change: '+15%',
    icon: Droplets,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Compared to traditional systems this month'
  },
  {
    title: 'Energy Efficiency',
    value: '85%',
    change: '+8%',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    description: 'Smart automation reduces energy consumption'
  },
  {
    title: 'Recycled Materials',
    value: '95%',
    change: 'Maintained',
    icon: Recycle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description: 'Components made from recycled materials'
  },
  {
    title: 'Carbon Footprint',
    value: '-45kg',
    change: '-12%',
    icon: Leaf,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    description: 'CO2 reduced this month'
  }
];

const achievements = [
  {
    title: 'Water Guardian',
    description: 'Saved over 1,000L of water',
    icon: Award,
    unlocked: true
  },
  {
    title: 'Eco Warrior',
    description: 'Reduced carbon footprint by 30kg',
    icon: Leaf,
    unlocked: true
  },
  {
    title: 'Efficiency Expert',
    description: 'Achieved 80%+ energy efficiency',
    icon: TrendingUp,
    unlocked: true
  },
  {
    title: 'Sustainability Champion',
    description: 'Maintained 90%+ recycled materials',
    icon: Recycle,
    unlocked: false
  }
];

const EcoImpactSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <motion.div
              key={metric.title}
              className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${metric.bgColor} p-3 rounded-xl inline-block mb-4`}>
                <Icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') || metric.change.startsWith('-') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Environmental Impact Overview */}
      <motion.div
        className="bg-gradient-subtle rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <Leaf className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-foreground">Environmental Impact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Impact Summary */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">This Month's Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Water Conservation</span>
                  <span className="font-medium text-blue-600">1,250L saved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Energy Reduction</span>
                  <span className="font-medium text-yellow-600">185 kWh saved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CO2 Prevented</span>
                  <span className="font-medium text-green-600">45kg reduced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cost Savings</span>
                  <span className="font-medium text-emerald-600">$78 saved</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Eco-Friendly Features</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Smart water level monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Energy-efficient pump operation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">95% recycled materials used</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Zero water wastage design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Eco Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  
                  return (
                    <motion.div
                      key={achievement.title}
                      className={`flex items-center space-x-3 p-3 rounded-lg border-2 ${
                        achievement.unlocked 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className={`p-2 rounded-full ${
                        achievement.unlocked ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h5 className={`font-medium ${
                          achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h5>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <Award className="h-4 w-4 text-yellow-500" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Monthly Goals</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Water Savings Goal</span>
                    <span className="font-medium">83%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '83%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Energy Efficiency Goal</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tips for Better Impact */}
      <motion.div
        className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-elegant border border-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Tips for Better Environmental Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <Droplets className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="font-semibold text-foreground mb-2">Water Conservation</h4>
            <p className="text-sm text-muted-foreground">
              Set optimal tank levels and use rainwater harvesting to maximize water savings.
            </p>
          </div>
          
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <Zap className="h-6 w-6 text-yellow-600 mb-2" />
            <h4 className="font-semibold text-foreground mb-2">Energy Optimization</h4>
            <p className="text-sm text-muted-foreground">
              Schedule pump operations during off-peak hours to reduce energy consumption.
            </p>
          </div>
          
          <div className="bg-gradient-subtle p-4 rounded-xl">
            <Leaf className="h-6 w-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-foreground mb-2">Sustainable Practices</h4>
            <p className="text-sm text-muted-foreground">
              Regular maintenance extends system life and maintains eco-friendly performance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EcoImpactSection;