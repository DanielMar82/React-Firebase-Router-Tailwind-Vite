import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { Navigate } from "react-router";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return children;
};
export default RequireAuth;
