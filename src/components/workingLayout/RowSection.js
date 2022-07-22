import { useContext } from 'react';

import { BsPlusLg } from 'react-icons/bs';
import uuid from 'react-uuid';
import Row from './Row';

import RowsContext from '../../context/RowsContext';

function RowSection() {
  const { rows, addRow } = useContext(RowsContext);

  return (
    <div className=' flex items-center'>
      <button
        className=' btn-accent btn-circle flex justify-center items-center mr-4'
        onClick={addRow}
      >
        <BsPlusLg className=' text-2xl text-white' />
      </button>

      {rows.map((row, index) => {
        return <Row key={uuid()} row={row} index={index} />;
      })}
    </div>
  );
}

export default RowSection;
