import React from 'react'
import Team from './components/team'

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Greg' },
        { id: 4, name: 'Dana' },
        { id: 5, name: 'Christian' },
        { id: 6, name: 'Nathan' },
      ]
    }

    this.handleShuffle = this.handleShuffle.bind(this)
    this.handlePlayerChange = this.handlePlayerChange.bind(this)
    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
    })
  }

  handlePlayerChange(id, value) {
    const { players } = this.state
    const player = players.find((player) => player.id === id)

    player.name = value

    this.setState({
      players: players
    })
  }

  handlePlayerAdd() {
    const { players } = this.state
    const newPlayer = { id: Date.now(), name: 'New Player'}
    players.push(newPlayer)

    this.setState({
      players: players
    })
  }

  render(){
    const { players } = this.state
    const half = Math.ceil(players.length/2)
    const team1 = players.slice(0, half)
    const team2 = players.slice(half)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} onPlayerChange={this.handlePlayerChange}/>
          <Team name='renegades' players={team2} onPlayerChange={this.handlePlayerChange}/>
        </div>
        <button onClick={this.handleShuffle}>
          Shuffle!
        </button>
        <button onClick={this.handlePlayerAdd}>
          Add Player
        </button>
      </div>
    );
  }
}

export default App;
