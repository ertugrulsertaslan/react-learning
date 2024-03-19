import React, {useState} from "react"

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
    return(
        <div className="counter-container">
            <p className="count-display">{num}</p>
            <button className="counter-button" onClick={numPlus}>+</button>
            <button className="counter-button" onClick={numReset}>Reset</button>
            <button className="counter-button" onClick={numMinus}>-</button>
        </div>
    );
}
export default Counter