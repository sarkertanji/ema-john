import { useContext } from "react";
import { AuthContext } from "../component/context/AuthPrivider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
