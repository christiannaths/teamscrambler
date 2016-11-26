import React from 'react'
import Team from './components/team'

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

  render(){
    const { players } = this.state
    const team1 = players.slice(0, 3)
    const team2 = players.slice(3)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} />
          <Team name='renegades' players={team2} />
        </div>
        <button>Shuffle!</button>
      </div>
    );
  }
}

export default App;
