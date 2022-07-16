import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Item from './Item';

function InnerContainer() {
  const test = [1, 2, 3, 4];

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'myDiv',
    drop: (item) => addItemToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), //boolean
    }),
  }));

  const addItemToBoard = (id) => {
    const selectedItem = test.filter((item) => item.index === id);
    setBoard((prevState) => [...prevState, selectedItem]);
    console.log(board);
  };

  return (
    <section className=' flex'>
      {/* All draggable items  */}
      <div className=' bg-slate-200 border-2 w-[300px] min-h-[500px] mr-4'>
        {test.map((item, index) => (
          <Item key={index} id={index} item={item} />
        ))}
      </div>

      {/* container for the items to be dragged */}
      <div
        ref={drop}
        className=' bg-slate-200 border-2 w-[300px] min-h-[500px]'
      >
        {board.map((item, index) => (
          <Item key={index} id={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default InnerContainer;
