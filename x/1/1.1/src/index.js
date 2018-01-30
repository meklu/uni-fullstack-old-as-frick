import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.kurssi.name}</h1>
	)
}

const Osa = (props) => {
	return (
		<p>{props.osa.name} {props.osa.count}</p>
	)
}

const Sisalto = (props) => {
	const o = props.kurssi.osat
	return (
		<div>
			<Osa osa={o[0]} />
			<Osa osa={o[1]} />
			<Osa osa={o[2]} />
		</div>
	)
}

const Yhteensa = (props) => {
	const o = props.kurssi.osat.map(osa => osa.count)
	return (
		<p>yhteensä {o[0] + o[1] + o[2]} tehtävää</p>
	)
}

const App = () => {
	const kurssi = {
		name: "Half Stack -sovelluskehitys",
		osat: [
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
	}

	return (
		<div>
			<Otsikko kurssi={kurssi} />
			<Sisalto kurssi={kurssi} />
			<Yhteensa kurssi={kurssi} />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
