import {BLOCK_COLORS, BASE_SCORE} from '../consts'
import {getRandArrValue, armCell} from './buildBoard'

const checkForColOfThree = (gameBoard, setScore) => {
  const {size, board} = gameBoard
  const updatedBoard = [...board];
  const lastColStartInd = (size ** 2) - (size * 2 + 1);
  let matches = 0;

  for(let i = 0; i < lastColStartInd; i++){
    let colOfThree = [i, i + size, i + size * 2];
    const currColor = updatedBoard[i].color
    if(colOfThree.every(cell => currColor === updatedBoard[cell].color && currColor)){
      colOfThree.forEach(cell => {
        updatedBoard[cell].color = "" 
        updatedBoard[cell].armed = false
        return;
      })
      matches++;
    }
  }
  setScore(prev => prev + BASE_SCORE * matches)
  return {size, board: updatedBoard};
}

const isValidCol = (boardSize, currInd) => {
  return currInd % boardSize !== boardSize - 2 && currInd % boardSize !== boardSize - 1;
}

const checkForRowOfThree = (gameBoard, setScore) => {
  const {size, board} = gameBoard
  const updatedBoard = [...board];
  const lastRowStartInd = (size ** 2) - 4;
  let matches = 0;

  for(let i = 0; i < lastRowStartInd; i++){
    let rowOfThree = [i, i + 1, i + 2];
    if (!isValidCol(size, i)) continue;
    const currColor = updatedBoard[i].color
    if(rowOfThree.every(cell => currColor === updatedBoard[cell].color && currColor)){
      rowOfThree.forEach(cell => updatedBoard[cell].color = "")
      matches++;
    }
  }
  setScore(prev => prev + BASE_SCORE * matches)
  return {size, board: updatedBoard};
}

const replenishTopCell = (cell, size) => {
  let replenishedCell = {...cell};
  replenishedCell.color = getRandArrValue(BLOCK_COLORS);
  replenishedCell.armed = armCell(size);
  return replenishedCell;
}

const moveCellDown = (gameBoard) => {
  const {size, board} = gameBoard;
  let updatedBoard = [...board]

  for(let i = 0; i < size ** 2 - size; i++){
    //Add new random cell if top cell is empty
    if(updatedBoard[i].color === '' && i < size){
      updatedBoard[i] = replenishTopCell(updatedBoard[i], size)
    }
    
    //Move current cell down if cell below is empty
    if(updatedBoard[i + size].color === ''){
      updatedBoard[i + size].color = updatedBoard[i].color
      updatedBoard[i + size].armed = updatedBoard[i].armed
      updatedBoard[i].color = "";
      updatedBoard[i].armed = false;
    }
  }

  return {size, board: updatedBoard};
}

export const updateBoard = (gameBoard, setScore) => {
  let board = checkForColOfThree(gameBoard, setScore);
  board = checkForRowOfThree(board, setScore)
  board = moveCellDown(board)
  return board;
}

export const dragStart = (e, setActiveCell, setGameOver) => {
  if(e.target.dataset.armed === 'true') return setGameOver(true)
  setActiveCell(e.target)
}

export const dragDrop = (e, setReplacedCell, setGameOver) => {
  if(e.target.dataset.armed === 'true') return setGameOver(true)
  setReplacedCell(e.target)
}

export const dragEnd = (activeCell, replacedCell, setGameBoard) => {
  swapCells(activeCell, replacedCell, setGameBoard)
}

const swapCells = (activeCell, replacedCell, setGameBoard) => {
  setGameBoard(prev => {
    const {board, size} = prev;
    const activeCellInd = activeCell.dataset.ind;
    const replacedCellInd = replacedCell.dataset.ind;
    const updatedBoard = [...board];

    if(isValidMove(size, +activeCellInd, +replacedCellInd)){
      const temp = updatedBoard[activeCellInd]
      updatedBoard[activeCellInd] = updatedBoard[replacedCellInd]
      updatedBoard[replacedCellInd] = temp
    }

    return {...prev, board: updatedBoard}
  })
}

const isValidMove = (boardSize, activeCellInd, replacedCellInd) => {

  return (isValidCellInd(boardSize, activeCellInd) && isValidCellInd(boardSize, replacedCellInd)) &&
         ((activeCellInd === replacedCellInd - 1 && replacedCellInd % boardSize !== 0) ||
         (activeCellInd === replacedCellInd - boardSize) ||
         (activeCellInd === replacedCellInd + 1 && replacedCellInd % boardSize !== boardSize -1) ||
         (activeCellInd === replacedCellInd + boardSize)) 
}

const isValidCellInd = (boardSize, cellInd) => cellInd >= 0 && cellInd < boardSize ** 2;


export const restartGame = (setGameOver, setScore) => {
  setGameOver(false)
  setScore(0)
}