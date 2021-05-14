import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import './team.css';

function Team({ players, name, onPlayerChange, onPlayerDelete }) {
  return (
    <div className="team">
      <h1 className="team-title">{name}</h1>
      <ol className="team-players">
        {players.map((player, i) => (
          <Player
            key={i}
            player={player}
            onChange={onPlayerChange}
            onDelete={onPlayerDelete}
          />
        ))}
      </ol>
    </div>
  );
}

Team.propTypes = {
  players: PropTypes.array.isRequired,
  name: PropTypes.string,
};

Team.defaultProps = {
  players: [],
  name: 'The Pylons',
};

export default Team;
