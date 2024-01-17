import React, { useState, useEffect } from "react";
import styles from './StopWatch.module.scss';

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      // Start the stopwatch
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup the interval when component unmounts or when the stopwatch is stopped
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className={styles.container}>
      <p>Stopwatch: {seconds} seconds</p>
      <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};



