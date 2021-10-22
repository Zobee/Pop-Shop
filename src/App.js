import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Board from "./components/Board";

const App = () => {
  const [score, setScore] = useState(0)
  return (
    <div className='container'>
      <Scoreboard score={score}/>
      <Board setScore={setScore}/>
    </div>
  );
}

export default App;
