import logo from "../logo1.png";
import React from "react";

function Showhidden() {
  const [show, setShow] = React.useState(true);
  return (
    <div className="wrapper-card">
      {show ? (
        <div class="card-info">
          <h1 className="card-title">SERRA JUNIOR ENGENHARIA</h1>{" "}
          <img className="card-image" src={logo}></img>{" "}
        </div>
      ) : null}
      <button className="card-button" onClick={() => setShow(!show)}>
        {show ? "Esconder card" : "Mostrar card"}
      </button>
    </div>
  );
}
export default Showhidden;
