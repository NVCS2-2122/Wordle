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

const Board = ({letters, setLetters}) => {
  const [answer, setAnswer] = useState("REACT")
  const [guesses, setGuesses] = useState(["ROBOT"])
  
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
      
      <button onClick={() => {processGuess("REABS")}}>Test</button>
  </div>;
};

export default Board;
