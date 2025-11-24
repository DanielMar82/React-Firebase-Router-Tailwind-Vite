import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import ExampleRef from "../components/ExampleRef";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <ExampleRef />
      <h1>Bienvenido {user.email}</h1>
    </>
  );
};

export default Home;
