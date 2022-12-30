import React from 'react'
import styles from './Keyboard.module.css'



const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ]

  type Props = {
    isWinner:boolean;
    isLoser:boolean;
    activeLetters: string[],
    inactiveLetters:string[],
    addGuessedLetter: (letter:string)=> void
  }

const Keyboard = (props: Props) => {
  const {activeLetters, inactiveLetters, addGuessedLetter, isWinner, isLoser} = props;

  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            key={key}
            disabled={isInactive || isInactive || isWinner || isLoser}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard