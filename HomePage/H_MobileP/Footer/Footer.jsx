import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="L_Form">
                <form action="#" className="form-inline">
                  <div className="form-group">
                    <h3 className="align-items-center text_title">Be the first to save!</h3>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control input_email"
                        placeholder="Enter your email"
                      />
                      <div className="input-btn">
                        <button className="btn_subscribe ms-2">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src="https://www.poojaratele.com/media/logo/stores/1/poojara-logo-only-1.png" alt="Poojara Logo" className="img-fluid" />

              <ul>
                <li><a href="#">Got questions? Call us!</a></li>
                <li><a href="#">+91 1234567890</a></li>
                <li><a href="#">Mail us at</a></li>
                <li><a href="#"> customer@poojaratele.com</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Support</h5>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Our Stores</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Policies</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Return & Refund Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Work with us</h5>
              <ul>
                <li><a href="#">Career</a></li>
                <li><a href="#">Franchisee</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Connect with us</h5>
              <div className="footer_icon">

                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          {/* <div className="row">
          <div className="col-lg-12 text-center mt-3">
            <p>&copy; 2023 Poojara Telecom Pvt Ltd. All Rights Reserved.</p>
          </div>
        </div> */}
        </div>
      </footer>

      <div className="right_reserved mt-4 ms-4">
        <p>© 2023 Poojara Telecom Pvt Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}
