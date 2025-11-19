import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  // const [email, setEmail] = useState("user1@gmail.com");
  // const [password, setPassword] = useState("123456");

  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: "user1@gmail.com",
    },
  });

  const onSubmit = async ({ email, password }) => {
    console.log(email + " / " + password);

    try {
      await registerUser(email, password);
      console.log("Usuario Loggeado");
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", {
            message: "Este email ya está registrado",
          });
          break;
        case "auth/invalid-email":
          setError("email", {
            message: "Formato email no válido",
          });
          break;
        default:
          alert("Error en el servidor");
      }
    }
  };

  return (
    <>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese el email"
          {...register("email", {
            required: { value: true, message: "Campo obligatorio" },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato incorrecto",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Ingrese la contraseña"
          {...register("password", {
            required: { value: true, message: "Campo obligatorio" },
            minLength: { value: 6, message: "Mínimo 6 carácteres" },
            setValueAs: (v) => v.trim(),
            // validate: {
            //   trim: (v) => {
            //     if (!v.trim()) {
            //       return "No seas payaso, escribe algo";
            //       true;
            //     }
            //   },
            // },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Repita la contraseña"
          {...register("repassword", {
            required: { value: true, message: "Campo obligatorio" },
            validate: {
              equals: (v) =>
                v === getValues("password") || "Contraseñas no coinciden",
            },
            setValueAs: (v) => v.trim(),
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};
export default Register;
