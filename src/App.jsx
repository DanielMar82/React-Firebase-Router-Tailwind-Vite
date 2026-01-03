import { Route, Routes } from "react-router";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import Register from "./routes/Register";
import Perfil from "./routes/Perfil";
import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import LayoutRequireAuth from "./components/layouts/LayoutRequireAuth";

import { UserContext } from "./Context/UserProvider";
import { useContext } from "react";
import NotFound from "./routes/NotFound";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <h1>APP</h1>

      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="Perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
