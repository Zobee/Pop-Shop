const BoardNode = ({
  index, 
  cell, 
  setGameBoard, 
  activeCell, 
  setActiveCell, 
  dragStart, 
  dragDrop, 
  dragEnd}) => {
  return <div 
    style={{backgroundColor: cell}}
    data-id={index}
    draggable={true}
    onDragStart={(e) => dragStart(e, setActiveCell)}
    onDragOver={e => e.preventDefault()}
    onDragEnter={e => e.preventDefault()}
    onDragLeave={e => e.preventDefault()}
    onDrop={dragDrop}
    onDragEnd={(e) => dragEnd(e, activeCell, setGameBoard)}
  ></div>
}

export default BoardNode