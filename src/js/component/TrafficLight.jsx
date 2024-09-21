import React, {useState} from "react";


//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState("")
	return (
		<div>
		<button className= {`bg-danger ${color === 'rojo' ? "light1" : ""}`} onClick={() => setColor('rojo')}></button>
		<button className= {`bg-warning ${color === 'amarillo' ? "light2" : ""}`} onClick={() => setColor('amarillo')}></button>
		<button className= {`bg-success ${color === 'verde' ? "light3" : ""}`} onClick={() => setColor('verde')}></button>
		</div>
	);
};

export default TrafficLight;
