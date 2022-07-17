import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Item from './Item';

import uuid from 'react-uuid';

function InnerContainer() {
  const test = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
  ];

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'myDiv',
    drop: (item) => addItemToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), //boolean
    }),
  }));

  const addItemToBoard = (id) => {
    const selectedItem = test.filter((item) => item.id === id);
    console.log(selectedItem);
    setBoard((prevState) => [...prevState, selectedItem[0]]);
    console.log(board);
  };

  return (
    <section className=' flex'>
      {/* All draggable items  */}
      <div className=' bg-slate-200 border-2 w-[300px] min-h-[500px] mr-4'>
        {test.map((item) => (
          <Item key={uuid()} id={item.id} item={item.name} />
        ))}
      </div>

      {/* container for the items to be dragged */}
      <div
        ref={drop}
        className=' bg-slate-200 border-2 w-[300px] min-h-[500px]'
      >
        {board.map((item) => (
          <Item key={uuid()} id={item.id} item={item.name} />
        ))}
      </div>
    </section>
  );
}

export default InnerContainer;
