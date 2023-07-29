import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import DropInProgress from "./DropInProgress";
import DropTodo from "./DropTodo";

const DragDrop = ({ finalSpaceCharacters }) => {
  const [todoCharacters, updateTodoCharacters] = useState([]);
  const [inProgressCharacters, updateInProgressCharacters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    updateTodoCharacters(finalSpaceCharacters);
  }, [finalSpaceCharacters]);

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;
    if (
      result.destination.droppableId == result.source.droppableId &&
      result.destination.index == result.source.index
    )
      return;

    let draggedItem;
    let updatedTodoCharacters = [...todoCharacters];
    let updatedInProgressCharacters = [...inProgressCharacters];

    if (result.source.droppableId === "todo-characters") {
      draggedItem = updatedTodoCharacters[result.source.index];
      updatedTodoCharacters.splice(result.source.index, 1);
    } else {
      draggedItem = updatedInProgressCharacters[result.source.index];
      updatedInProgressCharacters.splice(result.source.index, 1);
    }

    if (result.destination.droppableId === "todo-characters") {
      updatedTodoCharacters.splice(result.destination.index, 0, draggedItem);
    } else {
      updatedInProgressCharacters.splice(
        result.destination.index,
        0,
        draggedItem
      );
    }

    updateInProgressCharacters(updatedInProgressCharacters);
    updateTodoCharacters(updatedTodoCharacters);

    // dispatch(ondrag(updatedTodoCharacters))
  }

  return (
    <div>
      <div className="Home-header w-96 mx-auto">
        <h2>To Do</h2>
        <DragDropContext onDragEnd={handleOnDragEndTodo}>
          <DropTodo todoCharacters={todoCharacters} />
          <DropInProgress inProgressCharacters={inProgressCharacters} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default DragDrop;
