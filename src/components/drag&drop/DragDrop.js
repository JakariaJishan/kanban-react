import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DropInProgress from "./DropInProgress";
import DropTodo from "./DropTodo";

const DragDrop = ({finalSpaceCharacters}) => {
  const [todoCharacters, updateTodoCharacters] = useState(finalSpaceCharacters);
  const [inProgressCharacters, updateInProgressCharacters] = useState([]);

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;

    let draggedItem;

    if (result.source.droppableId === "todo-characters") {
      draggedItem = todoCharacters[result.source.index];
      todoCharacters.splice(result.source.index, 1);
    } else {
      draggedItem = inProgressCharacters[result.source.index];
      inProgressCharacters.splice(result.source.index, 1);
    }

    if (result.destination.droppableId === "todo-characters") {
      todoCharacters.splice(result.destination.index, 0, draggedItem);
    } else {
      inProgressCharacters.splice(result.destination.index, 0, draggedItem);
    }
    updateInProgressCharacters(inProgressCharacters);
    updateTodoCharacters(todoCharacters);
  }

  return (
    <div>
      <div className="Home-header ">
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
