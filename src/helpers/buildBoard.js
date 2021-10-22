export const getRandArrValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const buildBoard = (arr, boardSize) => {
  const gameBoard = {board: [], size: boardSize};
  for(let i = 0; i < boardSize ** 2; i++){
    gameBoard.board.push(getRandArrValue(arr))
  }
  return gameBoard;
}