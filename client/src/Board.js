import React, {useState} from 'react';

function Cell({letter, color}) {
    return <td style={{backgroundColor: color}}>
        {letter}
    </td>
}

function Row({guess, letters}) {
    return <tr>
        {guess.split('')
            .map(l => <Cell letter={l} color={"blue"} />)
        }
    </tr>
}

const Board = ({letters}) => {
  const [answer, setAnswer] = useState("REACT")
  const [guesses, setGuesses] = useState(["ROBOT"])
  return <div>
      <Row guess={guesses[0]} letters={letters} />
  </div>;
};

export default Board;
