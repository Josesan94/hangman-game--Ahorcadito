import React from 'react'


type Props = {
  wordToGuess:string,
  guessedLetters: string[],
  reveal?: boolean;
 
}

const HangmanWord = (props: Props) => {
  const {wordToGuess, guessedLetters, reveal= false} = props;


  return (
    <div style={{display:"flex", gap:".25em", fontSize:"4rem", fontWeight:"bold", textTransform:"uppercase"}}>
        {wordToGuess.split("").map((letter, index) => (
          <span style={{borderBottom:".1em solid black"}} key={index}>
            <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}}>
            {letter}
            </span>
          </span>
        ))}

    </div>
  )
}

export default HangmanWord