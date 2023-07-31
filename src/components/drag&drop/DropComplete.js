import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckCircle, BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  deleteComplete,
  editComplete,
  saveAssign,
} from "../../redux/features/todoSlice";
import Complete from "../complete/Complete";

const DropComplete = ({ completeItems, destinationColumn }) => {
  const now = new Date();
  const dispatch = useDispatch();
  const [titlex, setTitle] = useState("");
  const [descriptionx, setDescription] = useState("");
  const [datex, setDate] = useState(new Date(now).toJSON().slice(0, 10));

  const [isOpenAble, setIsOpenAble] = useState(null);
  const [isEditable, setIsEditable] = useState(null);
  const [assignee, setAssignee] = useState("");

  const handleEditItem = (id) => {
    setIsEditable(id);
  };

  const handleSaveItem = (e) => {
    e.preventDefault();
    const editedItems = {
      title: titlex,
      description: descriptionx,
      date: datex,
      id: isEditable,
    };
    dispatch(editComplete(editedItems));
    setIsEditable(null);

    setTitle("");
    setDescription("");
    setDate(new Date(now).toJSON().slice(0, 10));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteComplete({ id }));
  };

  const handleAssignment = (id) => {
    setIsOpenAble(id);
  };

  const saveAssignment = (id) => {
    dispatch(saveAssign({ assignee, id, destinationColumn, track: true  }));
    setIsOpenAble(null);
  };
  return (
    <div className="bg-[#1C2128] p-5  relative">
      <Complete />
      <Droppable droppableId="complete" type="TASK">
        {(provided) => (
          <ul
            className="characters h-96 overflow-y-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {completeItems?.map(({ id, title, description, date,assign }, index) => {
              const isEditing = isEditable === id;
              const isOpen = isOpenAble === id;

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
                              className="bg-[#41464e] w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                              required
                              placeholder="Title"
                              value={titlex}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                              type="text"
                              className="bg-[#41464e] w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                              placeholder="Description"
                              required
                              value={descriptionx}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                              type="date"
                              className="bg-[#41464e] text-gray-400 w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
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
                              <p>{assign}</p>
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            {isOpen ? (
                              <div className="z-10 bg-slate-400 absolute">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    saveAssignment(id);
                                  }}
                                  className="text-xl"
                                >
                                  <ul className="w-[120px] p-2">
                                    <li className="flex justify-center items-center mb-1">
                                      <input
                                        type="radio"
                                        name="assignee"
                                        value="jack"
                                        onChange={(e) =>
                                          setAssignee(e.target.value)
                                        }
                                      />
                                      Jack
                                    </li>
                                    <li className="flex justify-center items-center mb-1">
                                      <input
                                        type="radio"
                                        name="assignee"
                                        value="joe"
                                        onChange={(e) =>
                                          setAssignee(e.target.value)
                                        }
                                      />
                                      joe
                                    </li>
                                  </ul>
                                  <button
                                    type="submit"
                                    className="p-2 hover:bg-slate-600 w-full"
                                  >
                                    {" "}
                                    save
                                  </button>
                                </form>
                              </div>
                            ) : null}

                            <button onClick={(e) => handleAssignment(id)}>
                              <BsThreeDots />
                            </button>
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

export default DropComplete;
