import React, { useState, useEffect } from 'react';
import styles from './diceGame.module.scss'

export const DiceGame = () => {
  const [playerRoll, setPlayerRoll] = useState(1);
  const [computerRoll, setComputerRoll] = useState(1);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    determineWinner();
  }, [playerRoll, computerRoll]);

  const rollDice = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
    setPlayerRoll(getRandomNumber());
    setComputerRoll(getRandomNumber());
  };

  const determineWinner = () => {
    if (playerRoll === computerRoll) {
      setWinner('It\'s a tie!');
    } else {
      setWinner(playerRoll > computerRoll ? 'Player wins!' : 'Computer wins!');
    }
  };

  const resetGame = () => {
    setPlayerRoll(1);
    setComputerRoll(1);
    setWinner(null);
  };

  return (
    <div className={styles.Container}>
      <div>
        <h1>Dice Game</h1>
        <p>Player: {playerRoll}</p>
        <p>Computer: {computerRoll}</p>
        {winner && <p>{winner}</p>}
        <button onClick={rollDice}>Roll</button>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};






