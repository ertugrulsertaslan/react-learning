import React, {useState} from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyFavoriteCar from "./MyFavoriteCar.jsx";
import UpdateList from "./UpdateList.jsx";
import ListCar from "./ListCar.jsx";
import ToDoList from "./ToDoList.jsx";
import UseEffect from "./UseEffect.jsx";
import WidthHeight from "./WidthHeight.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./ComponentA.jsx";
import ComponentRef from "./ComponentRef.jsx";
import StopWatch from "./StopWatch.jsx";
import HomePage from "./HomePage.jsx";

function App() {

  const array = ['❤️', '✨', '💀'];

  return (
  <>
  <section>
    <div className="list">
      <ul>
        <li><a href="/button">Button</a></li>
        <li><a href="/card">Card</a></li>
        <li><a href="/colorPicker">Color Picker</a></li>
        <li><a href="/componentA">Components</a></li>
        <li><a href="/componentRef">ComponentRef</a></li>
        <li><a href="/counter">Counter</a></li>
      </ul>
    </div>
  <div className="animation"></div>
</section>
    </>
    
  );
}

export default App
