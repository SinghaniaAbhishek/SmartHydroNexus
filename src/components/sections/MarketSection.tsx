import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building, Globe } from 'lucide-react';

const MarketSection = () => {
  const marketStats = [
    {
      icon: TrendingUp,
      value: '$45.2B',
      label: 'Market Size 2024',
      growth: '+12.5% CAGR',
      color: 'from-primary to-primary-hover'
    },
    {
      icon: Globe,
      value: '$78.9B',
      label: 'Projected 2033',
      growth: '75% Growth',
      color: 'from-secondary to-secondary-hover'
    },
    {
      icon: Users,
      value: '2.4M+',
      label: 'Active Users',
      growth: '+89% YoY',
      color: 'from-primary to-secondary'
    },
    {
      icon: Building,
      value: '150+',
      label: 'Countries',
      growth: 'Global Reach',
      color: 'from-secondary to-primary'
    }
  ];

  const useCases = [
    {
      title: 'Residential Homes',
      description: 'Perfect for single-family homes with automated water tank management and smart notifications.',
      image: '🏠',
      stats: '85% of users',
      benefits: ['Water savings up to 40%', 'Reduced maintenance costs', '24/7 monitoring']
    },
    {
      title: 'Apartment Complexes',
      description: 'Scalable solution for multi-unit buildings with centralized monitoring and individual controls.',
      image: '🏢',
      stats: '12% of users',
      benefits: ['Centralized management', 'Individual unit control', 'Bulk cost savings']
    },
    {
      title: 'Industrial Facilities',
      description: 'Enterprise-grade water management for manufacturing and processing facilities.',
      image: '🏭',
      stats: '2% of users',
      benefits: ['Industrial-grade sensors', 'Advanced analytics', 'Compliance monitoring']
    },
    {
      title: 'Smart Cities',
      description: 'Municipal water infrastructure management with city-wide monitoring and optimization.',
      image: '🌆',
      stats: '1% of users',
      benefits: ['City-wide integration', 'Policy compliance', 'Resource optimization']
    }
  ];

  return (
    <section id="market" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_2px,_transparent_2px)] bg-[length:50px_50px]"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary text-sm font-medium">Market Potential</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Massive Market
            <span className="text-transparent bg-clip-text bg-gradient-eco ml-3">
              Growth Opportunity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The smart water management market is experiencing unprecedented growth, 
            driven by increasing demand for sustainable solutions and IoT technology adoption.
          </p>
        </motion.div>

        {/* Market Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-gradient p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} p-4 mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-secondary font-semibold">{stat.growth}</div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Versatile Use Cases Across Industries
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="card-eco p-6 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="text-6xl mb-4 text-center">{useCase.image}</div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{useCase.description}</p>
                
                <div className="bg-secondary/10 rounded-lg p-3 mb-4">
                  <div className="text-secondary font-semibold text-sm">{useCase.stats}</div>
                </div>

                <div className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Projection */}
        <motion.div
          className="bg-gradient-hero rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Join the Water Revolution</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            With 75% market growth projected by 2033, now is the perfect time to 
            adopt smart water management technology and lead the sustainable future.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold">12.5%</div>
              <div className="text-sm opacity-80">Annual Growth</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2024-2033</div>
              <div className="text-sm opacity-80">Growth Period</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$78.9B</div>
              <div className="text-sm opacity-80">Market Size</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;