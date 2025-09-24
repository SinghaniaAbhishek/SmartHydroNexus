import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'Technology', path: '/#technology' },
    { name: 'Market', path: '/#market' }
  ];

  const company = [
    { name: 'About Us', path: '/#team' },
    { name: 'Sustainability', path: '/#sustainability' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' }
  ];

  const support = [
    { name: 'Contact', path: '/#contact' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support Center', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-hero p-3 rounded-xl">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">SMART HYDRO</h1>
                  <p className="text-lg text-secondary font-semibold">NEXUS</p>
                </div>
              </div>

              <p className="text-background/80 mb-6 max-w-md leading-relaxed">
                Revolutionizing water management with intelligent IoT technology. 
                Automated monitoring, eco-friendly design, and sustainable solutions 
                for a better tomorrow.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background/80">hello@smarthydronexus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background/80">+91 81269 81269</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-background/80">Gunupur, Odisha</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-background mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-background/80 hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-background mb-6 mt-8">Company</h3>
              <ul className="space-y-3">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-background/80 hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-background mb-6">Support</h3>
              <ul className="space-y-3 mb-8">
                {support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-background/80 hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="bg-background/10 rounded-xl p-4">
                <h4 className="text-background font-semibold mb-3">Stay Updated</h4>
                <p className="text-background/80 text-sm mb-4">
                  Get the latest updates on IoT water management technology.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-background/20 border border-background/30 rounded-l-lg text-background placeholder-background/60 focus:outline-none focus:border-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-hover transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Copyright */}
              <div className="text-background/80 text-sm">
                © 2024 SMART HYDRO NEXUS. All rights reserved. | Automating Water for a Sustainable Future.
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/80 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;