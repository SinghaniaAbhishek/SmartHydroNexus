import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Zap, Recycle, Award, Target } from 'lucide-react';

const SustainabilitySection = () => {
  const ecoFeatures = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      value: '50%',
      description: 'Average water savings through intelligent monitoring and automated controls',
      color: 'from-primary to-primary-hover'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      value: '35%',
      description: 'Reduced energy consumption with smart pump optimization algorithms',
      color: 'from-secondary to-secondary-hover'
    },
    {
      icon: Recycle,
      title: 'Recycled Materials',
      value: '100%',
      description: 'All components manufactured using eco-friendly recycled materials',
      color: 'from-green-light to-secondary'
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint',
      value: '-40%',
      description: 'Significant reduction in carbon emissions compared to traditional systems',
      color: 'from-secondary to-green-dark'
    }
  ];

  const sustainabilityGoals = [
    {
      title: 'UN SDG 6: Clean Water',
      description: 'Ensuring availability and sustainable management of water and sanitation for all',
      progress: 85
    },
    {
      title: 'UN SDG 7: Clean Energy',
      description: 'Affordable and clean energy through efficient pump operations',
      progress: 72
    },
    {
      title: 'UN SDG 12: Responsible Consumption',
      description: 'Sustainable consumption and production patterns in water usage',
      progress: 90
    },
    {
      title: 'UN SDG 13: Climate Action',
      description: 'Combat climate change through reduced energy consumption',
      progress: 68
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-light/10 to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
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
            <Leaf className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary text-sm font-medium">Eco-Friendly Design</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sustainability at the
            <span className="text-transparent bg-clip-text bg-gradient-eco ml-3">
              Core of Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to environmental stewardship drives every aspect of our design, 
            from recycled materials to energy-efficient operations that benefit both users and the planet.
          </p>
        </motion.div>

        {/* Eco Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ecoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="card-eco p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-secondary mb-2">{feature.value}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* UN SDGs Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Aligned with UN Sustainable Development Goals
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technology directly contributes to achieving multiple UN Sustainable Development Goals,
              creating positive impact for communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <motion.div
                key={index}
                className="card-gradient p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{goal.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-eco h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <div className="text-right text-sm text-secondary font-semibold mt-1">
                      {goal.progress}% Contribution
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          className="bg-gradient-eco rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Award className="w-16 h-16 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Certified Environmental Excellence</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            SMART HYDRO NEXUS is certified by leading environmental organizations for our 
            commitment to sustainable technology and responsible manufacturing practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">ISO 14001</div>
              <div className="text-sm opacity-80">Environmental Management</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">ENERGY STAR</div>
              <div className="text-sm opacity-80">Energy Efficiency</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-2xl font-bold mb-2">GREEN SEAL</div>
              <div className="text-sm opacity-80">Sustainable Products</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;