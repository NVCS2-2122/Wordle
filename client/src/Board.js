import React, {useState} from 'react';

function Cell({letter, color}) {
    return <td style={{backgroundColor: color}}>
        {letter}
    </td>
}

function Row({guess, letters}) {
    return <tr>
        {guess.split('')
            .map(l => 
                <Cell 
                    letter={l} 
                    color={
                        letters.find(letterData => letterData.letter == l)
                        .color
                    } 
                />)
        }
    </tr>
}

function NewRow({newGuess}) {
    const getBlankCells = (num) => {
        const blankCells = []
        for (let i = 0; i < num; i++) {
            blankCells.push(<Cell 
                letter="?"
                color="white"
            />)
        }
        return blankCells
    }
    return <tr>
        {newGuess.split('')
            .map(l => 
                <Cell 
                    letter={l} 
                    color="white" 
                />)
        }
        {
            getBlankCells(5 - newGuess.length)
        }
    </tr>
}

const Board = ({letters, setLetters, newLetter, newGuess, setNewGuess}) => {
  const [answer, setAnswer] = useState("REACT")
  const [guesses, setGuesses] = useState(["ROBOT"])
  const handleEnter = () => {
    if (newGuess.length == 5) {
        processGuess(newGuess)
        setNewGuess('')          
    }
  }
  const processGuess = (guess) => {
      setGuesses([...guesses,guess])
      guess.split('')
        .forEach((l,i) => {
            let color;
            if (answer.indexOf(l) == i) {
                color = "green"
            }
            else if (answer.includes(l)) {
                color = "yellow"
            }
            else {
                color = "grey"
            }
            const index = letters.findIndex(letterData => letterData.letter == l)
            letters[index].color = color
        })
      setLetters([...letters])      
  }
  return <div>
      {guesses.map(guess => <Row guess={guess} letters={letters} />)}
      <NewRow newGuess={newGuess} />
      <button 
        onClick={handleEnter}
        disabled={newGuess.length != 5}
      >Enter</button>
      <h1>{newLetter}</h1>
  </div>;
};

export default Board;
