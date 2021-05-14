import React from 'react';
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './player.css';

function Player({ player, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = useCallback(function () {
    setIsEditing(state => !state);
  }, []);

  const handleDelete = useCallback(
    function () {
      setIsEditing(false);
      onDelete(player.id);
    },
    [onDelete, player.id],
  );

  if (!isEditing)
    return (
      <li className="player" onClick={handleEditToggle}>
        {player.name}
      </li>
    );

  return (
    <li className="player">
      <input
        className="player-edit-input"
        type="text"
        defaultValue={player.name}
        onFocus={({ target }) =>
          target.setSelectionRange(0, target.value.length)
        }
        onChange={event => onChange(player.id, event.target.value)}
        autoFocus={true}
      />
      <div className="player-edit-controls">
        <button className="player-edit-done" onClick={handleEditToggle}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <button className="player-edit-delete" onClick={handleDelete}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
};

Player.defaultProps = {
  name: 'New Player',
};

export default Player;
