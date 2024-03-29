import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Box } from '@chakra-ui/react';
import Player from '../components/Player';

function Team({
  name,
  players,
  color,
  onChangePlayerName,
  onDeletePlayer,
  onPinPlayer,
  onUnPinPlayer,
}) {
  return (
    <Box mt={4}>
      <Heading as="h3" size="xs" mb={2} fontWeight="semibold" textTransform="uppercase">
        {name}
      </Heading>

      {players.map(player => (
        <Player
          key={player.id}
          name={player.name}
          id={player.id}
          gamesPlayed={player.gp}
          isPinned={Number.isFinite(player.pinned)}
          onChange={onChangePlayerName}
          onDelete={onDeletePlayer}
          onPinPlayer={onPinPlayer}
          onUnPinPlayer={onUnPinPlayer}
          color={color}
        />
      ))}
    </Box>
  );
}

Team.defaultProps = {
  players: [],
};

Team.propTypes = {
  name: PropTypes.string,
  players: PropTypes.array,
  onChangePlayerName: PropTypes.func.isRequired,
};

export default Team;
