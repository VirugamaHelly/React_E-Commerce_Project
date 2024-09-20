import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from './Details';
import './Detail.css';
import Loder from '../../Loder/Loder';
import { CartContext } from '../AddToCart_new/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find(product => product.id === id);
  const [color, setColor] = useState('');
  const [displayedImage, setDisplayedImage] = useState('');
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (product) {
      setColor(product.colors?.[0] || '');
      setDisplayedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-4">
      {loading ? (
        <Loder />
      ) : (
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={displayedImage} alt={product.name} className="img-fluid main-image" />
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <h4>{product.name}</h4>
            <p className="product-info">
              <span className="rating">{product.Rating}</span> {product.company}
            </p>
            <h3>₹{product.price}</h3>
            <p>{product.description}</p>
            <p>
              Colors:
              {product.colors?.map((curColor, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={`btnStyle ${color === curColor ? 'active' : ''}`}
                  onClick={() => setColor(curColor)}
                >
                  {color === curColor ? <i className="fa-solid fa-check"></i> : null}
                </button>
              ))}
            </p>
            <div className="small-images d-flex flex-wrap">
              <img src={product.image} alt="" className="smallImgStyle m-1" onClick={() => setDisplayedImage(product.image)} />
              <img src={product.s_img_1} alt="" className="smallImgStyle m-1" onClick={() => setDisplayedImage(product.s_img_1)} />
              <img src={product.s_img_2} alt="" className="smallImgStyle m-1" onClick={() => setDisplayedImage(product.s_img_2)} />
              <img src={product.s_img_3} alt="" className="smallImgStyle m-1" onClick={() => setDisplayedImage(product.s_img_3)} />
            </div>
            <div className="counter">
              <button onClick={() => setCounter(prev => Math.max(1, prev - 1))}>-</button>
              <div className="c_no">{counter}</div>
              <button onClick={() => setCounter(prev => Math.min(5, prev + 1))}>+</button>
            </div>
            <Link to="/addtocart" onClick={() => addToCart(product, color, counter)}>
              <button className="btn add-to-cart mt-3">Add to Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
