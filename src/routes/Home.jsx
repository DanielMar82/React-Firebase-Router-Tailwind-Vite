import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import Title from "../components/Title";
import { useFirestore } from "../hooks/useFirestore";
import Button from "../components/Button";
import { nanoid } from "nanoid";

const Home = () => {
  const { user } = useContext(UserContext);

  const [error, setError] = useState();
  const {
    data,
    error: dataError,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
  } = useFirestore();

  const [text, setText] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newOriginId) {
      await updateData(newOriginId, text);
      setNewOriginId("");
      setText("");
      return;
    }

    if (!text) {
      console.log("Texto vacio");
      return;
    }
    addData(text);
    setText("");
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
  };

  const handleClickEdit = async (item) => {
    setText(item.origin);
    setNewOriginId(item.nanoid);
  };

  return (
    <>
      <Title text="Home" />

      <form
        onSubmit={handleSubmit}
        className="mb-3 bg-amber-200 p-4 rounded-2xl w-fit"
      >
        <input
          placeholder="ex: http://bluuweb.org"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
        <div key={item.nanoid} className="p-2 bg-green-200 mb-3 rounded-xl">
          <p>ID: {item.nanoid}</p>
          <p>URL: {item.origin}</p>
          <p>USER: {item.uid}</p>
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
          <br />
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
