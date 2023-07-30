import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/features/todoSlice";
import Todo from "../todo/Todo";

const DropTodo = ({ todoItems }) => {
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
    dispatch(editTodo(editedItems));
    setIsEditable(null);

    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="bg-[#1C2128] p-5   relative">
      <Todo />
      <Droppable droppableId="todo" type="TASK">
        {(provided) => (
          <ul
            className="characters h-96 overflow-y-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoItems.map(({ id, title, description, date }, index) => {
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
                        <form onSubmit={handleSaveItem}>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              className="bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
                              required
                              placeholder="Title"
                              value={titlex}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                              type="text"
                              className="bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
                              placeholder="Description"
                              required
                              value={descriptionx}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                              type="date"
                              className=" bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
                              required
                              value={datex}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                          <button className="bg-[#347D39] p-2 my-2">
                            Save
                          </button>
                        </form>
                      ) : (
                        <div className="flex justify-between gap-5 items-start">
                          <div className=" flex gap-5">
                            <BsCheckCircle className="text-blue-500 text-2xl font-bold" />
                            <div className="text-[#ADBAC7]">
                              <p className="break-words">{title}</p>
                              <p className="break-words">{description}</p>
                              <p>{date}</p>
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <button
                              onClick={() => handleEditItem(id)}
                              className="text-slate-500 text-2xl"
                            >
                              <AiOutlineEdit />
                            </button>
                            <button
                              onClick={() => {
                                handleDeleteTodo(id);
                              }}
                              className="text-2xl text-red-500"
                            >
                              <AiOutlineDelete />
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

export default DropTodo;
