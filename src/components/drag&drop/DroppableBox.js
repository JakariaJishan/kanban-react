import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableBox = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'BOX', 
    drop: (item) => onDrop(item.name),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  console.log(children);
  return (
    <div
      ref={drop}
      style={{
        padding: '16px',
        border: '2px dashed #ccc',
        backgroundColor: isOver ? '#f0f0f0' : 'transparent',
      }}
    >
      {children}
    </div>
  );
};

export default DroppableBox;
