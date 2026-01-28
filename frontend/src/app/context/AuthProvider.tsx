"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

export type AuthContextType = {
  user: UserType | null;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

export type UserType = {
  _id: string;
  username: string;
  email: string;
  role: string;
};

type LoginResponse = {
  user: UserType;
  accessToken: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("accessToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const { data } = await api.post<LoginResponse>("/auth/login", {
        username,
        password,
      });
      const { user, accessToken } = data;

      localStorage.setItem("accessToken", accessToken);
      setToken(accessToken);
      setUser(user);

      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      console.log("asd", accessToken);
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });
      router.push("/login");
      console.log(username);
    } catch (error) {
      toast.error("Can not registered");
    }
  };

  useEffect(() => {
    const fetchMe = async () => {
      if (!token) {
        console.log("token obso");
        return;
      }
      try {
        const { data } = await api.get<{ user: UserType }>("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data.user);
      } catch (error) {
        localStorage.removeItem("accessToken");
        console.error("Token verification failed", error);
        setUser(null);
      }
    };
    fetchMe();
  }, [token]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
