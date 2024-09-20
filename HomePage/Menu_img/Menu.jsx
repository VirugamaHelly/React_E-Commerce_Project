import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {

    const menuItems = [
        { title: 'MOBILE & TABLET', link: '/NewArrPhone', imgUrl: 'https://www.poojaratele.com/media/SP.png' },
        { title: 'Accessories', link: '/HomeAcce', imgUrl: 'https://www.poojaratele.com/media/AC.png' },
        { title: 'Smart Wearables', link: '/SmartWatch', imgUrl: 'https://www.poojaratele.com/media/SW.png' },
        { title: 'Smart TV', link: '/SmartTv', imgUrl: 'https://www.poojaratele.com/media/TA.png' },
        { title: 'Laptops', link: '/Laptop', imgUrl: 'https://www.poojaratele.com/media/LP.png' },
        { title: 'Add To Cart', link: '/Addtocart', imgUrl: 'https://www.shutterstock.com/image-vector/add-shopping-cart-icon-button-260nw-2300924089.jpg' }
    ];



    return (
        <>
            <div className="container">
                <div className="slider">
                    {
                        menuItems.map((item, index) => (
                            <Link key={index} to={item.link}>
                                <img src={item.imgUrl} alt={item.title} />
                                <p>{item.title}</p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </>
    );
}
