import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { formValidate } from "../utils/formValidate";

import Title from "../components/Title";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useForm } from "react-hook-form";

const Home = () => {
  const [copy, setCopy] = useState({});
  const { required, patternURL } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
    setValue,
  } = useForm();

  const {
    data,
    error: dataError,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
  } = useFirestore();

  const [newOriginId, setNewOriginId] = useState();

  useEffect(() => {
    console.log("GETDATA");

    getData();
  }, []);

  if (loading.getData) {
    return <p>Loading data getData...</p>;
  }
  if (dataError) {
    return <p>{dataError}</p>;
  }

  const onSubmit = async ({ url }) => {
    try {
      if (newOriginId) {
        await updateData(newOriginId, url);
        setNewOriginId("");
      } else {
        await addData(url);
      }
      resetField("url");
    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, {
        message,
      });
    }
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
  };

  const handleClickEdit = async (item) => {
    setValue("url", item.origin);
    setNewOriginId(item.nanoid);
  };

  const handleClickCopyt = async (nanoid) => {
    await navigator.clipboard.writeText(window.location.href + nanoid);
    setCopy({ [nanoid]: true });
  };

  const pathURL = window.location.href;

  return (
    <>
      <Title text="Home" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-3 border border-gray-600 bg-gray-200 p-4 rounded-2xl w-fit"
      >
        <FormInput
          label="Ingresa la URL"
          type="text"
          placeholder="https://ejemplo.com"
          {...register("url", {
            required,
            pattern: patternURL,
          })}
          error={errors.url}
        >
          <FormError error={errors.url} />
        </FormInput>

        {newOriginId ? (
          <Button
            type="submit"
            text="Editar URL"
            color="yellow"
            loading={loading.updateData}
          />
        ) : (
          <Button
            type="submit"
            text="Guardar URL"
            color="blue"
            loading={loading.addData}
          />
        )}
      </form>

      {data.map((item) => (
        <div
          key={item.nanoid}
          className="bg-white block p-6 border dark:text-white border-gray-400 dark:border-gray-700 dark:bg-gray-800 rounded-xl mb-2"
        >
          <p className="mb-3 text-2xl font-semibold tracking-tight leading-8">
            ID: {pathURL}
            {item.nanoid}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            URL: {item.origin}
          </p>
          <div className="flex space-x-2">
            <Button
              type="button"
              text="Delete"
              color="red"
              loading={loading[item.nanoid]}
              onclick={() => handleClickDelete(item.nanoid)}
            />
            <Button
              type="button"
              text="Editar"
              color="green"
              onclick={() => handleClickEdit(item)}
            />
            <Button
              type="button"
              text={copy[item.nanoid] ? "Copiado" : "Copiar"}
              color="purple"
              onclick={() => handleClickCopyt(item.nanoid)}
            />
          </div>
        </div>
      ))}

      {/* {data.map((item) => (
        <div key={item.nanoid}>
          <p>{item.nanoid}</p>
          <p>{item.origin}</p>
          <p>{item.uid}</p>
          {item.enabled ? <p>Habilitado</p> : <p>Deshabilitado</p>}
          <br />
        </div>
      ))} */}
    </>
  );
};

export default Home;
