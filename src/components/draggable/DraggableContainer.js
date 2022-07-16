import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import InnerContainer from './InnerContainer';

function DraggableContainer() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h2>DraggableContainer</h2>
      <InnerContainer />
    </DndProvider>
  );
}

export default DraggableContainer;
