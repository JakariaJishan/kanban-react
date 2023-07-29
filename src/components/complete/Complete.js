import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addComplete } from "../../redux/features/todoSlice";
import FormItem from "../todo/FormItem";

const Complete = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      title,
      description,
      date,
      id:uuid()
    };
    
    dispatch(addComplete(todo));
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        title={title}
        date={date}
        description={description}
        setDate={setDate}
        setDescription={setDescription}
        setTitle={setTitle}
      />
      <button>Add ToDo</button>
    </form>
  );
};

export default Complete;
