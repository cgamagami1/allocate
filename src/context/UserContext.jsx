import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const UserContext = createContext({ user: null, setUser: () => {} });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  const value = { user };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}