import React, { useState } from 'react';
import DraggableBox from '../drag&drop/DraggableBox';
import DroppableBox from '../drag&drop/DroppableBox';

const Home = () => {
  const [droppedBoxes, setDroppedBoxes] = useState([]);

  const handleDrop = (boxName) => {
    console.log(boxName);
    setDroppedBoxes((prevBoxes) => [...prevBoxes, boxName]);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>Drag and Drop Example</h2>
      <DroppableBox onDrop={handleDrop}>
        {droppedBoxes.map((box, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            {box}
          </div>
        ))}
      </DroppableBox>

      <h3>Draggable Boxes</h3>
      <DraggableBox name="Box 1" />
      <DraggableBox name="Box 2" />
      <DraggableBox name="Box 3" />
    </div>
  );
};

export default Home;
