import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Item from './Item';

import uuid from 'react-uuid';

function InnerContainer() {
  const listOfElements = [
    { id: 1, name: 'Text' },
    { id: 2, name: 'Long Text' },
    { id: 3, name: 'Number' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'File' },
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
    const selectedItem = listOfElements.filter((item) => item.id === id);

    setBoard((prevState) => [...prevState, selectedItem[0]]); //add new item with every dnd
    // setBoard([selectedItem]) //replace the item with dnd
  };

  return (
    <section className=' overflow-auto'>
      {/* container for the items to be dragged */}
      <div
        ref={drop}
        className=' bg-slate-200 border-2 h-auto min-h-16 flex  w-auto mb-6 overflow-auto'
      >
        {board.map((item) => (
          <Item key={uuid()} id={item.id} item={item.name} />
        ))}
      </div>

      {/* All draggable items  */}
      <div className=' bg-slate-200 border-2 w-[300px] min-h-[500px] mr-4'>
        {listOfElements.map((item) => (
          <Item key={uuid()} id={item.id} item={item.name} />
        ))}
      </div>
    </section>
  );
}

export default InnerContainer;
