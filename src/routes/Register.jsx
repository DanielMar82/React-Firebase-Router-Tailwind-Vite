import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("user1@gmail.com");
  const [password, setPassword] = useState("123456");

  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Procesando form");

    try {
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Este email ya está registrador");
      } else {
        alert("Contraseña débil");
      }
    }
  };

  return (
    <>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese el email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};
export default Register;
