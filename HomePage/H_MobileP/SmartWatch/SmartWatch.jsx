import React from 'react';
import './SmartWatch.css';
import { Link } from 'react-router-dom';

export default function HomePhone() {
  const products = [
    {
      id: 17,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/f/i/fire-boltt-ninja-call-pro-plus-grey-thum1.jpg",
      title: "Fire-Boltt Ninja Call Pro Plus (Grey)",
      price: "₹1,499.00"
    },
    {
      id: 18,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/f/i/fire-boltt-ninja-call-pro-plus-black-thum1.jpg",
      title: " Fire-Boltt Ninja Call Pro Plus (Black)",
      price: "₹1,499.00"
    },
    {
      id: 19,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/f/i/fire-boltt-falcon-black-thum1.jpg",
      title: "Fire-Boltt Falcon Smartwatch (Black)",
      price: "₹1,999.00"
    },
    {
      id: 20,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/n/o/noise-colorfit-vision-buzz-mb-thum1.jpg",
      title: "Noise ColorFit Vision Buzz (Blue)",
      price: "₹1,999.00"
    },
  ];

  return (
    <>
      <div className="font ms-2">
        <h3>Smart Watch</h3>
      </div>
    <div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card_watch">
              <img src={product.imgUrl} alt={product.title} />

              <div className="S_hover_watch">
                  <li key={product.id} style={{listStyle:"none"}}>
                    <Link to={`/ProductDetail/${product.id}`} style={{color:"black"}}>
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                </div>
              <div className="card-body_watch">
                <p className="card-title">{product.title}</p>
                <h5 className="card-text">Price: {product.price}</h5>

                <Link to={`/ProductDetail/${product.id}`}>
                  <button className="btn_hover mt-auto">
                    <i className="fas fa-shopping-cart"></i> ADD TO CART
                  </button>
                  </Link>
                  
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
