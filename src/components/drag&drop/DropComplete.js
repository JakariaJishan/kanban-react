import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteComplete, editComplete } from "../../redux/features/todoSlice";
import Complete from "../complete/Complete";

const DropComplete = ({ completeItems }) => {
  const dispatch = useDispatch();
  const [titlex, setTitle] = useState("");
  const [descriptionx, setDescription] = useState("");
  const [datex, setDate] = useState("");

  const [isEditable, setIsEditable] = useState(null);

  const handleEditItem = (id) => {
    setIsEditable(id);
  };

  const handleSaveItem = (e) => {
    e.preventDefault();
    let editedItems = {
      title: titlex,
      description: descriptionx,
      date: datex,
      id: isEditable,
    };
    dispatch(editComplete(editedItems));
    setIsEditable(null);

    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteComplete({ id }));
  };
  
  return (
    <div>
      <Complete/>
      <Droppable droppableId="complete" type="TASK">
        {(provided) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {completeItems.map(({ id, title, description, date }, index) => {
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
                        <form>
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
                            <button
                              onClick={() => {
                                handleDeleteTodo(id);
                              }}
                            >
                              delete
                            </button>
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

export default DropComplete;
