import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DropTodo = ({ todoCharacters }) => {
  const [title,setTitle] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(title);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button>Add ToDo</button>
      </form>
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
