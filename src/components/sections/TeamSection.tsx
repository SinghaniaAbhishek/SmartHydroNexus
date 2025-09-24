import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      specialization: 'IoT Systems Architecture',
      bio: 'Former Tesla engineer with 15+ years in sustainable technology. PhD in Environmental Engineering from MIT.',
      image: '👩‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      specialization: 'AI/ML & Data Analytics',
      bio: 'Ex-Google AI researcher specializing in predictive algorithms and machine learning applications for IoT.',
      image: '👨‍💻',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Sustainability',
      specialization: 'Environmental Impact',
      bio: 'Environmental scientist with expertise in water conservation and sustainable manufacturing processes.',
      image: '👩‍🔬',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'James Thompson',
      role: 'VP of Engineering',
      specialization: 'Hardware Development',
      bio: 'Hardware engineering veteran with 20+ years at Samsung and Intel, expert in sensor technology.',
      image: '👨‍🔧',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Elena Kowalski',
      role: 'UX/UI Director',
      specialization: 'User Experience',
      bio: 'Award-winning designer from Apple, creating intuitive interfaces for complex IoT systems.',
      image: '👩‍🎨',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      specialization: 'Market Strategy',
      bio: 'Sales leader with proven track record in scaling IoT startups from $1M to $100M+ ARR.',
      image: '👨‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_hsl(var(--primary))_2px,_transparent_2px),_radial-gradient(circle_at_75%_75%,_hsl(var(--secondary))_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
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
            <div className="w-4 h-4 mr-2 bg-primary rounded-full"></div>
            <span className="text-primary text-sm font-medium">Our Team</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Visionaries
            <span className="text-transparent bg-clip-text bg-gradient-hero ml-3">
              Behind the Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts combines decades of experience in IoT, sustainability, 
            and cutting-edge technology to revolutionize water management systems worldwide.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="card-gradient p-6 hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 text-6xl bg-gradient-card rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
                <p className="text-secondary text-sm">{member.specialization}</p>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.social.github}
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          className="bg-gradient-hero rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Innovation First</h4>
              <p className="text-sm opacity-90">
                Constantly pushing boundaries to create cutting-edge solutions for tomorrow's challenges.
              </p>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
              <p className="text-sm opacity-90">
                Every decision we make considers environmental impact and long-term sustainability.
              </p>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2">Customer Success</h4>
              <p className="text-sm opacity-90">
                Your success is our success. We're committed to delivering exceptional value and support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;