import React, { useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';

export default function Order() {
  const [state, setState] = useState({
    code: "",
    card: "",
    cvv: ""
  });

  function checkCode() {
    if (state.code === "pujara@123") {
      alert("Code is valid");
    } else {
      alert("Enter valid code");
    }
  }

  function submit() {
    if (state.card.length !== 16) {
      alert("Credit card number must be 16 digits.");
      return;
    }
    if (state.cvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }
    alert("Form submitted successfully!");
  }

  return (
    <div className='order-container'>
      <div className="form">
        <div className="main">
          <h2>Select Payment Method</h2>
          <input 
            type="text" 
            id="textcode" 
            placeholder="Enter code..."  
            value={state.code}
            onChange={(e) => setState({ ...state, code: e.target.value })} 
            required 
          />
          <button onClick={checkCode}>Check Code</button>
          <br /><br />

          <h2>Another Payment Method</h2>
          <p>Credit or Debit card & ..</p>
          <div className="icons">
            <i className="fas fa-credit-card"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-apple-pay"></i>
            <i className="fab fa-cc-amazon-pay"></i>
          </div>
          <br /><br />

          <label htmlFor="expiryDate">Expiry Month & Year:</label>
          <input 
            type="text" 
            id="expiryDate" 
            placeholder="MM/YY" 
            required 
          />
          <br /><br />

          <label htmlFor="creditNo">Credit Card Number:</label>
          <input 
            type="text" 
            id="creditNo" 
            placeholder="Enter your Credit Card Number.." 
            value={state.card}
            onChange={(e) => setState({ ...state, card: e.target.value })}
            required 
          />
          <br /><br />

          <label htmlFor="cvv">Enter CVV:</label>
          <input 
            type="text" 
            id="cvv" 
            placeholder="Enter CVV" 
            value={state.cvv}
            onChange={(e) => setState({ ...state, cvv: e.target.value })}
            required 
          />
          <br /><br />

          <label htmlFor="cardName">Name on Card:</label>
          <input 
            type="text" 
            id="cardName" 
            placeholder="Enter the Name on Card" 
            required 
          />
          <br /><br />

         <Link to='/Thanku'><button onClick={submit}>Submit</button></Link>
        </div>
      </div>
    </div>
  );
}
