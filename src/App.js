import React from 'react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Icon from './components/Icon';
import useStickyState from './useStickyState';
import Team from './components/Team';
import logoUrl from './logo.svg';
import ScrambleButton from './components/ScrambleButton';
import * as arrayUtils from './utils/array';

function shuffle(a) {
  const data = [...a];

  for (let i = data.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [data[i - 1], data[j]] = [data[j], data[i - 1]];
  }
  return data;
}

function sortByGp(a, b) {
  return a.gp < b.gp ? -1 : 1;
}

const DEFAULT_PLAYERS = [
  { id: nanoid(), name: 'Player 1', gp: 0 },
  { id: nanoid(), name: 'Player 2', gp: 0 },
  { id: nanoid(), name: 'Player 3', gp: 0 },
  { id: nanoid(), name: 'Player 4', gp: 0 },
  { id: nanoid(), name: 'Player 5', gp: 0 },
  { id: nanoid(), name: 'Player 6', gp: 0 },
  { id: nanoid(), name: 'Player 7', gp: 0 },
  { id: nanoid(), name: 'Player 8', gp: 0 },
];

const DEFAULT_TEAM_SIZE = 3;

function App() {
  const [players, setPlayers] = useStickyState(
    DEFAULT_PLAYERS,
    'players',
  );

  const [teamSize, setTeamSize] = useStickyState(
    DEFAULT_TEAM_SIZE,
    'teamSize',
  );

  const [teamColors, setTeamColors] = useStickyState([
    '#4a90e2',
    '#d0021b',
  ]);

  const [shuffleNotify, setShuffleNotify] = useState(false);

  const handlePlayerAdd = useCallback(
    function () {
      const newPlayer = { id: nanoid(), name: 'New Player', gp: 0 };
      setPlayers(state => [
        ...state.map(p => ({ ...p, gp: 0 })),
        newPlayer,
      ]);
    },
    [setPlayers],
  );

  const handlePlayerChange = useCallback(
    function (id, value) {
      players.find(p => p.id === id).name = value;
      setPlayers([...players]);
    },
    [players, setPlayers],
  );

  const handlePlayerDelete = useCallback(
    function (id) {
      const newState = players.filter(player => player.id !== id);
      setPlayers(newState);
    },
    [players, setPlayers],
  );

  const handlePlayersShuffle = useCallback(
    function () {
      const shuffledPlayers = shuffle(players);
      const sortedPlayers = shuffledPlayers.sort(sortByGp);
      const rankedPlayers = sortedPlayers.map((player, index) => {
        const n = index <= teamSize * 2 - 1 ? 1 : 0;
        const gp = player.gp + n;
        return { ...player, gp };
      });
      setPlayers(rankedPlayers);
      setShuffleNotify(true);
    },
    [players, setPlayers, teamSize],
  );

  const handleTeamSizeChange = useCallback(
    function (event) {
      const value = event.target.value || 0;
      setTeamSize(Number.parseInt(value, 10));
    },
    [setTeamSize],
  );

  const handleAppReset = useCallback(
    function () {
      setTeamSize(DEFAULT_TEAM_SIZE);
      setPlayers([...DEFAULT_PLAYERS]);
    },
    [setPlayers, setTeamSize],
  );

  const [team1, team2, bench] = useMemo(
    function () {
      if (!teamSize) {
        const half = Math.ceil(players.length / 2);
        return [players.slice(0, half), players.slice(half), []];
      }

      const matchSize = teamSize + teamSize;

      return [
        players.slice(0, teamSize),
        players.slice(teamSize, matchSize),
        players.slice(matchSize),
      ];
    },
    [players, teamSize],
  );

  useEffect(() => {
    if (!shuffleNotify) return;
    setShuffleNotify(false);
  }, [shuffleNotify]);

  return (
    <div className="app">
      <header className="app-header">
        <img
          className="app-header-logo"
          src={logoUrl}
          alt="Team Scrambler"
        />
      </header>

      <section className="options">
        <label
          className={`team-size-field ${
            teamSize ? '' : '-strikethrough'
          }`}
        >
          Team Size:
          <input
            type="tel"
            className="player-edit-input"
            value={teamSize}
            onChange={handleTeamSizeChange}
            autoFocus={false}
            onFocus={({ target }) =>
              target.setSelectionRange(0, target.value.length)
            }
          />
        </label>

        <button
          className="options-add-player"
          onClick={handlePlayerAdd}
        >
          Add&nbsp;Player <Icon name="person-add" />
        </button>
      </section>

      <section
        className={`game ${shuffleNotify ? '-flash' : '-no-flash'}`}
      >
        <div className="game-counter">
          Game #{Math.max(...players.map(p => p.gp))}
        </div>
        <div className="game-teams">
          <Team
            name="Team 1"
            players={team1}
            onPlayerChange={handlePlayerChange}
            onPlayerDelete={handlePlayerDelete}
            color={teamColors[0]}
            onColorChange={hexColor =>
              setTeamColors(
                arrayUtils.setValueAtIndex(teamColors, 0, hexColor),
              )
            }
          />
          <Team
            name="Team 2"
            players={team2}
            onPlayerChange={handlePlayerChange}
            onPlayerDelete={handlePlayerDelete}
            color={teamColors[1]}
            onColorChange={hexColor =>
              setTeamColors(
                arrayUtils.setValueAtIndex(teamColors, 1, hexColor),
              )
            }
          />
        </div>
      </section>

      <section className="bench">
        <Team
          name="Bench"
          players={bench}
          onPlayerChange={handlePlayerChange}
          onPlayerDelete={handlePlayerDelete}
        />
      </section>

      <ScrambleButton
        onClick={handlePlayersShuffle}
        onThresholdRelease={() => {
          if (
            window.confirm(
              'Are you sure you want to reset? This will reset the roster and settings back to the default values.',
            )
          ) {
            handleAppReset();
          }
        }}
      />
    </div>
  );
}

export default App;
