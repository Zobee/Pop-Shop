import {dragStart, dragDrop, dragEnd } from "../helpers/gameLogic"
const BoardNode = ({index, square}) => {
  return <div 
    style={{backgroundColor: square}}
    data-id={index}
    draggable={true}
    onDragStart={dragStart}
    onDragOver={e => e.preventDefault()}
    onDragEnter={e => e.preventDefault()}
    onDragLeave={e => e.preventDefault()}
    onDrop={dragDrop}
    onDragEnd={dragEnd}
  >

  </div>
}

export default BoardNode