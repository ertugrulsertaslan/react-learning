import React,{useState} from "react"

function UpdateList() {

    const [foods, setFoods] = useState(["Apple"]);
    const [count, setCount] = useState(0);
    function handleAddFood(){
        setCount(count + 1);
        if(count < 2 ){
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "";
            setFoods(f => ([...f, newFood]));
        }
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i!== index ));
    }

    return (
        <div>
            <h2 className="text-center font-bold font-sans text-red-600 mb-3">List of Food</h2>
            <ul>
                {foods.map((food,index) => <li className="bg-cyan-400 text-white font-bold m-2 p-1 w-56 h-8" key={index} onClick={()=> handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter Food Name" className="m-2 border-2 border-black rounded w-56" id="foodInput" />
            <button onClick={handleAddFood} className="w-60 bg-cyan-500 rounded h-8 text-white font-bold">Add Food</button>
        </div>
    );
}
export default UpdateList