import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { moveItem } from '../../redux/features/todoSlice';
import DropComplete from './DropComplete';
import DropInProgress from './DropInProgress';
import DropTodo from './DropTodo';

const DragDrop = () => {
  const dispatch = useDispatch();
  const { todoItems, inProgressItems, completeItems } = useSelector(
    (state) => state.todo,
  );

  function handleOnDragEndTodo(result) {
    if (!result.destination) return;

    const itemId = result.draggableId;
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;

    dispatch(moveItem({ itemId, sourceColumn, destinationColumn }));
  }

  return (
    <div>
      <div className="Home-header w-11/12 mx-auto">
        <h2 className="text-5xl font-bold text-[#ADBAC7] text-center py-8">
          Kanban Board
        </h2>

        <div className="flex gap-5 my-8 justify-center items-start">
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
