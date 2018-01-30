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
			<Osa osa={props.osat[0]} />
			<Osa osa={props.osat[1]} />
			<Osa osa={props.osat[2]} />
		</div>
	)
}

const Yhteensa = (props) => {
	const o = props.osat.map(osa => osa.count)
	return (
		<p>yhteensä {o[0] + o[1] + o[2]} tehtävää</p>
	)
}

const App = () => {
	const kurssi = "Half Stack -sovelluskehitys"
	const osat = [
		{
			name: "Reactin perusteet",
			count: 10
		},
		{
			name: "Tiedonvälitys propseilla",
			count: 7
		},
		{
			name: "Komponenttien tila",
			count: 14
		}
	]

	return (
		<div>
			<Otsikko name={kurssi} />
			<Sisalto osat={osat} />
			<Yhteensa osat={osat} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
