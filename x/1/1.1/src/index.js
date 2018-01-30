import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.name}</h1>
	)
}

const Sisalto = (props) => {
	return (
		<p>{props.name} {props.count}</p>
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
			<Sisalto name={osa1} count={tehtavia1} />
			<Sisalto name={osa2} count={tehtavia2} />
			<Sisalto name={osa3} count={tehtavia3} />
			<Yhteensa count={tehtavia1 + tehtavia2 + tehtavia3} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
