import React, {useState} from "react";
import './index.css';
import Button from "./Button";
import Card from "./Card";
import Student from "./Student.jsx";
import ComponentA from "./ComponentA.jsx";

import ColorPicker from "./ColorPicker";
function App() {

  const array = ['❤️', '✨', '💀'];

  return (
  <>
    <div className="flex items-center justify-center">
      <div className = "grid grid-cols-3 gap-10">
            <div className="w-60 h-60 flex items-center justify-center"><Button /></div>
              <div className="w-60 h-60 flex items-center justify-center"><Card /></div>
              <div className="w-60 h-60 flex items-center justify-center"><ColorPicker/></div>
              <div className="w-60 h-60 flex items-center justify-center"><Student name="Ertugrul" age={24} isStudent={true} /></div>
              <div className="w-60 h-60 flex items-center justify-center"><ComponentA/></div>
              <div className="w-60 h-60 flex items-center justify-center">06</div>
              <div className="w-60 h-60 flex items-center justify-center">07</div>
              <div className="w-60 h-60 flex items-center justify-center">08</div>
              <div className="w-60 h-60 flex items-center justify-center">09</div>
            </div>
      </div>   
    </>
    
  );
}

export default App
