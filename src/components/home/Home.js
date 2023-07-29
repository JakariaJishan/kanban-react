import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import DragDrop from "../drag&drop/DragDrop";

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
  let result = useSelector(state=>state.todo)
  
  return (
    <div className="">
      <DragDrop finalSpaceCharacters={result} />
    </div>
  );
}

export default Home;
