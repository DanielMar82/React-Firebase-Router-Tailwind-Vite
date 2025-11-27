import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  // const [email, setEmail] = useState("user1@gmail.com");
  // const [password, setPassword] = useState("123456");

  const { registerUser } = useContext(UserContext);

  const navigate = useNavigate();

  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);

      const { code, message } = erroresFirebase(error.code);
      setError(code, {
        message,
      });
    }
  };

  return (
    <>
      <Title text="Registro" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese el email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu email"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese la contraseña"
          {...register("password", {
            required,
            minLength: minLength(6),
            validate: {
              validateTrim,
            },
          })}
          label="Ingresa tu contraseña"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Repita la contraseña"
          {...register("repassword", {
            required: { value: true, message: "Campo obligatorio" },
            validate: validateEquals(getValues("password")),
          })}
          label="Repita la contraseña"
          error={errors.repassword}
        >
          <FormError error={errors.repassword} />
        </FormInput>

        <Button text="Registrar" type="submit" />
      </form>
    </>
  );
};
export default Register;
