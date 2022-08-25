import { useState, useMemo, useCallback } from 'react';
import {
  Container,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import AppBar from '../components/AppBar';
import Team from '../components/Team';
import { shortId } from '../utils/crypt';
import useStickyState from '../hooks/useStickyState';
import { shuffle, groupBy, isEqual, last } from 'lodash';

function createPlayer(defaultName) {
  const id = shortId();
  const name = defaultName ? defaultName : 'New Player';
  return { id, name, gp: 0 };
}

export default function Home({
  defaultPlayers,
  defaultTeamSize,
  defaultTeamCount,
  teamColors,
}) {
  const [players, setPlayers] = useStickyState(defaultPlayers, 'players');
  const [teamSize, setTeamSize] = useStickyState(defaultTeamSize, 'teamSize', 'number');
  const [teamCount, setTeamCount] = useStickyState(
    defaultTeamCount,
    'teamCount',
    'number',
  );
  const [gameHistory, setGameHistory] = useState([]);

  const gameCount = gameHistory.length;

  const handleCreateGame = useCallback(
    (_, retries = 0) => {
      const pinnedPlayers = players.filter(p => Number.isFinite(p.pinned));

      const maxPlayers = teamCount * teamSize;
      const shuffledPlayers = shuffle(players)
        .sort((a, b) => a.gp - b.gp)
        .filter(p => !Number.isFinite(p.pinned));

      const mutableShuffledPlayers = shuffledPlayers.slice();

      const replacedPinnedPlayers = new Array(players.length).fill().map((_, i) => {
        const maybePinnedPlayer = pinnedPlayers.find(p => p.pinned === i);
        if (maybePinnedPlayer) return maybePinnedPlayer;
        return mutableShuffledPlayers.shift();
      });

      const newHistory = replacedPinnedPlayers.map(d => d.id);
      const isRepeat = isEqual(newHistory, last(gameHistory));

      if (isRepeat && retries < 10) {
        return handleCreateGame(_, retries + 1);
      }

      retries = 0;

      const newGamePlayers = replacedPinnedPlayers.map((player, i) => {
        return {
          ...player,
          gp:
            i < maxPlayers || Number.isFinite(player.pinned)
              ? player.gp + 1
              : player.gp,
        };
      });

      setPlayers(newGamePlayers);
      setGameHistory(d => [...d, newHistory]);
    },
    [gameHistory, players, setPlayers, teamCount, teamSize],
  );

  const teams = useMemo(() => {
    if (!gameCount) return { undefined: players };
    return new Array(teamCount + 1).fill().map((_, i) => {
      const start = i * teamSize;
      const end = start + teamSize;
      return players.slice(start, end);
    });
  }, [gameCount, players, teamCount, teamSize]);

  function handleChangePlayerCount(count) {
    const diff = count - players.length;
    if (diff === 0) return;
    if (diff < 0) return setPlayers(state => state.slice(0, diff));

    const newPlayers = new Array(diff).fill().map(createPlayer);

    setGameHistory([]);
    setPlayers(state => [...newPlayers, ...state].map(d => ({ ...d, gp: 0 })));
  }

  function handleAddPlayer() {
    handleChangePlayerCount(players.length + 1);
  }

  function handleChangePlayerName(playerId, name) {
    const newPlayers = players.map(d => {
      if (d.id !== playerId) return d;
      return { ...d, name };
    });

    setPlayers(newPlayers);
  }

  function handleDeletePlayer(playerId) {
    setPlayers(state => state.filter(d => d.id !== playerId));
  }

  function handlePinPlayer(playerId) {
    const newPlayers = players.map((d, i) => {
      if (d.id !== playerId) return d;
      return { ...d, pinned: i };
    });

    setPlayers(newPlayers);
  }

  function handleUnPinPlayer(playerId) {
    const newPlayers = players.map(d => {
      if (d.id !== playerId) return d;
      return { ...d, pinned: undefined };
    });

    setPlayers(newPlayers);
  }

  function handleReset() {
    setPlayers(defaultPlayers);
    setTeamSize(defaultTeamSize);
    setTeamCount(defaultTeamCount);
    setGameHistory([]);
  }

  return (
    <Container pb="100px">
      <header>
        <HStack spacing={4} align="center" justify="center" pt={4}>
          <Stat align="center">
            <StatLabel>Player Count</StatLabel>
            <StatNumber>{players.length}</StatNumber>
          </Stat>

          <Stat align="center">
            <StatLabel>Games Played</StatLabel>
            <StatNumber>{gameCount}</StatNumber>
          </Stat>
        </HStack>
      </header>

      <main>
        <VStack spacing={8} align="stretch">
          {Object.keys(teams).map(key => {
            const teamIndex = Number.parseInt(key, 10);
            const isBench = teamIndex >= teamCount;
            const name = isBench ? 'Bench' : `Team ${teamIndex + 1}`;
            const players = teams[key];
            const color = isBench ? 'gray.400' : teamColors[teamIndex];
            return (
              <Team
                key={name}
                name={name}
                players={players}
                color={color}
                onChangePlayerName={handleChangePlayerName}
                onDeletePlayer={handleDeletePlayer}
                onPinPlayer={handlePinPlayer}
                onUnPinPlayer={handleUnPinPlayer}
              />
            );
          })}
        </VStack>
      </main>

      <AppBar
        maxTeamCount={teamColors.length}
        playerCount={players.length}
        teamCount={teamCount}
        teamSize={teamSize}
        onChangeTeamSize={val => setTeamSize(+val)}
        onChangeTeamCount={val => setTeamCount(+val)}
        onChangePlayerCount={handleChangePlayerCount}
        onReset={handleReset}
        onAddPlayer={handleAddPlayer}
        onCreateGame={handleCreateGame}
      />
    </Container>
  );
}

export async function getStaticProps() {
  const defaultPlayers = new Array(8).fill().map((_, i) => {
    return createPlayer(`Player ${i + 1}`);
  });
  const defaultTeamSize = 3;
  const defaultTeamCount = 2;
  const teamColors = [
    'red.600',
    'blue.600',
    'green.600',
    'purple.600',
    'pink.500',
    'yellow.400',
    'teal.400',
    'cyan.400',
    'orange.500',
    'gray.800',
    'magenta',
    'lime',
  ];

  return {
    props: {
      defaultPlayers,
      defaultTeamSize,
      defaultTeamCount,
      teamColors,
    },
  };
}
