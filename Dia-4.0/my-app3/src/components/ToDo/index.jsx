import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="wapper-list">
        <h1 className="title-list">Lista</h1>

        <form className="form-list" onSubmit={this.handleSubmit}>
          <input
            className="input-list"
            placeholder="Nome"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <button className="button-list">Adicionar</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      alert("Preencha o campo com algo válido");
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="items-list">
        {this.props.items.map((item) => (
          <p key={item.id}>
            <strong>Tarefa</strong>:{item.text}
          </p>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));

export default List;
