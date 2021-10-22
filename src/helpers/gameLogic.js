import {BLOCK_COLORS} from '../consts'
import {getRandArrValue} from './buildBoard'

export const checkForColOfThree = (gameBoard) => {
  const {size, board} = gameBoard
  const updatedBoard = [...board];
  const lastColStartInd = (size ** 2) - (size * 2 + 1);

  for(let i = 0; i < lastColStartInd; i++){
    let colOfThree = [i, i + size, i + size * 2];
    if(colOfThree.every(cell => updatedBoard[i] === updatedBoard[cell])){
      colOfThree.forEach(cell => updatedBoard[cell] = "")
    }
  }
  return {size, board: updatedBoard};
}

const isValidCol = (boardSize, currInd) => {
  return currInd % boardSize !== boardSize - 2 && currInd % boardSize !== boardSize - 1;
}

export const checkForRowOfThree = (gameBoard) => {
  const {size, board} = gameBoard
  const updatedBoard = [...board];
  const lastRowStartInd = (size ** 2) - 4;

  for(let i = 0; i < lastRowStartInd; i++){
    let rowOfThree = [i, i + 1, i + 2];
    if (!isValidCol(size, i)) continue;
    if(rowOfThree.every(cell => updatedBoard[i] === updatedBoard[cell])){
      rowOfThree.forEach(cell => updatedBoard[cell] = "")
    }
  }
  return {size, board: updatedBoard};
}

const replenishTopCell = (updatedBoard, currInd) => updatedBoard[currInd] = getRandArrValue(BLOCK_COLORS);

export const moveCellDown = (gameBoard) => {
  const {size, board} = gameBoard;
  const updatedBoard = [...board]

  for(let i = 0; i < size ** 2 - size; i++){

    //Add new random cell if top cell is empty
    if(updatedBoard[i] === '' && i < size){
      replenishTopCell(updatedBoard, i)
    }
    
    //Move current cell down if cell below is empty
    if(updatedBoard[i + size] === ''){
      updatedBoard[i + size] = updatedBoard[i]
      updatedBoard[i] = "";
    }
  }

  return {size, board: updatedBoard};
}

export const dragStart = (e, setActiveCell) => {
  setActiveCell(e.target)
}

export const dragDrop = (e, setReplacedCell) => {
  setReplacedCell(e.target)
}

export const dragEnd = (e, activeCell, replacedCell, setGameBoard) => {
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
  //Confirm cell Inds are valid
  if(!isValidCellInd(boardSize, activeCellInd) || !isValidCellInd(boardSize, replacedCellInd)) return false;

  //To-Do: Fix edge-case where adjacent cells on separate rows can't swap

  return (activeCellInd === replacedCellInd - 1) || 
         (activeCellInd === replacedCellInd - boardSize) ||
         (activeCellInd === replacedCellInd + 1) ||
         (activeCellInd === replacedCellInd + boardSize)
}

const isValidCellInd = (boardSize, cellInd) => cellInd >= 0 && cellInd < boardSize ** 2;