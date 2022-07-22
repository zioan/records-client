import { createContext, useEffect, useState } from 'react';

const RowsContext = createContext();

export const RowsProvider = ({ children }) => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows((prevState) => [...prevState, { id: 0, name: 'New Row' }]);
  };

  const changeRowType = (index, changedName) => {
    setRows((initialState) => {
      return [
        ...initialState.slice(0, index),
        (initialState[index] = { id: 0, name: changedName | 'changed' }),
        ...initialState.slice(index + 1),
      ];
    });
  };

  return (
    <RowsContext.Provider
      value={{
        rows,
        addRow,
        changeRowType,
      }}
    >
      {children}
    </RowsContext.Provider>
  );
};

export default RowsContext;
