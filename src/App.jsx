import { Route, Routes } from "react-router";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Register from "./routes/Register";
import { UserContext } from "./Context/UserProvider";
import { useContext } from "react";
import LayoutContainerForm from "./components/LayoutContainerForm";

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
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
