import logo from './logo.svg';
import Keyboard from './Keyboard'
import Board from './Board'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
      </header>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
