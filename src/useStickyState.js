import { useState, useEffect } from 'react';

function useStickyState(defaultValue, key) {
  const stateKey = `superteams_${key}`;

  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(stateKey);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(stateKey, JSON.stringify(value));
  }, [stateKey, value]);
  return [value, setValue];
}

export default useStickyState;
