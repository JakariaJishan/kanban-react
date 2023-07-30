import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveItem } from "../../redux/features/todoSlice";
import DropComplete from "./DropComplete";
import DropInProgress from "./DropInProgress";
import DropTodo from "./DropTodo";

const DragDrop = () => {
  const dispatch = useDispatch();
  const [desiredDate, setDesiredDate] = useState("");
  const [sourceColumn, setSourceColumn] = useState("");

  let { todoItems, inProgressItems, completeItems } = useSelector(
    (state) => state.todo
  );

  const filterByDate = (state, desiredDate) => {
    if (!desiredDate) {
      return state;
    }
    return state.filter((item) => item.date === desiredDate);
  };

  todoItems = filterByDate(todoItems, desiredDate);
  inProgressItems = filterByDate(inProgressItems, desiredDate);
  completeItems = filterByDate(completeItems, desiredDate);

  const handleClearDate = () => {
    setDesiredDate("");
  };
  function handleOnDragEndTodo(result) {
    if (!result.destination) return;
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    setSourceColumn(sourceColumn);

    dispatch(
      moveItem({
        sourceColumn,
        destinationColumn,
        sourceIndex,
        destinationIndex,
      })
    );
  }

  return (
    <div>
      <div className="Home-header w-11/12 mx-auto">
        <h2 className="text-5xl font-bold text-[#ADBAC7] text-center py-8">
          Kanban Board
        </h2>
        <div>
          <p>Filter by Due Date</p>
          <input
            type="date"
            className=" bg-[#41464e] text-gray-400  p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
            value={desiredDate}
            onChange={(e) => setDesiredDate(e.target.value)}
          />
          <button
            onClick={handleClearDate}
            className="p-2 m-2 bg-gray-600 text-white"
          >
            Clear Date
          </button>
        </div>

        <div className="flex gap-5 my-8 justify-center items-start">
          <DragDropContext onDragEnd={handleOnDragEndTodo}>
            <DropTodo todoItems={todoItems} sourceColumn={sourceColumn} />
            <DropInProgress
              inProgressItems={inProgressItems}
              sourceColumn={sourceColumn}
            />
            <DropComplete
              completeItems={completeItems}
              sourceColumn={sourceColumn}
            />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
