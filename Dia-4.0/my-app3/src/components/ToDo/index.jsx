import "./styles.css";

import React, { useState } from "react";

function List() {
  const [newTask, setNewTask] = useState("");
  const [items, setItems] = useState([]);

  function handleNewTask(e) {
    e.preventDefault();
    setItems((prevState) => {
      {
        setNewTask("");
      }
      return [newTask, ...prevState];
    });
  }

  return (
    <div className="wapper-list">
      <h1 className="title-list">Lista</h1>
      <form className="form-list" onSubmit={handleNewTask}>
        <input
          className="input-list"
          placeholder="Nome"
          id="new-todo"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />

        <button className="button-list">Adicionar</button>
      </form>

      <ul className="items-list">
        {items.map((item) => (
          <p key={item}>
            <strong>Tarefa</strong>:{item}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default List;
