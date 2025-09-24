import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Settings, 
  Bell, 
  Wrench, 
  BarChart3, 
  Leaf, 
  LogOut,
  Menu,
  X,
  Droplets
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pump-control', label: 'Pump Control', icon: Settings },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'analytics', label: 'Usage Analytics', icon: BarChart3 },
  { id: 'eco-impact', label: 'Eco Impact', icon: Leaf },
];

const DashboardSidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white/95 backdrop-blur-lg 
          border-r border-primary/10 shadow-elegant transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-primary/10">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary">SMART HYDRO</h2>
                <p className="text-sm text-secondary font-semibold">NEXUS</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left
                    transition-all duration-300 group
                    ${isActive 
                      ? 'bg-gradient-hero text-white shadow-glow' 
                      : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                    }
                  `}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-primary/10">
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </motion.button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default DashboardSidebar;