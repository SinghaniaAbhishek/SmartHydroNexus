import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Droplets, Zap, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-smart-water-system.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Droplets className="w-4 h-4 mr-2 text-white" />
              <span className="text-white text-sm font-medium">IoT Water Management System</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Automating Water for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
                Sustainable Future
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Revolutionary IoT technology that transforms water management with automated monitoring, 
              smart pump control, and eco-friendly design. Experience the future of sustainable water usage.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Zap className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-white text-sm">Auto Control</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Droplets className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-white text-sm">Smart Monitoring</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Leaf className="w-4 h-4 mr-2 text-green-300" />
                <span className="text-white text-sm">Eco-Friendly</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Explore Features
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50%</div>
                <div className="text-white/80 text-sm">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Eco-Friendly</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Smart Water Management System"
                className="w-full h-auto rounded-2xl shadow-glow animate-float"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Droplets className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-xl p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;