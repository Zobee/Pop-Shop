import {restartGame} from '../helpers/gameLogic'
const Gameover = ({score, setScore, setGameOver}) => {
  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <p>Final Score: <span>{score}</span></p>
      <button onClick={() => restartGame(setGameOver, setScore)}>Start Again</button>
    </div>
  )
}

export default Gameover
