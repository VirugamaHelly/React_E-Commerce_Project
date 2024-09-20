import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Addtocart.css';

const AddCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src="https://calltobajar.com/wp-content/uploads/2021/12/giphy.gif" alt="Loading..." className="loading-spinner" />
      </div>
    );
  }

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  const formatPrice = (price) => {
    return Number(price.replace(/,/g, '')); // Remove commas from the price string and convert it to a number
  };

  const totalPrice = cart.reduce((total, item) => total + (formatPrice(item.price) * item.quantity), 0);

  const getColorName = (hex) => {
    const colors = {
    };
    return colors[hex];
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Color: <span style={{ backgroundColor: item.color }} className="color-box"></span> {getColorName(item.color)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => removeFromCart(index)} className="btn btn-danger">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
      <Link to="/" className="btn_shoping">Continue Shopping</Link>
      <Link to='/Order' className="btn_shoping ms-4">Order Now</Link>
    </div>
  );
};

export default AddCart;
