import React, {useState} from "react";


//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState("")
	return (
		<div>
		<button className={`${color === 'rojo' ? "light" : ""}`} onClick={() => setColor('rojo')}>rojo</button>
		<button className={`${color === 'amarillo' ? "light" : ""}`} onClick={() => setColor('amarillo')}>amarillo</button>
		<button className={`${color === 'verde' ? "light" : ""}`} onClick={() => setColor('verde')}>verde</button>
		</div>
	);
};

export default TrafficLight;
