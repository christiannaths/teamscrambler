import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Icon from './Icon';
import './scramble-button.css';

const MAX_Y = -180;

function ScrambleButton({ onClick, onThresholdRelease }) {
  const [isMax, setIsMax] = useState(false);
  const [{ y }, animate] = useSpring(() => ({
    y: 0,
  }));

  const bind = useDrag(({ down, movement: [_, my] }) => {
    const mvY = down ? (my < MAX_Y ? MAX_Y : my < 0 ? my : 0) : 0;

    animate.start({ y: mvY });

    if (!down) {
      if (isMax) onThresholdRelease();
      setIsMax(false);
    }

    setIsMax(mvY <= MAX_Y);
  });

  return (
    <animated.button
      className={`scramble-button ${isMax && '-danger'}`}
      onClick={onClick}
      style={{ y, touchAction: 'none' }}
      {...bind()}
    >
      {isMax ? <Icon name="trash" /> : <Icon name="shuffle" />}
    </animated.button>
  );
}

ScrambleButton.defaultProps = {};

ScrambleButton.propTypes = {
  children: PropTypes.any,
};

export default ScrambleButton;
