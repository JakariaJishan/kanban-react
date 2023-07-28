import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableBox = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BOX', 
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        border: '1px solid #ccc',
        backgroundColor: '#f0f0f0',
        cursor: 'move',
        marginBottom: '8px',
      }}
    >
      {name}
    </div>
  );
};

export default DraggableBox;
