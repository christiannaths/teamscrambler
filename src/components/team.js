import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Icon from './Icon';
import { SketchPicker } from 'react-color';
import './team.css';

function Team({
  players,
  name,
  color,
  onPlayerChange,
  onPlayerDelete,
  onColorChange,
}) {
  const [isTeamColorPickerVisible, setIsTeamColorPickerVisible] =
    React.useState(false);

  return (
    <div className="team">
      <h1 className="team-title">
        <button
          className="team-color-picker-button"
          onClick={() => {
            setIsTeamColorPickerVisible(!isTeamColorPickerVisible);
          }}
        >
          <Icon name="shirt" className="icon" style={{ fill: color }} />
          {isTeamColorPickerVisible && (
            <div
              style={{
                position: 'absolute',
                zIndex: 1,
              }}
            >
              <SketchPicker
                color={color}
                onChangeComplete={x => {
                  onColorChange(x.hex);
                }}
              />
            </div>
          )}
        </button>
        {name}
      </h1>
      <ol className="team-players">
        {players.map((player, i) => (
          <Player
            key={i}
            player={player}
            onChange={onPlayerChange}
            onDelete={onPlayerDelete}
            color={color}
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
