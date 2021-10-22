import { useState, useEffect } from "react";
import BoardNode from './BoardNode'
import { BOARD_WIDTH, BLOCK_COLORS } from "../consts";
import {checkForColOfThree, checkForRowOfThree, moveCellDown, dragStart, dragDrop, dragEnd} from '../helpers/gameLogic'
import { buildBoard } from "../helpers/buildBoard";

const Board = () => {
  const [gameBoard, setGameBoard] = useState(buildBoard(BLOCK_COLORS, BOARD_WIDTH))
  const [activeCell, setActiveCell] = useState(null)
  const [replacedCell, setReplacedCell] = useState(null)

  useEffect(() => {
    const gameTimer = setInterval(() => {
      let board = checkForColOfThree(gameBoard);
      board = checkForRowOfThree(board)
      board = moveCellDown(board)
      setGameBoard(board)
    }, 100)
    return () => clearInterval(gameTimer)
  },[gameBoard])


  return (
  <div className='board'>
    {gameBoard.board.map((cell, ind) => {
    return<BoardNode 
      key={ind} 
      index={ind} 
      cell={cell}
      activeCell={activeCell}
      setActiveCell={setActiveCell}
      setGameBoard={setGameBoard}
      dragStart={dragStart} 
      dragDrop={dragDrop} 
      dragEnd={dragEnd}/> 
    })}
  </div>
  )
}

export default Board
