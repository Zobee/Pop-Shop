import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Board from "./components/Board";

const App = () => {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  return (
    <div className='container'>
    {gameOver ? 
      <div>
      Game Over
      Final Score: {score}
      </div>
    :
      <div>
        <Scoreboard score={score}/>
        <Board setScore={setScore} setGameOver={setGameOver}/>
      </div>
    }
    </div>
  );
}

export default App;
