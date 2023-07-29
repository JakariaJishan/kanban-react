import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { deleteInProgress, editInProgress } from "../../redux/features/todoSlice";
import Task from "../task/Task";

const DropInProgress = ({ inProgressItems }) => {
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
    dispatch(editInProgress(editedItems));
    setIsEditable(null);

    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteInProgress({ id }));
  };
  
  return (
    <div className="bg-[#1C2128] p-5 h-[30rem] overflow-y-auto ">
      <Droppable droppableId="in-progress" type="TASK">
        {(provided) => (
          <ul
            className="characters h-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {inProgressItems.map(({ id, title, description, date }, index) => {
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
      <Task />

    </div>
  );
};

export default DropInProgress;
