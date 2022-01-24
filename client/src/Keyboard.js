import React from 'react';
import Key from './Key'
//rafce
const Keyboard = ({letters}) => {
  
  return <div>
      {letters.map(l => 
        <Key
            letter={l.letter}
            color={l.color}
        />
      )}
  </div>;
};

export default Keyboard;
