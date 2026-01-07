import { Route, Routes } from "react-router";
import { UserContext } from "./Context/UserProvider";
import { useContext } from "react";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import Register from "./routes/Register";
import Perfil from "./routes/Perfil";
import NotFound from "./routes/NotFound";

import LayoutRedirect from "./components/layouts/LayoutRedirect";
import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import LayoutRequireAuth from "./components/layouts/LayoutRequireAuth";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="Perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
