import { useEffect, useState, FC, ReactNode } from "react";
import { createContext } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../utils/firebase-config";

type UserContextValue = {
  user: User | null;
}

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

type UserProviderProps = {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);
  
  const value: UserContextValue = { user };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}