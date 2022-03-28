import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

export const initializeAuthintication = () => {
  return initializeApp(firebaseConfig);
};
