import React from 'react';

const Key = ({letter, color, setNewLetter,guess, setNewGuess}) => {
  const onKeyPress = (e) => {
    setNewLetter(letter)
    if (guess.length < 5) {
      setNewGuess(guess+letter)
    }    
  }
  return <div 
    onClick={onKeyPress}
    style={{backgroundColor: color}}>
      {letter}
  </div>;
};

export default Key;
