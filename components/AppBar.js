import PropTypes from 'prop-types';
import { Box, HStack, StackDivider, IconButton, Container } from '@chakra-ui/react';
// import { IoIosMore as SettingsIcon } from 'react-icons/io';
import {
  IoShuffle as ShuffleIcon,
  IoSettingsSharp as SettingsIcon,
  IoShirtSharp as PlayerIcon,
  // IoTimeSharp as TimerIcon,
} from 'react-icons/io5';
import AppMenu from '../components/AppMenu';
// import Stopwatch from '../components/Stopwatch';
import StackedButton from '../ui/StackedButton';

function AppBar({
  teamSize,
  teamCount,
  maxTeamCount,
  playerCount,
  onChangeTeamSize,
  onChangeTeamCount,
  onChangePlayerCount,
  onReset,
  onAddPlayer,
  onCreateGame,
}) {
  return (
    <Box
      as="nav"
      py={2}
      position="fixed"
      left="0px"
      bottom="0px"
      bg="white"
      width="100%"
      boxShadow="0 -1px 10px rgba(0, 0, 0, 0.1)"
    >
      <Container>
        <HStack divider={<StackDivider borderColor="gray.200" />}>
          <AppMenu
            ButtonIcon={SettingsIcon}
            teamSize={teamSize}
            teamCount={teamCount}
            maxTeamCount={maxTeamCount}
            playerCount={playerCount}
            onChangeTeamSize={onChangeTeamSize}
            onChangeTeamCount={onChangeTeamCount}
            onChangePlayerCount={onChangePlayerCount}
            onReset={onReset}
          />

          {/* <Stopwatch /> */}

          <StackedButton
            variant="ghost"
            TopIcon={PlayerIcon}
            onClick={onAddPlayer}
            label="Add Player"
          />
        </HStack>

        <IconButton
          size="lg"
          fontSize="4xl"
          isRound
          icon={<ShuffleIcon />}
          bg="yellow.400"
          color="gray.700"
          onClick={onCreateGame}
          borderWidth="1.5px"
          borderColor="currentColor"
          boxShadow="lg"
          _focus={{ outline: 'none', bg: 'yellow.400' }}
          position="absolute"
          top="-10px"
          right={8}
          transform="scale(1.5)"
        />
      </Container>
    </Box>
  );
}

AppBar.defaultProps = {};

AppBar.propTypes = {
  children: PropTypes.any,
};

export default AppBar;
