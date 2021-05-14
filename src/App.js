import React from 'react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { nanoid } from 'nanoid';
import useStickyState from './useStickyState';
import Team from './components/Team';
import logoUrl from './logo.svg';

function shuffle(a) {
  const data = [...a];

  for (let i = data.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [data[i - 1], data[j]] = [data[j], data[i - 1]];
  }
  return data;
}

function sortByGp(a, b) {
  if (a.gp < b.gp) return -1;
  if (b.gp < a.gp) return 1;

  return 1;
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
      setPlayers(state => {
        const shuffledPlayers = shuffle(state);
        const rankedPlayers = shuffledPlayers.sort(sortByGp);
        return rankedPlayers;
      });

      setShuffleNotify(true);
    },
    [setPlayers],
  );

  const handleTeamSizeChange = useCallback(
    function (event) {
      const value = event.target.value || 0;
      setTeamSize(Number.parseInt(value, 10));
    },
    [setTeamSize],
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

  useEffect(
    function () {
      setPlayers(state => {
        state
          .filter(player => {
            return (
              team1.map(p => p.id).includes(player.id) ||
              team2.map(p => p.id).includes(player.id)
            );
          })
          .map(player => ({
            ...player,
            gp: player.gp + 1,
          }))
          .forEach(player => {
            const playerIndex = state.findIndex(
              p => p.id === player.id,
            );
            state[playerIndex] = player;
          });

        return state;
      });
    },
    [bench, setPlayers, team1, team2],
  );

  useEffect(
    function () {
      if (!shuffleNotify) return;
      setShuffleNotify(false);
    },
    [shuffleNotify],
  );

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
          Add&nbsp;Player{' '}
          <i className="fa fa-user-plus" aria-hidden="true"></i>
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
          />
          <Team
            name="Team 2"
            players={team2}
            onPlayerChange={handlePlayerChange}
            onPlayerDelete={handlePlayerDelete}
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

      <button className="game-shuffle" onClick={handlePlayersShuffle}>
        <i className="icon fa fa-random" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default App;
