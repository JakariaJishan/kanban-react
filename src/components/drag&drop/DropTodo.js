import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Todo from "../todo/Todo";

const DropTodo = ({ todoCharacters }) => {
  return (
    <div>
     <Todo />
      
      <Droppable droppableId="todo-characters" type="TASK">
        {(provided) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoCharacters.map(({ id, title, description,date }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      
                      <p>{title}</p>
                      <p>{description}</p>
                      <p>{date}</p>
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
