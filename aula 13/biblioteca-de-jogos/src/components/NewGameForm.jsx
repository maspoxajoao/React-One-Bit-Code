import { useState } from "react";
import PropyTypes from "prop-types";
import TextImput from "./TextInput";

NewGameForm.PropyTypes = {
  addGame: PropyTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <TextImput id="title" label="Titulo:" value={title} setValue={setTitle}/>
        <TextImput id="cover" label="Capa:" value={cover} setValue={setCover}/>
      <button type="submit">Adicionar</button>
    </form>
  );
}
