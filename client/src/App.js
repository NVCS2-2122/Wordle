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
  const [newLetter, setNewLetter] = useState('')
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Board letters={letters} setLetters={setLetters} newLetter={newLetter} />
      <Keyboard letters={letters} setNewLetter={setNewLetter} />
    </div>
  );
}

export default App;
