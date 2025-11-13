import { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../Context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <button onClick={() => setUser(false)}>LogOut</button>
        </>
      ) : (
        <NavLink to={"/Login"}>Login</NavLink>
      )}
    </>
  );
};

export default Navbar;
