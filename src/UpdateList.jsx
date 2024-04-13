import React, { useState } from "react"

function UpdateList() {


    const [foods, setFoods] = useState(["Apple"]);
    const [value, setValue] = useState("");

    const isDisabled = foods.length > 1 || foods.includes(value) || value.trim() == "";

    function handleAddFood() {
        setFoods(f => ([...f, value]));
        setValue('')

    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    console.log('render');

    return (
        <div>
            <h2 className="text-center font-bold font-sans text-red-600 mb-3">List of Food</h2>
            <ul>
                {foods.map((food, index) => {
                    return (
                        <li className="bg-cyan-400 text-white font-bold m-2 p-1 w-56 h-8" key={food} onClick={() => handleRemoveFood(index)}>{food}</li>
                    )
                })}
            </ul>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Food Name" className="m-2 border-2 border-black rounded w-56" />
            {foods.includes(value) && (
                <span className='text-yellow-200 mt-4 '> Food must be unique</span>
            )}
            <button disabled={isDisabled} onClick={handleAddFood} className="w-60 bg-cyan-500 rounded h-8 text-white font-bold">Add Food</button>
        </div>
    );
}
export default UpdateList