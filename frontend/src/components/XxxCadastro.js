import React, { useState } from "react";
// import axios from 'axios'

function XxxCadastro() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const create = () => {
    if (!title && !description) return console.error("Campos obrigatórios!");

    const data = {
      title,
      description,
    };

    fetch("http://localhost:5000/migrante/novo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <form onSubmit={() => create()}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default XxxCadastro;
