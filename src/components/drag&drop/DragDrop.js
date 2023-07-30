import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveItem } from "../../redux/features/todoSlice";
import DropComplete from "./DropComplete";
import DropInProgress from "./DropInProgress";
import DropTodo from "./DropTodo";

const DragDrop = ({ finalSpaceCharacters }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { todoItems, inProgressItems, completeItems } = useSelector(
    (state) => state.todo
  );

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;

    const itemId = result.draggableId;
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;

    dispatch(moveItem({ itemId, sourceColumn, destinationColumn }));
  }

  const handleFilter = () => {};

  return (
    <div>
      <div className="Home-header w-11/12 mx-auto">
        <h2 className="text-5xl font-bold text-[#ADBAC7] text-center py-8">
          To Do
        </h2>
        <div className="flex gap-5">
          <input
            type="text"
            className="w-full bg-[#5c5c5c]"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleFilter}>filter</button>
        </div>
        <div className="flex gap-5 my-8 ">
          <DragDropContext onDragEnd={handleOnDragEndTodo}>
            <DropTodo todoItems={todoItems} />
            <DropInProgress inProgressItems={inProgressItems} />
            <DropComplete completeItems={completeItems} />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
