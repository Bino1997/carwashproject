
// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserService } from '../services/AuthService';

interface AuthContextType {
  user: any | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userToken = UserService.getUserToken();

      if (userToken) {
        try {
          const userData = await UserService.fetchUserProfile();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          UserService.removeUserToken();
        }
      }


      setLoading(false);
    };

    fetchData();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await UserService.login(username, password);
      const userData = await UserService.fetchUserProfile();
      setUser(userData);
      // localStorage.setItem('userToken', userData.token);
    } catch (error) {
      console.error('User login error:', error);
      throw error;
    }
  };



  const logout = () => {
    UserService.removeUserToken();
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,  login,  logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
