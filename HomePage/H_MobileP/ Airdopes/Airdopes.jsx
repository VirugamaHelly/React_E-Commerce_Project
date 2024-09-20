import React from 'react';
import './Airdopes.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    const products = [
        {
            id: 21,
            title: 'realme Buds Wireless 3 Bluetooth Headset (Base Yellow)',
            price: "₹1,799.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/m/b/mb-2.jpg',
        },
        {
            id: 22,
            title: 'OnePlus Nord Buds 2 (Lightning White)',
            price: "₹2,999.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/o/n/oneplus-nord-buds2-lw-thum1.jpg',
        },
        {
            id: 23,
            title: 'Apple AirPods (2nd Gen.) with Lightning Charging Case (White)',
            price: "₹12,900.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/a/p/apple-airpods-2nd-gen-with-lightning-charging-case-thum1.jpg',
        },
        {
            id: 24,
            title: 'Mi Neckband Bluetooth Earphone Pro (In-Ear, Blue)',
            price: "₹1,526.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/m/i/mi-neckband-blt-earphone-pro-bhr4203in-thum1.jpg',
        },
        {
            id: 25,
            title: 'Redmi Earbuds 3 Pro (In-Ear, White)',
            price: "₹2,999.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/r/e/redmi-earbuds-3-pro-white-bhr4967in-thum1.jpg',
        },
        {
            id: 26,
            title: 'boAt Airdopes 418 Wireless Earbuds (Blue Thunder)',
            price: "₹2,199.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/b/o/boat-airdopes-418-bt-thum1.jpg',
        },
        {
            id: 27,
            title: 'Samsung Level U2 Wireless Stereo Bluetooth Neckband with Mic (In-Ear, Blue)',
            price: "₹2,199.00",
            imgUrl: 'https://www.poojaratele.com/media/catalog/product/cache/90a134277743797b50583adb372868cb/s/a/samsung-level-u2-blt-neckband-blue-thum1.jpg',
        }
    ];

    return (
        <div>
            <div className="font ms-2">
                <h3>Wireless Airdopes & Neckband</h3>
            </div>
            <div className="slider_air">
                {products.map((product) => (
                    <div className="card_air" key={product.id}>
                        <div className="img-c">
                            <img
                                src={product.imgUrl}
                                alt={product.title}
                                className="main-img"
                            />
                            <img
                                src={product.hoverImgUrl}
                                alt={product.title}
                                className="hover-img"
                            />
                        </div>

                        <p className="S_hover_air">
                            <li key={product.id} style={{ listStyle: "none" }}>
                                <Link to={`/ProductDetail/${product.id}`} style={{ color: "black" }}>
                                    <i className="far fa-eye" />
                                </Link>
                            </li>
                        </p>

                        <div className="card-body_air">
                            <p className="card-title">{product.title}</p>
                            <h5 className="card-text">Price: {product.price}</h5>

                       

                            <Link to={`/ProductDetail/${product.id}`}>
                                <button className="btn_hover_air">
                                    <i className="fas fa-shopping-cart"></i> ADD TO CART
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
