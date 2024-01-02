'use client';

import { useEffect, useState } from 'react';

export function Chronometer({
  setIsFinished,
  time = 60
}: {
  setIsFinished: (isFinished: boolean) => void;
  time?: number;
}) {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(time * 60);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimeInSeconds(totalTimeInSeconds - 1);
    }, 1000);
    if (totalTimeInSeconds === 0) {
      setIsFinished(true);
    }
    return () => clearInterval(interval);
  }, [totalTimeInSeconds, setIsFinished]);

  return (
    <span className="font-mono text-2xl">
      <span>{minutes.toString().padStart(2, '0')}</span>:
      <span>{seconds.toString().padStart(2, '0')}</span>
    </span>
  );
}
