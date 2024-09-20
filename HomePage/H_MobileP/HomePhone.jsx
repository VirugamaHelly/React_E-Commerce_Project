import React from 'react';
import './HomePhone.css';
import { Link } from 'react-router-dom';

export default function HomePhone() {
  const products = [
    {
      id: 1,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/i/p/iphone-13-blue-thum1_1_2.jpg",
      title: "Apple iPhone 13 (Blue, 128GB)",
      price: "₹54,900.00"
    },
    {
      id: 2,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/i/p/iphone-13-midnight-thum1_3.jpg",
      title: "Apple iPhone 13 (Pink, 128GB)",
      price: "₹54,900.00"
    },
    {
      id: 3,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/i/1/i1_3.jpg",
      title: "Apple iPhone 15 Plus (Black, 256 GB)",
      price: "₹94,900.00"
    },
    {
      id: 4,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/a/p/apple-iphone14-starlight-thum1.jpg",
      title: "Apple iPhone 14 (Starlight, 128GB)",
      price: "₹64,900.00"
    },
  ];

  return (
    <>
      <div className="mb-4 mt-4 ms-2 font">
        <h3>iPhone @ Best Deal + Cashback</h3>
      </div>
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img src={product.imgUrl} alt={product.title} className="card-img-top" />
                <div className="S_hover">
                  <Link to={`/ProductDetail/${product.id}`} style={{ color: "black" }}>
                    <i className="far fa-eye" />
                  </Link>
                </div>
                <div className="card-body d-flex flex-column">
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
