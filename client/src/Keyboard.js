import React from 'react';
import Key from './Key'
//rafce
const Keyboard = ({letters, setNewLetter, setNewGuess, guess}) => {
  
  return <div>
      {letters.map(l => 
        <Key
            letter={l.letter}
            color={l.color}
            setNewLetter={setNewLetter}
            setNewGuess={setNewGuess}
            guess={guess}
        />
      )}
  </div>;
};

export default Keyboard;
