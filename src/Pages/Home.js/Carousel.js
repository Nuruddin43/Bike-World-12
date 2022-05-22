import React from "react";
import carousel1 from "../../images/carousel/carousel1.jpg";
import carousel2 from "../../images/carousel/carousel2.jpg";
import carousel3 from "../../images/carousel/carousel3.jpg";
import carousel4 from "../../images/carousel/carousel4.jpg";

const Carousel = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img src={carousel1} class="w-full" alt="" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <div className="text-white text-center">
            <h2 className="sm:text-6xl ">Bicycle Manufacturer</h2>
            <h2 className="text-3xl">Bicycle Sports OEM & ODM</h2>
            <h2>
              <br />
              <button className="hover:bg-emerald-600 mr-2 rounded-lg p-1 border-2">
                In Details
              </button>
              <button className="hover:bg-emerald-600 rounded-lg p-1 border-2">
                Contact Us
              </button>
            </h2>
            <br />
            <h2 className="text-2xl"> Original Since 2003</h2>
          </div>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src={carousel2} class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <div className="text-white text-center">
            <h2 className="sm:text-6xl ">Bicycle Manufacturer</h2>
            <h2 className="text-3xl">Bicycle Sports OEM & ODM</h2>
            <h2>
              <br />
              <button className="hover:bg-emerald-600 mr-2 rounded-lg p-1 border-2">
                In Details
              </button>
              <button className="hover:bg-emerald-600 rounded-lg p-1 border-2">
                Contact Us
              </button>
            </h2>
            <br />
            <h2 className="text-2xl"> Original Since 2003</h2>
          </div>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
        <div></div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src={carousel3} class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <div className="text-white text-center">
            <h2 className="sm:text-6xl ">Bicycle Manufacturer</h2>
            <h2 className="text-3xl">Bicycle Sports OEM & ODM</h2>
            <h2>
              <br />
              <button className="hover:bg-emerald-600 mr-2 rounded-lg p-1 border-2">
                In Details
              </button>
              <button className="hover:bg-emerald-600 rounded-lg p-1 border-2">
                Contact Us
              </button>
            </h2>
            <br />
            <h2 className="text-2xl"> Original Since 2003</h2>
          </div>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src={carousel4} class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <div className="text-white text-center">
            <h2 className="sm:text-6xl ">Bicycle Manufacturer</h2>
            <h2 className="text-3xl">Bicycle Sports OEM & ODM</h2>
            <h2>
              <br />
              <button className="hover:bg-emerald-600 mr-2 rounded-lg p-1 border-2">
                In Details
              </button>
              <button className="hover:bg-emerald-600 rounded-lg p-1 border-2">
                Contact Us
              </button>
            </h2>
            <br />
            <h2 className="text-2xl"> Original Since 2003</h2>
          </div>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
