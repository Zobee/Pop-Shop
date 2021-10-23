export const getRandArrValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const armCell = (boardSize) => Math.floor(Math.random() * boardSize) % boardSize === 0;

export const buildBoard = (arr, boardSize) => {
  const gameBoard = {board: [], size: boardSize};
  for(let i = 0; i < boardSize ** 2; i++){
    gameBoard.board.push({color: getRandArrValue(arr), armed: armCell(boardSize)})
  }
  return gameBoard;
}