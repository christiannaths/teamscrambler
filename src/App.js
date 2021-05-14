import React from 'react';
import { useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import useStickyState from './useStickyState';
import Team from './components/Team';

function shuffle(a) {
  const data = [...a];

  for (let i = data.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [data[i - 1], data[j]] = [data[j], data[i - 1]];
  }
  return data;
}

const DEFAULT_PLAYERS = [
  { id: nanoid(), name: 'Player 1' },
  { id: nanoid(), name: 'Player 2' },
  { id: nanoid(), name: 'Player 3' },
  { id: nanoid(), name: 'Player 4' },
  { id: nanoid(), name: 'Player 5' },
  { id: nanoid(), name: 'Player 6' },
  { id: nanoid(), name: 'Player 7' },
  { id: nanoid(), name: 'Player 8' },
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

  const handlePlayerAdd = useCallback(
    function () {
      const newPlayer = { id: nanoid(), name: 'New Player' };
      setPlayers(state => [...state, newPlayer]);
    },
    [setPlayers],
  );

  const handlePlayerChange = useCallback(
    function (id, value) {
      const player = players.find(p => p.id === id);
      player.name = value;

      setPlayers(players);
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
      setPlayers(state => shuffle(state));
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

      return [
        players.slice(0, teamSize),
        players.slice(teamSize, teamSize + teamSize),
        players.slice(teamSize + teamSize),
      ];
    },
    [players, teamSize],
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Supergroups!</h1>
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

      <section className="game">
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
