import React, {useState, useEffect, useRef} from "react"

function ComponentRef(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect( () => {
        
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div className="text-center">
            <button className='text-orange-500 mb-2 mt-3' onClick={handleClick1}>
                Click me 1 !
            </button>
            <input ref={inputRef1} />

            <button className='text-purple-500 mb-2 mt-3' onClick={handleClick2}>
                Click me 2 !
            </button>
            <input ref={inputRef2} />

            <button className='text-amber-300 mb-2 mt-3' onClick={handleClick3}>
                Click me 3 !
            </button>
            <input ref={inputRef3} />
        </div>
    );

}
export default ComponentRef