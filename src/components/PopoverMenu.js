import React from 'react';
import PropTypes from 'prop-types';
import './popover-menu.css';

function PopoverMenu({ Button, children, isOpen, onToggleOpen }) {
  return (
    <div className={`popover-menu ${isOpen ? '-open' : '-closed'}`}>
      <div className="overlay" />
      <button onClick={onToggleOpen}>{Button}</button>
      <div className="content">{children}</div>
    </div>
  );
}

PopoverMenu.defaultProps = {};

PopoverMenu.propTypes = {
  children: PropTypes.any,
};

export default PopoverMenu;
