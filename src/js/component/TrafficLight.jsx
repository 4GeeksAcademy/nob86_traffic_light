// import React, { useState } from "react";

// //create your first component
// const TrafficLight = () => {
//   const [color, setColor] = useState("");
//   const [purple, setPurple] = useState(false);

//   const alternativColor = () => {
//     if (color === "rojo") {
//       setColor("verde");
//     } else if (color === "verde") {
//       setColor("amarillo");
//     } else if (color === "amarillo") {
//       setColor("púrpura"); // Cambiar a púrpura en lugar de rojo
//     } else if (color === "púrpura") {
//       setColor("rojo"); // Volver a rojo después de púrpura
//     } else {
//       setColor("rojo");
//     }
//     setPurple(true); // Mostrar el botón púrpura
//   };

//   const newColor = () => {
//     setColor("púrpura");
//   };

//   return (
//     <div className="container bg-dark d-flex flex-column align-items-center p-4 mt-5">
//       <div>
//         <button
//           className={`bg-danger mb-3 ${color === "rojo" ? "light1" : ""}`}
//           onClick={() => setColor("rojo")}
//         ></button>
//         <button
//           className={`bg-warning mb-3 ${color === "amarillo" ? "light2" : ""}`}
//           onClick={() => setColor("amarillo")}
//         ></button>
//         <button
//           className={`bg-success ${color === "verde" ? "light3" : ""}`}
//           onClick={() => setColor("verde")}
//         ></button>
//         <button
//           className={`bg-purple mt-3 ${color === "púrpura" ? "light4" : ""}`}
//           onClick={newColor}
//         ></button>
//       </div>
//       <div>
//         <button className="alternate" onClick={alternativColor}>
//           alternate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrafficLight;

import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("rojo");
  const [showPurple, setShowPurple] = useState(false); // Estado para mostrar púrpura
  const [cycleComplete, setCycleComplete] = useState(false); // Estado para controlar la vuelta completa

  const alternativColor = () => {
    if (color === "rojo") {
      setColor("verde");
    } else if (color === "verde") {
      setColor("amarillo");
    } else if (color === "amarillo") {
      // Al completar la vuelta (rojo -> verde -> amarillo), se habilita púrpura
      setCycleComplete(true); 
      setColor("rojo");
    } else if (cycleComplete && color === "rojo") {
      // Si ya se completó una vuelta y el color es rojo, cambia a púrpura en la siguiente vuelta
      setColor("púrpura");
    } else if (color === "púrpura") {
      // Después de púrpura, volver al ciclo normal
      setColor("rojo");
    }
  };

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
        {cycleComplete && ( // Solo mostrar púrpura después de completar la vuelta
          <button
            className={`bg-purple mt-3 ${color === "púrpura" ? "light4" : ""}`}
            onClick={() => setColor("púrpura")}
          ></button>
        )}
      </div>
      <div>
        <button className="alternate" onClick={alternativColor}>
          alternate
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
