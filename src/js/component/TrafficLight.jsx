import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
  const alternativColor = () => {
    if (color === "rojo") {
      setColor("verde");
    } else if (color === "verde") {
      setColor("amarillo");
    } else if (color === "amarillo") {
      setColor("rojo");
    } else {
      setColor("rojo"); // Comienza en rojo si no hay color
    }
  };

  const newColor = () => {
    setColor("púrpura")
  }

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
         <button
            className={`bg-purple mt-3 ${color === "púrpura" ? "light4" : ""}`}
            onClick={newColor}
          ></button>
      </div>
      <div>
        <button className= 'alternate' onClick={alternativColor}>alternate</button>
      </div>
    </div>
  );
};

export default TrafficLight;
