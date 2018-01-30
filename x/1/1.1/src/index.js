import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.name}</h1>
	)
}

const Osa = (props) => {
	return (
		<p>{props.name} {props.count}</p>
	)
}

const Sisalto = (props) => {
	return (
		<div>
			<Osa name={props.osa1} count={props.tehtavia1} />
			<Osa name={props.osa2} count={props.tehtavia2} />
			<Osa name={props.osa3} count={props.tehtavia3} />
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
	const osa1 = "Reactin perusteet"
	const tehtavia1 = 10
	const osa2 = "Tiedonvälitys propseilla"
	const tehtavia2 = 7
	const osa3 = "Komponenttien tila"
	const tehtavia3 = 14

	return (
		<div>
			<Otsikko name={kurssi} />
			<Sisalto osa1={osa1} osa2={osa2} osa3={osa3} tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} />
			<Yhteensa count={tehtavia1 + tehtavia2 + tehtavia3} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
