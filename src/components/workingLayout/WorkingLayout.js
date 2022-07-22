import { useRef } from 'react';
import useRightClickMenu from '../../hooks/useRightClickMenu';
import RightMenu from '../ui/RightMenu';

function WorkingLayout() {
  const { x, y, showMenu } = useRightClickMenu();

  return (
    <section id='allowMenu' className=' w-40 h-40 bg-slate-400'>
      <RightMenu x={x} y={y} showMenu={showMenu} />
    </section>
  );
}

export default WorkingLayout;
