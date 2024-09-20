import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
    return (
        <div className="product-list row">
            {products.map(product => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src={product.image} alt={product.name} className="card-img-top" />
                        <div className="S_hover">
                            <li style={{ listStyle: "none" }}>
                                <Link to={`/ProductDetail/${product.id}`} style={{ color: "black" }}>
                                    <i className="far fa-eye" />
                                </Link>
                            </li>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <p className="card-title">{product.name}</p>
                            <h5 className="card-text">Price: {product.price}</h5>
                            <button className="btn_hover mt-auto">
                                <i className="fas fa-shopping-cart"></i> ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
