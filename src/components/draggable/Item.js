import { useDrag } from 'react-dnd';

function Item({ id, item }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'myDiv',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), //boolean
    }),
  }));

  return (
    <div
      ref={drag}
      className={
        isDragging
          ? ' border-2 bg-red-800 text-white text-center m-2 p-2 w-[120px] min-w-[100px]'
          : 'border-2 bg-slate-500 text-white text-center m-2 p-2 w-[120px] min-w-[100px]'
      }
    >
      <p className=' break-normal'>{item}</p>
    </div>
  );
}

export default Item;
