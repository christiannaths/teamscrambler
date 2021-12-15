import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Icon from './components/Icon';
import useStickyState from './useStickyState';
import Team from './components/Team';
import logoUrl from './logo.svg';
import ScrambleButton from './components/ScrambleButton';
import * as arrayUtils from './utils/array';

const DEFAULT_TEAMS = {
  team1: { name: 'Team 1', color: '#bf3a2b' },
  team2: { name: 'Team 2', color: '#2880b9' },
};

const DEFAULT_PLAYERS = [
  { id: nanoid(), name: 'Player 1', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 2', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 3', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 4', gp: 0, teamId: null },
  { id: nanoid(), name: 'Player 5', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 6', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 7', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 8', gp: 0, teamId: null },
];

const DEFAULT_TEAM_SIZE = 3;

function App() {
  const [teams, setTeams] = useStickyState(DEFAULT_TEAMS, 'teams');

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
      const teamIds = Object.keys(teams);
      const playersToAssign = teamIds.length * teamSize;

      const newPlayers = arrayUtils
        .shuffleRandom(players)
        .map((player, index) => {
          const teamId =
            index < playersToAssign
              ? teamIds[index % teamIds.length]
              : null;

          return { ...player, teamId: teamId };
        });

      setPlayers(newPlayers);
    },
    [players, setPlayers, teamSize, teams],
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
      setTeams(DEFAULT_TEAMS);
      setTeamSize(DEFAULT_TEAM_SIZE);
      setPlayers([...DEFAULT_PLAYERS]);
    },
    [setPlayers, setTeamSize, setTeams],
  );

  const handleColorChange = useCallback(
    function (teamId) {
      return function (hexColor) {
        setTeams(state => {
          const team = state[teamId];
          const newTeam = { ...team, color: hexColor };
          return { ...state, [teamId]: newTeam };
        });
      };
    },
    [setTeams],
  );

  const handleTeamCountChange = useCallback(
    function (event) {
      const newTeams = new Array(+event?.target?.value)
        .fill(undefined)
        .reduce((acc, _curr, index) => {
          const existingTeamId = Object.keys(teams)[index];

          return existingTeamId
            ? { ...acc, [existingTeamId]: teams[existingTeamId] }
            : { ...acc, [nanoid()]: { name: `team ${index + 1}` } };
        }, {});

      setTeams(newTeams);
    },
    [setTeams, teams],
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
          className={`option-control team-size-field ${
            teamSize ? '' : '-strikethrough'
          }`}
        >
          Team Size:
          <input
            type="tel"
            className="option-control player-edit-input"
            value={teamSize}
            onChange={handleTeamSizeChange}
            autoFocus={false}
            onFocus={({ target }) =>
              target.setSelectionRange(0, target.value.length)
            }
          />
        </label>

        <label
          className={`option-control team-count-field ${
            teamSize ? '' : '-strikethrough'
          }`}
        >
          # Of Teams:
          <input
            type="tel"
            className="option-control player-edit-input"
            value={Object.keys(teams).length}
            onChange={handleTeamCountChange}
            autoFocus={false}
            onFocus={({ target }) =>
              target.setSelectionRange(0, target.value.length)
            }
          />
        </label>

        <button
          className="option-control options-add-player"
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
          {Object.entries(teams).map(([id, team]) => {
            return (
              <Team
                key={id}
                name={team.name}
                players={players.filter(player => player.teamId === id)}
                onPlayerChange={handlePlayerChange}
                onPlayerDelete={handlePlayerDelete}
                color={team.color}
                onColorChange={handleColorChange(id)}
              />
            );
          })}
        </div>
      </section>

      <section className="bench">
        {/* bug in setting bench team color */}
        <Team
          name="Bench"
          players={players.filter(player => {
            return (
              player.teamId === undefined || player.teamId === null
            );
          })}
          onColorChange={handleColorChange(null)}
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
