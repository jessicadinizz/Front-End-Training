import "./styles.css";
import React, { useState } from "react";

function List() {
  const [newName, setNewName] = useState("");
  const [Name, setName] = useState([]);
  const [newTime, setNewTime] = useState("");
  const [Time, setTime] = useState([]);
  const [newClass, setNewClass] = useState("");
  const [Class, setClass] = useState([]);

  function handleNew(e) {
    e.preventDefault();
    setName((prevState) => {
      {
        setNewName("");
      }
      return [newName, ...prevState];
    });
    e.preventDefault();
    setTime((prevState) => {
      {
        setNewTime("");
      }
      return [newTime, ...prevState];
    });
    e.preventDefault();
    setClass((prevState) => {
      {
        setNewClass("");
      }
      return [newClass, ...prevState];
    });
  }

  return (
    <div className="wapper-list">
      <div className="title-and-form">
        <h1 className="title-list">Receitas</h1>
        <form className="form-list" onSubmit={handleNew}>
          <input
            className="input-list"
            placeholder="Nome"
            id="new-Name"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />
          <input
            className="input-list"
            placeholder="Tempo de Preparo"
            id="new-Time"
            onChange={(e) => setNewTime(e.target.value)}
            value={newTime}
          />
          <input
            className="input-list"
            placeholder="Categoria"
            id="new-Class"
            onChange={(e) => setNewClass(e.target.value)}
            value={newClass}
          />

          <button className="button-list">Adicionar</button>
        </form>
      </div>

      <ul>
        <div className="list-contents">
          {Name.map((nome) => (
            <p className="items-list" key={nome}>
              <span>{nome}</span>
            </p>
          ))}
          {Time.map((tempo) => (
            <p className="items-list" key={tempo}>
              <span>{tempo}</span>
            </p>
          ))}

          {Class.map((classe) => (
            <p className="items-list" key={classe}>
              <span>{classe}</span>
            </p>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default List;
