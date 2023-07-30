import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../redux/features/todoSlice";
import FormItem from "./FormItem";

const Todo = () => {
  const now = new Date()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date(now).toJSON().slice(0, 10));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      title,
      description,
      date,
      id: uuid(),
    };

    dispatch(addTodo(todo));
  };
  return (
    <form onSubmit={handleSubmit} className="mb-5 sticky top-0 left-0">
      <div>
        hello
      </div>
      <FormItem
        title={title}
        date={date}
        description={description}
        setDate={setDate}
        setDescription={setDescription}
        setTitle={setTitle}
      />
      <button className=" bg-purple-600 p-2 my-2">Add ToDo</button>
    </form>
  );
};

export default Todo;
