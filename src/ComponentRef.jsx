import React, { useRef } from "react";

function ComponentRef() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1() {
    inputRef1.current.focus();
  }
  function handleClick2() {
    inputRef2.current.focus();
  }
  function handleClick3() {
    inputRef3.current.focus();
  }

  return (
    <div className="text-center">
      <button
        className="text-orange-500 mb-2 mt-3 font-bold"
        onClick={handleClick1}
      >
        Click me 1 !
      </button>
      <input className="focus:bg-yellow-400" ref={inputRef1} />

      <button
        className="text-purple-500 mb-2 mt-3 font-bold"
        onClick={handleClick2}
      >
        Click me 2 !
      </button>
      <input className="focus:bg-yellow-400" ref={inputRef2} />

      <button
        className="text-amber-300 mb-2 mt-3 font-bold"
        onClick={handleClick3}
      >
        Click me 3 !
      </button>
      <input className="focus:bg-yellow-400" ref={inputRef3} />
    </div>
  );
}
export default ComponentRef;
