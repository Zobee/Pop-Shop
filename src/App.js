import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Board from "./components/Board";
import Scores from "./components/Scores";
import Gameover from "./components/Gameover";

const App = () => {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  return (
    <div className='container'>
    {gameOver ? 
    <Gameover score={score} setScore={setScore} setGameOver={setGameOver}/>
    :
      <div className='game-display'>
        <Scoreboard score={score}/>
        <Board setScore={setScore} setGameOver={setGameOver}/>
        <Scores />
      </div>
    }
    </div>
  );
}

export default App;
