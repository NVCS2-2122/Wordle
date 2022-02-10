import logo from './logo.svg';
import './App.css'
import Keyboard from './Keyboard'
import Board from './Board'
import React, {useState} from 'react'
import Login from './Login'

function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "lightgrey"
    }))
  const loadLetters = JSON.parse(localStorage.getItem("letters")) || alphaArr
  const [letters, setLetters] = useState(loadLetters)
  const [newLetter, setNewLetter] = useState('')
  const [newGuess, setNewGuess] = useState('')
  //username, best score, games beaten, games played

  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Login />
      <Board letters={letters} setLetters={setLetters} newLetter={newLetter} newGuess={newGuess} setNewGuess={setNewGuess} />
      <Keyboard letters={letters} setNewLetter={setNewLetter} setNewGuess={setNewGuess} guess={newGuess} />
    </div>
  );
}

export default App;
