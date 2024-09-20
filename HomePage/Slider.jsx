import React, { useState, useEffect } from 'react';
import Loader from './Loder/Loder';

export default function Last() {


  return (
    <>
        <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/Oneplus12.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 1"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/wysiwyg/Descriptions/8.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 2"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/GalaxyS24.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 3"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/Xiaomi14.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 4"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/OnePlusNordCE4.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 5"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img
                    src="https://www.poojaratele.com/media/slideshow/cache/1378x557/wysiwyg/ipad.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Slider Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </>
  );
}
