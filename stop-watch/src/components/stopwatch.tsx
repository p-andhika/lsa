import { useCallback, useEffect, useRef, useState } from "react";
import StopwatchController from "./stopwatch-controller";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 10);
      }, 10);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);
  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setSeconds(0);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = String(Math.floor(totalSeconds / 3600000)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600000) / 60000)).padStart(
      2,
      "0",
    );
    const secs = String(Math.floor((totalSeconds % 60000) / 1000)).padStart(
      2,
      "0",
    );
    const hundreths = String(
      Math.floor((totalSeconds % 1000) / 10) % 100,
    ).padStart(2, "0");
    return `${hrs}:${mins}:${secs}:${hundreths}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: 42 }}>{formatTime(seconds)}</div>
      <StopwatchController
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default Stopwatch;
