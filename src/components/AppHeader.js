import React from 'react';
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import logoUrl from '../logo.svg';
import Icon from '../components/Icon';
import PopoverMenu from '../components/PopoverMenu';
import './app-header.css';

function AppHeader({
  teamSize,
  teams,
  onTeamSizeChange,
  onTeamCountChange,
  onPlayerAdd,
  onSubmit,
  onReset,
}) {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const handleSubmit = useCallback(
    function () {
      onSubmit();
      setMenuIsOpen(false);
    },
    [onSubmit],
  );

  const handleReset = useCallback(
    function () {
      if (
        window.confirm(
          'Are you sure you want to reset? This will reset the roster and settings back to the default values.',
        )
      ) {
        onReset();
      }
    },
    [onReset],
  );

  return (
    <header className="app-header">
      <div className="content">
        <img
          className="app-header-logo"
          src={logoUrl}
          alt="Team Scrambler"
        />

        <button
          className="option-control options-add-player"
          onClick={onPlayerAdd}
        >
          <Icon name="person-add" />
        </button>

        <PopoverMenu
          Button={<Icon name="settings" />}
          onToggleOpen={() => setMenuIsOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
        >
          <section className="options">
            <label
              className={`option-control -number-field team-size-field ${
                teamSize ? '' : '-strikethrough'
              }`}
            >
              Players Per Team
              <input
                type="tel"
                value={teamSize}
                onChange={onTeamSizeChange}
                autoFocus={false}
                onFocus={({ target }) =>
                  target.setSelectionRange(0, target.value.length)
                }
              />
            </label>

            <label
              className={`option-control -number-field team-count-field ${
                teamSize ? '' : '-strikethrough'
              }`}
            >
              Teams
              <input
                type="tel"
                value={Object.keys(teams).length}
                onChange={onTeamCountChange}
                autoFocus={false}
                onFocus={({ target }) =>
                  target.setSelectionRange(0, target.value.length)
                }
              />
            </label>

            <footer>
              <button className="submit-button" onClick={handleSubmit}>
                Save &amp; Close
              </button>
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
            </footer>
          </section>
        </PopoverMenu>
      </div>
    </header>
  );
}

AppHeader.defaultProps = {};

AppHeader.propTypes = {
  children: PropTypes.any,
};

export default AppHeader;
