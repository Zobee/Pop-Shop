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
  dragEnd,
  setGameOver
}) => {
  const {color, armed} = cell
  return <div 
    style={{backgroundColor: color}}
    className={armed ? "armed" : ""}
    data-ind={index}
    data-armed={armed}
    draggable={true}
    onDragStart={e => dragStart(e, setActiveCell, setGameOver)}
    onDragOver={e => e.preventDefault()}
    onDragEnter={e => e.preventDefault()}
    onDragLeave={e => e.preventDefault()}
    onDrop={e => dragDrop(e, setReplacedCell, setGameOver)}
    onDragEnd={() => dragEnd(activeCell, replacedCell, setGameBoard)}
  ></div>
}

export default BoardNode