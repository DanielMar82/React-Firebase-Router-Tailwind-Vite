import { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../Context/UserProvider";

const Navbar = () => {
  const { user, setUser, signOutUser } = useContext(UserContext);

  const handleClickLogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      {user ? (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <button onClick={handleClickLogOut}>LogOut</button>
        </>
      ) : (
        <>
          <NavLink to={"/Login"}>Login</NavLink>
          <NavLink to={"/Register"}>Registro</NavLink>
        </>
      )}
    </>
  );
};

export default Navbar;
