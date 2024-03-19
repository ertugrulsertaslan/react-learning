import React,{useState} from "react"

function MyComponent() {

    const [name, setName]= useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
      setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
  
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return (<div>
              <input value={name} onChange={handleNameChange} />
              <p>Name: {name}</p>

              <input value={quantity} onChange={handleQuantityChange} type="number" />
              <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Master Card</option>
                <option value="Giftcard">Gift Card</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input value="Pick Up" type="radio" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label><br/>
            <label>
                <input value="Delivery" type="radio" checked={shipping === "Delivery"}  onChange={handleShippingChange} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
            </div>
            );

    /*
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, SetIsEmployed] = useState(false);

    const IncrementAge = () => {
        setAge(age + 1);
    }

    const updateName = () => {
        setName("Spongebob");
    }

    const toogleEmployedStatus = () => {
        SetIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name : {name}</p>
            <p><button onClick={updateName}>Set Name</button></p>

            <p>Age: {age}</p>
            <p><button onClick={IncrementAge}>Increment Age</button></p>

            <p>Is employed: {isEmployed ? "Yes" : "No" }</p>
            <p><button onClick={toogleEmployedStatus}>Toogle status</button></p>
        </div>
    );
    */

    
}
export default MyComponent