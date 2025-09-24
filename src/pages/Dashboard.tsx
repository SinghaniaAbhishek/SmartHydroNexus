import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardOverview from '@/components/dashboard/sections/DashboardOverview';
import PumpControlSection from '@/components/dashboard/sections/PumpControlSection';
import NotificationsSection from '@/components/dashboard/sections/NotificationsSection';
import MaintenanceSection from '@/components/dashboard/sections/MaintenanceSection';
import AnalyticsSection from '@/components/dashboard/sections/AnalyticsSection';
import EcoImpactSection from '@/components/dashboard/sections/EcoImpactSection';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'pump-control':
        return <PumpControlSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'maintenance':
        return <MaintenanceSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'eco-impact':
        return <EcoImpactSection />;
      default:
        return <DashboardOverview />;
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'pump-control':
        return 'Pump Control';
      case 'notifications':
        return 'Notifications';
      case 'maintenance':
        return 'Maintenance';
      case 'analytics':
        return 'Usage Analytics';
      case 'eco-impact':
        return 'Eco Impact';
      default:
        return 'Dashboard Overview';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <DashboardSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-0">
          {/* Header */}
          <DashboardHeader />

          {/* Content Area */}
          <main className="flex-1 p-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">{getSectionTitle()}</h1>
                <p className="text-white/80">Monitor and control your smart water management system</p>
              </div>

              {/* Section Content */}
              {renderSection()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;