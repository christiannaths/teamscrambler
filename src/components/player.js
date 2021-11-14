import React from 'react';
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
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
        <Icon name="shirt" className="icon" />
        <span className="name">
          {player.name} ({player.gp})
        </span>
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
          <Icon name="checkmark" />
        </button>
        <button className="player-edit-delete" onClick={handleDelete}>
          <Icon name="trash" />
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
