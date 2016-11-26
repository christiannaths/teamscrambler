import React from 'react'
import Team from './components/team'

const samplePlayers = [
  { name: 'Mark' },
  { name: 'Ben' },
  { name: 'Greg' },
  { name: 'Dana' },
  { name: 'Christian' },
  { name: 'Nathan' },
]

const sampleTeams = {
  team1: samplePlayers.slice(0, 3),
  team2: samplePlayers.slice(3),
}

const App = () => (
  <div className="game">
    <Team name='all-stars' players={sampleTeams.team1} />
    <Team name='renegades' players={sampleTeams.team2} />
  </div>
)

export default App;
