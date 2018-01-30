import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Score = ({votes, anecdote}) => {
	let score = votes[anecdote]
	if (typeof(score) !== 'number') {
		score = 0
	}
	return (
		<div>has {score} votes</div>
	)
}

const Anecdote = ({anecdotes, anecdote, votes}) => {
	return (
		<div>
			{anecdotes[anecdote]}
			<Score votes={votes} anecdote={anecdote} />
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 0,
			votes: []
		}
	}

	vote = (anecdote) => () => {
		const votes = [...this.state.votes]
		if (typeof(votes[anecdote]) !== 'number') {
			votes[anecdote] = 0
		}
		votes[anecdote] = parseInt(votes[anecdote], 10) + 1
		this.setState({votes: votes})
	}

	randomize = () => {
		const select = Math.floor(this.props.anecdotes.length * Math.random())
		this.setState({selected: select})
	}

	highscore = (votes) => {
		let highest_i = 0;
		let highest = -1;
		votes.forEach((v, k, a) => {
			const score = v
			if (score > highest) {
				highest = score
				highest_i = k
			}
		})
		return highest_i
	}

	render() {
		return (
			<div>
				<Anecdote anecdotes={this.props.anecdotes} anecdote={this.state.selected} votes={this.state.votes} />
				<Button handleClick={this.vote(this.state.selected)} text="vote" />
				<Button handleClick={this.randomize} text="next anecdote" />
				<h1>anecdote with most votes</h1>
				<Anecdote anecdotes={this.props.anecdotes} anecdote={this.highscore(this.state.votes)} votes={this.state.votes} />
			</div>
		)
	}
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
