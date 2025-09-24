import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Smartphone, 
  Bell, 
  Wrench, 
  BarChart3, 
  Leaf, 
  Brain,
  Gauge
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Automated Water Level Monitoring',
      description: 'Real-time sensors track water levels with precision, providing instant updates and preventing overflow or empty tank situations.',
      color: 'from-primary to-primary-hover'
    },
    {
      icon: Gauge,
      title: 'Smart Pump Control',
      description: 'Intelligent automation with manual override capabilities. Optimizes pump operation for maximum efficiency and longevity.',
      color: 'from-secondary to-secondary-hover'
    },
    {
      icon: Bell,
      title: 'Notifications & Alerts',
      description: 'Instant mobile notifications for low water levels, tank full alerts, system errors, and maintenance requirements.',
      color: 'from-primary to-secondary'
    },
    {
      icon: Wrench,
      title: 'Maintenance Reminders',
      description: 'Proactive maintenance scheduling based on usage patterns, preventing costly repairs and ensuring optimal performance.',
      color: 'from-secondary to-primary'
    },
    {
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Comprehensive insights into water consumption patterns, efficiency metrics, and cost savings with beautiful charts and reports.',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'Constructed with 100% recycled materials and energy-efficient components for minimal environmental impact.',
      color: 'from-secondary to-secondary-glow'
    },
    {
      icon: Brain,
      title: 'AI/ML Future Scope',
      description: 'Machine learning algorithms predict usage patterns, optimize efficiency, and provide intelligent recommendations.',
      color: 'from-primary to-secondary'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Complete control through our intuitive mobile app with dashboard, controls, analytics, and real-time monitoring.',
      color: 'from-secondary to-primary-glow'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-beige-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Droplets className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary text-sm font-medium">Smart Features</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-hero ml-3">
              Smart Water Management
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our comprehensive IoT solution transforms traditional water systems 
            into intelligent, efficient, and sustainable management platforms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group card-gradient p-6 hover-lift cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:shadow-glow transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn more
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Water Management?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who have revolutionized their water systems.
            </p>
            <motion.button
              className="bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;