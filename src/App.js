import React from 'react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Icon from './components/Icon';
import useStickyState from './useStickyState';
import Team from './components/Team';
import logoUrl from './logo.svg';
import ScrambleButton from './components/ScrambleButton';
import * as arrayUtils from './utils/array';

const DEFAULT_TEAMS = {
  team1: { name: 'Team 1' },
  team2: { name: 'Team 2' },
  team3: { name: 'Team 3' },
};

const DEFAULT_PLAYERS = [
  { id: nanoid(), name: 'Player 1', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 2', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 3', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 4', gp: 0, teamId: 'team1' },
  { id: nanoid(), name: 'Player 5', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 6', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 7', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 8', gp: 0, teamId: 'team2' },
  { id: nanoid(), name: 'Player 9', gp: 0, teamId: 'team3' },
];

const DEFAULT_TEAM_SIZE = 3;

function App() {
  const [teams, _setTeams] = useStickyState(DEFAULT_TEAMS, 'teams');

  const [players, setPlayers] = useStickyState(
    DEFAULT_PLAYERS,
    'players',
  );

  const [teamSize, setTeamSize] = useStickyState(
    DEFAULT_TEAM_SIZE,
    'teamSize',
  );

  const [teamColors, setTeamColors] = useStickyState(
    ['#4a90e2', '#d0021b'],
    'teamColors',
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
      setTeamSize(DEFAULT_TEAM_SIZE);
      setPlayers([...DEFAULT_PLAYERS]);
    },
    [setPlayers, setTeamSize],
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
          {Object.entries(teams).map(([id, team]) => {
            return (
              <Team
                key={id}
                name={team.name}
                players={players.filter(player => player.teamId === id)}
                onPlayerChange={handlePlayerChange}
                onPlayerDelete={handlePlayerDelete}
                color={teamColors[0]}
                onColorChange={hexColor =>
                  setTeamColors(
                    arrayUtils.setValueAtIndex(teamColors, 0, hexColor),
                  )
                }
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
