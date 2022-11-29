import { useEffect, useState, createContext, useContext } from "react";
import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import auth from "../firebase";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        signup,
        logout,
        login,
        forgotPassword,
        updateUserEmail,
        updateUserPassword,
      }}
    >
      {!loading && children}
    </DataContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(DataContext);
};
export default ContextProvider;
