import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useBoolean } from '@chakra-ui/react';

function getTimeObjectAsMs({ h = 0, m = 0, s = 0 } = {}) {
  const hoursInMs = h * 60 * 60 * 1000;
  const minutesInMs = m * 60 * 1000;
  const secondsInMs = s * 1000;
  return hoursInMs + minutesInMs + secondsInMs;
}

function getMsAsTimeObject(timeInMs) {
  const h = Math.floor(timeInMs / (60 * 60 * 1000));

  const m = Math.floor((timeInMs - getTimeObjectAsMs({ h })) / (60 * 1000));

  const s = Math.floor((timeInMs - getTimeObjectAsMs({ h, m })) / 1000);
  const ms = Math.floor(timeInMs - getTimeObjectAsMs({ h, m, s }));
  console.log({ h, m, s, ms });

  return { h, m, s, ms };
}

function useCountdownTimer({
  h: defaultHours = 0,
  m: defaultMinutes = 0,
  s: defaultSeconds = 0,
  step = 50,
} = {}) {
  const timer = useRef(null);
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeObjectAsMs({
      h: defaultHours,
      m: defaultMinutes,
      s: defaultSeconds,
    }),
  );
  const [isRunning, setIsRunning] = useBoolean(false);

  const start = useCallback(() => {
    setIsRunning.on();
  }, [setIsRunning]);

  const pause = useCallback(() => {
    setIsRunning.toggle();
  }, [setIsRunning]);

  const stop = useCallback(() => {
    setIsRunning.off();
  }, [setIsRunning]);

  const reset = useCallback(({ h = 0, m = 0, s = 0 } = {}) => {
    setTimeLeft(getTimeObjectAsMs({ h, m, s }));
  }, []);

  const currentTime = useMemo(() => {
    return getMsAsTimeObject(timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    if (!isRunning) return clearTimeout(timer.current);
    if (timeLeft === 0) return clearTimeout(timer.current);
    timer.current = setTimeout(() => setTimeLeft(timeLeft - step), step);
    return () => clearTimeout(timer.current);
  }, [timeLeft, isRunning, step]);

  return { currentTime, isRunning, start, pause, stop, reset };
}

export default useCountdownTimer;
