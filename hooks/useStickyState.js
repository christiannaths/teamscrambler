import { useState, useEffect } from 'react';

function useStickyState(defaultValue, key, type) {
  const stateKey = `superteams_${key}`;

  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return defaultValue;

    const stickyValue = window?.localStorage.getItem(stateKey);

    console.log({ stickyValue });

    if (stickyValue === null) return defaultValue;
    if (type === 'number') return parseInt(stickyValue, 10);
    return JSON.parse(stickyValue);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window?.localStorage.setItem(stateKey, JSON.stringify(value));
  }, [stateKey, value]);

  return [value, setValue];
}

export default useStickyState;
