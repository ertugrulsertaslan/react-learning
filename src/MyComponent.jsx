import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div className="text-center">
      <input value={name} onChange={handleNameChange} maxLength="10" />
      <p className="bg-amber-500 p-1 m-1 text-white">Name: {name}</p>
      <select value={payment} className="m-2" onChange={handlePaymentChange}>
        <option value="">Select Payment</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Master Card</option>
        <option value="Giftcard">Gift Card</option>
      </select>

      <p className="m-1 text-amber-500">Payment: {payment}</p>

      <label className="text-white">
        <input
          className="m-1"
          value="Pick Up"
          type="radio"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label className="text-white">
        <input
          className="m-1"
          value="Delivery"
          type="radio"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p className="text-amber-500">Shipping: {shipping}</p>
    </div>
  );
}
export default MyComponent;
