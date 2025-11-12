"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface UserContextType {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }:{children:React.ReactNode}) => {
  const [user, setUser] = useState(null);
  console.log("session5", user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
