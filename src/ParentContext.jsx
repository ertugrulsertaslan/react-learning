import React, { useState, createContext } from "react";
import Child from "./Child.jsx";

export const Context = createContext();

function ParentContext() {
  const [clicked, SetClicked] = useState(false);

  return (
    <Context.Provider value={[clicked, SetClicked]}>
      <Child />
      <h1 className="text-black bg-white"> {clicked ? "true" : "false"}</h1>
    </Context.Provider>
  );
}
export default ParentContext;
