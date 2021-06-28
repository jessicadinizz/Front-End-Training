import "./styles.css";
import React, { useState } from "react";
import Lixeira from "../../lixeira.png";

function List() {
  const [newName, setNewName] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newClass, setNewClass] = useState("");
  const [Item, setItem] = useState([]);

  function addNew(e) {
    e.preventDefault();
    if (!newName || !newTime || !newClass){
      return alert('Por favor, preencha todos os campos!')
    }

    const newObj = {
      name: newName,
      time: newTime,
      category: newClass,
      id: Math.random(),
    };

    setItem([...Item, newObj]);
    setNewName("")
    setNewTime("")
    setNewClass("")
  }

  function removeItem(id) {
    const filteredNewListItem = Item.filter(function (items) {
      return items.id !== id;
    });

    setItem(filteredNewListItem);
  }

  return (
    <div className="wapper-list">
      <div className="title-and-form">
        <h1 className="title-list">Receitas</h1>
          <form className="form-list" onSubmit={addNew}>
            <input
              className="input-list"
              type="text"
              placeholder="Nome"
              id="new-Name"
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
            />
            <input
              className="input-list"
              type="text"
              placeholder="Tempo de preparo"
              id="new-Time"
              onChange={(e) => setNewTime(e.target.value)}
              value={newTime}
            />
            <input
              className="input-list"
              type="text"
              placeholder="Categoria"
              id="new-Class"
              onChange={(e) => setNewClass(e.target.value)}
              value={newClass}
            />

            <button className="button-list">
              Adicionar
            </button>
          </form>
      </div>

      <ul>
        <div className="list-contents">
          {Item.map((item) => {
            return (
              <div className="items-list" key={item}>
                <div className="img-form">
                  <button className="erase-button-list" onClick={() => removeItem(item.id)}>
                    <img className="erase-list" src={Lixeira}></img>
                  </button>
                </div>
                <div className="first-item">
                  <p className="p-name-item">{item.name}</p>
                </div>
                <div className="second-item">
                  <p className="p-item">{item.time}</p>
                  <p className="p-item">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default List;