import { Route, Routes } from "react-router";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

const App = () => {
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
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
