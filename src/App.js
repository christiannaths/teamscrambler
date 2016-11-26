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
        { name: 'Mark' },
        { name: 'Ben' },
        { name: 'Greg' },
        { name: 'Dana' },
        { name: 'Christian' },
        { name: 'Nathan' },
      ]
    }
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
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
          <Team name='all-stars' players={team1} />
          <Team name='renegades' players={team2} />
        </div>
        <button onClick={this.handleShuffle.bind(this)}>
          Shuffle!
        </button>
      </div>
    );
  }
}

export default App;
