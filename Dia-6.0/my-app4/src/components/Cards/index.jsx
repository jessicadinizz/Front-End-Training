import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state2 = { items2: [], text2: "" };
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.state3 = { items3: [], text3: "" };
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
  }

  render() {
    return (
      <div className="wapper-list">
        <h1 className="title-list">Lista</h1>

        <form
          className="form-list"
          onSubmit={this.handleSubmit}
          onSubmit={this.handleSubmit2}
          onSubmit={this.handleSubmit3}
        >
          <input
            type="text"
            className="input-list"
            placeholder="Nome"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            type="text"
            className="input-list"
            placeholder="Tempo de Preparo"
            id="new-todo"
            onChange={this.handleChange2}
            value={this.state2.text2}
          />
          <input
            type="text"
            className="input-list"
            placeholder="Categoria"
            id="new-todo"
            onChange={this.handleChange3}
            value={this.state3.text3}
          />

          <button className="button-list">Adicionar</button>
        </form>

        <TodoList
          items={this.state.items}
          items2={this.state2.items2}
          items3={this.state3.items3}
        />
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

  handleChange2(e) {
    this.setState({ text2: e.target.value });
  }

  handleSubmit2(e) {
    e.preventDefault();
    if (this.state2.text2.length === 0) {
      alert("Preencha o campo com algo válido");
      return;
    }
    const newItem2 = {
      text2: this.state2.text2,
      id: Date.now2(),
    };
    this.setState((state2) => ({
      items2: state2.items2.concat(newItem2),
      text2: "",
    }));
  }

  handleChange3(e) {
    this.setState({ text3: e.target.value });
  }

  handleSubmit3(e) {
    e.preventDefault();
    if (this.state3.text3.length === 0) {
      alert("Preencha o campo com algo válido");
      return;
    }
    const newItem3 = {
      text3: this.state3.text3,
      id: Date.now3(),
    };
    this.setState((state3) => ({
      items3: state3.items3.concat(newItem3),
      text3: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-contents">
        {this.props.items.map((item) => (
          <p className="items-list" key={item.id}>
            {item.text}
          </p>
        ))}
        {this.props.items2.map((item2) => (
          <p className="items-list" key={item2.id}>
            {item2.text2}
          </p>
        ))}
        {this.props.items3.map((item3) => (
          <p className="items-list" key={item3.id}>
            {item3.text3}
          </p>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));

export default List;
