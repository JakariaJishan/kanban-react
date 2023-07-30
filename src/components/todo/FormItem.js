import React from 'react';

const FormItem = ({
  date,
  description,
  title,
  setDate,
  setDescription,
  setTitle,
}) => (
  <div className="flex gap-2">
    <input
      type="text"
      className="bg-[#41464e] w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
      required
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      className="bg-[#41464e] w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
      placeholder="Description"
      required
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <input
      type="date"
      className=" bg-[#41464e] text-gray-400 w-full p-2 focus:outline-purple-500 outline-none border-transparent focus:border-transparent focus:ring-0"
      required
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  </div>
);

export default FormItem;
