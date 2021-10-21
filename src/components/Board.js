import { useState, useEffect } from "react";
import { BOARD_WIDTH, BLOCK_COLORS } from "../consts";
import {checkForColOfThree, checkForRowOfThree} from '../helpers/gameLogic'
import { buildBoard } from "../helpers/buildBoard";

const Board = () => {
  const [gameBoard, setGameBoard] = useState(buildBoard(BLOCK_COLORS, BOARD_WIDTH))

  useEffect(() => {
    const timer = setInterval(() => {
      let board = checkForColOfThree(gameBoard);
      setGameBoard(prev => ({...prev, board}))
    }, 100)
    return () => clearInterval(timer)
  },[gameBoard])

  useEffect(() => {
    const timer = setInterval(() => {
      let board = checkForRowOfThree(gameBoard);
      setGameBoard(prev => ({...prev, board}))
    }, 100)
    return () => clearInterval(timer)
  },[gameBoard])

  return (
  <div className='board'>
    {gameBoard.board.map((square, ind) => <div key={ind} style={{backgroundColor: square}}></div>)}
  </div>
  )
}

export default Board
