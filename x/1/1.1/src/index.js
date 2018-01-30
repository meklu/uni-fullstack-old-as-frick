import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.name}</h1>
	)
}

const Osa = (props) => {
	return (
		<p>{props.osa.name} {props.osa.count}</p>
	)
}

const Sisalto = (props) => {
	return (
		<div>
			<Osa osa={props.osa1} />
			<Osa osa={props.osa2} />
			<Osa osa={props.osa3} />
		</div>
	)
}

const Yhteensa = (props) => {
	return (
		<p>yhteensä {props.count} tehtävää</p>
	)
}

const App = () => {
	const kurssi = "Half Stack -sovelluskehitys"
	const osa1 = {
		name: "Reactin perusteet",
		count: 10
	}
	const osa2 = {
		name: "Tiedonvälitys propseilla",
		count: 7
	}
	const osa3 = {
		name: "Komponenttien tila",
		count: 14
	}

	return (
		<div>
			<Otsikko name={kurssi} />
			<Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
			<Yhteensa count={osa1.count + osa2.count + osa3.count} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
