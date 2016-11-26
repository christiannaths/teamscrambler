import React from 'react';
import Player from './player'

const Team = ({players, name}) => {

  const playerList = players.map((player, i) => (
    <Player key={i} player={player} />
  ))

  return (
    <div className="team">
      <h1>{name}</h1>
      <ol>{playerList}</ol>
    </div>
  )
}

Team.propTypes = {
  players: React.PropTypes.array.isRequired,
  name: React.PropTypes.string,
}

Team.defaultProps = {
  players: [],
  name: 'The Pylons'
}

export default Team
