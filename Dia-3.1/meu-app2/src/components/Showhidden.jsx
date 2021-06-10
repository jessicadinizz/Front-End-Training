import logo from "../assets/logo1.png";
import React from "react";

function Showhidden() {
  const [show, setShow] = React.useState(true);
  return (

    <div className="wrapper-card">
      {show ? (
        <div className="wrap-info">
          <h1 className="card-title">SERRA JUNIOR ENGENHARIA</h1>{" "}
          <img className="card-image" src={logo}></img>{" "}
        </div>
      ) : null}

      <div className="wrap-button">
        <button className="card-button" onClick={() => setShow(!show)}>
          {show ? "Esconder Card" : "Mostrar Card"}
        </button>
      </div>
    </div>
  );
}
export default Showhidden;
