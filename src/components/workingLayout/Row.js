import { useContext } from 'react';
import useRightClickMenu from '../../hooks/useRightClickMenu';
import RightMenu from '../ui/RightMenu';
import RowsContext from '../../context/RowsContext';

function Row({ row, index }) {
  const { x, y, showMenu } = useRightClickMenu();
  const { changeRowType } = useContext(RowsContext);

  const changeType = () => {
    console.log(row);
    console.log('row index: ', index);
    changeRowType(index, 'text');
  };

  const menuOptions = { changeType };

  return (
    <div
      id='allowMenu'
      className='  border-2 p-2 m-2 w-min min-w-[90px]'
      onClick={changeType}
    >
      <span id='allowMenu'>{row.name}</span>
      <RightMenu x={x} y={y} showMenu={showMenu} menuOptions={menuOptions} />
    </div>
  );
}

export default Row;
