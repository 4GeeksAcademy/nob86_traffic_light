import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
  const alternativColor = () => {
    if (color === "rojo") setColor("amarillo");
  };

  const [color, setColor] = useState("");
  return (
    <div className="container bg-dark d-flex flex-column align-items-center p-4 mt-5">
      <div>
        <button
          className={`bg-danger mb-3 ${color === "rojo" ? "light1" : ""}`}
          onClick={() => setColor("rojo")}
        ></button>
        <button
          className={`bg-warning mb-3 ${color === "amarillo" ? "light2" : ""}`}
          onClick={() => setColor("amarillo")}
        ></button>
        <button
          className={`bg-success ${color === "verde" ? "light3" : ""}`}
          onClick={() => setColor("verde")}
        ></button>
      </div>
	  <div></div>
    </div>
  );
};

export default TrafficLight;
