import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DropInProgress = ({ inProgressCharacters }) => {
  return (
    <div>
      <Droppable droppableId="in-progress-characters" type="TASK">
        {(provided) => (
          <ul
            className="characters2  h-96 bg-blue-500"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {inProgressCharacters.map(
              ({ id, title, description, date }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="flex">
                          <p>{title}</p>
                          <p>{description}</p>
                          <p>{date}</p>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              }
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default DropInProgress;
