import React,{useState} from "react"
import './index.css';
    function ColorPicker() {

        const [color, setColor] = useState(("#FFFFFF"));

        function handleColorChange(event){
            setColor(event.target.value);
        }

        return(
            <div className="flex flex-col items-center">
                <h1>Color Picker</h1>
                <div className="w-36 h-36 flex justify-center items-center border-2 border-zinc-950 rounded mb-3 transition duration-150 ease-out" style={{backgroundColor : color}}>
                    <p className="ms-5">Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        );
}
export default ColorPicker