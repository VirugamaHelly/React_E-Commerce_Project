import React from 'react';
import './HomePhone.css';

export default function HomePhone() {
  const products = [
    {
      id: 1,
      imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/k/z/k/-original-imagwy8e8jzgfzxz.jpeg?q=70&crop=false",
      title: "HP AMD Ryzen 3 (8 GB/Windows 11)",
      price: "₹74,900.00"
    },
    {
      id: 2,
      imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/d/w/x/anv15-51-gaming-laptop-acer-original-imagtkaqg3qxh6sh.jpeg?q=70&crop=false",
      title: "Acer Nitro V Intel Core i5",
      price: "₹59,990.00"
    },
    {
      id: 3,
      imgUrl: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      title: "Apple 2020 Macbook Air",
      price: "₹94,900.00"
    },
    {
      id: 4,
      imgUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/d/7/-original-imagyj9kyqnps7sv.jpeg?q=70",
      title: "MSI Cyborg 15 ",
      price: "₹96,990.00"
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
              <i className="far fa-eye"/>
              </div>

              <div className="card-body d-flex flex-column">
                <p className="card-title">{product.title}</p>
                <h5 className="card-text">Price: {product.price}</h5>
                <button className="btn_hover mt-auto">
                  <i className="fas fa-shopping-cart"></i> ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
