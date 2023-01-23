import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  React.useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unSubscribe;
  }, []);

  return currentUser;
};

export default useAuth;
