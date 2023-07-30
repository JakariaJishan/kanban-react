import React from "react";

const FormItem = ({
  date,
  description,
  title,
  setDate,
  setDescription,
  setTitle,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
        required
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
        placeholder="Description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className=" bg-[#41464e] w-full p-2 outline-purple-500 outline-offset-2 outline-4"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default FormItem;
