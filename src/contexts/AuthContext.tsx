import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, loginType?: 'admin' | 'user') => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, loginType: 'admin' | 'user' = 'user'): Promise<boolean> => {
    // Simulate API call with mock credentials
    return new Promise((resolve) => {
      setTimeout(() => {
        if (loginType === 'admin' && email === 'admin@smarthydro.com' && password === 'admin123') {
          setUser({
            id: 'admin-1',
            name: 'System Admin',
            email: email,
            role: 'admin'
          });
          resolve(true);
        } else if (loginType === 'user' && email && password) {
          // Mock user accounts created by admin
          const mockUsers = [
            { id: 'user-1', name: 'John Smith', email: 'john@company.com', password: 'user123' },
            { id: 'user-2', name: 'Sarah Johnson', email: 'sarah@company.com', password: 'user456' },
          ];
          
          const foundUser = mockUsers.find(u => u.email === email && u.password === password);
          if (foundUser) {
            setUser({
              id: foundUser.id,
              name: foundUser.name,
              email: foundUser.email,
              role: 'user'
            });
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};