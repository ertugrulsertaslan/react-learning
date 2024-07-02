import React, { useState, useContext } from "react";
import { Context } from "./ParentContext.jsx";
function GrandChild() {
  const [clicked, SetClicked] = useContext(Context);
  return (
    <div>
      <button className="bg-cyan-500 p-5" onClick={() => SetClicked(!clicked)}>
        {clicked ? "true" : "false"}
      </button>
    </div>
  );
}
export default GrandChild;
