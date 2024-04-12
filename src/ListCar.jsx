import React,{useState} from "react"

function ListCar() {

    const [cars, setCars]= useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [count , setCount] = useState(0);

    function handleAddCar(){

        setCount(count + 1 );

        if(count < 3){
            const newCar = { year:carYear,
                make:carMake,
               model: carModel };
            setCars(c => [...c, newCar]); 

            setCarYear(newDate().getFullYear());
            setCarMake("");
            setCarModel("");
        }

    }
    function handleRemoveCar(index){
        setCars(cars.filter((_,i) => i!== index ));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
  
    function handleModelChange(event){
        setCarModel(event.target.value);
    }

 
    return (<div>
                <p className="text-center mb-2 font-bold text-red-600">List Of Car Object</p>
                <ul className="text-center">
                {cars.map((car, index) => 
                <li className="text-white" key={index} onClick={()=> handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
                </ul>
                    <input type="text" className="border m-1 bg-orange-400 text-white text-bold" value={carYear} onChange={handleYearChange} maxLength="4" /><br/>
                    <input type="text" className="border m-1 bg-orange-400 text-white text-bold placeholder-white" placeholder="Enter car make" value={carMake}  maxLength="8" onChange={handleMakeChange}/><br/>
                    <input type="text" className="border m-1 bg-orange-400 text-white text-bold placeholder-white" placeholder="Enter car model" value={carModel}  maxLength="8" onChange={handleModelChange}/><br/>
                    <button onClick={handleAddCar} className="mt-1 bg-amber-950 w-48 text-white font-bold">Add Car</button>
            </div>
            );


    
}
export default ListCar