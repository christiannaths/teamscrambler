import React from 'react';

const Player = ({player}) => (
  <li className="player">{player.name}</li>
)

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
}

Player.defaultProps = {
  name: 'New Player',
}

export default Player
