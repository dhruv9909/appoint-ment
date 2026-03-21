"use client"
import { fetchProfile } from "@/services/httpServices";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);

  const getProfileData = async () => {
    try {
      const res = await fetchProfile();
      setUser(res.data);
    } catch (error) {
      console.error("Error loading user profile:", error);
    }
  }

  useEffect(() => {
    getProfileData()
  }, [/*session */])

  console.log("session5", user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
