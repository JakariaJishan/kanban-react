import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { editItem } from "../../redux/features/counterSlice";
import Todo from "../todo/Todo";

const DropTodo = ({ todoCharacters }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [titlex, setTitle] = useState("");
  const [descriptionx, setDescription] = useState("");
  const [datex, setDate] = useState("");

  const [isEditable, setIsEditable] = useState(null);
  const [editableData, setEditableData] = useState({});

  const handleEditItem = (id) => {
    setIsEditable(id);
  };

  const handleSaveItem = (e) => {
    e.preventDefault()
    let editedItems = {
      title: titlex,
      description: descriptionx,
      date: datex,
      id:isEditable
    };
    dispatch(editItem(editedItems));
    setIsEditable(null);

    setTitle('')
    setDescription('')
    setDate('')
  };
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
            {todoCharacters.map(({ id, title, description, date }, index) => {
              const isEditing = isEditable === id;
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {isEditing ? (
                        <form >
                          <input
                            type="text"
                            required
                            autoFocus
                            value={descriptionx}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          <input
                            type="date"
                            required
                            value={datex}
                            onChange={(e) => setDate(e.target.value)}
                          />
                          <input
                            type="text"
                            required
                            value={titlex}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <button onClick={handleSaveItem}>save</button>
                        </form>
                      ) : (
                        <div>
                          <p>{title}</p>
                          <p>{description}</p>
                          <p>{date}</p>
                          <div className="float-right">
                            <button onClick={() => handleEditItem(id)}>
                              edit
                            </button>
                            <button>delete</button>
                          </div>
                        </div>
                      )}
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
