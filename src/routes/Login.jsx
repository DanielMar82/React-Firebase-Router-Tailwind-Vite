import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <h2>{user ? "Online" : "Offline"}</h2>
      <button onClick={handleLogin}>Acceder</button>
    </>
  );
};

export default Login;
