import React, { useState } from "react"

function Counter() {
    const [num, setNum] = useState(0);
    const numPlus = () => {
        setNum(num + 1);
    }
    const numReset = () => {
        setNum(0);
    }
    const numMinus = () => {
        setNum(num - 1);
    }
    return (
        <div className="counter-container text-center font-sans">
            <p className="count-display text-6xl mb-5 font-bold text-blue-800">{num}</p>
            <button className="w-16 h-10  text-xl font-bold me-1 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-400" onClick={numMinus}>-</button>
            <button className="w-16 h-10 text-xl font-bold me-1 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-400" onClick={numReset}>Reset</button>
            <button className="w-16 h-10 text-xl font-bold me-1 bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-400" onClick={numPlus}>+</button>
        </div>
    );
}
export default Counter