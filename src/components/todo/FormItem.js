import React from "react";

const FormItem = ({date,description,title,setDate,setDescription,setTitle}) => {
  return (
    <div>
      <input
        type="text"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default FormItem;
