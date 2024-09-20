import React from 'react';
import './HomeAcce.css';
import { Link } from 'react-router-dom';

export default function HomePhone() {
  const products = [
    {
      id: 1,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/1/_/1_2_6.png",
      hoverImgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/1/_/1_2_6.png",
      title: "Poojara Prime USB Type C To C 60W Data Cable",
      price: "₹399.00",
      pera: "C to C Type Cable 60W Fast Charging 5A Fast Charging Premium Build Quality Versatile Usage Universal Compatibility Supports all Type C Devices like Smartphone, Macbook, Laptop and etc."
    },
    {
      id: 5,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/3/_/3_orange.jpg",
      hoverImgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/3/_/3_orange.jpg",
      title: "Poojara Prime USB To Type C 45W Data Cable",
      price: "₹900.00"
    },
    {
      id: 6,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/1/_/1_blck.jpg",
      hoverImgUrl: "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/1/_/1_blck.jpg",
      title: "Poojara Prime Type C to C 60W Data Cable",
      price: "₹940.00"
    },
  ];

  return (
    <>
    
    <div className="ms-2 mb-4 font">
        <h3>POOJARA Prime | Elevate your Experience</h3>
      </div>
    <div className="container mt-4">
    
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className={`mb-4 ${
              product.id === 1
                ? "col-12 col-md-12 col-lg-6 first-card"
                : "col-12 col-md-6 col-lg-3"
            }`}
          >
            <div className={`card ${product.id === 1 ? "card-horizontal" : ""} h-100`}>
              <div className="img-container">
                <img src={product.imgUrl}  alt={product.title} className="main-img"  />
                <img src={product.hoverImgUrl} alt={product.title} className="hover-img" />
              </div>
              
              <div className="S_hover">
                  <li key={product.id} style={{listStyle:"none"}}>
                    <Link to={`/ProductDetail/${product.id}`} style={{color:"black"}}>
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                </div>

              <div className="card-body">
                {product.id === 1 && <p className="card-pera">{product.pera}</p>}
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
    <div className="ipone">
        <Link to="/Airdopes">
          <button>show Wireless Accessories</button>
        </Link>
      </div>
    </>
  );
}
