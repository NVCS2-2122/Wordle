import React from 'react';
import Key from './Key'
//rafce
const Keyboard = ({letters, setNewLetter}) => {
  
  return <div>
      {letters.map(l => 
        <Key
            letter={l.letter}
            color={l.color}
            setNewLetter={setNewLetter}
        />
      )}
  </div>;
};

export default Keyboard;
