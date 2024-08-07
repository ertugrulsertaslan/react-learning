import React from "react";
import "./index.css";
import Button from "./Button";
import Card from "./Card";
import Student from "./Student.jsx";
import ComponentA from "./ComponentA.jsx";
import ComponentRef from "./ComponentRef.jsx";
import Food from "./Food.jsx";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import ListCar from "./ListCar.jsx";
import ColorPicker from "./ColorPicker";
import Footer from "./Footer.jsx";
import MyComponent from "./MyComponent.jsx";
import MyFavoriteCar from "./MyFavoriteCar.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import UseEffect from "./UseEffect.jsx";
import UpdateList from "./UpdateList.jsx";
import UserGreeting from "./UserGreeting.jsx";
import WidthHeight from "./WidthHeight.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import StopWatch from "./StopWatch.jsx";
import ToDoList from "./ToDoList.jsx";
import DigitalClock from "./DigitalClock.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 75 },
    { id: 3, name: "Banane", calories: 105 },
    { id: 4, name: "Coconut", calories: 45 },
    { id: 5, name: "Pineapple", calories: 35 },
  ];

  return (
    <>
      <div className="flex items-center justify-center bg-green-950">
        <div className="grid grid-cols-3 gap-10 my-20">
          <div className="w-60 h-60 flex items-center justify-center">
            <StopWatch />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <WidthHeight />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <DigitalClock />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ColorPicker />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ToDoList />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Counter />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ComponentRef />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ComponentA />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <MusicPlayer />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <UpdateList />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Student name="Ertugrul" age={24} isStudent={true} />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            {fruits.length > 0 && <List items={fruits} category="Fruits" />}
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Card />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <MyFavoriteCar />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ListCar />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <MyComponent />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <ProfilePicture />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Button />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <UseEffect />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <UserGreeting isLoggedIn={true} username="Ertu" />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Food />
          </div>
          <div className="w-60 h-60 flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
