import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeAuthintication } from "../firebase/Firebase.init";

// use firebase hook
initializeAuthintication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // log out function
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // sign in function
  const signinUsingGoogole = () => {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      setError(errorMessage);
      alert(errorMessage);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    signinUsingGoogole,
    logOut,
  };
};
export default useFirebase;
