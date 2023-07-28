import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DropTodo = ({ todoCharacters }) => {
  return (
    <div>
      <Droppable droppableId="todo-characters" type="TASK">
        {(provided) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoCharacters.map(({ id, name, thumb }, index) => {
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
      </Droppable>
    </div>
  );
};

export default DropTodo;
