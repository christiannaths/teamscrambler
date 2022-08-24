import { useState, useMemo, useCallback } from 'react';
import {
  Container,
  Box,
  VStack,
  HStack,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { IoShuffle, IoShirt } from 'react-icons/io5';
import AppMenu from '../components/AppMenu';
import Team from '../components/Team';
import { shortId } from '../utils/crypt';
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
}) {
  const [players, setPlayers] = useState(defaultPlayers);
  const [teamSize, setTeamSize] = useState(defaultTeamSize);
  const [teamCount, setTeamCount] = useState(defaultTeamCount);
  const [gameHistory, setGameHistory] = useState([]);

  const createGame = useCallback(
    (_, retries = 0) => {
      const maxPlayers = teamCount * teamSize;
      const shuffledPlayers = shuffle(players)
        .sort((a, b) => a.gp - b.gp)
        .map((player, i) => {
          const teamNum = (i % teamCount) + 1;
          player.gp = i < maxPlayers ? player.gp + 1 : player.gp;
          player.team = i < maxPlayers ? `Team ${teamNum}` : 'Bench';
          return player;
        });

      const newHistory = shuffledPlayers.map(d => d.id);
      const isRepeat = isEqual(newHistory, last(gameHistory));

      if (isRepeat && retries < 10) {
        return createGame(_, retries + 1);
      }

      retries = 0;

      const newGamePlayers = shuffledPlayers.map((player, i) => {
        player.gp = i < maxPlayers ? player.gp + 1 : player.gp;
        player.team = i < maxPlayers ? i % teamCount : undefined;
        return player;
      });

      setPlayers(newGamePlayers);
      setGameHistory(d => [...d, newHistory]);
    },
    [gameHistory, players, teamCount, teamSize],
  );

  const teams = useMemo(() => {
    return groupBy(players, d => d.team);
  }, [players]);

  function handleChangePlayerCount(count) {
    const diff = count - players.length;
    if (diff === 0) return;
    if (diff < 0) return setPlayers(state => state.slice(0, diff));

    const newPlayers = new Array(diff).fill().map(createPlayer);

    setPlayers(state =>
      [...newPlayers, ...state].map(d => ({ ...d, gp: 0 })),
    );
  }

  function handleAddPlayer() {
    handleChangePlayerCount(players.length + 1);
  }

  return (
    <Container>
      <Box as="header" py={4}>
        <HStack justify="space-between">
          <AppMenu
            teamSize={teamSize}
            teamCount={teamCount}
            playerCount={players.length}
            onChangeTeamSize={val => setTeamSize(val)}
            onChangeTeamCount={val => setTeamCount(val)}
            onChangePlayerCount={handleChangePlayerCount}
          />

          <Button
            variant="ghost"
            leftIcon={<IoShirt />}
            onClick={handleAddPlayer}
          >
            Add Player
          </Button>
        </HStack>
      </Box>
      <main>
        <VStack spacing={8} align="stretch">
          {Object.keys(teams).map(key => {
            const teamIndex = Number.parseInt(key, 10) + 1;
            const name = teamIndex ? `Team ${teamIndex}` : 'Bench';
            const players = teams[key];

            return <Team key={name} name={name} players={players} />;
          })}
        </VStack>
      </main>
      <Box
        as="footer"
        pos="fixed"
        right="4"
        bottom="4"
        transform="scale(1.5)"
        transformOrigin="right bottom"
      >
        <IconButton
          size="lg"
          fontSize="4xl"
          isRound
          icon={<IoShuffle />}
          colorScheme="yellow"
          onClick={createGame}
        ></IconButton>
      </Box>
    </Container>
  );
}

export async function getStaticProps(context) {
  const defaultPlayers = new Array(8).fill().map((_, i) => {
    return createPlayer(`Player ${i + 1}`);
  });
  const defaultTeamSize = 3;
  const defaultTeamCount = 2;

  return {
    props: {
      defaultPlayers,
      defaultTeamSize,
      defaultTeamCount,
    },
  };
}
