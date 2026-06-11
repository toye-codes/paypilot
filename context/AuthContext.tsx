"use client";

import { createContext, useContext, useEffect, useState, ReactNode, } from "react";
import { useMe } from "@/hooks/auth/useMe";
import { me } from "@/services/authService";

type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  user: User | null;
  account: string | null;
  login: (user: User, accountId?: string | null) => void;
  setAccount: (accountId: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
const ACCOUNT_STORAGE_KEY = "accountId";

const resolveUser = (data: any): User | null => {
  if (!data) return null;
  if (data.user) return data.user;
  return data;
};

const resolveAccountId = (data: any): string | null => {
  if (!data) return null;
  return data.accounts?.[0]?.accountId || data.accountId || null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const { data: meData, isLoading: isMeLoading, isError: isMeError} = useMe();

  useEffect(() => {
    const storedAccountId = localStorage.getItem(ACCOUNT_STORAGE_KEY);
    if (storedAccountId) {
      setAccount(storedAccountId);
    }
  }, []);

  useEffect(() => {
    if (meData) {
      const currentUser = resolveUser(meData);
      const accountIdFromMe = resolveAccountId(meData);

      if (currentUser) {
        setUser(currentUser);
      }

      if (!account && accountIdFromMe) {
        setAccount(accountIdFromMe);
      }
    }
  }, [meData, account]);

  useEffect(() => {
    if (isMeError) {
      setUser(null);
      setAccount(null);
      localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    }
  }, [isMeError]);

  useEffect(() => {
    if (account) {
      localStorage.setItem(ACCOUNT_STORAGE_KEY, account);
    } else {
      localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    }
  }, [account]);

  const login = (user: User, accountId?: string | null) => {
    setUser(user);
    if (accountId) {
      setAccount(accountId);
    }
  };

  const logout = () => {
    setUser(null);
    setAccount(null);
    localStorage.removeItem(ACCOUNT_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isAuthLoading: isMeLoading,
        user,
        account,
        login,
        setAccount,
        setUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
