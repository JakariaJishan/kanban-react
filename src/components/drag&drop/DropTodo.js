import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/counterSlice";

const DropTodo = ({ todoCharacters }) => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [date,setDate] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault()
    let todo = {
      title,
      description,
      date
    }
    dispatch(add(todo))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="date" required value={date} onChange={(e) => setDate(e.target.value)}/>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
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
