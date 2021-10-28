import axios from 'axios'
import { useState } from 'react'
import {restartGame} from '../helpers/gameLogic'
const Gameover = ({score, setScore, setGameOver}) => {
  const [player, setPlayer] = useState("")
  const [saved, setSaved] = useState(false)

  const handleSubmit = () => {
    if(!player) return;
    axios.post("http://localhost:8000/scores", {player, score})
    .then(res => console.log(res))
    .then(setSaved(true))
    .catch(err => console.log(err))
  }

  if(saved) return (
    <div className='game-over'>
      Thank You. Score saved
      <button onClick={() => restartGame(setGameOver, setScore)}>Play Again</button>
    </div>
  )

  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <p>Final Score: <span>{score}</span></p>
      <input 
        type='text'
        value={player}
        onChange={e => setPlayer(e.target.value)}
      />
      <button onClick={handleSubmit}>Set Score</button>
      <button onClick={() => restartGame(setGameOver, setScore)}>Play Again</button>
    </div>
  )
}

export default Gameover
