App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Poojara/HomePage/Header/Header';
import Menu from './Poojara/HomePage/Menu_img/Menu';
import ErrorPage from './Poojara/ErrorPage/ErrorPage';
import Home from './Poojara/HomePage/Home';
import ProductDetail from './Poojara/HomePage/H_MobileP/ProductDetail/ProductDetail';
import NewArrPhone from './Poojara/HomePage/H_MobileP/NewArrPhone';
import HomePhone from './Poojara/HomePage/H_MobileP/HomePhone';
import HomeAcce from './Poojara/HomePage/H_MobileP/HomeAcce';
import SmartWatch from './Poojara/HomePage/H_MobileP/SmartWatch/SmartWatch';
import SmartTv from './Poojara/HomePage/H_MobileP/SmartTV/SmartTV';
import Airdopes from './Poojara/HomePage/H_MobileP/ Airdopes/Airdopes';
import Laptop from './Poojara/HomePage/H_MobileP/Laptop';
import Login from './Poojara/HomePage/Login/Pj_Login';
import Loder from './Poojara/HomePage/Loder/Loder';
import { lcontext } from './Poojara/HomePage/Login/LContext';
import Addtocart from './Poojara/HomePage/H_MobileP/AddToCart_new/Addtocart'
import { CartProvider } from './Poojara/HomePage/H_MobileP/AddToCart_new/CartContext'
import Order from './Poojara/HomePage/H_MobileP/AddToCart_new/Order';
import Thanku from './Poojara/HomePage/H_MobileP/AddToCart_new/Thanku';


export default function App() {
  const [Lstate, setLstate] = React.useState({
    user: 'user',
    islogged: true,
  });

  const [loading, setLoading] = useState(false);

  function Flogged(data) {
    setLstate(data);
  }

  function floggedout() {
    setLstate({
      user: 'user',
      islogged: true,
    });
  }
  return (
    <div>
      <lcontext.Provider value={{ Lstate, floggedout, Flogged }}>
        <CartProvider>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/homephone" element={<HomePhone />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/newarrphone" element={<NewArrPhone />} />
            <Route path="/homeacce" element={<HomeAcce />} />
            <Route path="/smartwatch" element={<SmartWatch />} />
            <Route path="/smarttv" element={<SmartTv />} />
            <Route path="/airdopes" element={<Airdopes />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path='/addtocart' element={<Addtocart />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/thanku' element={<Thanku />} />
          </Routes>
    

        </CartProvider>
      </lcontext.Provider>
      {loading ? <Loder /> : null}
    </div>
  );
}


