import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const DropInProgress = ({inProgressCharacters}) => {
  return (
    <div><Droppable droppableId="in-progress-characters" type="TASK">
    {(provided) => (
      <ul
        className="characters2 flex flex-col flex-1 h-96 bg-blue-500"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {inProgressCharacters.map(({ id, name, thumb }, index) => {
          return (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="characters-thumb">
                    <img src={thumb} alt={`${name} Thumb`} />
                  </div>
                  <p>{name}</p>
                </li>
              )}
            </Draggable>
          );
        })}
        {provided.placeholder}
      </ul>
    )}
  </Droppable></div>
  )
}

export default DropInProgress