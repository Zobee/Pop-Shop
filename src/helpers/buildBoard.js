const getRandArrValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const buildBoard = (arr, boardSize) => {
  const board = [];
  for(let i = 0; i < boardSize ** 2; i++){
    board.push(getRandArrValue(arr))
  }
  return board;
}