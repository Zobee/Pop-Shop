import { useState, useEffect } from "react";
import BoardNode from './BoardNode'
import { BOARD_WIDTH, BLOCK_COLORS } from "../consts";
import {checkForColOfThree, checkForRowOfThree, moveSquareDown} from '../helpers/gameLogic'
import { buildBoard } from "../helpers/buildBoard";

const Board = () => {
  const [gameBoard, setGameBoard] = useState(buildBoard(BLOCK_COLORS, BOARD_WIDTH))

  useEffect(() => {
    const timer = setInterval(() => {
      let board = checkForColOfThree(gameBoard);
      board = checkForRowOfThree(board)
      board = moveSquareDown(board)
      setGameBoard(board)
    }, 100)
    return () => clearInterval(timer)
  },[gameBoard])


  return (
  <div className='board'>
    {gameBoard.board.map((square, ind) => <BoardNode square={square}/> )}
  </div>
  )
}

export default Board
