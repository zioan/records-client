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
          ? ' border-2 bg-red-800 text-white text-center m-4'
          : 'border-2 bg-slate-500 text-white text-center m-4'
      }
    >
      <p>{item}</p>
    </div>
  );
}

export default Item;
