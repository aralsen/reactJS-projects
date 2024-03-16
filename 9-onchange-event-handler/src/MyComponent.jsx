import React, {useState} from "react";
// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function when the value of the element is changed

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Pick Up")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentsChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentsChange} placeholder="Enter Delivery Instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent;