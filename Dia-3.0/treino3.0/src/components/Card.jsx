function Card({ nome, idade, time, sobrenome }) {
  return (
    <div className="wrap-card">
      <h1 className="card-name">{nome}</h1>
      <div className="card-info">
        <p className="card-text">Idade: {idade}</p>
        <p className="card-text">Time: {time}</p>
        <p className="card-text">Sobrenome: {sobrenome}</p>
      </div>
    </div>
  );
}

export default Card;
