import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({name}) => <h1>{name}</h1>

const Button = ({handleClick, name}) => <button onClick={handleClick}>{name}</button>

const Statistic = ({name, value}) => <p>{name} {value}</p>

const Statistics = ({feedback}) => {
	const {hyva, neutraali, huono} = feedback
	const yht = (hyva + neutraali + huono)
	if (yht === 0) {
		return (
			<div>ei yhtään palautetta annettu</div>
		)
	}
	const ka = (hyva - huono) / yht
	const pos = (100 * hyva) / yht
	return (
		<div>
			<Statistic name="hyvä" value={hyva} />
			<Statistic name="neutraali" value={neutraali} />
			<Statistic name="huono" value={huono} />
			<Statistic name="keskiarvo" value={ka} />
			<Statistic name="positiivisia" value={pos + "%"} />
		</div>
	)
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			palaute: {
				hyva: 0,
				neutraali: 0,
				huono: 0
			}
		}
	}

	kPalaute = (kentta) => () => {
		this.setState(ws => {
			let ns = {
				palaute: {
					hyva: ws.palaute.hyva,
					neutraali: ws.palaute.neutraali,
					huono: ws.palaute.huono
				}
			}
			ns.palaute[kentta] += 1
			return ns
		})
	}

	render() {
		return (
			<div>
				<Title name="anna palautetta" />
				<div>
					<Button handleClick={this.kPalaute("hyva")} name="hyvä" />
					<Button handleClick={this.kPalaute("neutraali")} name="neutraali" />
					<Button handleClick={this.kPalaute("huono")} name="huono" />
				</div>
				<Title name="statistiikka" />
				<Statistics feedback={this.state.palaute} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
