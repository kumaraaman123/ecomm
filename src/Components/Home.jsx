import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide border-0">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/banner1.jpg" className="d-block w-100" alt="banner 1" />
          </div>
        </div>
        
      </div>
      <Products />
    </>
  );
}
