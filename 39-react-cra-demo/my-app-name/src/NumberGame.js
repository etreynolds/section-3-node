import React, { useState } from "react";
import "./NumberGame.css"

const NumberGame = (props) => {
    const genRandom = () => Math.floor(Math.random() * 10) + 1;
    const restart = () => {
        setTarget(genRandom());
        setGuess(0);
        setGuessCount(0);
    }
    const makeGuess = () => {
        setGuess(genRandom());
        setGuessCount(guessCount + 1);
    }
    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom());
    const [guessCount, setGuessCount] = useState(0);
    const isWinner = target === guess;
    const winMsg = <h2 className='winMsg'>YOU WON!</h2>
    return (
        <div className='NumberGame'>
            <h1>Target Num: {target}</h1>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess} </h1>
            <h4>Number of Guesses: {guessCount}</h4>
            {isWinner ? winMsg : <button onClick={makeGuess}>Generate Number</button>}
            <button onClick={restart}>New Game</button>
        </div>
    )
}

export default NumberGame;