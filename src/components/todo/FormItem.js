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
    <div className="">
      <input
        type="text"
        className="bg-blue-500"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        className="bg-blue-500"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="bg-red-500 "
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default FormItem;
