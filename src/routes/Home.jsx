import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <h1>Bienvenido {user.email}</h1>
    </>
  );
};

export default Home;
