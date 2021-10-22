const BoardNode = ({
  index, 
  cell, 
  setGameBoard, 
  activeCell, 
  setActiveCell, 
  replacedCell,
  setReplacedCell,
  dragStart, 
  dragDrop, 
  dragEnd}) => {
  return <div 
    style={{backgroundColor: cell}}
    data-ind={index}
    draggable={true}
    onDragStart={e => dragStart(e, setActiveCell)}
    onDragOver={e => e.preventDefault()}
    onDragEnter={e => e.preventDefault()}
    onDragLeave={e => e.preventDefault()}
    onDrop={e => dragDrop(e, setReplacedCell)}
    onDragEnd={e => dragEnd(e, activeCell, replacedCell, setGameBoard)}
  ></div>
}

export default BoardNode