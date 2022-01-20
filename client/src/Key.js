import React from 'react';

const Key = ({letter, color}) => {
  return <div style={{backgroundColor: color}}>
      {letter}
  </div>;
};

export default Key;
