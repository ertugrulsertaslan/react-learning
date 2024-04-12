import React,{useState} from "react"

function MyFavoriteCar() {

    const [car, setCar]= useState({ year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c , year : event.target.value }));
    }
    function handleMakeChange(event){
        setCar(c => ({...c , make : event.target.value }));
    }
    function handleModelChange(event){
        setCar(c => ({...c , model : event.target.value }));
    }
    return (<div className="text-center">
            <p className="m-1 font-sans font-bold text-white">Your Favorite Car Is : <br/> {car.year} {car.make} {car.model}</p>
              <input type="text" className="bg-gray-500 p-1 m-1" value={car.year} onChange={handleYearChange} maxLength = "4"/><br/>
              <input type="text" className="bg-gray-500 p-1 m-1" value={car.make} onChange={handleMakeChange}  maxLength="13"/><br/>
              <input type="text" className="bg-gray-500 p-1 m-1" value={car.model} onChange={handleModelChange}  maxLength="10"/>
            </div>
            );
}
export default MyFavoriteCar