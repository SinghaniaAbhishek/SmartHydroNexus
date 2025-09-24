import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Wrench, BarChart3, CheckCircle, Shield, Smartphone, Cpu, Leaf } from 'lucide-react';

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Irregular Water Supply',
      description: 'Unpredictable water availability leads to empty tanks and disrupted daily routines.'
    },
    {
      icon: Wrench,
      title: 'Inefficient Pumps',
      description: 'Manual pump operation wastes energy and fails to optimize water usage patterns.'
    },
    {
      icon: BarChart3,
      title: 'Maintenance Issues',
      description: 'Lack of timely maintenance leads to costly repairs and system failures.'
    }
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: 'IoT Automation',
      description: 'Smart sensors and automated controls ensure optimal water management 24/7.'
    },
    {
      icon: Shield,
      title: 'App Alerts',
      description: 'Real-time notifications keep you informed about water levels and system status.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Design',
      description: 'Sustainable materials and energy-efficient operation reduce environmental impact.'
    },
    {
      icon: Cpu,
      title: 'AI/ML Analytics',
      description: 'Machine learning optimizes usage patterns and predicts maintenance needs.'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_2px,_transparent_2px)] bg-[length:40px_40px]"></div>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Water Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional water systems face critical challenges. Our IoT solution provides intelligent, 
            automated, and sustainable answers to these problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Current Problems</h3>
              <p className="text-muted-foreground">Challenges in traditional water management systems</p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="card-gradient p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h4>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Solutions</h3>
              <p className="text-muted-foreground">Smart technology for intelligent water management</p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="card-eco p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Result</h3>
            <p className="text-lg mb-6 opacity-90">
              A fully automated, intelligent water management system that saves water, 
              reduces energy consumption, and provides peace of mind.
            </p>
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;