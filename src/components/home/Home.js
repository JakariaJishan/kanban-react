import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import DragDrop from "../drag&drop/DragDrop";

function Home() {
  let result = useSelector(state=>state.todo.todoItems)
  
  return (
    <div className="">
      <DragDrop finalSpaceCharacters={result} />
    </div>
  );
}

export default Home;
