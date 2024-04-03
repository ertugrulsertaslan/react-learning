import React, {useState} from "react";


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
        <li><a href="/food">Food</a></li>
        <li><a href="/footer">Footer</a></li>
        <li><a href="/header">Header</a></li>
        <li><a href="/list">List</a></li>
        <li><a href="/listCar">ListCar</a></li>
        <li><a href="/myComponent">My Component</a></li>
        <li><a href="/myFavoriteCar">My Favorite Car</a></li>
      </ul>
    </div>
  <div className="animation"></div>
</section>
    </>
    
  );
}

export default App
