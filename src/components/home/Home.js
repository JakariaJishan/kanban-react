import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../../App.css";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

function Home() {
  const [todoCharacters, updateTodoCharacters] = useState(finalSpaceCharacters);
  const [inProgressCharacters, updateInProgressCharacters] = useState([]);

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;

    let draggedItem;

    if (result.source.droppableId === "todo-characters") {
      draggedItem = todoCharacters[result.source.index];
      console.log(draggedItem);
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
    <div className="">
      <div className="Home-header flex">
        <h2>To Do</h2>
        <DragDropContext onDragEnd={handleOnDragEndTodo}>
          <Droppable droppableId="todo-characters" type="TASK">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todoCharacters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="in-progress-characters" type="TASK">
            {(provided) => (
              <ul
                className="characters2 flex flex-col flex-1 h-96 bg-blue-500"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {inProgressCharacters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Home;
