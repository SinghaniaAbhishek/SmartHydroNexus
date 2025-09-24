import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const DashboardHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.header
      className="bg-white/95 backdrop-blur-lg border-b border-primary/10 px-6 py-4 shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">SMART HYDRO NEXUS</h1>
          <p className="text-sm text-muted-foreground">Water Management Dashboard</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">{user?.name}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <div className="bg-gradient-hero p-2 rounded-full">
            <User className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;