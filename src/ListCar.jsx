import React, { useState } from "react";
import { isEqual } from "lodash";

function ListCar() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(String(new Date().getFullYear()));
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const carMaxLengthExceeded = cars.length > 2;
  const isCarNotUnique = cars.find((car) =>
    isEqual(
      { ...car, id: null },
      { id: null, year: carYear, make: carMake, model: carModel }
    )
  );
  const isInputEmpty =
    carYear.trim() == "" || carModel.trim() == "" || carMake.trim() == "";

  const isDisabled = carMaxLengthExceeded || isCarNotUnique || isInputEmpty;

  function handleAddCar() {
    const newCar = {
      id: crypto.randomUUID(),
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);

    setCarYear(String(new Date().getFullYear()));
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <p className="text-center mb-2 font-bold text-red-600">
        List Of Car Object
      </p>
      <ul className="text-center">
        {cars.map((car, index) => (
          <li
            className="text-white"
            key={car.id}
            onClick={() => handleRemoveCar(index)}
          >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input
        type="text"
        className="border m-1 bg-orange-400 text-white text-bold"
        value={carYear}
        onChange={handleYearChange}
        maxLength="4"
      />

      <input
        type="text"
        className="border m-1 bg-orange-400 text-white text-bold placeholder-white"
        placeholder="Enter car make"
        value={carMake}
        maxLength="8"
        onChange={handleMakeChange}
      />

      <input
        type="text"
        className="border m-1 bg-orange-400 text-white text-bold placeholder-white"
        placeholder="Enter car model"
        value={carModel}
        maxLength="8"
        onChange={handleModelChange}
      />

      <span className="text-yellow-200 text-center p-0 h-8">
        {isCarNotUnique && "Car must be unique"}
      </span>
      <button
        disabled={isDisabled}
        onClick={handleAddCar}
        className="bg-green-500 w-48 text-white font-bold disabled:bg-green-800"
      >
        Add Car
      </button>
    </div>
  );
}
export default ListCar;
