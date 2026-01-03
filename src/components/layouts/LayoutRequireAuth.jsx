import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../Context/UserProvider";

const LayoutRequireAuth = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return <div className="container mx-auto"><Outlet /></div>;
};
export default LayoutRequireAuth;
