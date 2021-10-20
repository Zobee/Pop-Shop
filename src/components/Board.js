import { useState } from "react";
import { BOARD_WIDTH, BLOCK_COLORS } from "../consts";
import { buildBoard } from "../helpers/buildBoard";

const Board = () => {
  const [board, setBoard] = useState(buildBoard(BLOCK_COLORS, BOARD_WIDTH))

  return (
  <div className='board'>
    {board.map(piece => <div style={{backgroundColor: piece}}></div>)}
  </div>
  )
}

export default Board
