import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({nimi}) => <h1>{nimi}</h1>

const Nappi = ({handleClick, nimi}) => <button onClick={handleClick}>{nimi}</button>

const Statsit = (props) => {
	const {hyva, neutraali, huono} = props.tila.palaute
	return (
		<div>
			<p>hyvä {hyva}</p>
			<p>neutraali {neutraali}</p>
			<p>huono {huono}</p>
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
				<Otsikko nimi="anna palautetta" />
				<div>
					<Nappi handleClick={this.kHyva} nimi="hyvä" />
					<Nappi handleClick={this.kNeutraali} nimi="neutraali" />
					<Nappi handleClick={this.kHuono} nimi="huono" />
				</div>
				<Otsikko nimi="statistiikka" />
				<Statsit tila={this.state} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
