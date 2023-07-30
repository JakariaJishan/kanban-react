import React, { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../../redux/features/todoSlice';
import FormItem from './FormItem';

const Todo = () => {
  const now = new Date();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date(now).toJSON().slice(0, 10));
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo.todoItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title,
      description,
      date,
      id: uuid(),
    };

    dispatch(addTodo(todo));
    setTitle('');
    setDescription('');
    setDate(new Date(now).toJSON().slice(0, 10));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 sticky top-0 left-0 bg-[#1C2128]"
    >
      <div className="flex gap-2 py-3 items-center ">
        <BsCircleFill className="text-[#347D39] text-2xl" />
        <p className="font-bold text-xl">Todo</p>
        <p className="px-2 bg-slate-700 rounded-full">{state.length}</p>
      </div>
      <FormItem
        title={title}
        date={date}
        description={description}
        setDate={setDate}
        setDescription={setDescription}
        setTitle={setTitle}
      />
      <button className=" bg-purple-600 p-2 my-2">Add Todo</button>
    </form>
  );
};

export default Todo;
