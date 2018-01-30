import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({name}) => <h1>{name}</h1>

const Button = ({handleClick, name}) => <button onClick={handleClick}>{name}</button>

const Statistic = ({name, value}) => <p>{name} {value}</p>

const Statistics = (props) => {
	const {hyva, neutraali, huono} = props.feedback
	const ka = (hyva - huono) / (hyva + neutraali + huono)
	const pos = (100 * hyva) / (hyva + neutraali + huono)
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

	kPalaute = (kentta) => {
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

	kHyva = () => {
		this.kPalaute("hyva")
	}

	kNeutraali = () => {
		this.kPalaute("neutraali")
	}

	kHuono = () => {
		this.kPalaute("huono")
	}

	render() {
		return (
			<div>
				<Title name="anna palautetta" />
				<div>
					<Button handleClick={this.kHyva} name="hyvä" />
					<Button handleClick={this.kNeutraali} name="neutraali" />
					<Button handleClick={this.kHuono} name="huono" />
				</div>
				<Title name="statistiikka" />
				<Statistics feedback={this.state.palaute} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
