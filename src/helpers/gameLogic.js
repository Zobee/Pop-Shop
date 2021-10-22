import {BLOCK_COLORS} from '../consts'
import {getRandArrValue} from './buildBoard'

export const checkForColOfThree = (gameBoard) => {
  const {size, board} = gameBoard
  const updatedBoard = [...board];
  const lastColStartInd = (size ** 2) - (size * 2 + 1);

  for(let i = 0; i < lastColStartInd; i++){
    let colOfThree = [i, i + size, i + size * 2];
    if(colOfThree.every(square => updatedBoard[i] === updatedBoard[square])){
      colOfThree.forEach(square => updatedBoard[square] = "")
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
    if(rowOfThree.every(square => updatedBoard[i] === updatedBoard[square])){
      rowOfThree.forEach(square => updatedBoard[square] = "")
    }
  }
  return {size, board: updatedBoard};
}


export const moveSquareDown = (gameBoard) => {
  const {size, board} = gameBoard;
  const updatedBoard = [...board]

  for(let i = 0; i < size ** 2 - size; i++){
    
    //Add new random cell if top cell is empty
    if(updatedBoard[i] === '' && i < size){
      updatedBoard[i] = getRandArrValue(BLOCK_COLORS);
    }
    
    //Move current cell down if cell below is empty
    if(updatedBoard[i + size] === ''){
      updatedBoard[i + size] = updatedBoard[i]
      updatedBoard[i] = "";
    }
  }

  return {size, board: updatedBoard};
}