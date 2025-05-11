// FILEPATH: c:/Users/Kromm/Desktop/cpanelversioncoculturaesparza/src/context/UserContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Client, clients } from '../data/clients';

interface AuthContextType {
  user: Client | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Client | null>(null);

  const login = (email: string, password: string): boolean => {
    const foundUser = clients.find((client: Client) => client.email === email && client.password === password);
    if (foundUser) {
      setUser(foundUser);
      // TODO: Implement additional login logic (e.g., save user to local storage, make API call)
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    // TODO: Implement logout logic (e.g., remove user from local storage, make API call)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};