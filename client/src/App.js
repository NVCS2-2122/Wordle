import logo from './logo.svg';
import Keyboard from './Keyboard'
import Board from './Board'
import React, {useState} from 'react'

function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "lightgrey"
    }))
  const [letters, setLetters] = useState(alphaArr)
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Board letters={letters} />
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
