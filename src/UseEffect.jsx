import React,{useState,useEffect} from "react"
function UseEffect(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    
    useEffect( () => {
        document.title = `Count ${count} ${color}`;

    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
        <div className="text-center">
            <p className="w-40 m-4 bg-violet-700 p-1 text-white">Count: {count}</p>
            <button className="w-20 m-2 bg-green-500 p-1 text-white" onClick={addCount}>Add</button>
            <button className="w-20 m-2 bg-red-500 p-1 text-white" onClick={subtractCount}>Subtract</button><br/>
            <button className="w-30 m-2 bg-amber-400 p-1 text-white" onClick={changeColor}>Change Color</button>
        </div>
            
    </>);
}
export default UseEffect