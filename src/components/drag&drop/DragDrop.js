import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveItem } from "../../redux/features/counterSlice";
import DropComplete from "./DropComplete";
import DropInProgress from "./DropInProgress";
import DropTodo from "./DropTodo";

const DragDrop = ({ finalSpaceCharacters }) => {
  const dispatch = useDispatch();
  const {todoItems,inProgressItems,completeItems} = useSelector(state => state.todo)

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;

    const itemId = result.draggableId;
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;

    dispatch(moveItem({ itemId, sourceColumn, destinationColumn }));
  }

  return (
    <div>
      <div className="Home-header w-96 mx-auto">
        <h2>To Do</h2>
        <DragDropContext onDragEnd={handleOnDragEndTodo}>
          <DropTodo todoItems={todoItems} />
          <DropInProgress inProgressItems={inProgressItems} />
          <DropComplete completeItems={completeItems} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default DragDrop;
