import { useEffect, useState } from "react";

let interval: NodeJS.Timeout | undefined = undefined;
export const useTimer = (timer: number) => {
  const [time, setTime] = useState(timer);

  useEffect(() => {
    interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // handled outside of lexical environment (useEffect)
  if (time === 0) {
    clearInterval(interval);
  }

  const handleSkipTime = () => setTime(0);

  const handleReset = () => {
    clearInterval(interval);
    setTime(timer);
    interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  return { time, handleReset, handleSkipTime };
};
