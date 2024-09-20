import React from "react";
import "./SmartTv.css";
import { Link } from "react-router-dom";

export default function SmartTv() {
  const products = [
    {
      id: 1,
      imgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/x/i/xiaomi-55-inch-x-series-smart-tv-thum1.jpg ",
      hoverImgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/x/i/xiaomi-55-inch-x-series-smart-tv-thum1.jpg",
      title: "Xiaomi 55-inch (138.8 cm) X Series X55 Smart TV (Black)",
      price: "₹39,999.00",
      pera: "4K Dolby Vision | HDR10 | HLG 30W Speakers with Dolby Audio PatchWall | Android TV 10 Premium Metal Bezel-less Design",
    },
    {
      id: 15,
      imgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/r/e/redmi-smart-tv-x50-tv-thum1.jpg",
      hoverImgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/r/e/redmi-smart-tv-x50-tv-thum1.jpg",
      title: "Xiaomi 50-inch (126 cm)",
      price: "₹34,900.00",
    },
    {
      id: 16,
      imgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/m/i/mi-smart-tv-5a-40inch-thum1.jpg",
      hoverImgUrl:
        "https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/m/i/mi-smart-tv-5a-40inch-thum1.jpg",
        title: "Xiaomi 50-inch (126 cm)",
      price: "₹54,900.00",
    },
  ];

  return (
    <div>
        <div className="mb-4 mt-4 ms-2 font">
      <h3>Smart TV..</h3>
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
    </div>
  );
}
