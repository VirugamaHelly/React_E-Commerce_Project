import React from 'react';
import './HomePhone.css';
import { Link } from 'react-router-dom';

export default function HomePhone() {
  const products = [
    {
      id: 7,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/s/i/silk_blue_7_1.jpg",
      title: "Vivo V30E 5G (Silk Blue, 8GB + 128GB)",
      price: "₹27,999.00"
    },
    {
      id: 8,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/v/e/velvet_red_7.jpg",
      title: "Vivo V30E 5G (Velvet Red, 8GB + 256GB)",
      price: "₹29,999.00"
    },
    {
      id: 9,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/v/i/vivocelestial-green-1.jpg",
      title: "Vivo T3x 5G (Celestial Green, 4GB + 128GB)",
      price: "₹20,000.00"
    },
    {
      id: 10,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/v/i/vivo-crimson-bliss-1_1.jpg",
      title: "Vivo T3x 5G (Crimson Bliss, 6GB + 128GB)",
      price: "₹14,900.00"
    },
    {
      id: 11,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/v/i/vivocelestial-green-1_1.jpg",
      title: "Vivo T3x 5G (Celestial Green, 6GB + 128GB)",
      price: "₹14,999.00"
    },
    {
      id: 12,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/e/l/elemental_blue-1.jpg",
      title: "Itel S23+ (Elemental Blue, 8GB + 256GB)",
      price: "₹15,999.00"
    },
    {
      id: 13,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/o/c/ocean_green_1.jpg",
      title: "Motorola Moto G34 5G (Green, 8GB + 128GB)",
      price: "₹18,999.00"
    },
    {
      id: 14,
      imgUrl: "https://www.poojaratele.com/media/catalog/product/cache/4660d2675ce46398cb4d17672c98889f/f/e/feather_green1.jpg",
      title: "Realme C65 5G (Feather Green, 4GB + 128GB)",
      price: "₹16,999.00"
    },
  ];

  return (
    <div>
      <div className="mb-4 mt-4 ms-2 font">
        <h3>New Arrivals Smart Phones</h3>
      </div>
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img src={product.imgUrl} alt={product.title} className="card-img-top" />

                <div className="S_hover">
                  <li key={product.id} style={{listStyle:"none"}}>
                    <Link to={`/ProductDetail/${product.id}`} style={{color:"black"}}>
                      <i className="far fa-eye" />
                    </Link>
                  </li>
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
      <div className="ipone">
        <Link to="/HomePhone">
          <button>show i-phone's</button>
        </Link>
      </div>
    </div>
  );
}
