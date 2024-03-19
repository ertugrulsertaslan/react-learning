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
      <Header />
      <Food></Food>
      <Card></Card>
      <Button></Button>
      <Student></Student>
      <List></List>
      <ProfilePicture></ProfilePicture>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <ColorPicker></ColorPicker>
      <MyFavoriteCar></MyFavoriteCar>
      <UpdateList></UpdateList>
      <ListCar></ListCar>
      <ToDoList></ToDoList>
      <UseEffect></UseEffect>
      <WidthHeight></WidthHeight>
      <DigitalClock></DigitalClock>
      <ComponentA></ComponentA>
      <ComponentRef></ComponentRef>
      <StopWatch></StopWatch>
      <Footer />
    </>
    
  );
}

export default App
